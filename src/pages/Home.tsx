import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ArrowRight, Download,Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
const WHATSAPP_NUMBER = "+91 9677571402";

const Home = () => {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-8">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient">TEENU TITUS T</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A passionate Compassionate and dedicated social worker with a background in Electronics and Communication Engineering. Skilled in hands-on technical tasks and committed to delivering quality work with integrity and
efficiency.

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide transition-all hover:opacity-90"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-heading font-semibold text-sm tracking-wide transition-colors hover:bg-secondary"
            >
              <Download size={16} />
              Download Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-heading font-semibold text-sm tracking-wide transition-colors hover:bg-secondary"
            >
              Get in Touch
            </Link>
          </motion.div>

           {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
             
              <a
                href="https://www.linkedin.com/in/teenu-titus-80a149299?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:titusteenu8@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
              
               <a
                href={`https://api.whatsapp.com/qr/ZZZQLTMD2KQLN1?autoload=1&app_absent=0${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-green-500/20 hover:text-green-500 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </motion.div>
          

          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full blur-[120px] pointer-events-none"
            style={{ background: "var(--gradient-accent)" }}
          />
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
