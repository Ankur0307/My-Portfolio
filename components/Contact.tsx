"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section-container py-24">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="text-accent text-sm font-mono font-medium mb-3"
        >
          05. Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4"
        >
          Get in touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-foreground-secondary text-lg mb-10"
        >
          I&apos;m always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out.
        </motion.p>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-left space-y-5 mb-12"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:${personalInfo.email}`;
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm text-foreground-muted mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-border text-foreground text-sm placeholder:text-foreground-muted focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-foreground-muted mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-border text-foreground text-sm placeholder:text-foreground-muted focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-foreground-muted mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="What would you like to say?"
              className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-border text-foreground text-sm placeholder:text-foreground-muted focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            <Send size={16} />
            Send Message
          </button>
        </motion.form>

        {/* Or reach me directly */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-sm text-foreground-muted mb-4">Or find me on</p>
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm text-foreground-secondary hover:text-accent link-underline transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
