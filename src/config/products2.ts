import type { StaticImageData } from "next/image";
import KyLogo from "@/images/logo/Ky.png";

export type Product = {
    id: string;
    name: string;
    description: string;
    logo?: StaticImageData;
    screenshots?: StaticImageData;
    screenshotAlt?: string;
};

export const products2: readonly Product[] = [
    {
        id: "Ky",
        name: "Ky",
        description: "Turn your APIs and MCP tools into revenue. Publish them, set a price per use, and get paid automatically by AI agents and apps. Built on the open x402 protocol.",
        logo: KyLogo,
    },
] as const;