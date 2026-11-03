export const companySizes = ["1-19", "20-99", "100-499", "500+"] as const;

export const supportTopics = ["Kivoff", "Ky", "This website", "Other"] as const;

export const contactConfig = {
  heading: "How can we help?",
  /** Placeholder: replace with a mailbox you actually monitor. */
  email: "hello@kivoff.com",
  options: [
    {
      id: "sales",
      title: "Sales",
      description:
        "Tell us about the product you need. We'll talk through custom software, AI tools, timelines, or set up a demo.",
      cta: { label: "Talk to sales", href: "/contact/sales" },
    },
    {
      id: "support",
      title: "Support",
      description:
        "Questions about a product we built? Ask for help, report a problem, or leave feedback.",
      cta: { label: "Contact support", href: "/contact/support" },
    },
    {
      id: "other",
      title: "Other inquiries",
      description:
        "Get in touch with our team about partnerships, press, or anything else.",
      cta: { label: "", subject: "General inquiry" },
    },
  ],
} as const;

export function mailto(email: string, subject: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}