import type { ComponentType } from "react";
import {
  CubesFigure,
  LayersFigure,
  StepsFigure,
} from "@/components/sections/capability-figures";
import {
  capabilities,
  capabilitiesCopy,
  type CapabilityFigure,
} from "@/config/capabilities";

const figures: Record<CapabilityFigure, ComponentType> = {
  layers: LayersFigure,
  cubes: CubesFigure,
  steps: StepsFigure,
};

export function Capabilities() {
  return (
    <section id="capabilities" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-gradient text-4xl font-medium tracking-tight sm:text-5xl">
          {capabilitiesCopy.heading}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-balance text-muted-foreground sm:text-lg">
          {capabilitiesCopy.description}
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-y border-white/10">
        <ul className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {capabilities.map((item) => {
            const Illustration = figures[item.figure];

            return (
              <li key={item.id} className="group flex flex-col p-8 sm:p-10">
                <span className="font-mono text-xs tracking-widest text-muted-foreground/70">
                  FIG {item.fig}
                </span>

                <div className="mt-6 aspect-[4/3] w-full">
                  <Illustration />
                </div>

                <h3 className="mt-8 text-base font-medium">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}