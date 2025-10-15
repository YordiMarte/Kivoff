"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function DocCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 transition"
    >
      <Link href={href}>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-neutral-400">{description}</p>
      </Link>
    </motion.div>
  );
}
