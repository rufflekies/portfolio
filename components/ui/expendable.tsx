"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Play, Pause } from "lucide-react";

const audioSrc = "/songs/howsweet.mp3";

const cards = [
  {
    description: "New Jeans",
    title: "How Sweet",
    src: "/songs/newjeans.svg",
  },
];

export default function Expandable() {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null!);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [savedTime, setSavedTime] = useState(0); // Store the time when player is closed

  const handleOutsideClick = useCallback(() => {
    if (audioRef.current) {
      // Save current position before closing
      setSavedTime(audioRef.current.currentTime);
      audioRef.current.pause();
      setIsPlaying(false);
    }
    setActive(null);
  }, []);

  // Helper function to calculate new time based on pointer position
  const calculateNewTime = useCallback(
    (clientX: number) => {
      const progressBar = document.getElementById("progress-bar");
      if (!progressBar || !audioRef.current) return null;

      const rect = progressBar.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      return Math.max(0, Math.min((offsetX / rect.width) * duration, duration));
    },
    [duration]
  );

  // Mouse event handlers
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      const newTime = calculateNewTime(e.clientX);
      if (newTime !== null && audioRef.current) {
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    },
    [isDragging, calculateNewTime]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch event handlers
  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;

      // Prevent page scrolling while dragging
      e.preventDefault();

      const touch = e.touches[0];
      const newTime = calculateNewTime(touch.clientX);
      if (newTime !== null && audioRef.current) {
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    },
    [isDragging, calculateNewTime]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Set up event listeners for mouse and touch events
  useEffect(() => {
    if (isDragging) {
      // Mouse events
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      // Touch events
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
      window.addEventListener("touchcancel", handleTouchEnd);
    }

    return () => {
      // Clean up all event listeners
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [
    isDragging,
    handleMouseMove,
    handleMouseUp,
    handleTouchMove,
    handleTouchEnd,
  ]);

  useOutsideClick(ref, handleOutsideClick);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleOutsideClick();
      }
    }
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, handleOutsideClick]);

  // Setup audio and restore playback position when opened
  useEffect(() => {
    if (audioRef.current && active) {
      const audio = audioRef.current;

      // Set audio to the saved position when reopened
      if (savedTime > 0) {
        audio.currentTime = savedTime;
        setCurrentTime(savedTime);
      }

      const updateProgress = () => {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration || 0);
      };

      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("loadedmetadata", updateProgress);

      // Update immediately after setting the time
      if (audio.readyState >= 2) {
        updateProgress();
      }

      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
        audio.removeEventListener("loadedmetadata", updateProgress);
      };
    }
  }, [active, savedTime]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // Handle opening the expandable component
  const handleCardClick = (card: (typeof cards)[number]) => {
    setActive(card);
    // We don't auto-play, just prepare the component
    // The audio will be set to the saved position in the useEffect
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isPlaying) {
      interval = setInterval(() => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
          setDuration(audioRef.current.duration || 0);
        }
      }, 500);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10 overflow-auto"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden"
            >
              {/* Bagian Gambar */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={350}
                  height={200}
                  src={active.src}
                  alt={`Image of ${active.title}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Informasi Lagu */}
              <div className="p-4 text-center">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-bold text-lg text-neutral-800 dark:text-neutral-200"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-sm"
                >
                  {active.description}
                </motion.p>
              </div>

              {/* Audio Player */}
              <audio ref={audioRef} src={audioSrc} preload="metadata"></audio>

              {/* Progress Bar Container */}
              <div className="w-full px-4">
                {/* Progress Bar */}
                <div
                  id="progress-bar"
                  className="relative w-full h-1 bg-gray-300 rounded-full cursor-pointer"
                  onMouseDown={(e) => {
                    if (!audioRef.current || duration === 0) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const offsetX = e.clientX - rect.left;
                    const newTime = (offsetX / rect.width) * duration;
                    audioRef.current.currentTime = newTime;
                    setCurrentTime(newTime);
                  }}
                  onTouchStart={(e) => {
                    if (!audioRef.current || duration === 0) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const touch = e.touches[0];
                    const offsetX = touch.clientX - rect.left;
                    const newTime = (offsetX / rect.width) * duration;
                    audioRef.current.currentTime = newTime;
                    setCurrentTime(newTime);
                  }}
                >
                  {/* Progress fill */}
                  <div
                    className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                    style={{
                      width: `${(currentTime / duration) * 100 || 0}%`,
                    }}
                  />

                  {/* Bullet (handle) */}
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full shadow-md cursor-pointer"
                    style={{
                      left: `${(currentTime / duration) * 100 || 0}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                  />
                </div>

                {/* Waktu Lagu */}
                <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Kontrol Musik */}
              <div className="flex justify-center gap-6 pb-6">
                {isPlaying ? (
                  <Pause
                    className="w-6 h-6 md:w-8 md:h-8 text-gray-700 dark:text-gray-300 cursor-pointer"
                    onClick={togglePlay}
                  />
                ) : (
                  <Play
                    className="w-6 h-6 md:w-8 md:h-8 text-gray-700 dark:text-gray-300 cursor-pointer"
                    onClick={togglePlay}
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Daftar Kartu */}
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 gap-4">
        {cards.map((card) => (
          <li key={card.title} className="list-none">
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              onClick={() => handleCardClick(card)}
              role="button"
              tabIndex={0}
              className="p-3 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg cursor-pointer"
            >
              <div className="flex gap-4 flex-col w-full">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    width={200}
                    height={200}
                    src={card.src}
                    alt={`Image of ${card.title}`}
                    className="h-full w-full rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex flex-col items-center">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-sm text-center"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-sm text-center"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </li>
        ))}
      </ul>
    </>
  );
}

function formatTime(seconds: number) {
  if (isNaN(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}
