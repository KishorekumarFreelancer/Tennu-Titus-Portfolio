import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";


const projects = [
  {
    title: "Solar Tracking System",
    description:
      "The Solar Tracking System is a project designed to improve the efficiency of solar panels by automatically adjusting their position according to the sun’s movement using LDR sensors and a microcontroller.",
    tags: [
      "Embedded Systems Development",
      "Arduino / Microcontroller Programming",
      "LDR Sensor Integration",
      "Servo / DC Motor Control",
      "Circuit Design and Wiring",
      "Power Management",
      "Basic Electronics & Troubleshooting",
    ],
    fileUrl: "/projects/solar-tracking-system.pdf",
  },
  {
    title: "Movie Ticket Bot",
    description:
      "The Movie Ticket Bot is an automation project developed using UiPath to simplify and automate the movie ticket booking process through Robotic Process Automation (RPA).",
    tags: [
      "UiPath Studio",
      "Robotic Process Automation (RPA)",
      "Web Automation",
      "Data Scraping",
      "Selectors & UI Automation",
      "Exception Handling",
      "Workflow Design",
      "Screen Scraping",
    ],
    fileUrl: "/projects/RPA-OBS.pdf",
  },
  {
    title: "Bounce Ball Game",
    description:
      "The Bounce Ball Game is an interactive arcade-style game featuring collision detection, score tracking, and increasing difficulty levels to enhance engagement.",
    tags: [
      "HTML5 Canvas",
      "Game Logic Development",
      "Object-Oriented Programming (OOP)",
      "Collision Detection",
      "Event Handling",
      "Animation & Frame Control",
      "UI Design",
    ],
    fileUrl: "/projects/bounce-program.pdf",
  },
  {
    title: "Ben 10fers Game",
    description:
      "The Ben 10fers Game is an action-based game featuring character movement, combat mechanics, scoring system, and structured level progression.",
    tags: [
      "Game Development Concepts",
      "Object-Oriented Programming (OOP)",
      "Collision Detection",
      "Character Animation",
      "Event Handling",
      "Level Design",
      "UI & Score System Implementation",
    ],
    fileUrl: "/projects/BEN10FERS-Game-Guide.pdf",
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <section className="min-h-screen pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-4"
          >
            My <span className="text-gradient">Projects</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 w-20 bg-primary rounded-full mb-10 origin-left"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:opacity-80 transition-opacity font-medium"
                  >
                    <ExternalLink size={14} />
                    View My Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;