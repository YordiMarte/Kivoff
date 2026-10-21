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
        { label: "Product", href: "#product" },
        { label: "Capabilities", href: "#capabilities" },
        { label: "Product", href: "#products" },
        { label: "Contact", href: "#contact" },
    ],
    pillars: [
        { label: "Custom software", icon: "code" },
        { label: "AI-powered products", icon: "sparkles" },
        { label: "From idea to deployment", icon: "rocket" },
    ]
} as const;

export type SiteConfig = typeof siteConfig;