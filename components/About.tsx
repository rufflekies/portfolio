"use client";

import { useEffect, useState } from "react";
import { DATA } from "@/data/resume";
import Image from "next/image";
import { Icons } from "@/components/ui/icons";
import { ShineBorder } from "@/components/magicui/shine-border";  
import { useTheme } from "next-themes";
import Expandable from "@/components/ui/expendable";
import { Badge } from "./ui/badge";

export default function About({ badge = "About Me" }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      className="w-full flex items-center justify-center md:pb-32 p-6"
      id="about"
    >
      <div className="max-w-7xl w-full mx-auto rounded-lg text-center">
        {/* Header */}
        <Badge variant="outline" className="mb-4 inline-block">
          {badge}
        </Badge>
        <h2 className="mb-10 text-3xl sm:text-4xl font-bold md:text-5xl">
          About
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          {/* Quote */}
          <div className="col-span-1 md:col-span-12">
            <ShineBorder
              color={theme === "dark" ? "white" : "black"}
              className="rounded-xl w-full"
            >
              <div className="p-4 h-auto md:h-30 w-full flex items-center">
                <h2 className="text-lg md:text-xl px-2 md:px-6 text-center">
                  &ldquo;The best way to find happiness in your work is to do
                  what you love. When you enjoy what you do, every day feels
                  like an adventure.&rdquo; - rufflekissed
                </h2>
              </div>
            </ShineBorder>
          </div>

          {/* Profile and Social Media */}
          <div className="col-span-1 md:col-span-4 grid grid-cols-4 gap-4">
            {/* Profile */}
            <ShineBorder
              color={theme === "dark" ? "white" : "black"}
              className="col-span-3 flex flex-col items-center w-full h-full p-6 rounded-xl shadow-lg"
            >
              {/* Avatar */}
              <div className="w-auto h-auto md:h-auto rounded-lg overflow-hidden border-2 shadow">
                <Image
                  src="/avatar.svg"
                  alt="Avatar"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Title - Hidden on mobile */}
              <div className="text-center mt-4 hidden md:block">
                <h3 className="text-sm font-medium">Muhammad Rafli</h3>
                <p className="text-sm text-gray-500">DevOps Enthusiast</p>
              </div>
            </ShineBorder>

            {/* Social Media */}
            <ShineBorder
              color={theme === "dark" ? "white" : "black"}
              className="col-span-1 flex flex-col items-center justify-center py-4 md:py-6 px-2 md:px-4 shadow-inner rounded-lg"
            >
              <div className="flex flex-col space-y-4 md:space-y-8 items-center">
                {DATA?.contact?.social?.GitHub?.url && (
                  <a
                    href={DATA.contact.social.GitHub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Icons.github className="w-6 h-6 md:w-7 md:h-7 transition-transform transform hover:scale-110" />
                  </a>
                )}
                {DATA?.contact?.social?.LinkedIn?.url && (
                  <a
                    href={DATA.contact.social.LinkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Icons.linkedin className="w-6 h-6 md:w-7 md:h-7 transition-transform transform hover:scale-110" />
                  </a>
                )}
                {DATA?.contact?.social?.Instagram?.url && (
                  <a
                    href={DATA.contact.social.Instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                  >
                    <Icons.instagram className="w-6 h-6 md:w-7 md:h-7 transition-transform transform hover:scale-110" />
                  </a>
                )}
                {DATA?.contact?.social?.Medium?.url && (
                  <a
                    href={DATA.contact.social.Medium.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Medium Blog"
                  >
                    <Icons.medium className="w-6 h-6 md:w-7 md:h-7 transition-transform transform hover:scale-110" />
                  </a>
                )}
              </div>
            </ShineBorder>
          </div>

          {/* Description */}
          <ShineBorder
            color={theme === "dark" ? "white" : "black"}
            className="col-span-1 md:col-span-5 md:pt-8"
          >
            <p className="flex text-lg md:text-xl p-6 text-justify">
              I am a student at SMK Negeri 2 Yogyakarta majoring in SIJA, with a
              passion for DevOps, server management, and automation. I
              interested containerization with Docker, Linux-based systems, and
              writing shell scripts to optimize workflows. Besides DevOps, I
              also have skills in web development and love learning new
              technologies.
            </p>
          </ShineBorder>

          {/* Song */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-4 h-full">
            <ShineBorder
              color={theme === "dark" ? "white" : "black"}
              className="h-full"
            >
              <div className="rounded-xl flex-grow flex items-center justify-center h-full">
                <Expandable />
              </div>
            </ShineBorder>
          </div>
        </div>
      </div>
    </section>
  );
}
