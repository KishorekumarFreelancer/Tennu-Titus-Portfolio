import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import certManufacturing from "@/assets/cert-manufacturing.jpeg";
import certDsa from "@/assets/cert-dsa.jpeg";
import certLucas from "@/assets/cert-lucas-tvs.jpeg";
import certPython from "@/assets/cert-python.jpeg";
import certWebdev from "@/assets/cert-webdev.jpeg";

const certificates = [
  {
    title: "Manufacturing Excellence Training",
    issuer: "TN Apex Skill Development Centre for Logistics",
    date: "Feb 2025",
    description:
      "Completed training in Engineering Drawing Interpretation, GD&T Basics, Limits/Fits/Tolerance, PLC, Product Costing & Winding Technology, CNC, and Industrial Pneumatics & Hydraulics. Sponsored by Lucas TVS Limited, Chennai.",
    image: certManufacturing,
  },
  {
    title: "In-Plant / Internship Training",
    issuer: "Lucas TVS Ltd., Chennai",
    date: "Jan – Feb 2025",
    description:
      "Successfully completed In-Plant / Internship Training at Lucas TVS Ltd., Padi, Chennai. Conduct and character were found Good.",
    image: certLucas,
  },
  {
    title: "Python Programming",
    issuer: "E-Max Education, Kanya Kumari",
    date: "May – June 2025",
    description:
      "Completed Python Programming course covering Data Types, Programming Concepts, Functions & Modules, Files, TKINTER, SQL, Database Handling with SQLITE & Project. Scored 90% with A+ grade.",
    image: certPython,
  },
  {
    title: "Web Development",
    issuer: "E-Max Education, Kanya Kumari",
    date: "May – June 2025",
    description:
      "Completed Web Development course covering HTML, HTML5, CSS, CSS3, JavaScript, jQuery, Bootstrap & Project. Scored 85% with A+ grade.",
    image: certWebdev,
  },
  {
    title: "Data Structure - C (Hands-On)",
    issuer: "Skill Rack",
    date: "Sep 2024",
    description:
      "Certificate of Completion for the Data Structure - C - Course (Hands-On) from SkillRack, demonstrating proficiency in data structures using C programming.",
    image: certDsa,
  },
];

const Certificates = () => {
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
            My <span className="text-gradient">Certificates</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 w-20 bg-primary rounded-full mb-10 origin-left"
          />

          <div className="grid gap-10">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                className="grid md:grid-cols-5 gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors"
              >
                <div className="md:col-span-2 overflow-hidden rounded-xl">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-cover rounded-xl border border-border"
                  />
                </div>
                <div className="md:col-span-3 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={20} className="text-primary" />
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {cert.date}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-1">
                    {cert.title}
                  </h2>
                  <p className="text-sm text-primary mb-3">{cert.issuer}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Certificates;
