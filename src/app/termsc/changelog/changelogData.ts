export interface ChangelogItem {
    title: string
    date: string
    description: string
    details: string[]
}

export const changelogData: ChangelogItem[] = [
    {
    title: "Enhanced Type Inference for Embedded Functions",
    date: "Oct 22, 2025",
    description: "Improved support for embedded functions and computed relationships in Supabase-like RPC calls.",
    details: [
        "Functions returning SETOF or table types are now correctly inferred as embedded relationships.",
        "TypeScript now throws compile-time errors for invalid function usage.",
        "Better handling of ambiguous RPC overloads."
    ]
    },
    {
        title: "UI/UX Polishing in Kivoff Landing",
        date: "Oct 10, 2025",
        description: "Refined interface and smoother transitions for changelog navigation.",
        details: []
    },
]