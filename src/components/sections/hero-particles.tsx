type Particle = {
  id: number;
  kind: "square" | "star";
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
};

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const round = (n: number, d = 2) => Number(n.toFixed(d));

function generateParticles(): Particle[] {
  const rand = mulberry32(2025);
  const particles: Particle[] = [];

  for (let i = 0; i < 12; i++) {
    const onLeft = i % 2 === 0;
    particles.push({
      id: i,
      kind: "square",
      x: round(onLeft ? 2 + rand() * 20 : 78 + rand() * 20),
      y: round(6 + rand() * 82),
      size: round(10 + rand() * 26, 0),
      opacity: round(0.35 + rand() * 0.45),
      delay: round(-rand() * 8),
      duration: round(7 + rand() * 7),
    });
  }

  for (let i = 12; i < 40; i++) {
    particles.push({
      id: i,
      kind: "star",
      x: round(rand() * 100),
      y: round(rand() * 100),
      size: round(2 + rand() * 2.5),
      opacity: round(0.4 + rand() * 0.6),
      delay: round(-rand() * 6),
      duration: round(2.5 + rand() * 4),
    });
  }

  return particles;
}

const particles = generateParticles();

export function HeroParticles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className={`particle particle--${p.kind}`}
          style={
            {
              "--x": `${p.x}%`,
              "--y": `${p.y}%`,
              "--size": `${p.size}px`,
              "--o": p.opacity,
              "--delay": `${p.delay}s`,
              "--dur": `${p.duration}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}