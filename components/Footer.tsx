import { Github, Linkedin, Code2, Mail, type LucideIcon } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";
import WavyHills from "./WavyHills";
import Avatar3D from "./Avatar3D";

const iconMap: Record<string, LucideIcon> = {
  Github, Linkedin, Code2, Mail,
};

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-[#0f172a]">
      <WavyHills inverted />
      
      {/* Avatar bust peeking from footer hills */}
      <div className="absolute top-[-60px] left-[10%] z-20 scale-[0.7] origin-bottom">
        <Avatar3D type="bust" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-sm font-bold text-white tracking-wide mb-1">
              {personalInfo.name}
            </p>
            <p className="text-xs text-gray-500 font-medium">
              Building things that matter with code and data.
            </p>
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              if (!Icon) return null;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-gray-500 hover:text-purple-400 transition-colors duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
