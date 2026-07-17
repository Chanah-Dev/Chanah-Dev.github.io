// Decorative SVG knowledge-graph visualization for KANE project card.
// No stock images — pure SVG geometry.

export function KnowledgeGraph({ className }: { className?: string }) {
  const nodes = [
    { x: 80, y: 140, r: 3 },
    { x: 180, y: 70, r: 5 },
    { x: 300, y: 130, r: 3.5 },
    { x: 420, y: 60, r: 4 },
    { x: 540, y: 150, r: 3 },
    { x: 660, y: 90, r: 5 },
    { x: 140, y: 260, r: 4 },
    { x: 260, y: 330, r: 3 },
    { x: 400, y: 300, r: 5.5 },
    { x: 540, y: 340, r: 3 },
    { x: 660, y: 260, r: 4 },
    { x: 220, y: 200, r: 2.5 },
    { x: 480, y: 210, r: 2.5 },
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
    [1, 11], [11, 2], [11, 6], [6, 7], [7, 8],
    [8, 9], [9, 10], [10, 5], [3, 12], [12, 8],
    [2, 12], [4, 12], [6, 0], [7, 11], [10, 4],
  ];

  return (
    <svg
      viewBox="0 0 740 400"
      className={className}
      role="img"
      aria-label="Knowledge graph visualization"
    >
      <defs>
        <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.75">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
          />
        ))}
      </g>
      <g fill="currentColor">
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.r * 3} fill="url(#node-glow)" opacity="0.35" />
            <circle cx={n.x} cy={n.y} r={n.r} />
          </g>
        ))}
      </g>
      {/* Faint grid rules */}
      <g stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5">
        <line x1="0" y1="100" x2="740" y2="100" />
        <line x1="0" y1="200" x2="740" y2="200" />
        <line x1="0" y1="300" x2="740" y2="300" />
      </g>
    </svg>
  );
}
