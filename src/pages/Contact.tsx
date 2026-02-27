import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "your@email.com" },
  { icon: Phone, label: "Phone", value: "+1 234 567 890" },
  { icon: MapPin, label: "Location", value: "Your City, Country" },
];

const Contact = () => {
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
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 w-20 bg-primary rounded-full mb-10 origin-left"
          />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                Have a project in mind or just want to say hello? Feel free to
                reach out. I'd love to hear from you!
              </p>
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-lg bg-secondary">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="font-heading font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                Send Message <Send size={16} />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
