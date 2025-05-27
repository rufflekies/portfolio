"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ScrollVelocity } from "@/components/ui/ScrollVelocity";
import Link from "next/link";

export function Footer() {
  const { theme } = useTheme();
  const velocity = 40;

  // State untuk memastikan komponen hanya dirender di klien
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Jika belum mounted, hindari rendering
  if (!mounted) return null;

  return (
    <section className="max-w-7xl rounded-lg md:mx-auto">
      <footer className="p-6 md:px-6 bg-background w-full">
        <div className="max-w-full w-full">
          <div className="flex flex-col md:flex-row justify-start w-full">
            <div className="mb-8 md:mb-0 w-full">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold">Muhammad Rafli</h2>
              </div>
              <h1 className="dark:text-gray-300 mt-4">
                Build by{" "}
                <span className="dark:text-[#039ee4]">
                  <Link href="https://www.instagram.com/raflii1i1i/">
                    @raflii1i1i
                  </Link>
                </span>
              </h1>
              <div className="mt-2">
                <Link
                  href="https://medium.com/@rufllekies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary">want to see my blog?</Button>
                </Link>
              </div>
              <p className="hidden md:flex text-sm dark:text-gray-400 mt-5">
                © {new Date().getFullYear()} Rafli1i1i. All rights reserved.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
              <div>
                <h2 className="font-semibold mb-4">Section</h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#home"
                      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    >
                      Project
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-4">Socials</h2>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://github.com/rufflekies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    >
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/muhammad-rafli-48825b336/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/raflii1i1i/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://wa.me/62895330271587"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    >
                      WhatsApp
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-4">Legal</h2>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href=""
                      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="flex md:hidden text-sm dark:text-gray-400 mt-5">
                  © {new Date().getFullYear()} Rafli1i1i. <br />
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
          <ScrollVelocity
            texts={["Muhammad Rafli"]}
            velocity={velocity}
            className={`text-center text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-bold bg-clip-text text-transparent select-none mt-6
      ${
        theme === "dark"
          ? "bg-gradient-to-b from-white to-black"
          : "bg-gradient-to-b from-black to-white"
      }`}
          />
        </div>
      </footer>
    </section>
  );
}

export default Footer;
