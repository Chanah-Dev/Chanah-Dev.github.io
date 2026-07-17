// Decorative SVG orbital diagram used in the research section.

export function OrbitDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Research orbit diagram"
    >
      <g fill="none" stroke="currentColor">
        <circle cx="200" cy="200" r="60" strokeOpacity="0.35" strokeWidth="0.75" />
        <circle cx="200" cy="200" r="110" strokeOpacity="0.22" strokeWidth="0.75" />
        <circle cx="200" cy="200" r="160" strokeOpacity="0.14" strokeWidth="0.75" />
        <circle cx="200" cy="200" r="190" strokeOpacity="0.08" strokeWidth="0.75" strokeDasharray="2 6" />
      </g>
      <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.5">
        <line x1="200" y1="10" x2="200" y2="390" />
        <line x1="10" y1="200" x2="390" y2="200" />
      </g>
      <g fill="currentColor">
        <circle cx="200" cy="200" r="2.5" />
        <circle cx="260" cy="200" r="3" />
        <circle cx="200" cy="90" r="2.5" />
        <circle cx="310" cy="240" r="2.5" opacity="0.7" />
        <circle cx="120" cy="140" r="2" opacity="0.6" />
        <circle cx="90" cy="260" r="2" opacity="0.5" />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="8" fill="currentColor" fillOpacity="0.35">
        <text x="264" y="196">λ₁</text>
        <text x="204" y="86">λ₂</text>
        <text x="94" y="256">λ₃</text>
      </g>
    </svg>
  );
}
