export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Kivoff took the time to understand how our team works before proposing a solution. The result feels like it was built just for us.",
    name: "Alex Rivera",
    image: "/images/testimonials/sample-avatar-01.jpg",
    role: "Operations Lead",
    company: "Northstar Logistics",
  },
  {
    quote:
      "They helped us turn a promising AI idea into a product our team can actually use every day.",
    name: "Maya Chen",
    image: "/images/testimonials/sample-avatar-02.jpg",
    role: "Head of Product",
    company: "Lumen Health",
  },
  {
    quote:
      "The process was clear from the first conversation. We always knew what was happening and what came next.",
    name: "Daniel Okafor",
    image: "/images/testimonials/sample-avatar-03.jpg",
    role: "Founder",
    company: "Brightpath Studio",
  },
  {
    quote:
      "Kivoff built an internal platform that brought several disconnected parts of our workflow together.",
    name: "Sofia Marín",
    image: "/images/testimonials/sample-avatar-04.jpg",
    role: "CTO",
    company: "Vertex Retail",
  },
  {
    quote:
      "They asked thoughtful questions, challenged our assumptions, and helped us shape a much stronger product.",
    name: "Liam Novak",
    image: "/images/testimonials/sample-avatar-05.jpg",
    role: "COO",
    company: "Atlas Finance",
  },
  {
    quote:
      "The team balanced thoughtful engineering with a real understanding of what our customers needed.",
    name: "Priya Shah",
    image: "/images/testimonials/sample-avatar-06.jpg",
    role: "VP of Engineering",
    company: "Cobalt Systems",
  },
  {
    quote:
      "We went from a rough brief to a working first version with a team that was collaborative at every step.",
    name: "Jordan Ellis",
    image: "/images/testimonials/sample-avatar-07.jpg",
    role: "Product Director",
    company: "Fieldwork Labs",
  },
  {
    quote:
      "Their attention to the details made the finished experience feel cohesive, not like a collection of features.",
    name: "Camila Torres",
    image: "/images/testimonials/sample-avatar-08.jpg",
    role: "Design Lead",
    company: "Common Ground",
  },
  {
    quote:
      "Kivoff made a complicated technical project easier to navigate and kept the whole team aligned.",
    name: "Noah Williams",
    image: "/images/testimonials/sample-avatar-09.jpg",
    role: "Founder",
    company: "Harbor & Pine",
  },
  {
    quote:
      "The new workflow gives our people more time to focus on customers instead of repetitive tasks.",
    name: "Amara Johnson",
    image: "/images/testimonials/sample-avatar-10.jpg",
    role: "Customer Experience Lead",
    company: "Kindred Commerce",
  },
  {
    quote:
      "We appreciated how quickly the team understood the problem and translated it into a practical plan.",
    name: "Ethan Park",
    image: "/images/testimonials/sample-avatar-11.jpg",
    role: "Managing Director",
    company: "Juniper Works",
  },
  {
    quote:
      "From the first workshop through launch, Kivoff felt like a thoughtful extension of our own team.",
    name: "Isabel Costa",
    image: "/images/testimonials/sample-avatar-12.jpg",
    role: "CEO",
    company: "Solace Digital",
  },
] as const;
