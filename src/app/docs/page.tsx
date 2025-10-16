"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Upload, Box, Github } from "lucide-react";


const popular = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Start Guide",
    desc: "Learn how to use the app and follow best practices for software building",
    href: "/docs/getting-started",
  },
  {
    icon: <Upload className="h-5 w-5" />,
    title: "Import Issues",
    desc: "Quickly move issues from your existing issue tracker into Kivoff",
    href: "/docs/import-issues",
  },
  {
    icon: <Box className="h-5 w-5" />,
    title: "Project",
    decs: "Shape your product ideas and plan what to build next",
    href: "/docs/projects",
  },
  {
    icon: <Github className="h-5 w-5" />,
    title: "GitHub Automations",
    desc: "Link issues and automate pull request workflows",
    href: "/docs/github-automations",
  },
];

export default function DocsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Kivoff Docs</h1>
        <p className="text-neutral-400">
          Get an overview of Kivoff’s features, integrations, and how to use them.
        </p>
      </div>

      {/* Popular Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Popular</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popular.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={item.href}
                className="block p-4 border border-neutral-800 rounded-xl bg-neutral-900/50 hover:bg-neutral-900 transition"
              >
                <div className="mb-3 text-neutral-300">{item.icon}</div>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Linear Basics */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Kivoff Basics</h2>
        <p className="text-neutral-400 text-sm mb-6">
          Explore essential features and workflows to start using Kivoff effectively.
        </p>
      </section>
    </div>
  );
}