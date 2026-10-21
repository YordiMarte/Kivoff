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
} as const;

export type SiteConfig = typeof siteConfig;