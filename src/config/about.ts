import type { StaticImageData } from "next/image";
import yordi from "@/images/me.png";

/**
 * DRAFT: edit the copy before launch.
 */

export const aboutHero = {
  heading: "Engineering the tools companies run on",
  description:
    "AI is changing how products get built. We help companies build what comes next.",
} as const;

export type AboutVideo = {
  /** Ruta pública (ej. "/videos/kivoff-intro.mp4") o URL absoluta. */
  src: string;
  title: string;
  poster?: StaticImageData;
};

/** Futuro: sustituye null por { src, title } cuando tengas el video. */
export const aboutVideo: AboutVideo | null = null;

export const aboutStory = {
  heading: "Built to ship real products",
  lead: "Software development is changing fast. AI is reshaping how products are designed, built and deployed.",
  paragraphs: [
    "AI lets small teams build things that used to take many people. It also raises the bar for clarity: knowing what to build, and why, matters more than ever.",
    "Founded in 2024, Kivoff is an engineering team that builds custom software and AI-powered tools for companies. We work from the problem to a product that is deployed, used and maintained.",
    "What guides us is focus on the real problem, fast and careful execution, and respect for the craft of building software.",
  ],
} as const;

export type TeamMember = {
  name: string;
  role: string;
  photo: StaticImageData;
  /** Si falta, la tarjeta se muestra sin enlace. */
  linkedin?: string;
};

export const aboutTeam: readonly TeamMember[] = [
  {
    name: "Yordi Marte",
    role: "Co-Founder, CEO",
    photo: yordi,
    linkedin: "https://www.linkedin.com/in/yordimarte/",
  },
];