// Detailed, high-definition SVG vector artwork for the 10 core Administrative Direction concepts
// Designed with rich linear gradients, sharp geometry, and high contrast for classroom visibility.

const CONCEPTS_DATA_10 = [
  {
    id: "01",
    concept: "Dirección",
    desc: "Guiar a las personas y coordinar sus esfuerzos para alcanzar objetivos de la organización.",
    svg: `<svg viewBox="0 0 160 110" class="card-svg-icon" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dirBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
        <linearGradient id="dirRoad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
        <linearGradient id="dirSun" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="100%" stop-color="#f59e0b"/>
        </linearGradient>
      </defs>
      <!-- Background Circle Badge -->
      <circle cx="80" cy="55" r="48" fill="#f0f9ff" stroke="#bae6fd" stroke-width="2.5"/>
      <!-- Mountain Summit Destination -->
      <polygon points="50,68 80,26 110,68" fill="#cbd5e1"/>
      <polygon points="68,44 80,26 92,44 86,48 80,42 74,48" fill="#ffffff"/>
      <!-- Golden Sun on Horizon -->
      <circle cx="80" cy="24" r="12" fill="url(#dirSun)" opacity="0.9"/>
      <path d="M 80,6 L 80,10 M 96,16 L 93,19 M 64,16 L 67,19" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Glowing Winding Path / Road Forward -->
      <path d="M 80,48 Q 95,65 72,78 Q 50,90 80,102" fill="none" stroke="url(#dirRoad)" stroke-width="8" stroke-linecap="round"/>
      <path d="M 80,48 Q 95,65 72,78 Q 50,90 80,102" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="4,4"/>
      <!-- Leader on the path holding Flag -->
      <g transform="translate(68, 62)">
        <circle cx="0" cy="0" r="5" fill="#fbc02d"/>
        <path d="M -4,6 L 4,6 L 3,18 L -3,18 Z" fill="#0284c7"/>
        <!-- Arm & Banner Flag pointing ahead -->
        <line x1="2" y1="8" x2="18" y2="0" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/>
        <polygon points="18,-6 32,0 18,6" fill="#ef4444"/>
      </g>
      <!-- Follower 1 -->
      <g transform="translate(56, 74)">
        <circle cx="0" cy="0" r="4" fill="#ffb74d"/>
        <path d="M -3,5 L 3,5 L 2,15 L -2,15 Z" fill="#3b82f6"/>
      </g>
      <!-- Follower 2 -->
      <g transform="translate(86, 78)">
        <circle cx="0" cy="0" r="4" fill="#ffb74d"/>
        <path d="M -3,5 L 3,5 L 2,15 L -2,15 Z" fill="#10b981"/>
      </g>
      <!-- Strategic Compass Badge in Top Left -->
      <g transform="translate(42, 28)">
        <circle cx="0" cy="0" r="10" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
        <polygon points="0,-7 3,0 0,7 -3,0" fill="#ef4444"/>
        <polygon points="0,0 3,0 0,7 -3,0" fill="#0284c7"/>
        <circle cx="0" cy="0" r="2" fill="#ffffff"/>
      </g>
    </svg>`
  },
  {
    id: "02",
    concept: "Liderazgo",
    desc: "Influir y orientar a un grupo para avanzar hacia objetivos comunes.",
    svg: `<svg viewBox="0 0 160 110" class="card-svg-icon" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lidTorch" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffedd5"/>
          <stop offset="100%" stop-color="#fdba74"/>
        </linearGradient>
        <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="50%" stop-color="#f97316"/>
          <stop offset="100%" stop-color="#dc2626"/>
        </radialGradient>
      </defs>
      <circle cx="80" cy="55" r="48" fill="#fffbeb" stroke="#fde68a" stroke-width="2.5"/>
      <!-- Lighthouse / Beacon Radiance Rays -->
      <path d="M 80,32 L 20,8 M 80,32 L 140,8 M 80,32 L 18,36 M 80,32 L 142,36" stroke="#fde047" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
      <!-- Inspiring Leader Silhouette -->
      <g transform="translate(80, 52)">
        <!-- Raised Arm with Golden Torch -->
        <path d="M 0,22 L 0,8 L 12,-6" stroke="#b45309" stroke-width="4" stroke-linecap="round"/>
        <!-- Torch Holder -->
        <polygon points="8,-8 18,-6 14,4 10,4" fill="#78350f"/>
        <!-- Flaming Fire -->
        <path d="M 13,-6 C 8,-16 2,-20 12,-30 C 22,-22 24,-12 15,-6 Z" fill="url(#flameGlow)"/>
        <circle cx="13" cy="-14" r="4" fill="#ffffff" opacity="0.8"/>
        <!-- Leader Head & Body -->
        <circle cx="-2" cy="2" r="7" fill="#f59e0b"/>
        <path d="M -9,11 L 5,11 L 3,36 L -7,36 Z" fill="#d97706"/>
      </g>
      <!-- Team Members inspired, looking forward -->
      <g transform="translate(48, 76)">
        <circle cx="0" cy="0" r="5" fill="#fcd34d"/>
        <path d="M -4,6 L 4,6 L 3,22 L -3,22 Z" fill="#2563eb"/>
      </g>
      <g transform="translate(62, 72)">
        <circle cx="0" cy="0" r="5.5" fill="#fcd34d"/>
        <path d="M -4,7 L 4,7 L 3,24 L -3,24 Z" fill="#3b82f6"/>
      </g>
      <g transform="translate(98, 72)">
        <circle cx="0" cy="0" r="5.5" fill="#fcd34d"/>
        <path d="M -4,7 L 4,7 L 3,24 L -3,24 Z" fill="#10b981"/>
      </g>
      <g transform="translate(112, 76)">
        <circle cx="0" cy="0" r="5" fill="#fcd34d"/>
        <path d="M -4,6 L 4,6 L 3,22 L -3,22 Z" fill="#059669"/>
      </g>
      <!-- Star of Excellence above flame -->
      <polygon points="93,12 95,17 100,17 96,20 98,25 93,22 88,25 90,20 86,17 91,17" fill="#f59e0b"/>
    </svg>`
  },
  {
    id: "03",
    concept: "Motivación",
    desc: "Impulsar la disposición y el compromiso de las personas con su trabajo y sus objetivos.",
    svg: `<svg viewBox="0 0 160 110" class="card-svg-icon" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e"/>
          <stop offset="100%" stop-color="#be123c"/>
        </linearGradient>
        <linearGradient id="fireJet" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="50%" stop-color="#f97316"/>
          <stop offset="100%" stop-color="#dc2626"/>
        </linearGradient>
      </defs>
      <circle cx="80" cy="55" r="48" fill="#fff1f2" stroke="#fecdd3" stroke-width="2.5"/>
      <!-- Rocket Smoke Cloud Base -->
      <circle cx="55" cy="85" r="14" fill="#e2e8f0"/>
      <circle cx="70" cy="90" r="12" fill="#cbd5e1"/>
      <circle cx="85" cy="86" r="15" fill="#e2e8f0"/>
      <!-- Rocket Propulsion Flame -->
      <polygon points="73,64 87,64 80,95" fill="url(#fireJet)"/>
      <polygon points="76,64 84,64 80,82" fill="#ffffff"/>
      <!-- Rocket Ship (45 deg angle upwards) -->
      <g transform="translate(80, 46)">
        <!-- Fins -->
        <polygon points="-12,14 -24,20 -10,4" fill="#9f1239"/>
        <polygon points="12,14 24,20 10,4" fill="#9f1239"/>
        <!-- Rocket Body Fuselage -->
        <path d="M 0,-34 C -14,-14 -14,12 0,18 C 14,12 14,-14 0,-34 Z" fill="url(#rocketBody)"/>
        <!-- Cockpit Window with energetic pilot -->
        <circle cx="0" cy="-6" r="7" fill="#ffffff" stroke="#9f1239" stroke-width="2"/>
        <circle cx="0" cy="-6" r="4" fill="#38bdf8"/>
        <!-- Tip Nosecone -->
        <path d="M 0,-34 C -6,-25 -8,-20 0,-20 C 8,-20 6,-25 0,-34 Z" fill="#ffffff"/>
      </g>
      <!-- Battery 100% full icon in top-right -->
      <g transform="translate(118, 30)">
        <rect x="0" y="0" width="22" height="12" rx="3" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
        <rect x="22" y="3" width="3" height="6" rx="1.5" fill="#10b981"/>
        <rect x="3" y="3" width="16" height="6" rx="1" fill="#10b981"/>
      </g>
      <!-- Sparks & Energy Bolts -->
      <text x="36" y="34" font-size="18">⚡</text>
      <text x="116" y="74" font-size="18">✨</text>
    </svg>`
  },
  {
    id: "04",
    concept: "Comunicación",
    desc: "Intercambiar información y construir una comprensión compartida entre las personas.",
    svg: `<svg viewBox="0 0 160 110" class="card-svg-icon" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="commBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#eef2ff"/>
          <stop offset="100%" stop-color="#e0e7ff"/>
        </linearGradient>
        <linearGradient id="bubbleBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6366f1"/>
          <stop offset="100%" stop-color="#4f46e5"/>
        </linearGradient>
        <linearGradient id="bubbleGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981"/>
          <stop offset="100%" stop-color="#059669"/>
        </linearGradient>
      </defs>
      <circle cx="80" cy="55" r="48" fill="url(#commBg)" stroke="#c7d2fe" stroke-width="2.5"/>
      <!-- Person A (Left) -->
      <g transform="translate(42, 62)">
        <circle cx="0" cy="0" r="9" fill="#ffb74d"/>
        <path d="M -7,11 L 7,11 L 5,32 L -5,32 Z" fill="#4f46e5"/>
      </g>
      <!-- Person B (Right) -->
      <g transform="translate(118, 62)">
        <circle cx="0" cy="0" r="9" fill="#ffb74d"/>
        <path d="M -7,11 L 7,11 L 5,32 L -5,32 Z" fill="#059669"/>
      </g>
      <!-- Central Dynamic Dialogue Bubbles -->
      <g transform="translate(56, 32)">
        <path d="M 0,0 L 28,0 C 33,0 36,4 36,9 L 36,17 C 36,22 33,26 28,26 L 8,26 L 0,33 Z" fill="url(#bubbleBlue)"/>
        <!-- Typing dots inside -->
        <circle cx="10" cy="13" r="2.5" fill="#ffffff"/>
        <circle cx="18" cy="13" r="2.5" fill="#ffffff"/>
        <circle cx="26" cy="13" r="2.5" fill="#ffffff"/>
      </g>
      <g transform="translate(72, 46)">
        <path d="M 32,0 L 4,0 C -1,0 -4,4 -4,9 L -4,17 C -4,22 -1,26 4,26 L 24,26 L 32,33 Z" fill="url(#bubbleGreen)"/>
        <!-- Checkmark inside -->
        <path d="M 8,13 L 13,18 L 22,9" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
      </g>
      <!-- Signal / WiFi Radiance Waves connecting minds -->
      <path d="M 68,20 Q 80,12 92,20" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 62,14 Q 80,4 98,14" fill="none" stroke="#a5b4fc" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "05",
    concept: "Toma de decisiones",
    desc: "Elegir una alternativa después de analizar una situación y sus posibles opciones.",
    svg: `<svg viewBox="0 0 160 110" class="card-svg-icon" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="decBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ecfdf5"/>
          <stop offset="100%" stop-color="#d1fae5"/>
        </linearGradient>
      </defs>
      <circle cx="80" cy="55" r="48" fill="url(#decBg)" stroke="#a7f3d0" stroke-width="2.5"/>
      <!-- The 3 Divergent Routes -->
      <!-- Left route (Inactive) -->
      <path d="M 80,95 L 80,68 Q 60,54 44,38" fill="none" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>
      <circle cx="44" cy="38" r="9" fill="#94a3b8"/>
      <text x="44" y="42" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">A</text>
      <!-- Center route (Inactive) -->
      <path d="M 80,68 L 80,26" fill="none" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/>
      <circle cx="80" cy="26" r="9" fill="#94a3b8"/>
      <text x="80" y="30" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">B</text>
      <!-- Right chosen golden-green route (Selected Option) -->
      <path d="M 80,95 L 80,68 Q 100,54 118,36" fill="none" stroke="#10b981" stroke-width="9" stroke-linecap="round"/>
      <!-- Chosen Goal Badge -->
      <circle cx="118" cy="36" r="14" fill="#10b981" stroke="#059669" stroke-width="2.5"/>
      <path d="M 112,36 L 116,40 L 125,30" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Decision Navigator Person with Compass in Center -->
      <g transform="translate(80, 68)">
        <circle cx="0" cy="0" r="12" fill="#ffffff" stroke="#f59e0b" stroke-width="3"/>
        <polygon points="0,-9 4,0 0,9 -4,0" fill="#ef4444"/>
        <polygon points="0,0 4,0 0,9 -4,0" fill="#1e293b"/>
        <circle cx="0" cy="0" r="2.5" fill="#f59e0b"/>
      </g>
    </svg>`
  },
  {
    id: "06",
    concept: "Delegación",
    desc: "Asignar tareas y la autoridad necesaria para realizarlas, manteniendo el seguimiento correspondiente.",
    svg: `<svg viewBox="0 0 160 110" class="card-svg-icon" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="delBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#faf5ff"/>
          <stop offset="100%" stop-color="#f3e8ff"/>
        </linearGradient>
      </defs>
      <circle cx="80" cy="55" r="48" fill="url(#delBg)" stroke="#e9d5ff" stroke-width="2.5"/>
      <!-- Leader (Left) -->
      <g transform="translate(46, 56)">
        <circle cx="0" cy="0" r="9" fill="#ffb74d"/>
        <path d="M -7,11 L 7,11 L 5,34 L -5,34 Z" fill="#7c3aed"/>
        <!-- Outstretched arm delivering task -->
        <path d="M 4,16 L 22,22" stroke="#b45309" stroke-width="4" stroke-linecap="round"/>
      </g>
      <!-- Empowered Colleague (Right) -->
      <g transform="translate(114, 56)">
        <circle cx="0" cy="0" r="9" fill="#ffb74d"/>
        <path d="M -7,11 L 7,11 L 5,34 L -5,34 Z" fill="#8b5cf6"/>
        <!-- Arm receiving key / folder -->
        <path d="M -4,16 L -20,22" stroke="#b45309" stroke-width="4" stroke-linecap="round"/>
        <!-- Thumbs up -->
        <circle cx="12" cy="18" r="5" fill="#10b981"/>
        <text x="12" y="21" font-size="8" fill="#fff" text-anchor="middle" font-weight="bold">✓</text>
      </g>
      <!-- Golden Key of Empowerment in Center -->
      <g transform="translate(80, 48)">
        <!-- Glowing aura -->
        <circle cx="0" cy="0" r="16" fill="#fef08a" opacity="0.6"/>
        <!-- Digital Briefcase / Project Folder -->
        <rect x="-14" y="-8" width="28" height="20" rx="3" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
        <path d="M -8,-8 L -8,-12 Q 0,-15 8,-12 L 8,-8" fill="none" stroke="#b45309" stroke-width="2"/>
        <!-- Golden Star on briefcase -->
        <polygon points="0,-2 2,2 7,2 3,5 5,10 0,7 -5,10 -3,5 -7,2 -2,2" fill="#ffffff"/>
      </g>
    </svg>`
  },
  {
    id: "07",
    concept: "Autoridad",
    desc: "Facultad legítima de un cargo para tomar decisiones y dar instrucciones dentro de su ámbito.",
    svg: `<svg viewBox="0 0 160 110" class="card-svg-icon" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="autBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff1f2"/>
          <stop offset="100%" stop-color="#fee2e2"/>
        </linearGradient>
        <linearGradient id="goldMedal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
      </defs>
      <circle cx="80" cy="55" r="48" fill="url(#autBg)" stroke="#fecaca" stroke-width="2.5"/>
      <!-- Official Laurel Wreath / Pillar of mandate -->
      <path d="M 44,65 C 44,38 58,26 80,24 C 102,26 116,38 116,65" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4,4"/>
      <!-- Executive Seal / Badge Medallion -->
      <!-- Red Ribbons -->
      <polygon points="68,68 60,96 72,90 78,96 74,68" fill="#b91c1c"/>
      <polygon points="92,68 86,96 92,90 104,96 96,68" fill="#dc2626"/>
      <!-- Outer Starburst Seal -->
      <circle cx="80" cy="52" r="28" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
      <circle cx="80" cy="52" r="23" fill="url(#goldMedal)"/>
      <circle cx="80" cy="52" r="18" fill="#b91c1c"/>
      <!-- Emblem Crown / Star of legitimate authority -->
      <polygon points="80,38 84,47 94,47 86,53 89,62 80,56 71,62 74,53 66,47 76,47" fill="#ffffff"/>
      <circle cx="80" cy="52" r="3" fill="#f59e0b"/>
    </svg>`
  },
  {
    id: "08",
    concept: "Responsabilidad",
    desc: "Obligación de cumplir las tareas asumidas y responder por sus resultados.",
    svg: `<svg viewBox="0 0 160 110" class="card-svg-icon" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="respShield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0d9488"/>
          <stop offset="100%" stop-color="#0f766e"/>
        </linearGradient>
      </defs>
      <circle cx="80" cy="55" r="48" fill="#f0fdfa" stroke="#ccfbf1" stroke-width="2.5"/>
      <!-- Large Solid Shield of Accountability -->
      <path d="M 80,18 Q 110,22 110,48 C 110,72 80,94 80,94 C 80,94 50,72 50,48 Q 50,22 80,18 Z" fill="url(#respShield)" stroke="#115e59" stroke-width="3"/>
      <!-- Inner Gold/White Core -->
      <path d="M 80,26 Q 102,29 102,48 C 102,68 80,85 80,85 C 80,85 58,68 58,48 Q 58,29 80,26 Z" fill="#14b8a6"/>
      <!-- Verified Checklist Card in Center of Shield -->
      <rect x="68" y="36" width="24" height="32" rx="3" fill="#ffffff" stroke="#0f766e" stroke-width="2"/>
      <rect x="74" y="32" width="12" height="6" rx="2" fill="#0f766e"/>
      <!-- 3 Verified Green Checkmarks -->
      <path d="M 72,44 L 75,47 L 81,41" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
      <line x1="84" y1="44" x2="88" y2="44" stroke="#64748b" stroke-width="2"/>
      <path d="M 72,52 L 75,55 L 81,49" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
      <line x1="84" y1="52" x2="88" y2="52" stroke="#64748b" stroke-width="2"/>
      <path d="M 72,60 L 75,63 L 81,57" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
      <line x1="84" y1="60" x2="88" y2="60" stroke="#64748b" stroke-width="2"/>
    </svg>`
  },
  {
    id: "09",
    concept: "Trabajo en equipo",
    desc: "Colaborar y complementar habilidades para lograr un resultado común.",
    svg: `<svg viewBox="0 0 160 110" class="card-svg-icon" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="teamBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#eff6ff"/>
          <stop offset="100%" stop-color="#dbeafe"/>
        </linearGradient>
      </defs>
      <circle cx="80" cy="55" r="48" fill="url(#teamBg)" stroke="#bfdbfe" stroke-width="2.5"/>
      <!-- 4 Interlocking Puzzle Pieces forming unified square -->
      <g transform="translate(80, 55)">
        <!-- Top-Left Piece (Blue) -->
        <path d="M -24,-24 L 0,-24 C 4,-24 4,-16 0,-16 L 0,0 L -24,0 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
        <!-- Top-Right Piece (Yellow) -->
        <path d="M 0,-24 L 24,-24 L 24,0 L 8,0 C 8,-4 0,-4 0,0 Z" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
        <!-- Bottom-Left Piece (Green) -->
        <path d="M -24,0 L 0,0 L 0,24 L -24,24 Z" fill="#10b981" stroke="#047857" stroke-width="1.5"/>
        <!-- Bottom-Right Piece (Pink) -->
        <path d="M 0,0 L 24,0 L 24,24 L 0,24 Z" fill="#ec4899" stroke="#be185d" stroke-width="1.5"/>
        <!-- Center Spark of Synergy -->
        <circle cx="0" cy="0" r="7" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
        <text x="0" y="3" font-size="8" text-anchor="middle" font-weight="bold" fill="#f59e0b">★</text>
      </g>
      <!-- Hands joining in from 4 corners -->
      <path d="M 38,32 L 54,42" stroke="#ffb74d" stroke-width="5" stroke-linecap="round"/>
      <path d="M 122,32 L 106,42" stroke="#ffb74d" stroke-width="5" stroke-linecap="round"/>
      <path d="M 38,78 L 54,68" stroke="#ffb74d" stroke-width="5" stroke-linecap="round"/>
      <path d="M 122,78 L 106,68" stroke="#ffb74d" stroke-width="5" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "10",
    concept: "Resolución de conflictos",
    desc: "Abordar diferencias de forma constructiva y buscar acuerdos viables.",
    svg: `<svg viewBox="0 0 160 110" class="card-svg-icon" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="resBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f0fdf4"/>
          <stop offset="100%" stop-color="#dcfce7"/>
        </linearGradient>
      </defs>
      <circle cx="80" cy="55" r="48" fill="url(#resBg)" stroke="#bbf7d0" stroke-width="2.5"/>
      <!-- The Tangled Knot turning into a straight harmonious line above -->
      <path d="M 40,30 Q 55,20 65,34 Q 75,44 80,30 Q 85,16 95,30 L 120,30" fill="none" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Golden Star / Olive leaf of agreement -->
      <polygon points="80,16 83,23 90,23 85,28 87,35 80,31 73,35 75,28 70,23 77,23" fill="#f59e0b"/>
      <!-- The Firm Handshake in Center -->
      <g transform="translate(80, 62)">
        <!-- Left Sleeve (Blue) -->
        <rect x="-42" y="-10" width="22" height="20" rx="4" fill="#2563eb"/>
        <!-- Left Arm -->
        <path d="M -20,-6 L -4,-6 L 4,2 L -6,8 L -20,6 Z" fill="#ffb74d"/>
        <!-- Right Sleeve (Green) -->
        <rect x="20" y="-10" width="22" height="20" rx="4" fill="#059669"/>
        <!-- Right Arm -->
        <path d="M 20,-6 L 4,-6 L -4,2 L 6,8 L 20,6 Z" fill="#ffb74d"/>
        <!-- Clasped Hands Center -->
        <rect x="-8" y="-4" width="16" height="12" rx="4" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
        <!-- Heart of goodwill -->
        <circle cx="0" cy="-14" r="5" fill="#ef4444"/>
      </g>
    </svg>`
  }
];
