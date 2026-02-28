import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { User, MapPin, Briefcase, GraduationCap, Download } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const details = [
  { icon: User, label: "Name", value: "Your Name Here" },
  { icon: MapPin, label: "Location", value: "Your City, Country" },
  { icon: Briefcase, label: "Experience", value: "X+ Years" },
  { icon: GraduationCap, label: "Education", value: "Your Degree" },
];

const About = () => {
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
            About <span className="text-gradient">Me</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 w-20 bg-primary rounded-full mb-10 origin-left"
          />

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="md:col-span-2"
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                Write your story here. Share your background, passion for development,
                and what drives you to create amazing digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Add more details about your journey, interests, and what makes you
                unique as a developer. This is your space to connect with visitors.
              </p>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide transition-all hover:opacity-90 mb-8"
              >
                <Download size={16} />
                Download Resume
              </a>

              <div className="grid sm:grid-cols-2 gap-4">
                {details.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
                  >
                    <div className="p-2 rounded-md bg-secondary">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="font-heading font-semibold text-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex justify-center items-start"
            >
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/40 blur-lg" />
                <img
                  src={profileImg}
                  alt="Profile"
                  className="relative rounded-2xl w-64 h-80 object-cover border-2 border-primary/30 shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
