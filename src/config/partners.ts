import type { StaticImageData } from "next/image";

export type Partner = {
    name: string;

    logo?: StaticImageData;
    href?: string;
};

export const partnersCopy ={
    heading: "Companies of all sizes trust Kivoff to build their most important tools.",
} as const;

export const partners: readonly Partner[] = [
    {name: "Supabase" },
    { name: "Leap" },
    { name: "Payload" },
    { name: "Paper" },
] as const;
