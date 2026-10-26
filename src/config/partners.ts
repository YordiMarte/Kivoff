import type { StaticImageData } from "next/image";
import supabase from "@/images/partners/supabase.png";
import leap from "@/images/partners/leap.png";
import payload from "@/images/partners/payload.png";
import paper from "@/images/partners/paper.png";

export type Partner = {
    name: string;

    logo?: StaticImageData;
    heightClass?: string;
};

export const partnersCopy ={
    heading: "Companies of all sizes trust Kivoff to build their most important tools.",
} as const;

export const partners: readonly Partner[] = [
    {name: "Supabase", logo: supabase, },
    { name: "Leap", logo: leap, },
    { name: "Payload", logo: payload, },
    { name: "Paper", logo: paper },
] as const;
