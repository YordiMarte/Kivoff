export const siteConfig = {
    name: "Kivoff",
    tagline: "Build the tools. Deploy the future.",
    subtitle: "Powered by AI.",
    description: 
        "Kivoff builds custom software and AI-powered tools for companies, from idea to deployment.",
    url: "https://kivoff.com",
    links: {
        github: "https://github.com/YordiMarte/Kivoff",
    },
    nav: [
        { label: "Products", href: "#products" },
        { label: "Resources", href: "resources" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact" },
    ],
} as const;

export type SiteConfig = typeof siteConfig;