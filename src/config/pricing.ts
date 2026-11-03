type Plan = {
  name: string;
  price: string;
  priceSuffix?: string;
  billing: string;
  annual?: boolean;
  features: string[];
  actions: { label: string; href: string; primary?: boolean }[];
};

export const pricing: Plan[] = [
  {
    name: "Intro call",
    price: "$0",
    billing: "Free, no commitment",
    features: [
      "30-minute call with the team",
      "Feasibility check of your idea",
      "Ballpark estimate and timeline",
      "Recommended approach and stack",
      "Honest build-vs-buy advice",
    ],
    actions: [{ label: "Book a call", href: "/contact/sales" }],
  },
  {
    name: "Launch",
    price: "$8,000",
    priceSuffix: "and up",
    billing: "Fixed scope and price",
    features: [
      "Everything in Intro call +",
      "Discovery workshop and technical plan",
      "Custom web app built with Next.js and TypeScript",
      "UI design aligned with your brand",
      "Authentication and database setup",
      "Deployment on Vercel with CI/CD",
      "30 days of post-launch support",
    ],
    actions: [{ label: "Get started", href: "/contact/sales" }],
  },
  {
    name: "Product",
    price: "$20,000",
    priceSuffix: "and up",
    billing: "Fixed scope and price",
    features: [
      "Everything in Launch +",
      "AI features: assistants, RAG on your documents, tool calling",
      "Backend APIs with Python (FastAPI or Django)",
      "Integrations with your existing tools",
      "Admin dashboard and user roles",
      "Analytics and monitoring",
      "Docker and cloud deployment on AWS",
      "90 days of post-launch support",
      "Early access to Kivo",
    ],
    actions: [
      { label: "Get started", href: "/contact/sales", primary: true },
      { label: "Contact sales", href: "/contact/sales" },
    ],
  },
  {
    name: "Partnership",
    price: "Custom",
    billing: "Monthly retainer or dedicated team",
    features: [
      "Everything in Product +",
      "Dedicated engineers and an ongoing roadmap",
      "Priority support with agreed response times",
      "Security review and documentation",
      "Maintenance and monitoring",
      "Onboarding and training for your team",
      "Quarterly roadmap reviews",
      "Account management",
    ],
    actions: [{ label: "Contact sales", href: "/contact/sales" }],
  },
];