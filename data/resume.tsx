import { Icons } from '@/components/ui/icons'
import { HomeIcon } from 'lucide-react'

export const DATA = {
  name: "Muhammad Rafli",
  initials: "Rafli",
  title: "Portfolio Muhammad Rafli",
  url: "https://rufflekies.my.id",
  location: "Yogyakarta City",
  locationLink: "https://www.google.com/maps/place/yogyakarta",
  description:
    "A passionate DevOps Enthusiast exploring automation, scripting, cloud computing, and system optimization.",

  about: [
    {
      title: "About This Project",
      description:
        "This is a portfolio project created using Next.js and Tailwind CSS.",
    },
  ],

  education: [
    {
      school: "SMK Negeri 2 Yogyakarta",
      href: "https://www.smk2-yk.sch.id/",
      degree: "Jurusan Sistem Informasi Jaringan dan Aplikasi",
      logoUrl: "/smk2yk.jpeg",
      start: "2022",
      end: "Present",
    },
  ],

  skill: [
    {
      school: "SMK Negeri 2 Yogyakarta",
      href: "https://www.smk2-yk.sch.id/",
      degree: "Jurusan Sistem Informasi Jaringan dan Aplikasi",
      logoUrl: "/smk2yk.jpeg",
      start: "2022",
      end: "Present",
    },
  ],

  navbar: [{ href: "#home", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "muhrafli.pribadi@gmail.com",
    tel: "+62 895 3302 71587",
    social: {
      Medium: {
        name: "Medium",
        url: "https://medium.com/@rufllekies",
        icon: Icons.medium,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rufflekies",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-rafli-48825b336/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/raflii1i1i/",
        icon: Icons.instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  blogsPerPage: 10,
} as const;