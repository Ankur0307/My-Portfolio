import { Github, Linkedin, Code2, Mail, type LucideIcon } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Github, Linkedin, Code2, Mail,
};

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-sm font-semibold text-foreground mb-1">
              {personalInfo.name}
            </p>
            <p className="text-xs text-foreground-muted">
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
                  className="text-foreground-muted hover:text-foreground transition-colors duration-200"
                  aria-label={link.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-foreground-muted">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
