"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-8 py-4 border-b border-neutral-800 bg-black/90 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-white font-semibold text-lg hover:text-gray-300 transition">
          Home
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.3 }}
          className="p-2 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800"
        >
          <Sun className="h-4 w-4 text-neutral-400" />
        </motion.button>

        <Button
          asChild
          className="bg-white text-black hover:bg-gray-200 font-semibold px-4 py-2 rounded-md"
        >
          <Link href="/signup">Sign up</Link>
        </Button>
      </div>
    </nav>
  );
}
