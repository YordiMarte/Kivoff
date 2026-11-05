import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { aboutTeam, type TeamMember } from "@/config/about";

function MemberCard({ member }: { member: TeamMember }) {
  const content = (
    <>
      <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
        <Image
          src={member.photo}
          alt=""
          fill
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
          className="object-cover object-top grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      </div>

      <p className="mt-5 flex items-center gap-1.5 text-base font-medium">
        {member.name}
        {member.linkedin && (
          <ArrowUpRight
            aria-hidden
            className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
          />
        )}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
    </>
  );

  if (!member.linkedin) {
    return <div className="group">{content}</div>;
  }

  return (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${member.name} on LinkedIn (opens in a new tab)`}
      className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      {content}
    </a>
  );
}

export function AboutTeam() {
  return (
    <section className="mx-auto mt-28 max-w-6xl px-6">
      <h2 className="sr-only">Team</h2>

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {aboutTeam.map((member) => (
          <li key={member.name}>
            <MemberCard member={member} />
          </li>
        ))}
      </ul>
    </section>
  );
}