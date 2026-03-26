"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Contact() {
  return (
    <section id="contact" className="section-container py-24">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          {...fadeUp}
          className="text-purple-400 text-sm font-mono font-medium mb-3"
        >
          05. Contact
        </motion.p>
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-heading text-3xl md:text-5xl font-bold text-gray-100 mb-6"
        >
          Get in touch
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg mb-12"
        >
          My inbox is always open. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
        </motion.p>

        {/* Contact form */}
        <motion.form
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-left space-y-6 mb-16 p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:${personalInfo.email}`;
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="What would you like to say?"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
          >
            <Send size={16} />
            Say Hello
          </button>
        </motion.form>

        {/* Or reach me directly */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 font-medium tracking-wide uppercase mb-6">Or find me on</p>
          <div className="flex items-center justify-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[1.5px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
