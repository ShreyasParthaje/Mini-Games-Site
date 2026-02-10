/**
 * Inline SVG illustrations for each event card.
 * These are lightweight, themed placeholders that look professional
 * and require zero network requests.
 */

interface EventIllustrationProps {
    eventId: number;
    title: string;
}

export default function EventIllustration({ eventId, title }: EventIllustrationProps) {
    return (
        <svg
            viewBox="0 0 640 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Illustration for ${title}`}
            style={{ width: '100%', height: '100%' }}
        >
            {/* Background gradient */}
            <defs>
                <linearGradient id={`bg-${eventId}`} x1="0" y1="0" x2="640" y2="360" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1e1b2e" />
                    <stop offset="100%" stopColor="#2a2a3a" />
                </linearGradient>
                <linearGradient id={`accent-${eventId}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0AEEFF" />
                    <stop offset="100%" stopColor="#0A7EEF" />
                </linearGradient>
            </defs>
            <rect width="640" height="360" fill={`url(#bg-${eventId})`} />

            {/* Decorative grid dots */}
            {Array.from({ length: 8 }).map((_, row) =>
                Array.from({ length: 14 }).map((_, col) => (
                    <circle
                        key={`${row}-${col}`}
                        cx={46 + col * 42}
                        cy={40 + row * 42}
                        r="1.5"
                        fill="#ffffff"
                        opacity="0.06"
                    />
                ))
            )}

            {/* Per-event themed illustration */}
            {getIllustration(eventId)}

            {/* Subtle accent line at bottom */}
            <rect x="0" y="356" width="640" height="4" fill={`url(#accent-${eventId})`} opacity="0.6" />
        </svg>
    );
}

function getIllustration(eventId: number) {
    switch (eventId) {
        case 1: // Neural Network Human Chain
            return (
                <g>
                    <defs>
                        <radialGradient id="node-glow" cx="0.5" cy="0.5" r="0.5">
                            <stop offset="0%" stopColor="#0AEEFF" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#0AEEFF" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    {/* Neural network nodes and connections */}
                    {/* Layer 1 */}
                    <circle cx="140" cy="120" r="18" fill="#0A7EEF" opacity="0.8" />
                    <circle cx="140" cy="180" r="18" fill="#0A7EEF" opacity="0.8" />
                    <circle cx="140" cy="240" r="18" fill="#0A7EEF" opacity="0.8" />
                    {/* Layer 2 */}
                    <circle cx="280" cy="140" r="22" fill="#0AEEFF" opacity="0.7" />
                    <circle cx="280" cy="220" r="22" fill="#0AEEFF" opacity="0.7" />
                    {/* Layer 3 */}
                    <circle cx="420" cy="120" r="20" fill="#0A7EEF" opacity="0.8" />
                    <circle cx="420" cy="180" r="20" fill="#0A7EEF" opacity="0.8" />
                    <circle cx="420" cy="240" r="20" fill="#0A7EEF" opacity="0.8" />
                    {/* Output */}
                    <circle cx="540" cy="180" r="24" fill="#0AEEFF" opacity="0.9" />
                    <circle cx="540" cy="180" r="35" fill="url(#node-glow)" />

                    {/* Connections */}
                    {[120, 180, 240].map(y1 =>
                        [140, 220].map(y2 => (
                            <line key={`1-${y1}-${y2}`} x1="158" y1={y1} x2="258" y2={y2} stroke="#0AEEFF" strokeWidth="1.5" opacity="0.25" />
                        ))
                    )}
                    {[140, 220].map(y1 =>
                        [120, 180, 240].map(y2 => (
                            <line key={`2-${y1}-${y2}`} x1="302" y1={y1} x2="400" y2={y2} stroke="#0AEEFF" strokeWidth="1.5" opacity="0.25" />
                        ))
                    )}
                    {[120, 180, 240].map(y => (
                        <line key={`3-${y}`} x1="440" y1={y} x2="516" y2={180} stroke="#0AEEFF" strokeWidth="1.5" opacity="0.25" />
                    ))}
                    {/* Labels */}
                    <text x="140" y="124" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600">IN (3)</text>
                    <text x="540" y="184" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">OUT</text>
                </g>
            );

        case 2: // Optimizer's Dilemma
            return (
                <g>
                    {/* Card Table vibe */}
                    <ellipse cx="320" cy="220" rx="200" ry="100" fill="#1a1a2e" stroke="#2d2b55" strokeWidth="4" />

                    {/* Cards */}
                    <g transform="translate(280, 180) rotate(-15)">
                        <rect width="60" height="90" rx="4" fill="#eee" />
                        <text x="30" y="55" textAnchor="middle" fontSize="24" fill="#d00">A♥</text>
                    </g>
                    <g transform="translate(320, 175) rotate(5)">
                        <rect width="60" height="90" rx="4" fill="#eee" />
                        <text x="30" y="55" textAnchor="middle" fontSize="24" fill="#000">K♠</text>
                    </g>
                    <g transform="translate(360, 190) rotate(20)">
                        <rect width="60" height="90" rx="4" fill="#eee" />
                        <text x="30" y="55" textAnchor="middle" fontSize="24" fill="#d00">7♦</text>
                    </g>

                    {/* Hidden cards (backs) */}
                    <g transform="translate(200, 220) rotate(-60)">
                        <rect width="60" height="90" rx="4" fill="#2d2b55" stroke="#4a47a3" strokeWidth="2" />
                        <path d="M10,10 L50,80 M50,10 L10,80" stroke="#4a47a3" strokeWidth="2" opacity="0.5" />
                    </g>
                    <g transform="translate(440, 220) rotate(60)">
                        <rect width="60" height="90" rx="4" fill="#2d2b55" stroke="#4a47a3" strokeWidth="2" />
                        <path d="M10,10 L50,80 M50,10 L10,80" stroke="#4a47a3" strokeWidth="2" opacity="0.5" />
                    </g>

                    <text x="320" y="140" textAnchor="middle" fill="#0AEEFF" fontSize="18" fontWeight="700" letterSpacing="2">TRADE?</text>
                </g>
            );

        case 3: // Feature Extraction Pictionary
            return (
                <g>
                    {/* Blueprint grid background */}
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2d2b55" strokeWidth="1" />
                    </pattern>
                    <rect x="140" y="60" width="360" height="240" fill="url(#grid)" opacity="0.5" />

                    {/* Geometric Elephant Construction */}
                    {/* Body */}
                    <rect x="240" y="160" width="120" height="100" stroke="#0f0" strokeWidth="2" fill="none" // Green for recognized
                        strokeDasharray="5,5"
                    />
                    {/* Head */}
                    <circle cx="220" cy="180" r="50" stroke="#0f0" strokeWidth="2" fill="none" />
                    {/* Trunk */}
                    <path d="M 180 200 L 160 260 L 180 260" stroke="#0f0" strokeWidth="2" fill="none" />
                    {/* Legs */}
                    <rect x="250" y="260" width="20" height="40" stroke="#0f0" strokeWidth="2" fill="none" />
                    <rect x="330" y="260" width="20" height="40" stroke="#0f0" strokeWidth="2" fill="none" />

                    {/* Analyzing Box */}
                    <rect x="150" y="120" width="260" height="200" stroke="#0AEEFF" strokeWidth="2" fill="none" />
                    <text x="160" y="140" fill="#0AEEFF" fontSize="14" fontFamily="monospace">DETECTED: ELEPHANT (94%)</text>

                    {/* Primitives Label */}
                    <text x="320" y="320" textAnchor="middle" fill="#aaa" fontSize="12">Primitives: 2 Rects, 1 Circle, 1 Path</text>
                </g>
            );

        case 4: // Hallucination Detective
            return (
                <g>
                    {/* Text Document Layer */}
                    <rect x="180" y="60" width="280" height="240" fill="#fff" opacity="0.1" rx="4" />

                    {/* Text Lines */}
                    {/* Line 1 (Real) */}
                    <rect x="200" y="90" width="240" height="10" rx="2" fill="#0A7EEF" opacity="0.7" />
                    {/* Line 2 (Real) */}
                    <rect x="200" y="115" width="200" height="10" rx="2" fill="#0A7EEF" opacity="0.7" />
                    {/* Line 3 (Fake/Hallucination) */}
                    <rect x="200" y="140" width="220" height="10" rx="2" fill="#ff4757" opacity="0.8" />
                    <text x="435" y="149" fill="#ff4757" fontSize="14" fontWeight="bold">!</text>
                    {/* Line 4 (Real) */}
                    <rect x="200" y="165" width="230" height="10" rx="2" fill="#0A7EEF" opacity="0.7" />
                    {/* Line 5 (Fake) */}
                    <rect x="200" y="190" width="180" height="10" rx="2" fill="#ff4757" opacity="0.8" />
                    <text x="395" y="199" fill="#ff4757" fontSize="14" fontWeight="bold">!</text>

                    {/* Magnifying Glass */}
                    <g transform="translate(280, 120) rotate(-20)">
                        <circle cx="0" cy="0" r="50" stroke="#ffd43b" strokeWidth="4" fill="#ffffff" fillOpacity="0.1" />
                        <rect x="-10" y="50" width="20" height="60" rx="5" fill="#333" stroke="#555" />
                        {/* Reflection */}
                        <path d="M -30 -20 Q -10 -40, 20 -20" stroke="#fff" strokeWidth="3" opacity="0.3" fill="none" />
                    </g>
                </g>
            );

        case 5: // Badly Explained Concepts
            return (
                <g>
                    {/* Blue-print style Pizza */}
                    <g transform="translate(320, 180)">
                        {/* Pizza Outline */}
                        <path d="M 0 -100 L 70 80 L -70 80 Z" stroke="#00d2d3" strokeWidth="2" fill="none" />
                        {/* Crust */}
                        <path d="M -70 80 Q 0 100, 70 80" stroke="#00d2d3" strokeWidth="2" fill="none" strokeDasharray="4,4" />

                        {/* Pepperoni circles */}
                        <circle cx="0" cy="0" r="10" stroke="#00d2d3" strokeWidth="1" fill="none" />
                        <circle cx="-20" cy="40" r="10" stroke="#00d2d3" strokeWidth="1" fill="none" />
                        <circle cx="30" cy="50" r="10" stroke="#00d2d3" strokeWidth="1" fill="none" />

                        {/* Technical Callouts */}
                        <line x1="40" y1="0" x2="100" y2="-20" stroke="#fff" strokeWidth="1" opacity="0.5" />
                        <text x="105" y="-20" fill="#00d2d3" fontSize="10" fontFamily="monospace">Substrate (Dough)</text>

                        <line x1="-30" y1="40" x2="-90" y2="40" stroke="#fff" strokeWidth="1" opacity="0.5" />
                        <text x="-160" y="44" fill="#00d2d3" fontSize="10" fontFamily="monospace">Lipid Discs</text>
                    </g>

                    <text x="320" y="320" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="monospace" opacity="0.8">
                        FIG 1.1: Circular Thermal Unit
                    </text>
                </g>
            );

        case 6: // Bot or Not
            return (
                <g>
                    {/* Split Face Composition */}
                    <line x1="320" y1="40" x2="320" y2="320" stroke="#0AEEFF" strokeWidth="2" strokeDasharray="10,10" opacity="0.5" />

                    {/* Left Side: Human Eye */}
                    <g transform="translate(220, 180)">
                        <path d="M -60 0 Q 0 -50, 60 0 Q 0 50, -60 0" stroke="#51cf66" strokeWidth="2" fill="none" />
                        <circle cx="0" cy="0" r="20" fill="#51cf66" opacity="0.3" />
                        <circle cx="0" cy="0" r="8" fill="#fff" />
                        <text x="0" y="80" textAnchor="middle" fill="#51cf66" fontSize="14" fontWeight="bold">HUMAN</text>
                    </g>

                    {/* Right Side: Camera Lens/Robot */}
                    <g transform="translate(420, 180)">
                        <circle cx="0" cy="0" r="35" stroke="#ff4757" strokeWidth="3" fill="#333" />
                        <circle cx="0" cy="0" r="25" stroke="#ff4757" strokeWidth="1" fill="#111" />
                        <circle cx="0" cy="0" r="10" fill="#f00" opacity="0.8">
                            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                        </circle>
                        {/* Scan lines */}
                        <line x1="-40" y1="-40" x2="40" y2="-40" stroke="#ff4757" strokeWidth="1" opacity="0.3" />
                        <line x1="-40" y1="40" x2="40" y2="40" stroke="#ff4757" strokeWidth="1" opacity="0.3" />

                        <text x="0" y="80" textAnchor="middle" fill="#ff4757" fontSize="14" fontWeight="bold">BOT</text>
                    </g>
                </g>
            );

        case 7: // AI Gartic Phone
            return (
                <g>
                    {/* Sequence of morphing icons */}
                    {/* Step 1: Cat */}
                    <g transform="translate(140, 180)">
                        <path d="M -20 10 L -25 -10 L -10 0 L 10 0 L 25 -10 L 20 10 Z" fill="#fff" opacity="0.8" />
                        <circle cx="0" cy="15" r="15" fill="#fff" opacity="0.8" />
                        <text x="0" y="50" textAnchor="middle" fill="#aaa" fontSize="10">PROMPT</text>
                    </g>

                    {/* Arrow */}
                    <path d="M 180 180 L 210 180" stroke="#0AEEFF" strokeWidth="2" markerEnd="url(#arrow)" opacity="0.5" />

                    {/* Step 2: Weird Cat */}
                    <g transform="translate(250, 180)">
                        <path d="M -20 10 L -25 -15 L -5 -5 L 15 -5 L 30 -15 L 20 10 Z" fill="#00E5FF" opacity="0.8" />
                        <rect x="-15" y="5" width="30" height="25" rx="5" fill="#00E5FF" opacity="0.8" />
                        <text x="0" y="50" textAnchor="middle" fill="#aaa" fontSize="10">GEN 1</text>
                    </g>

                    {/* Arrow */}
                    <path d="M 290 180 L 320 180" stroke="#0AEEFF" strokeWidth="2" markerEnd="url(#arrow)" opacity="0.5" />

                    {/* Step 3: Abstract Blob */}
                    <g transform="translate(360, 180)">
                        <path d="M -20 0 Q 0 -30, 20 0 Q 30 20, 0 30 Q -30 20, -20 0" fill="#ff7675" opacity="0.8" />
                        <circle cx="5" cy="5" r="5" fill="#fff" />
                        <text x="0" y="50" textAnchor="middle" fill="#aaa" fontSize="10">GEN 2</text>
                    </g>

                    {/* Arrow */}
                    <path d="M 400 180 L 430 180" stroke="#0AEEFF" strokeWidth="2" markerEnd="url(#arrow)" opacity="0.5" />

                    {/* Step 4: Alien? */}
                    <g transform="translate(470, 180)">
                        <circle cx="0" cy="0" r="20" fill="#fab1a0" opacity="0.8" />
                        <ellipse cx="0" cy="0" rx="25" ry="10" fill="#fab1a0" opacity="0.5" />
                        <text x="0" y="50" textAnchor="middle" fill="#aaa" fontSize="10">RESULT</text>
                    </g>
                </g>
            );

        case 8: // Infinite Craft Bingo
            return (
                <g>
                    {/* Tech Grid Background */}
                    <defs>
                        <linearGradient id="bingo-gradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#2d2b55" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#1e1b2e" stopOpacity="0.8" />
                        </linearGradient>
                    </defs>
                    <rect x="200" y="80" width="240" height="240" rx="8" fill="url(#bingo-gradient)" stroke="#0AEEFF" strokeWidth="2" />

                    {/* Grid Lines */}
                    <line x1="200" y1="160" x2="440" y2="160" stroke="#0AEEFF" strokeWidth="1" opacity="0.3" />
                    <line x1="200" y1="240" x2="440" y2="240" stroke="#0AEEFF" strokeWidth="1" opacity="0.3" />
                    <line x1="280" y1="80" x2="280" y2="320" stroke="#0AEEFF" strokeWidth="1" opacity="0.3" />
                    <line x1="360" y1="80" x2="360" y2="320" stroke="#0AEEFF" strokeWidth="1" opacity="0.3" />

                    {/* Winning highlight (Diagonal) */}
                    <line x1="200" y1="80" x2="440" y2="320" stroke="#ffeaa7" strokeWidth="2" opacity="0.6" strokeDasharray="10,5" />

                    {/* Element 1: Fire (Top Left) */}
                    <g transform="translate(240, 120)">
                        <path d="M 0 20 Q -15 20, -10 0 Q -5 -15, 0 -25 Q 5 -15, 10 0 Q 15 20, 0 20 Z" fill="#ff7675" opacity="0.9" />
                        <path d="M 0 15 Q -8 15, -5 5 Q 0 -5, 0 -15 Q 0 -5, 5 5 Q 8 15, 0 15 Z" fill="#fab1a0" opacity="0.9" />
                    </g>

                    {/* Element 2: Water (Top Middle) */}
                    <g transform="translate(320, 120)">
                        <path d="M 0 -25 Q 15 0, 15 15 Q 15 30, 0 30 Q -15 30, -15 15 Q -15 0, 0 -25 Z" fill="#74b9ff" opacity="0.9" />
                        <path d="M 5 5 Q 8 15, 2 20" stroke="#fff" strokeWidth="2" opacity="0.4" fill="none" />
                    </g>

                    {/* Element 3: Wind (Top Right) */}
                    <g transform="translate(400, 120)">
                        <path d="M -15 -10 Q 0 -20, 15 -10" stroke="#00E5FF" strokeWidth="3" fill="none" strokeLinecap="round" />
                        <path d="M -20 0 Q 10 0, 20 10" stroke="#00E5FF" strokeWidth="3" fill="none" strokeLinecap="round" />
                        <path d="M -15 15 Q 0 25, 15 10" stroke="#00E5FF" strokeWidth="3" fill="none" strokeLinecap="round" />
                    </g>

                    {/* Element 4: Earth (Center) */}
                    <g transform="translate(320, 200)">
                        <circle cx="0" cy="0" r="20" fill="#55efc4" opacity="0.9" />
                        <path d="M -10 -5 Q 0 5, 15 -5" stroke="#00b894" strokeWidth="2" fill="none" opacity="0.6" />
                        <path d="M -5 10 Q 5 15, 10 5" stroke="#00b894" strokeWidth="2" fill="none" opacity="0.6" />
                    </g>

                    {/* Element 5: Steam? (Bottom Right) */}
                    <g transform="translate(400, 280)">
                        <circle cx="-5" cy="-5" r="8" fill="#dfe6e9" opacity="0.7" />
                        <circle cx="5" cy="5" r="10" fill="#dfe6e9" opacity="0.8" />
                        <circle cx="8" cy="-5" r="6" fill="#dfe6e9" opacity="0.6" />
                    </g>

                    {/* "BINGO" Label */}
                    <rect x="250" y="45" width="140" height="30" rx="4" fill="#2d2b55" stroke="#0AEEFF" />
                    <text x="320" y="66" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" letterSpacing="3">BINGO</text>
                </g>
            );

        default:
            return null;
    }
}
