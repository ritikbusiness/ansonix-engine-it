/**
 * Abstract engineering visualisation for the homepage hero.
 * Pure SVG/CSS: no images, no canvas, respects prefers-reduced-motion via global CSS.
 */
export function HeroVisual() {
  const nodes = [
    { cx: 200, cy: 60, label: "Cloud" },
    { cx: 330, cy: 150, label: "AI/ML" },
    { cx: 300, cy: 300, label: "Data" },
    { cx: 155, cy: 345, label: "Security" },
    { cx: 60, cy: 245, label: "DevOps" },
    { cx: 70, cy: 110, label: "Design" },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div
        className="absolute inset-[12%] rounded-full bg-copper/25 blur-[90px] drift"
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 400 400"
        role="img"
        aria-label="Abstract diagram of connected Ansonix IT engineering capabilities"
        className="relative h-full w-full"
      >
        <defs>
          <linearGradient id="ax-copper" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--copper-deep)" />
            <stop offset="50%" stopColor="var(--copper-bright)" />
            <stop offset="100%" stopColor="var(--copper)" />
          </linearGradient>
          <radialGradient id="ax-core" cx="40%" cy="35%">
            <stop offset="0%" stopColor="var(--copper-bright)" />
            <stop offset="100%" stopColor="var(--copper-deep)" />
          </radialGradient>
        </defs>

        <g stroke="currentColor" className="text-foreground/10" strokeWidth="1">
          {[70, 110, 150].map((r) => (
            <circle key={r} cx="200" cy="200" r={r} fill="none" />
          ))}
        </g>

        <g className="orbit-slow" style={{ transformOrigin: "200px 200px" }}>
          <circle
            cx="200"
            cy="200"
            r="172"
            fill="none"
            stroke="url(#ax-copper)"
            strokeWidth="1.5"
            strokeDasharray="6 14"
            opacity="0.7"
          />
        </g>

        {nodes.map((n) => (
          <line
            key={`l-${n.label}`}
            x1="200"
            y1="200"
            x2={n.cx}
            y2={n.cy}
            stroke="url(#ax-copper)"
            strokeWidth="1"
            opacity="0.45"
          />
        ))}

        {nodes.map((n, i) => (
          <g key={n.label}>
            <circle cx={n.cx} cy={n.cy} r="26" fill="var(--surface)" stroke="url(#ax-copper)" strokeWidth="1.2" />
            <circle cx={n.cx} cy={n.cy} r="4" fill="url(#ax-copper)">
              <animate
                attributeName="opacity"
                values="0.35;1;0.35"
                dur="3.6s"
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
            <text
              x={n.cx}
              y={n.cy + 44}
              textAnchor="middle"
              className="fill-muted-foreground text-[10px] font-semibold uppercase tracking-[0.18em]"
            >
              {n.label}
            </text>
          </g>
        ))}

        <circle cx="200" cy="200" r="46" fill="url(#ax-core)" opacity="0.95" />
        <circle cx="200" cy="200" r="46" fill="none" stroke="var(--copper-bright)" strokeWidth="1" opacity="0.6" />
        <text
          x="200"
          y="196"
          textAnchor="middle"
          className="fill-white text-[11px] font-bold uppercase tracking-[0.2em]"
        >
          Ansonix
        </text>
        <text
          x="200"
          y="212"
          textAnchor="middle"
          className="fill-white/80 text-[9px] font-semibold uppercase tracking-[0.3em]"
        >
          IT
        </text>
      </svg>
    </div>
  );
}
