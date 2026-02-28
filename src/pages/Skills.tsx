import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const skills = [
  { name: "C", level: 90 },
  { name: "Python", level: 85 },
  { name: "JavaScript", level: 92 },
  { name: "Bootstrap", level: 78 },
  { name: "HTML ", level: 88 },
  { name: " CSS", level: 95 },

  
  { name: "Data Analyst", level: 82 },
  { name: "UI/UX", level: 82 },

  { name: "MySQL", level: 82 },
  { name: "SQLITE", level: 82 },
  
  { name: "NumPy", level: 82 },
  { name: "VS Code", level: 82 },
  { name: "Git & GitHub", level: 80 },
 
];

const Skills = () => {
  return (
    <PageTransition>
      <section className="min-h-screen pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-4"
          >
            My <span className="text-gradient">Skills</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 w-20 bg-primary rounded-full mb-10 origin-left"
          />

          <div className="grid gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-heading font-semibold text-sm">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Skills;
