"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Blog() {
  return (
    <section id="blog" className="section-container py-24">
      <motion.p
        {...fadeUp}
        className="text-purple-400 text-sm font-mono font-medium mb-3"
      >
        04. Blog
      </motion.p>
      <motion.h2
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-heading text-3xl font-bold text-gray-100 mb-4"
      >
        Writing & thoughts
      </motion.h2>
      <motion.p
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-400 text-lg mb-12 max-w-xl"
      >
        I write about things I learn — frameworks, databases, ML concepts, and developer workflows.
      </motion.p>

      <div className="space-y-4">
        {blogPosts.map((post, i) => (
          <motion.a
            key={post.slug}
            href={`#blog-${post.slug}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] hover:-translate-y-1"
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-heading text-xl font-bold text-gray-100 group-hover:text-purple-300 transition-colors duration-300 mb-2">
                {post.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500">
                <span className="text-gray-400">{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span className="flex items-center gap-1.5 text-gray-400">
                  <Clock size={12} />
                  {post.readTime}
                </span>
                <span className="hidden md:inline-block w-1 h-1 rounded-full bg-gray-600" />
                <div className="flex items-center gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-gray-400 group-hover:border-purple-500/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Arrow hover effect */}
            <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-purple-400 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-300 sm:flex-shrink-0">
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
