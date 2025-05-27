import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqProps {
  badge?: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const faqItems = [
  {
    id: "faq-1",
    question: "What is your full name?",
    answer: "My full name is Muhammad Rafli.",
  },
  {
    id: "faq-2",
    question: "What are your hobbies?",
    answer: "I enjoy and have an interest in DevOps and web development.",
  },
  {
    id: "faq-3",
    question: "What are you studying?",
    answer:
      "I am currently studying at a vocational high school, majoring in Network and Application Information Systems.",
  },
  {
    id: "faq-4",
    question: "What are your career goals?",
    answer:
      "My goal is to become an expert in DevOps and Web development.",
  },
  {
    id: "faq-5",
    question: "How can you be contacted?",
    answer: "You can reach me via instagram @raflii1i1i.",
  },
  {
    id: "faq-6",
    question: "What skills do you have?",
    answer:
      "I have skills in Docker,web development, server management, and network monitoring.",
  },
  {
    id: "faq-7",
    question: "What projects are working on?",
    answer:
      "I am working on various projects related to CI/CD and web development.",
  },
];

const Contact = ({
  badge = "Contact Me",
  items = faqItems,
  supportHeading = "Need more support?",
  supportDescription = "I am here to help you with any questions or concerns you may have. Don't hesitate to reach out.",
  supportButtonText = "Contact Me",
  supportButtonUrl = "mailto:rafli@example.com",
}: FaqProps) => {
  return (
    <section className="max-w-7xl mx-auto p-8 md:pb-32 rounded-lg" id="contact">
      {/* Header */}
      <div className="text-center">
        <Badge variant="outline" className="mb-4 inline-block">
          {badge}
        </Badge>
        <h2 className="mb-4 text-3xl sm:text-4xl font-bold md:text-5xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="container space-y-4">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <p className="text-muted-foreground max-w-xl mx-auto text-center text-lg">
            If you have any questions or need assistance, feel free to explore
            the FAQ below or get in touch with me!
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8">
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage
                src="https://shadcnblocks.com/images/block/avatar-2.webp"
                alt="Foto profil pengguna 2"/>
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage
                src="https://shadcnblocks.com/images/block/avatar-3.webp"
                alt="Foto profil pengguna 3"/>
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage
                src="https://shadcnblocks.com/images/block/avatar-1.webp"
                alt="Foto profil pengguna 1"/>
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto" asChild>
              <a href={supportButtonUrl} target="_blank">
                {supportButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
