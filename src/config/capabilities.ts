export type CapabilityFigure = "layers" | "cubes" | "steps";

export type Capability = {
    id: string;
    fig: string;
    title: string;
    description: string;
    figure: CapabilityFigure;
};

export const capabilitiesCopy = {
    heading: "What Kivoff builds",
    description:
        "An engineering team that designs, builds and deploys the software and AI tools your company actually needs."
} as const;

export const capabilities: readonly Capability [] = [
    {
        id: "custom-software",
        fig: "0.1",
        title: "Custom software",
        description:
            "Web applications and internal systems shaped around how your company really works, not the other way around.",
        figure: "layers",
    },
    {
         id: "ai-products",
         fig: "0.2",
         title: "AI-powerd products",
         description:
            "Assistants and tools that bring AI into your workflows, from answering questions on your documents to automating repetitive tasks.",
        figure: "cubes",
    },
    {
        id: "idea-to-deployment",
        fig: "0.3",
        title: "From idea to deployment",
        description:
            "One team from the first sketch to production: design, development, integration and deployment on infrastructure you can trust.",
        figure: "steps",
    },
] as const;