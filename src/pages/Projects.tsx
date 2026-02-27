import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "Describe your project here. What technologies were used and what problem it solves.",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Two",
    description: "Another amazing project. Fill in details about your work and achievements.",
    tags: ["Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Three",
    description: "Showcase your best work here. Add screenshots or demo links for better impact.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Four",
    description: "Add as many projects as you'd like. Each card is fully customizable.",
    tags: ["React Native", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
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
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} /> Code
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
