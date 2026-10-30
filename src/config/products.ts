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
        description: "An AI assistant that knows your company. Connect your documents, ask in plain language, and get answers with the source cited. Actions that create tickets and draft emails are coming next.",
        logo: v0Logo,
    },
] as const;