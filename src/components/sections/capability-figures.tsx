import type { CSSProperties, ReactNode } from "react";

type Point = [number, number];

const toPoints = (points: Point[]) =>
  points.map(([x, y]) => `${x},${y}`).join(" ");

const motion = (duration: number, delay = 0, lift?: number) =>
  ({
    "--dur": `${duration}s`,
    "--delay": `${delay}s`,
    ...(lift ? { "--lift": `${lift}px` } : {}),
  }) as CSSProperties;

type BoxProps = {
  cx: number;
  cy: number;
  hw: number;
  hh: number;
  depth: number;
};

function Box({ cx, cy, hw, hh, depth }: BoxProps) {
  const top = toPoints([
    [cx, cy - hh],
    [cx + hw, cy],
    [cx, cy + hh],
    [cx - hw, cy],
  ]);
  const left = toPoints([
    [cx - hw, cy],
    [cx, cy + hh],
    [cx, cy + hh + depth],
    [cx - hw, cy + depth],
  ]);
  const right = toPoints([
    [cx, cy + hh],
    [cx + hw, cy],
    [cx + hw, cy + depth],
    [cx, cy + hh + depth],
  ]);

  return (
    <g>
      <polygon points={left} />
      <polygon points={right} />
      <polygon points={top} />
    </g>
  );
}

function OnTopFace({
  cx,
  cy,
  children,
}: {
  cx: number;
  cy: number;
  children: ReactNode;
}) {
  return (
    <g transform={`translate(${cx} ${cy}) matrix(1 0.5 -1 0.5 0 0)`}>
      {children}
    </g>
  );
}

function Figure({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 320 260"
      aria-hidden
      focusable="false"
      strokeWidth={1}
      strokeLinejoin="round"
      strokeLinecap="round"
      className="size-full fill-background stroke-white/30 transition-colors duration-300 group-hover:stroke-brand/70"
    >
      {children}
    </svg>
  );
}

export function LayersFigure() {
  return (
    <Figure>
      {[176, 160, 144, 128].map((cy) => (
        <Box key={cy} cx={160} cy={cy} hw={100} hh={50} depth={16} />
      ))}

      <line
        x1={60}
        y1={74}
        x2={60}
        y2={128}
        strokeDasharray="3 4"
        className="fig-dash"
      />
      <line
        x1={260}
        y1={74}
        x2={260}
        y2={128}
        strokeDasharray="3 4"
        className="fig-dash"
      />

      <g className="fig-float" style={motion(5, 0, 7)}>
        <Box cx={160} cy={64} hw={100} hh={50} depth={10} />
        <OnTopFace cx={160} cy={64}>
          <polyline points="-14,-12 -28,0 -14,12" />
          <polyline points="14,-12 28,0 14,12" />
          <line x1={5} y1={-16} x2={-5} y2={16} />
        </OnTopFace>
      </g>
    </Figure>
  );
}

const cubes = [
  { cx: 170, cy: 70, mark: "spark", dur: 5.2, delay: 0 },
  { cx: 232, cy: 104, mark: "chip", dur: 6.4, delay: -1.8 },
  { cx: 100, cy: 110, mark: "chip", dur: 5.8, delay: -3.2 },
  { cx: 166, cy: 150, mark: "chip", dur: 6.8, delay: -2.4 },
] as const;

export function CubesFigure() {
  return (
    <Figure>
      {cubes.map((cube) => (
        <g
          key={`${cube.cx}-${cube.cy}`}
          className="fig-float"
          style={motion(cube.dur, cube.delay, 5)}
        >
          <Box cx={cube.cx} cy={cube.cy} hw={56} hh={28} depth={56} />
          <OnTopFace cx={cube.cx} cy={cube.cy}>
            {cube.mark === "spark" ? (
              <path
                d="M0 -13 C1 -4 4 -1 13 0 C4 1 1 4 0 13 C-1 4 -4 1 -13 0 C-4 -1 -1 -4 0 -13Z"
                className="fig-pulse fill-brand/25 stroke-brand/70"
              />
            ) : (
              <rect x={-9} y={-9} width={18} height={18} rx={3} />
            )}
          </OnTopFace>
        </g>
      ))}
    </Figure>
  );
}

const steps = [
  { cx: 235, cy: 49, depth: 76 },
  { cx: 185, cy: 94, depth: 56 },
  { cx: 135, cy: 139, depth: 36 },
  { cx: 85, cy: 184, depth: 16 },
] as const;

const STEP_STAGGER = 0.45;

export function StepsFigure() {
  return (
    <Figure>
      {steps.map((step, index) => (
        <g
          key={step.cx}
          className="fig-step"
          style={motion(4, (steps.length - 1 - index) * STEP_STAGGER)}
        >
          <Box cx={step.cx} cy={step.cy} hw={34} hh={17} depth={step.depth} />

          {index === 0 && (
            <>
              <line x1={235} y1={49} x2={235} y2={20} />
              <polygon
                points="235,20 254,27 235,34"
                className="fig-flag fill-brand/60 stroke-brand/80"
              />
            </>
          )}
        </g>
      ))}
    </Figure>
  );
}