import { DocCard } from "@/components/docs/DocCard";

const docs = [
  {
    title: "Start Guide",
    description: "Learn how to use the app and follow best practices for software building",
    href: "/docs/getting-started",
  },
  {
    title: "Teams",
    description: "Manage your teams and collaboration efficiently",
    href: "/docs/teams",
  },
  {
    title: "AI Assistant",
    description: "Use AI tools to summarize and automate tasks",
    href: "/docs/ai",
  },
];

export default function DocsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-8">Kivoff Docs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {docs.map((d) => (
          <DocCard key={d.href} {...d} />
        ))}
      </div>
    </div>
  );
}
