// ColorGridBackground.tsx
import { motion } from "@/lib/motion";

export function ColorGridBackground() {
  return (
    <motion.div
      className="absolute inset-0 -z-10 flex items-end justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="grad" cx="50%" cy="80%" r="80%" fx="50%" fy="80%" gradientTransform="rotate(0)">
            <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#grad)" />
        {/* Líneas de cuadrícula */}
        {[...Array(20)].map((_, i) => (
          <line
            key={i}
            x1={(i * 1440) / 20}
            y1="0"
            x2={(i * 1440) / 20}
            y2="900"
            stroke="#fff"
            strokeOpacity="0.07"
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={(i * 900) / 12}
            x2="1440"
            y2={(i * 900) / 12}
            stroke="#fff"
            strokeOpacity="0.07"
          />
        ))}
      </svg>
    </motion.div>
  );
}