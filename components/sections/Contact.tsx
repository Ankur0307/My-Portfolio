"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Code2,
  ExternalLink,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import WavyHills from "@/components/WavyHills";
import { AvatarBust } from "@/components/Avatar3D";
import { contactLinks, personalInfo, navLinks } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Phone,
  Github,
  Linkedin,
  Code2,
};

export default function Contact() {
  return (
    <section id="contact" className="relative pt-20 md:pt-28">
      {/* Content area */}
      <div className="container-custom section-padding pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-hotpink uppercase tracking-[0.2em] text-xs font-bold mb-10"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {contactLinks.map((link, i) => {
            const Icon = iconMap[link.icon] || ExternalLink;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: i * 0.07,
                }}
                whileHover={{
                  y: -3,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                className="flex items-center gap-3 p-4 rounded-xl bg-navy-800/40 border border-navy-700/50 hover:border-hotpink/40 transition-all duration-300 group"
              >
                <Icon size={18} className="text-navy-400 group-hover:text-hotpink transition-colors flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-navy-500 uppercase tracking-wider font-medium">
                    {link.label}
                  </p>
                  <p className="text-sm text-navy-200 group-hover:text-white transition-colors truncate">
                    {link.href.startsWith("mailto:")
                      ? link.href.replace("mailto:", "")
                      : link.href.startsWith("tel:")
                      ? link.href.replace("tel:", "")
                      : link.label}
                  </p>
                </div>
                <ArrowRight
                  size={14}
                  className="text-navy-600 group-hover:text-hotpink group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                />
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Footer with wavy hills */}
      <footer className="relative pt-8">
        {/* Wavy hill separator */}
        <div className="relative">
          <WavyHills className="h-[100px] md:h-[140px]" />
        </div>

        <div className="bg-navy-950 pt-8 pb-6">
          <div className="container-custom section-padding">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              {/* Left — Avatar + name */}
              <div className="flex flex-col items-start gap-4">
                <AvatarBust />
                <div>
                  <h3 className="font-heading font-bold text-neon-blue text-lg">
                    Ankur
                    <span className="text-hotpink mx-0.5">✦</span>
                    Gupta
                  </h3>
                  <p className="text-navy-400 text-sm mt-1">
                    Building the future with data & code.
                  </p>
                </div>
              </div>

              {/* Right — sitemap columns */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 flex-1">
                <div>
                  <h4 className="text-navy-400 uppercase tracking-wider text-[10px] font-bold mb-3">
                    Navigation
                  </h4>
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-sm text-navy-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-navy-400 uppercase tracking-wider text-[10px] font-bold mb-3">
                    Links
                  </h4>
                  <div className="flex flex-col gap-2">
                    {contactLinks
                      .filter((l) => l.href.startsWith("http"))
                      .map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-navy-300 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-navy-400 uppercase tracking-wider text-[10px] font-bold mb-3">
                    Contact
                  </h4>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm text-navy-300 hover:text-white transition-colors"
                    >
                      Email
                    </a>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm text-navy-300 hover:text-white transition-colors"
                    >
                      Phone
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social icons row + copyright */}
            <div className="mt-10 pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-navy-500">
                © {new Date().getFullYear()} Ankur Gupta. All Rights Reserved.
              </p>
              <div className="flex items-center gap-3">
                {contactLinks
                  .filter((l) => l.href.startsWith("http"))
                  .map((link) => {
                    const Icon = iconMap[link.icon] || ExternalLink;
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="p-2 text-navy-500 hover:text-white transition-colors"
                      >
                        <Icon size={16} />
                      </motion.a>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
