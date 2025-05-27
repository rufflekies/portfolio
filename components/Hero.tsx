"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Particles } from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

export function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV Muhammad Rafli.pdf";
    link.download = "CV Muhammad Rafli.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }
  }, [resolvedTheme, mounted]);

  if (!mounted) {
    return <div className="min-h-screen bg-background"></div>;
  }

  return (
    <section
      id="home"
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden bg-background py-12 md:py-32",
        resolvedTheme === "dark" ? "text-white" : "text-black"
      )}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />

      <div className="relative z-10 flex w-full flex-col items-center justify-center text-center px-6 md:px-8">
        {/* Welcome Banner */}
        <div
          className={cn(
            "group rounded-full border px-4 py-1.5 text-base md:text-lg backdrop-blur-md transition-all ease-in hover:cursor-pointer",
            resolvedTheme === "dark"
              ? "border-white/10 bg-white/10 text-white hover:bg-white/20"
              : "border-black/10 bg-black/10 text-black hover:bg-black/20"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center transition ease-out">
            <span>✨ Welcome to My Portfolio</span>
            <ArrowRightIcon className="ml-1.5 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>

        {/* Profile Image */}
        <div className="mt-6 md:mt-8">
          <ShimmerButton className="p-1 rounded-full">
            <Image
              src="/avatar.svg"
              alt="Muhammad Rafli"
              width={800}
              height={800}
              className="rounded-full border-4 border-gray-300 shadow-lg dark:border-gray-600 w-40 h-40 md:w-48 md:h-48"
            />
          </ShimmerButton>
        </div>

        {/* Name */}
        <div className="w-full mt-8">
          <SparklesText
            text="Hi there! I'm Muhammad Rafli"
            className="text-4xl md:text-6xl font-bold drop-shadow-lg leading-tight"
          />
        </div>

        {/* Description */}
        <p
          className={cn(
            "mt-6 text-lg md:text-xl max-w-3xl leading-relaxed",
            resolvedTheme === "dark" ? "text-gray-200" : "text-gray-700"
          )}
        >
          A passionate{" "}
          <span
            className={cn(
              "font-semibold",
              resolvedTheme === "dark" ? "text-blue-200" : "text-blue-600"
            )}
          >
            DevOps Enthusiast
          </span>{" "}
          exploring automation, scripting, cloud computing, and system
          optimization.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <AnimatedSubscribeButton
            className="flex w-32 text-sm self-center"
            onClick={handleDownload}
          >
            <span className="group inline-flex items-center whitespace-nowrap">
              Download CV
              <ChevronRightIcon className="ml-1 size-3 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="group inline-flex items-center whitespace-nowrap">
              <CheckIcon className="mr-2 size-3" />
              Downloaded
            </span>
          </AnimatedSubscribeButton>
        </div>
      </div>
    </section>
  );
}

export default Hero;
