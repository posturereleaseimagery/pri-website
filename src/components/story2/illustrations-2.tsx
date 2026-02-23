/**
 * SVG illustrations for PRI Visual Introduction 2 — Part 2
 * Sections 7–13: Uprighting sequence, Three segments, Movement waves,
 * Frozen phase, Head organizer, Ventral care, Final overlay
 */

export function UprightingSequenceFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 260" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stage 1: Quadruped — horizontal */}
      <g opacity="0.75">
        <path d="M20 120 C30 100 60 92 85 95 C100 97 110 105 112 118" fill="var(--primary)" opacity="0.12" stroke="var(--primary)" strokeWidth="1.2" strokeOpacity="0.4" />
        <path d="M20 120 C26 138 50 148 72 146 C92 144 108 134 112 118" fill="var(--warm)" opacity="0.12" stroke="var(--warm)" strokeWidth="1.2" strokeOpacity="0.3" />
        <ellipse cx="14" cy="118" rx="10" ry="9" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="38" y1="145" x2="36" y2="175" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
        <line x1="55" y1="148" x2="54" y2="178" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
        <line x1="85" y1="144" x2="88" y2="175" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
        <line x1="100" y1="138" x2="104" y2="170" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
        <text x="62" y="195" fontSize="7.5" fill="currentColor" opacity="0.35" textAnchor="middle" fontStyle="italic">horizontal</text>
      </g>
      {/* Arrow 1 */}
      <path d="M122 130 L150 130" stroke="currentColor" strokeWidth="0.8" opacity="0.25" markerEnd="url(#seqArrow2)" />
      {/* Stage 2: Transitional — tilting */}
      <g opacity="0.75">
        <path d="M178 155 C188 125 208 105 223 95 C233 88 243 90 248 100" fill="var(--primary)" opacity="0.12" stroke="var(--primary)" strokeWidth="1.2" strokeOpacity="0.4" />
        <path d="M178 155 C188 165 203 165 218 155 C231 145 243 128 248 100" fill="var(--warm)" opacity="0.12" stroke="var(--warm)" strokeWidth="1.2" strokeOpacity="0.3" />
        <ellipse cx="172" cy="158" rx="10" ry="9" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="188" y1="162" x2="181" y2="192" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
        <line x1="203" y1="163" x2="199" y2="193" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
        <line x1="231" y1="148" x2="235" y2="178" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
        <line x1="243" y1="130" x2="249" y2="160" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
        <text x="210" y="210" fontSize="7.5" fill="currentColor" opacity="0.35" textAnchor="middle" fontStyle="italic">transitional</text>
      </g>
      {/* Arrow 2 */}
      <path d="M262 128 L290 98" stroke="currentColor" strokeWidth="0.8" opacity="0.25" markerEnd="url(#seqArrow2)" />
      {/* Stage 3: Upright human */}
      <g opacity="0.9">
        <ellipse cx="335" cy="48" rx="16" ry="18" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
        <path d="M335 66 C332 78 329 98 328 120 C327 142 328 162 330 185 L335 220" stroke="var(--primary)" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
        <path d="M335 66 C338 78 341 98 342 120 C343 142 342 162 340 185 L335 220" stroke="var(--warm)" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
        <path d="M330 80 C320 100 313 125 310 148" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
        <path d="M340 80 C350 100 357 125 360 148" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
        <path d="M332 220 C330 235 327 248 323 260" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
        <path d="M338 220 C340 235 343 248 347 260" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
        {/* Horizontal reference lines */}
        <line x1="310" y1="48" x2="360" y2="48" stroke="currentColor" strokeWidth="0.8" opacity="0.22" strokeDasharray="3 3" />
        <line x1="310" y1="218" x2="360" y2="218" stroke="currentColor" strokeWidth="0.8" opacity="0.22" strokeDasharray="3 3" />
        <text x="335" y="278" fontSize="7.5" fill="currentColor" opacity="0.35" textAnchor="middle" fontStyle="italic">vertical</text>
      </g>
      <defs>
        <marker id="seqArrow2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
        </marker>
      </defs>
    </svg>
  );
}

export function ThreeSegmentsFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 460" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Segment 1: Head/Neck — Director */}
      <ellipse cx="130" cy="50" rx="28" ry="32" fill="var(--primary)" opacity="0.12" stroke="var(--primary)" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M114 80 L114 108 L146 108 L146 80" fill="var(--primary)" opacity="0.08" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="78" y1="50" x2="182" y2="50" stroke="var(--primary)" strokeWidth="1" opacity="0.28" strokeDasharray="4 3" />
      <text x="186" y="53" fontSize="7.5" fill="currentColor" opacity="0.38" fontStyle="italic">horizontal</text>
      <text x="130" y="53" fontSize="7" fill="currentColor" opacity="0.55" textAnchor="middle">Director</text>

      {/* Segment 2: Trunk — Motor */}
      <path d="M108 108 C104 130 101 160 101 190 C101 220 102 248 104 270 L108 295 L152 295 L156 270 C158 248 159 220 159 190 C159 160 156 130 152 108 Z" fill="var(--warm)" opacity="0.1" stroke="var(--warm)" strokeWidth="1.5" strokeOpacity="0.35" />
      {/* Arms */}
      <path d="M106 120 C92 145 80 175 76 205" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
      <path d="M154 120 C168 145 180 175 184 205" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
      <text x="130" y="202" fontSize="7" fill="currentColor" opacity="0.55" textAnchor="middle">Motor</text>

      {/* Segment 3: Pelvis/Legs — Rudder */}
      <path d="M106 295 C104 310 103 325 104 340 C106 355 110 365 114 375 L130 420 L146 375 C150 365 154 355 156 340 C157 325 156 310 154 295 Z" fill="var(--primary)" opacity="0.1" stroke="var(--primary)" strokeWidth="1.5" strokeOpacity="0.3" />
      <line x1="78" y1="300" x2="182" y2="300" stroke="var(--primary)" strokeWidth="1" opacity="0.28" strokeDasharray="4 3" />
      <text x="186" y="303" fontSize="7.5" fill="currentColor" opacity="0.38" fontStyle="italic">horizontal</text>
      <text x="130" y="342" fontSize="7" fill="currentColor" opacity="0.55" textAnchor="middle">Rudder</text>

      {/* Ground */}
      <line x1="90" y1="425" x2="170" y2="425" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}

export function MovementWavesFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 290" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Panel 1: Peristaltic wave */}
      <rect x="8" y="8" width="304" height="78" rx="6" fill="currentColor" opacity="0.02" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" />
      <text x="18" y="24" fontSize="7.5" fill="currentColor" opacity="0.4" fontStyle="italic">1 — peristaltic (compression) wave</text>
      <ellipse cx="75" cy="54" rx="30" ry="14" fill="var(--primary)" opacity="0.08" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.25" />
      <ellipse cx="138" cy="54" rx="22" ry="10" fill="var(--primary)" opacity="0.14" stroke="var(--primary)" strokeWidth="1.2" strokeOpacity="0.45" />
      <ellipse cx="198" cy="54" rx="30" ry="14" fill="var(--primary)" opacity="0.08" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.25" />
      <ellipse cx="262" cy="54" rx="22" ry="10" fill="var(--primary)" opacity="0.14" stroke="var(--primary)" strokeWidth="1.2" strokeOpacity="0.45" />
      <path d="M45 54 C62 40 92 40 108 54 C124 68 152 68 168 54 C184 40 214 40 230 54 C246 68 274 68 290 54" stroke="var(--primary)" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />

      {/* Panel 2: Lateral undulation */}
      <rect x="8" y="104" width="304" height="78" rx="6" fill="currentColor" opacity="0.02" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" />
      <text x="18" y="120" fontSize="7.5" fill="currentColor" opacity="0.4" fontStyle="italic">2 — lateral undulation (fish wave)</text>
      <path d="M30 143 C60 125 90 161 120 143 C150 125 180 161 210 143 C240 125 270 161 300 143" stroke="var(--warm)" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
      <ellipse cx="165" cy="143" rx="120" ry="12" fill="var(--warm)" opacity="0.05" />

      {/* Panel 3: Dorsal-ventral wave */}
      <rect x="8" y="200" width="304" height="82" rx="6" fill="currentColor" opacity="0.02" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" />
      <text x="18" y="216" fontSize="7.5" fill="currentColor" opacity="0.4" fontStyle="italic">3 — dorsal-ventral wave (mammal flex/extend)</text>
      {/* Flexed */}
      <path d="M30 248 C50 232 70 232 90 248" stroke="var(--primary)" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
      <path d="M30 248 C50 264 70 264 90 248" stroke="var(--warm)" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
      {/* Extended */}
      <path d="M140 240 C160 228 180 228 200 240" stroke="var(--primary)" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
      <path d="M140 240 C160 252 180 252 200 240" stroke="var(--warm)" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
      {/* Arrow between */}
      <path d="M105 244 L128 244" stroke="currentColor" strokeWidth="0.8" opacity="0.2" markerEnd="url(#waveArrow2)" />
      {/* Legs hint */}
      <line x1="50" y1="264" x2="46" y2="278" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeLinecap="round" />
      <line x1="70" y1="264" x2="74" y2="278" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeLinecap="round" />
      <line x1="160" y1="252" x2="156" y2="278" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeLinecap="round" />
      <line x1="180" y1="252" x2="184" y2="278" stroke="currentColor" strokeWidth="1" opacity="0.15" strokeLinecap="round" />

      <defs>
        <marker id="waveArrow2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
        </marker>
      </defs>
    </svg>
  );
}

export function FrozenPhaseFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ghost frames — walking phases */}
      {[0, 1, 2, 3].map((i) => {
        const x = 30 + i * 72;
        const isFrozen = i === 1;
        const op = isFrozen ? 0.9 : 0.18;
        const sw = isFrozen ? 1.8 : 1;
        return (
          <g key={i} opacity={op}>
            <ellipse cx={x} cy={38} rx={12} ry={14} fill="none" stroke="currentColor" strokeWidth={sw} opacity="0.5" />
            <path d={`M${x} 52 C${x - 2} 62 ${x - 4} 80 ${x - 4} 100 C${x - 4} 118 ${x - 3} 132 ${x} 148`}
              stroke={isFrozen ? "var(--warm)" : "currentColor"} strokeWidth={sw} opacity="0.5" strokeLinecap="round" />
            <path d={`M${x} 52 C${x + 2} 62 ${x + 4} 80 ${x + 4} 100 C${x + 4} 118 ${x + 3} 132 ${x} 148`}
              stroke={isFrozen ? "var(--primary)" : "currentColor"} strokeWidth={sw} opacity="0.4" strokeLinecap="round" />
            {/* Legs */}
            <path d={`M${x - 2} 148 C${x - 6} 162 ${x - 10 + i * 4} 178 ${x - 12 + i * 4} 195`}
              stroke="currentColor" strokeWidth={sw} opacity="0.35" strokeLinecap="round" />
            <path d={`M${x + 2} 148 C${x + 6} 162 ${x + 10 - i * 4} 178 ${x + 12 - i * 4} 195`}
              stroke="currentColor" strokeWidth={sw} opacity="0.35" strokeLinecap="round" />
            {isFrozen && (
              <rect x={x - 20} y={22} width={40} height={180} rx={4}
                fill="var(--warm)" opacity="0.06" stroke="var(--warm)" strokeWidth="1" strokeOpacity="0.3" />
            )}
          </g>
        );
      })}
      {/* Ground */}
      <line x1="10" y1="198" x2="330" y2="198" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      {/* Label for frozen frame */}
      <text x="102" y="215" fontSize="8" fill="currentColor" opacity="0.4" textAnchor="middle" fontStyle="italic">frozen phase</text>
    </svg>
  );
}

export function HeadOrganizerFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 460" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <ellipse cx="110" cy="52" rx="28" ry="32" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
      {/* Head glow */}
      <ellipse cx="110" cy="52" rx="28" ry="32" stroke="var(--warm)" strokeWidth="8" strokeOpacity="0.1" />
      {/* Neck */}
      <path d="M96 82 L96 108 L124 108 L124 82" fill="currentColor" opacity="0.04" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
      {/* Torso */}
      <path d="M90 108 C86 130 83 160 83 190 C83 220 84 248 86 270 L90 295 L130 295 L134 270 C136 248 137 220 137 190 C137 160 134 130 130 108 Z" fill="currentColor" opacity="0.04" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" />
      {/* Arms */}
      <path d="M88 120 C74 145 62 175 58 205" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
      <path d="M132 120 C146 145 158 175 162 205" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
      {/* Legs */}
      <path d="M88 295 C86 315 85 335 86 355 C88 370 92 382 96 392 L110 430" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
      <path d="M132 295 C134 315 135 335 134 355 C132 370 128 382 124 392 L110 430" stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
      {/* Ripple / cascade lines from head */}
      {[130, 160, 195, 230, 265, 300].map((y, i) => {
        const spread = 10 + i * 8;
        const op = 0.22 - i * 0.03;
        return (
          <path key={y}
            d={`M${110 - spread} ${y} Q110 ${y - 6} ${110 + spread} ${y}`}
            stroke="var(--warm)" strokeWidth="1" opacity={op} strokeLinecap="round" fill="none" />
        );
      })}
      {/* Ground */}
      <line x1="70" y1="435" x2="150" y2="435" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}

export function VentralCareFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 260" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Parent figure */}
      <ellipse cx="110" cy="48" rx="22" ry="25" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      {/* Parent torso — ventral surface highlighted */}
      <path d="M110 73 C106 88 103 108 103 128 C103 148 104 165 106 180 L110 210" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
      <path d="M110 73 C114 88 117 108 117 128 C117 148 116 165 114 180 L110 210" stroke="var(--warm)" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
      {/* Ventral glow on parent */}
      <path d="M110 73 C114 88 117 108 117 128 C117 148 116 165 114 180 L110 210 L110 73 Z" fill="var(--warm)" opacity="0.08" />
      {/* Parent arms cradling */}
      <path d="M103 90 C88 105 78 125 76 148 C82 158 96 162 110 160" stroke="currentColor" strokeWidth="1.2" opacity="0.25" strokeLinecap="round" />
      <path d="M117 90 C132 105 142 125 144 148 C138 158 124 162 110 160" stroke="currentColor" strokeWidth="1.2" opacity="0.25" strokeLinecap="round" />
      {/* Child figure — small, nestled against ventral surface */}
      <ellipse cx="110" cy="148" rx="14" ry="16" fill="var(--warm)" opacity="0.1" stroke="var(--warm)" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M100 162 C100 172 104 180 110 182 C116 180 120 172 120 162" fill="var(--warm)" opacity="0.08" stroke="var(--warm)" strokeWidth="1" strokeOpacity="0.25" />
      {/* Soft glow between them */}
      <ellipse cx="110" cy="155" rx="30" ry="28" fill="var(--warm)" opacity="0.06" />
      {/* Ventral surface label */}
      <text x="155" y="128" fontSize="8" fill="currentColor" opacity="0.35" fontStyle="italic">ventral</text>
      <text x="155" y="140" fontSize="8" fill="currentColor" opacity="0.35" fontStyle="italic">surface</text>
      <line x1="152" y1="134" x2="120" y2="120" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
}

export function FinalOverlayFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 480" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Faint evolutionary diagrams layered behind */}
      {/* Cell echo */}
      <ellipse cx="150" cy="240" rx="85" ry="105" stroke="var(--primary)" strokeWidth="0.8" opacity="0.08" strokeDasharray="4 7" />
      {/* Quadruped echo */}
      <path d="M90 185 C110 162 135 155 150 155 C165 155 190 162 210 185" stroke="var(--primary)" strokeWidth="0.8" opacity="0.07" strokeDasharray="3 6" />
      {/* Wave echo */}
      <path d="M80 220 C100 208 120 232 140 220 C160 208 180 232 200 220 C220 208 240 232 260 220" stroke="var(--warm)" strokeWidth="0.8" opacity="0.08" strokeLinecap="round" />
      <path d="M80 260 C100 248 120 272 140 260 C160 248 180 272 200 260 C220 248 240 272 260 260" stroke="var(--warm)" strokeWidth="0.8" opacity="0.06" strokeLinecap="round" />

      {/* Human silhouette — dorsal */}
      <path d="M150 88 C145 105 140 130 139 160 C138 190 138 220 140 255 C141 275 143 295 147 330 L150 370 L150 88 Z" fill="var(--primary)" opacity="0.1" />
      {/* Human silhouette — ventral */}
      <path d="M150 88 C155 105 160 130 161 160 C162 190 162 220 160 255 C159 275 157 295 153 330 L150 370 L150 88 Z" fill="var(--warm)" opacity="0.1" />
      {/* Human outline */}
      <ellipse cx="150" cy="58" rx="26" ry="30" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M150 88 C145 105 140 130 139 160 C138 190 138 220 140 255 C141 275 143 295 147 330 L150 370" stroke="var(--primary)" strokeWidth="1.5" opacity="0.45" strokeLinecap="round" />
      <path d="M150 88 C155 105 160 130 161 160 C162 190 162 220 160 255 C159 275 157 295 153 330 L150 370" stroke="var(--warm)" strokeWidth="1.5" opacity="0.45" strokeLinecap="round" />
      <path d="M147 370 C145 390 142 410 138 430" stroke="currentColor" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
      <path d="M153 370 C155 390 158 410 162 430" stroke="currentColor" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
      <path d="M142 100 C128 125 115 155 110 185" stroke="currentColor" strokeWidth="1.2" opacity="0.25" strokeLinecap="round" />
      <path d="M158 100 C172 125 185 155 190 185" stroke="currentColor" strokeWidth="1.2" opacity="0.25" strokeLinecap="round" />
      {/* Seam line — alive */}
      <path d="M150 88 L150 370" stroke="var(--warm)" strokeWidth="1.5" opacity="0.35" strokeDasharray="3 5" />
      {/* Ground */}
      <line x1="100" y1="435" x2="200" y2="435" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}
