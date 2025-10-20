"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Upload, Box, Github } from "lucide-react";

import {
  Info,
  Check,
  Flag,
  ListOrdered,
  Smile,
  PlusSquare,
  Bell,
  Users,
} from "lucide-react"

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
    title: "Projects",
    desc: "Shape your product ideas and plan what to build next",
    href: "/docs/projects",
  },
  {
    icon: <Github className="h-5 w-5" />,
    title: "GitHub Automations",
    desc: "Link issues and automate pull request workflows",
    href: "/docs/github-automations",
  },
];

const basics = [
  {
    icon: <Info className="h-5 w-5" />,
    title: "Workflows",
    desc: "Create new statuses and design custom issue workflows",
    href: "/docs/workflows",
  },
  {
    icon: <Check className="h-5 w-5" />,
    title: "Select Issues",
    desc: "Learn how to take actions on multiple issues at a time",
    href: "/docs/select-issues",
  },
  {
    icon: <Flag className="h-5 w-5" />,
    title: "Issue Relations",
    desc: "Indicate blocked, blocking, related, and duplicate issues",
    href: "/docs/issue-relations",
  },
  {
    icon: <ListOrdered className="h-5 w-5" />,
    title: "Display Options",
    desc: "Order, sort, and group issues and projects and customize views",
    href: "/docs/display-options",
  },
  {
    icon: <Smile className="h-5 w-5" />,
    title: "Triage",
    desc: "Use a special inbox for issues from integrations and other sources",
    href: "/docs/triage",
  },
  {
    icon: <PlusSquare className="h-5 w-5" />,
    title: "Parent and Sub-Issues",
    desc: "Break down larger tasks into smaller pieces of work",
    href: "/docs/parent-sub-issues",
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Notifications",
    desc: "Learn how to manage notifications and stay up to date",
    href: "/docs/notifications",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Teams",
    desc: "Create teams in your workspace to organize different types of work",
    href: "/docs/teams",
  },
];


export default function DocsPage() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold mb-2">Kivoff Docs</h1>
        <p className="text-neutral-400 text-sm">
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
                className="block p-5 border border-neutral-800 rounded-xl bg-neutral-900/60 hover:bg-neutral-900 transition"
              >
                <div className="mb-3 text-neutral-300">{item.icon}</div>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

  <section>
        <h2 className="text-xl font-semibold mb-2">Kivoff Basics</h2>
        <p className="text-neutral-400 text-sm mb-6">
          Explore essential features and workflows to start using Kivoff effectively.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {basics.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={item.href}
                className="block p-5 border border-neutral-800 rounded-xl bg-neutral-900/60 hover:bg-neutral-900 transition"
              >
                <div className="mb-3 text-neutral-300">{item.icon}</div>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}