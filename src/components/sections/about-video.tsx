import { Play } from "lucide-react";
import { aboutVideo } from "@/config/about";

export function AboutVideo() {
  return (
    <section
      aria-label="Kivoff introduction video"
      className="mx-auto mt-16 max-w-6xl px-6"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_0_90px_-30px_color-mix(in_oklab,var(--brand)_35%,transparent)]">
        {aboutVideo ? (
          <video
            controls
            playsInline
            preload="metadata"
            poster={aboutVideo.poster?.src}
            aria-label={aboutVideo.title}
            className="size-full object-cover"
          >
            <source src={aboutVideo.src} type="video/mp4" />
          </video>
        ) : (
          <div
            aria-hidden
            className="grid size-full place-items-center bg-[radial-gradient(60%_60%_at_50%_0%,rgb(255_255_255/0.05),transparent)]"
          >
            <div className="flex flex-col items-center gap-4">
              <span className="grid size-16 place-items-center rounded-full border border-white/15 bg-white/[0.04]">
                <Play className="size-6 translate-x-0.5 text-foreground/70" />
              </span>
              <span className="text-xs tracking-widest text-muted-foreground/60 uppercase">
                Intro video coming soon
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}