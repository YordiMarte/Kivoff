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
    name: "Free",
    price: "$0",
    billing: "Free for everyone",
    features: [
      "Unlimited members",
      "2 teams",
      "250 issues",
      "Agent platform",
      "Linear Agent",
      "Loops",
    ],
    actions: [{ label: "Get started", href: "/contact/sales" }],
  },
  {
    name: "Basic",
    price: "$10",
    priceSuffix: "per user/month",
    billing: "Billed yearly",
    annual: true,
    features: [
      "All Free features +",
      "5 teams",
      "Unlimited issues",
      "Unlimited file uploads",
      "Admin roles",
    ],
    actions: [{ label: "Get started", href: "/contact/sales" }],
  },
  {
    name: "Business",
    price: "$16",
    priceSuffix: "per user/month",
    billing: "Billed yearly",
    annual: true,
    features: [
      "All Basic features +",
      "Unlimited teams",
      "Private teams and guests",
      "Triage Intelligence",
      "Code Intelligence",
      "Linear Insights",
      "Linear Asks",
      "Zendesk and Intercom integrations",
    ],
    actions: [
      { label: "Get started", href: "/contact/sales", primary: true },
      { label: "Contact sales", href: "/contact/sales" },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    billing: "Annual billing only",
    features: [
      "All Business features +",
      "Invoice/PO billing",
      "SAML and SCIM",
      "Granular admin controls",
      "Enterprise-grade security",
      "Advanced org modeling",
      "Migration & onboarding support",
      "Priority support",
      "Account management",
    ],
    actions: [{ label: "Contact sales", href: "/contact/sales" }],
  },
];
