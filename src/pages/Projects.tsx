import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ExternalLink,  } from "lucide-react";

const projects = [
  {
    title: "Solar Tracking System",
    description: "The Solar Tracking System is a project designed to improve the efficiency of solar panels by automatically adjusting their position according to the sun’s movement. The system uses light sensors to detect the direction of maximum sunlight and rotates the solar panel to face that direction, ensuring maximum energy absorption throughout the day.The system is controlled using a microcontroller that processes sensor input and drives motors to move the panel. This increases power output compared to fixed solar panels.",
    tags: ["Embedded Systems Development", "Arduino / Microcontroller Programming", "LDR Sensor Integration", "Servo / DC Motor Control", "Circuit Design and Wiring", "Power Management", "Basic Electronics & Troubleshooting"],
    liveUrl: "https://drive.google.com/file/d/16L9tufDw9PaSpHmd0cHESltsW0ijOGcu/view?usp=drivesdk",
   
  },
  {
    title: "Movie Ticket Bot",
    description: "The Movie Ticket Bot is an automation project developed using UiPath to simplify and automate the movie ticket booking process. The bot automatically navigates a movie booking website, selects the desired movie, show timing, and seats, and proceeds with the booking steps without manual intervention.This project demonstrates Robotic Process Automation (RPA) skills by automating repetitive web-based tasks efficiently and accurately.",
    tags: ["UiPath Studio", "Robotic Process Automation (RPA)", "Web Automation", "Data Scraping", "Selectors & UI Automation", "Exception Handling", "Workflow Design (Sequences, Flowcharts)","Input Automation & Screen Scraping"],
    liveUrl: "https://drive.google.com/file/d/16L9tufDw9PaSpHmd0cHESltsW0ijOGcu/view?usp=drivesdk",
    
  },
  {
    title: "Bounce ball game",
    description: "The Bounce Ball Game is a simple interactive game where the player controls a ball that continuously bounces and must avoid obstacles to score points. The objective of the game is to survive as long as possible by controlling the ball’s movement and timing the jumps correctly.The game includes collision detection, score tracking, and increasing difficulty levels to enhance user engagement.",
    tags: ["Programming (Python / Java / C# / JavaScript)", "Game Logic Development", "Object-Oriented Programming (OOP)", "Collision Detection", "Event Handling","Animation & Frame Control","UI Design"],
    liveUrl: "https://docs.google.com/presentation/d/1PmLwWifP5rVWJoq2Q4lvNmnu2Jh8AVHK/edit?usp=drivesdk&ouid=113222221296173322616&rtpof=true&sd=true",
    
  },
  {
    title: "Ben 10fers game",
    description: "The Ben 10fers Game is an action-based game inspired by the popular character Ben 10, where the player controls the character to complete missions, defeat enemies, and overcome obstacles. The game includes character movement, attack controls, scoring system, and level progression to enhance gameplay experience.The project focuses on implementing game mechanics, player controls, and real-time interaction within a structured game environment.",
    tags: ["Programming (C# / Java / Python / JavaScript)", "Game Development Concepts","Object-Oriented Programming (OOP)","Collision Detection","Character Animation","Event Handling","Level Design","UI & Score System Implementation"],
    liveUrl: "https://drive.google.com/file/d/16VGDcf9sY0ngc66Sy3koycRxSVAZFfEV/view?usp=drivesdk",
    
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
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:opacity-80 transition-opacity"
                  >
                    <ExternalLink size={14} /> Live Demo
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
