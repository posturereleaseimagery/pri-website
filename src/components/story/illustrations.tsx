/**
 * SVG illustrations for the PRI Visual Story page.
 * Conceptual silhouettes and diagrams — symbolic, not realistic.
 */

export function UndifferentiatedFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* A simple human silhouette — uniform, no front/back distinction */}
      <ellipse cx="100" cy="52" rx="28" ry="32" fill="currentColor" opacity="0.15" />
      <ellipse cx="100" cy="52" rx="28" ry="32" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Torso */}
      <path
        d="M72 80 C72 80 65 140 68 200 C70 240 72 280 80 320 L90 380 L110 380 L120 320 C128 280 130 240 132 200 C135 140 128 80 128 80 Z"
        fill="currentColor"
        opacity="0.1"
      />
      <path
        d="M72 80 C72 80 65 140 68 200 C70 240 72 280 80 320 L90 380 L110 380 L120 320 C128 280 130 240 132 200 C135 140 128 80 128 80"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.3"
      />
      {/* Arms */}
      <path d="M72 90 C55 120 45 170 42 210" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
      <path d="M128 90 C145 120 155 170 158 210" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
    </svg>
  );
}

export function DorsalVentralFigure({ className, highlight }: { className?: string; highlight?: "dorsal" | "ventral" | "both" }) {
  const dorsalOpacity = highlight === "dorsal" || highlight === "both" ? 0.35 : 0.08;
  const ventralOpacity = highlight === "ventral" || highlight === "both" ? 0.35 : 0.08;

  return (
    <svg viewBox="0 0 200 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <ellipse cx="100" cy="52" rx="28" ry="32" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Back half of head */}
      <path d="M100 20 A28 32 0 0 0 100 84" fill="#5c4a32" opacity={dorsalOpacity} />
      {/* Front half of head */}
      <path d="M100 20 A28 32 0 0 1 100 84" fill="#c4956a" opacity={ventralOpacity} />

      {/* Dorsal (back) surface — left side in profile view */}
      <path
        d="M100 80 C100 80 92 100 90 140 C88 180 87 220 88 260 C89 290 92 320 95 360 L100 380"
        stroke="#5c4a32"
        strokeWidth="2.5"
        opacity={dorsalOpacity + 0.3}
        strokeLinecap="round"
        fill="none"
      />
      {/* Dorsal fill */}
      <path
        d="M100 80 C100 80 92 100 90 140 C88 180 87 220 88 260 C89 290 92 320 95 360 L100 380 L100 80 Z"
        fill="#5c4a32"
        opacity={dorsalOpacity}
      />

      {/* Ventral (front) surface — right side in profile view */}
      <path
        d="M100 80 C100 80 108 100 110 140 C112 180 113 220 112 260 C111 290 108 320 105 360 L100 380"
        stroke="#c4956a"
        strokeWidth="2.5"
        opacity={ventralOpacity + 0.3}
        strokeLinecap="round"
        fill="none"
      />
      {/* Ventral fill */}
      <path
        d="M100 80 C100 80 108 100 110 140 C112 180 113 220 112 260 C111 290 108 320 105 360 L100 380 L100 80 Z"
        fill="#c4956a"
        opacity={ventralOpacity}
      />

      {/* Center line / seam hint */}
      <line x1="100" y1="80" x2="100" y2="380" stroke="currentColor" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />
    </svg>
  );
}

export function SeamFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Side view silhouette showing the seam */}
      {/* Head */}
      <ellipse cx="120" cy="52" rx="26" ry="30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />

      {/* Back surface */}
      <path
        d="M120 22 C105 22 96 35 96 52 C96 68 105 82 120 82 L120 82 C120 82 108 100 106 140 C104 180 103 220 104 260 C105 290 108 320 112 360"
        fill="#5c4a32"
        opacity="0.15"
        stroke="#5c4a32"
        strokeWidth="1"
        strokeOpacity="0.3"
      />

      {/* Front surface */}
      <path
        d="M120 22 C135 22 144 35 144 52 C144 68 135 82 120 82 L120 82 C120 82 132 100 134 140 C136 180 137 220 136 260 C135 290 132 320 128 360"
        fill="#c4956a"
        opacity="0.15"
        stroke="#c4956a"
        strokeWidth="1"
        strokeOpacity="0.3"
      />

      {/* THE SEAM — the golden line where they meet */}
      <path
        d="M120 22 L120 82 C120 82 120 100 120 140 C120 180 120 220 120 260 C120 290 120 320 120 360"
        stroke="#c4956a"
        strokeWidth="3"
        opacity="0.8"
        strokeLinecap="round"
      />

      {/* Seam glow */}
      <path
        d="M120 22 L120 82 C120 82 120 100 120 140 C120 180 120 220 120 260 C120 290 120 320 120 360"
        stroke="#c4956a"
        strokeWidth="8"
        opacity="0.15"
        strokeLinecap="round"
      />

      {/* Small radiating marks along the seam */}
      {[80, 120, 160, 200, 240, 280, 320].map((y) => (
        <g key={y}>
          <line x1="114" y1={y} x2="108" y2={y} stroke="#c4956a" strokeWidth="1" opacity="0.4" />
          <line x1="126" y1={y} x2="132" y2={y} stroke="#c4956a" strokeWidth="1" opacity="0.4" />
        </g>
      ))}
    </svg>
  );
}

export function EggFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Egg shape — the primordial body form */}
      <ellipse cx="100" cy="150" rx="65" ry="90" fill="#c4956a" opacity="0.08" />
      <ellipse cx="100" cy="150" rx="65" ry="90" stroke="#c4956a" strokeWidth="1.5" opacity="0.3" />

      {/* Back half — dorsal shell */}
      <path d="M100 60 A65 90 0 0 0 100 240" fill="#5c4a32" opacity="0.12" stroke="#5c4a32" strokeWidth="1" strokeOpacity="0.25" />

      {/* Front half — ventral opening */}
      <path d="M100 60 A65 90 0 0 1 100 240" fill="#c4956a" opacity="0.12" stroke="#c4956a" strokeWidth="1" strokeOpacity="0.25" />

      {/* Inner warmth */}
      <ellipse cx="100" cy="150" rx="35" ry="50" fill="#c4956a" opacity="0.06" />

      {/* Seam line */}
      <line x1="100" y1="60" x2="100" y2="240" stroke="#c4956a" strokeWidth="1.5" opacity="0.4" strokeDasharray="3 5" />
    </svg>
  );
}

export function LambFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stylized newborn lamb — just finding its legs */}
      {/* Body — arched back */}
      <path
        d="M80 100 C90 70 140 55 180 65 C200 70 210 85 210 100"
        fill="#5c4a32"
        opacity="0.1"
        stroke="#5c4a32"
        strokeWidth="1.5"
        strokeOpacity="0.35"
      />
      {/* Belly — soft ventral curve */}
      <path
        d="M80 100 C85 120 110 135 145 135 C180 135 205 120 210 100"
        fill="#c4956a"
        opacity="0.1"
        stroke="#c4956a"
        strokeWidth="1.5"
        strokeOpacity="0.35"
      />

      {/* Head — lifted with curiosity */}
      <ellipse cx="68" cy="78" rx="18" ry="16" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
      {/* Eye */}
      <circle cx="62" cy="75" r="2" fill="currentColor" opacity="0.4" />

      {/* Legs — wobbly, just born */}
      <line x1="95" y1="130" x2="90" y2="185" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
      <line x1="115" y1="133" x2="112" y2="188" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
      <line x1="170" y1="130" x2="173" y2="185" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
      <line x1="190" y1="125" x2="195" y2="180" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />

      {/* Ground line */}
      <line x1="60" y1="190" x2="220" y2="190" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}

export function IntegratedFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 420" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* A standing figure with clear, harmonious dorsal/ventral integration */}
      {/* Head */}
      <ellipse cx="100" cy="48" rx="24" ry="28" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M100 20 A24 28 0 0 0 100 76" fill="#5c4a32" opacity="0.12" />
      <path d="M100 20 A24 28 0 0 1 100 76" fill="#c4956a" opacity="0.12" />

      {/* Torso — balanced, open */}
      {/* Dorsal */}
      <path
        d="M100 76 C95 90 90 110 89 140 C88 170 88 200 90 230 C91 250 93 270 96 300 L100 340"
        fill="#5c4a32"
        opacity="0.15"
        stroke="#5c4a32"
        strokeWidth="1.5"
        strokeOpacity="0.35"
      />
      {/* Ventral */}
      <path
        d="M100 76 C105 90 110 110 111 140 C112 170 112 200 110 230 C109 250 107 270 104 300 L100 340"
        fill="#c4956a"
        opacity="0.15"
        stroke="#c4956a"
        strokeWidth="1.5"
        strokeOpacity="0.35"
      />

      {/* Seam — alive, glowing */}
      <path
        d="M100 76 C100 90 100 110 100 140 C100 170 100 200 100 230 C100 250 100 270 100 300 L100 340"
        stroke="#c4956a"
        strokeWidth="2"
        opacity="0.6"
      />
      <path
        d="M100 76 C100 90 100 110 100 140 C100 170 100 200 100 230 C100 250 100 270 100 300 L100 340"
        stroke="#c4956a"
        strokeWidth="6"
        opacity="0.1"
      />

      {/* Legs */}
      <path d="M96 340 C94 360 92 380 88 400" stroke="#5c4a32" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
      <path d="M104 340 C106 360 108 380 112 400" stroke="#c4956a" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />

      {/* Arms — open, relaxed */}
      <path d="M92 90 C78 110 65 140 58 170" stroke="#5c4a32" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
      <path d="M108 90 C122 110 135 140 142 170" stroke="#c4956a" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />

      {/* Subtle upward energy lines */}
      <line x1="100" y1="400" x2="100" y2="10" stroke="#c4956a" strokeWidth="0.5" opacity="0.08" />

      {/* Ground */}
      <line x1="60" y1="405" x2="140" y2="405" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />

      {/* Gravity arrow */}
      <path d="M170 30 L170 100" stroke="currentColor" strokeWidth="0.8" opacity="0.15" markerEnd="url(#arrowDown)" />
      <text x="175" y="70" fontSize="8" fill="currentColor" opacity="0.2">gravity</text>
      <defs>
        <marker id="arrowDown" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        </marker>
      </defs>
    </svg>
  );
}

export function EvolutionSequence({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Fish → Amphibian → Quadruped → Human — simple silhouettes */}

      {/* Water / Fish */}
      <g opacity="0.5">
        <ellipse cx="80" cy="110" rx="40" ry="15" fill="#5c4a32" opacity="0.1" stroke="#5c4a32" strokeWidth="1" />
        <path d="M120 110 L140 95 L140 125 Z" fill="#5c4a32" opacity="0.1" stroke="#5c4a32" strokeWidth="1" />
        <line x1="80" y1="95" x2="80" y2="125" stroke="#c4956a" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4" />
        <text x="65" y="155" fontSize="9" fill="currentColor" opacity="0.4">water</text>
      </g>

      {/* Amphibian */}
      <g opacity="0.5">
        <ellipse cx="220" cy="120" rx="35" ry="12" fill="#5c4a32" opacity="0.1" stroke="#5c4a32" strokeWidth="1" />
        <line x1="200" y1="132" x2="195" y2="155" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <line x1="240" y1="132" x2="245" y2="155" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="200" cy="115" r="8" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
        <text x="200" y="175" fontSize="9" fill="currentColor" opacity="0.4">land</text>
      </g>

      {/* Quadruped */}
      <g opacity="0.5">
        <path d="M340 105 C350 90 380 85 400 90 C410 93 415 100 415 108" fill="#5c4a32" opacity="0.08" stroke="#5c4a32" strokeWidth="1" strokeOpacity="0.3" />
        <path d="M340 108 C345 118 370 125 390 122 C410 118 415 112 415 108" fill="#c4956a" opacity="0.08" stroke="#c4956a" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="355" y1="122" x2="352" y2="155" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <line x1="370" y1="124" x2="368" y2="155" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <line x1="395" y1="120" x2="398" y2="155" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <line x1="408" y1="115" x2="412" y2="155" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="335" cy="98" r="8" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
        <text x="360" y="175" fontSize="9" fill="currentColor" opacity="0.4">standing</text>
      </g>

      {/* Human — upright */}
      <g opacity="0.6">
        <ellipse cx="530" cy="55" rx="12" ry="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <path d="M530 69 C528 80 526 100 526 120 C526 140 527 155 530 170" stroke="#5c4a32" strokeWidth="1.5" opacity="0.3" />
        <path d="M530 69 C532 80 534 100 534 120 C534 140 533 155 530 170" stroke="#c4956a" strokeWidth="1.5" opacity="0.3" />
        <line x1="530" y1="69" x2="530" y2="170" stroke="#c4956a" strokeWidth="1" opacity="0.3" strokeDasharray="2 3" />
        <text x="515" y="195" fontSize="9" fill="currentColor" opacity="0.4">upright</text>
      </g>

      {/* Connecting arrows */}
      <path d="M145 110 L185 115" stroke="currentColor" strokeWidth="0.5" opacity="0.2" markerEnd="url(#evoArrow)" />
      <path d="M260 120 L325 108" stroke="currentColor" strokeWidth="0.5" opacity="0.2" markerEnd="url(#evoArrow)" />
      <path d="M420 105 L510 80" stroke="currentColor" strokeWidth="0.5" opacity="0.2" markerEnd="url(#evoArrow)" />

      <defs>
        <marker id="evoArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        </marker>
      </defs>
    </svg>
  );
}
