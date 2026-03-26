"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="section-container py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
        className="text-accent text-sm font-mono font-medium mb-3"
      >
        04. Blog
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="font-heading text-3xl font-semibold text-white mb-4"
      >
        Writing & thoughts
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-foreground-secondary text-lg mb-12 max-w-xl"
      >
        I write about things I learn — frameworks, databases, ML concepts, and developer workflows.
      </motion.p>

      <div className="space-y-1">
        {blogPosts.map((post, i) => (
          <motion.a
            key={post.slug}
            href={`#blog-${post.slug}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="group flex items-start justify-between gap-4 p-5 -mx-5 rounded-xl hover:bg-background-card/50 transition-colors duration-200"
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-heading text-lg font-semibold text-white group-hover:text-accent transition-colors duration-200 mb-1.5">
                {post.title}
              </h3>
              <p className="text-sm text-foreground-secondary leading-relaxed mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-foreground-muted">
                <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
                <div className="flex items-center gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full border border-border text-foreground-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <ArrowRight
              size={18}
              className="text-foreground-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 mt-1.5 flex-shrink-0"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
