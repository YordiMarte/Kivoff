import type { StaticImageData } from "next/image";
import v0Logo from "@/images/logo/v0.png";

export type Product = {
    id: string;
    name: string;
    description: string;
    logo?: StaticImageData;
    screenshots?: StaticImageData;
    screenshotAlt?: string;
};

export const products: readonly Product[] = [
    {
        id: "v0",
        name: "v0",
        description: "A simple, fast, and secure way to build and deploy web applications.",
        logo: v0Logo,
    },
] as const;