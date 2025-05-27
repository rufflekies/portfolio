"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

export default function Project({ badge = "My Projects" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  const projects = [
    {
      id: 1,
      title: "Script Wordpress Installation",
      description:
        "Automated script to install and configure Wordpress on a server.",
      image: "/project/pro1.svg",
      technologies: ["Bash", "Linux", "Apache", "MySQL"],
      githubLink: "https://github.com/rufflekies/wp",
    },
    {
      id: 2,
      title: "Script Moodle Installation",
      description:
        "Script for setting up Moodle LMS with required dependencies.",
      image: "/project/pro2.svg",
      technologies: ["Bash", "Linux", "PHP", "MySQL"],
      githubLink: "https://github.com/rufflekies/moodle",
    },
    {
      id: 3,
      title: "Installation Wordpress on AWS",
      description: "Guide and automation for deploying Wordpress on AWS.",
      image: "/project/pro3.svg",
      technologies: ["AWS", "VPC", "RDS", "EFS", "EC2", "ECR", "ECS"],
    },
    {
      id: 4,
      title: "DevApps Solutions",
      description:
        "A platform providing various development and deployment solutions.",
      image: "/project/pro4.svg",
      technologies: ["JavaScript", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/rufflekies/devapps_solutions",
      websiteLink: "https://devapps-solutions.vercel.app/",
    },
    {
      id: 5,
      title: "Haus! Yogyakarta",
      description:
        "A website showcasing the unique beverage brand Haus! in Yogyakarta.",
      image: "/project/pro5.svg",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/rufflekies/commercial",
      websiteLink: "https://rufflekies.github.io/commercial/",
    },
    {
      id: 6,
      title: "Layanan UKS",
      description: "A digital platform for school health services and records.",
      image: "/project/pro6.svg",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/rufflekies/layananuks",
      websiteLink: "https://rufflekies.github.io/layananuks/",
    },
    {
      id: 7,
      title: "IoT Water Automation & Monitoring Green House",
      description:
        "IoT system for automating and monitoring greenhouse irrigation.",
      image: "/project/pro7.svg",
      technologies: ["Arduino", "C++", "Blynk"],
      githubLink: "https://github.com/rufflekies/",
    },
  ];

  return (
    <section
      id="project"
      className="max-w-7xl mx-auto md:pb-32 p-6 rounded-lg text-center"
    >
      <Badge variant="outline" className="mb-4 inline-block">
        {badge}
      </Badge>
      <h2 className="mb-10 text-3xl sm:text-4xl font-bold md:text-5xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col relative">
            <CardHeader>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-45 object-contain rounded-t-lg"
                quality={100}
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <p className="mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            {(project.githubLink || project.websiteLink) && (
              <CardFooter className="flex justify-between">
                {project.githubLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </a>
                  </Button>
                )}
                {project.websiteLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Website
                    </a>
                  </Button>
                )}
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
