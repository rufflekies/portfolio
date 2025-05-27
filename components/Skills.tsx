import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  learnedTopics: string[];
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface SkillProps {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

export default function Skill({
  badge = "My Skills",
  tabs = [
    {
      value: "tab-1",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "DevOps",
      content: {
        badge: "Automation & Efficiency",
        title: "Streamline your development process.",
        description:
          "Utilizing CI/CD pipelines, containerization, and orchestration tools to automate and improve deployment processes.",
        learnedTopics: [
          "CI/CD Pipelines",
          "Docker",
          "Kubernetes",
          "AWS",
          "Linux",
          "Scripting",
        ],
        buttonText: "Learn More",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
        imageAlt: "DevOps Illustration",
      },
    },
    {
      value: "tab-2",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Web",
      content: {
        badge: "Front-end & UI/UX",
        title: "Build static dynamic and responsive web.",
        description:
          "Creating engaging user interfaces and robust server-side applications using modern frameworks.",
        learnedTopics: [
          "HTML",
          "CSS",
          "TypeScript",
          "Tailwind CSS",
          "React",
          "Next.js",
          "Node.js",
        ],
        buttonText: "View Projects",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
        imageAlt: "Web Development Illustration",
      },
    },
    {
      value: "tab-3",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Network",
      content: {
        badge: "Infrastructure & Security",
        title: "Ensure a reliable network environment.",
        description:
          "Designing and managing network infrastructures with security measures in place.",
        learnedTopics: [
          "TCP/IP",
          "Firewalls",
          "VPNs",
          "Network Monitoring",
          "Subnetting",
          "Security Protocols",
        ],
        buttonText: "Explore Solutions",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
        imageAlt: "Network Illustration",
      },
    },
  ],
}: SkillProps) {
  return (
    <section className="max-w-7xl mx-auto p-6 md:pb-32 rounded-lg" id="skills">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Header */}
          <Badge variant="outline" className="inline-block">
            {badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold md:text-5xl">Skills</h2>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-row items-center justify-start overflow-x-hidden sm:justify-center md:gap-8">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-10 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  {/* Badge */}
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-3xl font-semibold lg:text-5xl">
                    {tab.content.title}
                  </h3>

                  {/* Gambar (ditampilkan di bawah title & di atas deskripsi di mobile) */}
                  <Image
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    width={500} // Sesuaikan ukuran
                    height={300} // Sesuaikan ukuran
                    className="rounded-xl w-2/3 md:hidden mx-auto"
                  />

                  {/* Deskripsi */}
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>

                  {/* List Learned Topics */}
                  <div className="flex w-full">
                    <ul className="list-disc pl-6 text-muted-foreground lg:text-lg pr-2 mr-4">
                      {tab.content.learnedTopics
                        .slice(0, 4)
                        .map((topic, index) => (
                          <li key={index}>{topic}</li>
                        ))}
                    </ul>
                    <ul className="list-disc pl-12 text-muted-foreground lg:text-lg pr-2">
                      {tab.content.learnedTopics
                        .slice(4)
                        .map((topic, index) => (
                          <li key={index}>{topic}</li>
                        ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <Button
                    className="mt-2.5 w-fit gap-2 mx-auto md:mx-0"
                    size="lg"
                  >
                    {tab.content.buttonText}
                  </Button>
                </div>

                {/* Gambar untuk mode desktop */}
                <Image
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  width={500} // Sesuaikan ukuran
                  height={300} // Sesuaikan ukuran
                  className="rounded-xl w-2/3 hidden md:block"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
