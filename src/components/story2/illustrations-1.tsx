/**
 * SVG illustrations for PRI Visual Introduction 2 — Part 1
 * Sections 1–6: Evolutionary overlay, Cell, Ocean creature,
 * Elongated organism, Bubble/surface tension, Quadruped
 */

export function EvolutionaryOverlayFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 480" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Faint cell outline */}
      <ellipse cx="150" cy="240" rx="82" ry="102" stroke="var(--primary)" strokeWidth="0.8" opacity="0.1" strokeDasharray="4 6" />
      {/* Faint worm outline */}
      <path d="M88 198 C100 188 122 183 150 183 C178 183 200 188 212 198 C212 218 202 230 182 235 C162 240 138 240 118 235 C98 230 88 218 88 198 Z" stroke="var(--primary)" strokeWidth="0.8" opacity="0.1" strokeDasharray="3 5" />
      {/* Faint quadruped outline */}
      <path d="M98 198 C110 173 134 163 150 163 C166 163 190 173 202 198" stroke="var(--primary)" strokeWidth="0.8" opacity="0.08" strokeDasharray="3 5" />
      {/* Human silhouette — dorsal wash */}
      <path d="M150 88 C145 105 140 130 139 160 C138 190 138 220 140 255 C141 275 143 295 147 330 L150 370 L150 88 Z" fill="var(--primary)" opacity="0.07" />
      {/* Human silhouette — ventral wash */}
      <path d="M150 88 C155 105 160 130 161 160 C162 190 162 220 160 255 C159 275 157 295 153 330 L150 370 L150 88 Z" fill="var(--warm)" opacity="0.07" />
      {/* Human outline */}
      <ellipse cx="150" cy="58" rx="26" ry="30" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
      <path d="M150 88 C145 105 140 130 139 160 C138 190 138 220 140 255 C141 275 143 295 147 330 L150 370" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <path d="M150 88 C155 105 160 130 161 160 C162 190 162 220 160 255 C159 275 157 295 153 330 L150 370" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <path d="M147 370 C145 390 142 410 138 430" stroke="currentColor" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
      <path d="M153 370 C155 390 158 410 162 430" stroke="currentColor" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
      <path d="M142 100 C128 125 115 155 110 185" stroke="currentColor" strokeWidth="1.2" opacity="0.25" strokeLinecap="round" />
      <path d="M158 100 C172 125 185 155 190 185" stroke="currentColor" strokeWidth="1.2" opacity="0.25" strokeLinecap="round" />
      {/* Ground */}
      <line x1="100" y1="435" x2="200" y2="435" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}

export function CellFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer membrane glow */}
      <ellipse cx="140" cy="140" rx="110" ry="105" stroke="var(--primary)" strokeWidth="8" strokeOpacity="0.07" />
      {/* Outer membrane */}
      <ellipse cx="140" cy="140" rx="110" ry="105" fill="var(--primary)" opacity="0.05" stroke="var(--primary)" strokeWidth="2" strokeOpacity="0.4" />
      {/* Cytoplasm */}
      <ellipse cx="140" cy="140" rx="70" ry="65" fill="var(--warm)" opacity="0.06" />
      {/* Nucleus */}
      <ellipse cx="140" cy="140" rx="28" ry="26" fill="var(--primary)" opacity="0.12" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.3" />
      {/* Nutrient arrows inward */}
      <path d="M30 100 L80 125" stroke="var(--primary)" strokeWidth="1.2" opacity="0.45" markerEnd="url(#arrowIn1)" strokeLinecap="round" />
      <path d="M18 155 L74 148" stroke="var(--primary)" strokeWidth="1.2" opacity="0.45" markerEnd="url(#arrowIn1)" strokeLinecap="round" />
      <path d="M48 212 L94 176" stroke="var(--primary)" strokeWidth="1.2" opacity="0.45" markerEnd="url(#arrowIn1)" strokeLinecap="round" />
      <path d="M252 100 L200 125" stroke="var(--primary)" strokeWidth="1.2" opacity="0.45" markerEnd="url(#arrowIn1)" strokeLinecap="round" />
      <path d="M262 155 L206 148" stroke="var(--primary)" strokeWidth="1.2" opacity="0.45" markerEnd="url(#arrowIn1)" strokeLinecap="round" />
      {/* Waste arrows outward */}
      <path d="M155 32 L155 12" stroke="var(--warm)" strokeWidth="1.2" opacity="0.55" markerEnd="url(#arrowOut1)" strokeLinecap="round" />
      <path d="M186 48 L206 28" stroke="var(--warm)" strokeWidth="1.2" opacity="0.55" markerEnd="url(#arrowOut1)" strokeLinecap="round" />
      <path d="M140 250 L140 270" stroke="var(--warm)" strokeWidth="1.2" opacity="0.55" markerEnd="url(#arrowOut1)" strokeLinecap="round" />
      <path d="M108 246 L88 263" stroke="var(--warm)" strokeWidth="1.2" opacity="0.55" markerEnd="url(#arrowOut1)" strokeLinecap="round" />
      {/* Labels */}
      <text x="6" y="96" fontSize="7.5" fill="currentColor" opacity="0.35" fontStyle="italic">nutrients in</text>
      <text x="126" y="8" fontSize="7.5" fill="currentColor" opacity="0.35" fontStyle="italic">waste out</text>
      <defs>
        <marker id="arrowIn1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6" fill="none" stroke="var(--primary)" strokeWidth="1" opacity="0.7" />
        </marker>
        <marker id="arrowOut1" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
          <path d="M6 0 L0 3 L6 6" fill="none" stroke="var(--warm)" strokeWidth="1" opacity="0.7" />
        </marker>
      </defs>
    </svg>
  );
}

export function OceanCreatureFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sea floor */}
      <rect x="0" y="172" width="320" height="48" fill="currentColor" opacity="0.04" />
      <line x1="0" y1="172" x2="320" y2="172" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      {/* Water ripples */}
      <path d="M0 138 Q80 128 160 138 Q240 148 320 138" stroke="var(--primary)" strokeWidth="0.5" opacity="0.12" />
      <path d="M0 118 Q80 108 160 118 Q240 128 320 118" stroke="var(--primary)" strokeWidth="0.5" opacity="0.08" />
      {/* Dorsal surface */}
      <path d="M60 112 C80 86 140 76 200 81 C240 84 270 96 275 116" fill="var(--primary)" opacity="0.18" stroke="var(--primary)" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* Ventral surface */}
      <path d="M60 112 C70 136 120 156 175 156 C220 156 260 141 275 116" fill="var(--warm)" opacity="0.18" stroke="var(--warm)" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* Head */}
      <ellipse cx="60" cy="110" rx="18" ry="16" fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
      <circle cx="54" cy="106" r="2.5" fill="currentColor" opacity="0.4" />
      {/* Tail fin */}
      <path d="M275 116 L300 96 L300 136 Z" fill="var(--primary)" opacity="0.1" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.3" />
      {/* Labels */}
      <text x="168" y="68" fontSize="8" fill="currentColor" opacity="0.4" textAnchor="middle" fontStyle="italic">dorsal — exposed upward</text>
      <text x="168" y="170" fontSize="8" fill="currentColor" opacity="0.4" textAnchor="middle" fontStyle="italic">ventral — feeding surface</text>
    </svg>
  );
}

export function ElongatedOrganismFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <path d="M50 90 C70 70 120 62 180 62 C240 62 290 70 320 90 C290 110 240 118 180 118 C120 118 70 110 50 90 Z" fill="var(--primary)" opacity="0.07" stroke="var(--primary)" strokeWidth="1.2" strokeOpacity="0.3" />
      {/* Mouth */}
      <circle cx="50" cy="90" r="12" fill="var(--warm)" opacity="0.15" stroke="var(--warm)" strokeWidth="1.5" strokeOpacity="0.5" />
      <text x="50" y="93" fontSize="7" fill="currentColor" opacity="0.5" textAnchor="middle">mouth</text>
      {/* Tail */}
      <path d="M320 90 L345 75 L345 105 Z" fill="var(--primary)" opacity="0.1" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.3" />
      {/* Gut / digestive tract */}
      <path d="M62 90 C120 90 180 90 308 90" stroke="var(--warm)" strokeWidth="2" opacity="0.3" strokeDasharray="5 4" strokeLinecap="round" />
      {/* Direction arrow */}
      <path d="M80 45 L280 45" stroke="currentColor" strokeWidth="1" opacity="0.2" markerEnd="url(#dirArrow1)" />
      <text x="180" y="38" fontSize="8" fill="currentColor" opacity="0.35" textAnchor="middle" fontStyle="italic">direction of movement</text>
      {/* Movement wave */}
      <path d="M62 90 C90 78 110 102 140 90 C170 78 190 102 220 90 C250 78 270 102 308 90" stroke="var(--primary)" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
      <text x="50" y="140" fontSize="7.5" fill="currentColor" opacity="0.35" fontStyle="italic">front</text>
      <text x="315" y="140" fontSize="7.5" fill="currentColor" opacity="0.35" fontStyle="italic">back</text>
      <defs>
        <marker id="dirArrow1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        </marker>
      </defs>
    </svg>
  );
}

export function BubbleOrganismFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 260" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer surface */}
      <circle cx="130" cy="130" r="105" fill="var(--primary)" opacity="0.04" stroke="var(--primary)" strokeWidth="1.5" strokeOpacity="0.25" />
      <circle cx="130" cy="130" r="105" stroke="var(--primary)" strokeWidth="7" strokeOpacity="0.07" />
      {/* Geodesic lines */}
      <line x1="25" y1="130" x2="235" y2="130" stroke="var(--primary)" strokeWidth="0.6" opacity="0.1" />
      <line x1="130" y1="25" x2="130" y2="235" stroke="var(--primary)" strokeWidth="0.6" opacity="0.1" />
      <line x1="55" y1="55" x2="205" y2="205" stroke="var(--primary)" strokeWidth="0.6" opacity="0.08" />
      <line x1="205" y1="55" x2="55" y2="205" stroke="var(--primary)" strokeWidth="0.6" opacity="0.08" />
      {/* Concentric rings */}
      <circle cx="130" cy="130" r="70" stroke="var(--primary)" strokeWidth="0.6" opacity="0.1" />
      <circle cx="130" cy="130" r="35" stroke="var(--primary)" strokeWidth="0.6" opacity="0.1" />
      {/* Pressure ticks around surface */}
      <line x1="130" y1="22" x2="130" y2="10" stroke="var(--warm)" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <line x1="204" y1="56" x2="212" y2="48" stroke="var(--warm)" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <line x1="238" y1="130" x2="250" y2="130" stroke="var(--warm)" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <line x1="204" y1="204" x2="212" y2="212" stroke="var(--warm)" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <line x1="130" y1="238" x2="130" y2="250" stroke="var(--warm)" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <line x1="56" y1="204" x2="48" y2="212" stroke="var(--warm)" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <line x1="22" y1="130" x2="10" y2="130" stroke="var(--warm)" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <line x1="56" y1="56" x2="48" y2="48" stroke="var(--warm)" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      {/* Inner warmth */}
      <circle cx="130" cy="130" r="22" fill="var(--warm)" opacity="0.1" />
    </svg>
  );
}

export function QuadrupedFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dorsal surface */}
      <path d="M80 90 C100 65 160 55 210 60 C245 63 270 75 275 95" fill="var(--primary)" opacity="0.18" stroke="var(--primary)" strokeWidth="1.8" strokeOpacity="0.5" />
      {/* Ventral surface */}
      <path d="M80 90 C90 115 130 132 175 130 C215 128 258 115 275 95" fill="var(--warm)" opacity="0.15" stroke="var(--warm)" strokeWidth="1.8" strokeOpacity="0.4" />
      {/* Head */}
      <ellipse cx="72" cy="88" rx="20" ry="17" fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
      <circle cx="65" cy="84" r="2.5" fill="currentColor" opacity="0.4" />
      {/* Tail */}
      <path d="M275 95 C290 80 300 70 295 60" stroke="var(--primary)" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
      {/* Legs */}
      <line x1="115" y1="128" x2="110" y2="175" stroke="currentColor" strokeWidth="2" opacity="0.2" strokeLinecap="round" />
      <line x1="145" y1="132" x2="142" y2="178" stroke="currentColor" strokeWidth="2" opacity="0.2" strokeLinecap="round" />
      <line x1="210" y1="128" x2="215" y2="175" stroke="currentColor" strokeWidth="2" opacity="0.2" strokeLinecap="round" />
      <line x1="240" y1="122" x2="248" y2="170" stroke="currentColor" strokeWidth="2" opacity="0.2" strokeLinecap="round" />
      {/* Ground */}
      <line x1="50" y1="178" x2="280" y2="178" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      {/* Labels */}
      <text x="175" y="44" fontSize="8.5" fill="currentColor" opacity="0.45" textAnchor="middle">dorsal = up</text>
      <text x="175" y="150" fontSize="8.5" fill="currentColor" opacity="0.45" textAnchor="middle">ventral = down</text>
    </svg>
  );
}
