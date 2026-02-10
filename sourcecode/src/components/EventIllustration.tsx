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
                    <stop offset="0%" stopColor="#7c5ce7" />
                    <stop offset="100%" stopColor="#5b3fd1" />
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
                    {/* Neural network nodes and connections */}
                    {/* Layer 1 */}
                    <circle cx="140" cy="120" r="18" fill="#5b3fd1" opacity="0.8" />
                    <circle cx="140" cy="180" r="18" fill="#5b3fd1" opacity="0.8" />
                    <circle cx="140" cy="240" r="18" fill="#5b3fd1" opacity="0.8" />
                    {/* Layer 2 */}
                    <circle cx="280" cy="140" r="22" fill="#7c5ce7" opacity="0.7" />
                    <circle cx="280" cy="220" r="22" fill="#7c5ce7" opacity="0.7" />
                    {/* Layer 3 */}
                    <circle cx="420" cy="120" r="20" fill="#5b3fd1" opacity="0.8" />
                    <circle cx="420" cy="180" r="20" fill="#5b3fd1" opacity="0.8" />
                    <circle cx="420" cy="240" r="20" fill="#5b3fd1" opacity="0.8" />
                    {/* Output */}
                    <circle cx="540" cy="180" r="24" fill="#7c5ce7" opacity="0.9" />
                    {/* Connections */}
                    {[120, 180, 240].map(y1 =>
                        [140, 220].map(y2 => (
                            <line key={`1-${y1}-${y2}`} x1="158" y1={y1} x2="258" y2={y2} stroke="#7c5ce7" strokeWidth="1.5" opacity="0.25" />
                        ))
                    )}
                    {[140, 220].map(y1 =>
                        [120, 180, 240].map(y2 => (
                            <line key={`2-${y1}-${y2}`} x1="302" y1={y1} x2="400" y2={y2} stroke="#7c5ce7" strokeWidth="1.5" opacity="0.25" />
                        ))
                    )}
                    {[120, 180, 240].map(y => (
                        <line key={`3-${y}`} x1="440" y1={y} x2="516" y2={180} stroke="#7c5ce7" strokeWidth="1.5" opacity="0.25" />
                    ))}
                    {/* Labels */}
                    <text x="140" y="124" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600">IN</text>
                    <text x="540" y="184" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">OUT</text>
                </g>
            );

        case 2: // Optimizer's Dilemma
            return (
                <g>
                    {/* Loss landscape curve */}
                    <path
                        d="M 80 280 Q 160 120, 240 220 Q 300 280, 360 160 Q 420 60, 480 200 Q 520 280, 560 240"
                        stroke="#7c5ce7"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.7"
                    />
                    {/* Ball at local minimum */}
                    <circle cx="240" cy="220" r="10" fill="#ff6b6b" opacity="0.8" />
                    <text x="240" y="250" textAnchor="middle" fill="#ff6b6b" fontSize="10" opacity="0.8">Local min</text>
                    {/* Ball at global minimum */}
                    <circle cx="420" cy="60" r="10" fill="#51cf66" opacity="0.9" />
                    <text x="420" y="45" textAnchor="middle" fill="#51cf66" fontSize="10" opacity="0.9">Global min</text>
                    {/* Gradient arrows */}
                    <path d="M 300 260 L 320 230" stroke="#ffd43b" strokeWidth="2" opacity="0.6" markerEnd="url(#arrow)" />
                    <text x="320" y="178" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="700" opacity="0.15">∇</text>
                </g>
            );

        case 3: // Prompt Engineering
            return (
                <g>
                    {/* Chat bubbles */}
                    <rect x="120" y="80" width="200" height="50" rx="8" fill="#5b3fd1" opacity="0.6" />
                    <text x="145" y="110" fill="#fff" fontSize="13" opacity="0.9">Write a poem about AI...</text>

                    <rect x="320" y="150" width="200" height="50" rx="8" fill="#3d3d4a" opacity="0.7" />
                    <text x="345" y="180" fill="#a0aab4" fontSize="13" opacity="0.9">In circuits deep and...</text>

                    <rect x="140" y="220" width="220" height="50" rx="8" fill="#5b3fd1" opacity="0.6" />
                    <text x="165" y="250" fill="#fff" fontSize="13" opacity="0.9">Make it more technical</text>

                    {/* Cursor blink */}
                    <rect x="365" y="222" width="2" height="20" fill="#7c5ce7" opacity="0.8">
                        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.2s" repeatCount="indefinite" />
                    </rect>
                </g>
            );

        case 4: // Data Detective
            return (
                <g>
                    {/* Bar chart */}
                    {[
                        { x: 160, h: 100, color: '#5b3fd1' },
                        { x: 210, h: 160, color: '#5b3fd1' },
                        { x: 260, h: 80, color: '#5b3fd1' },
                        { x: 310, h: 200, color: '#ff6b6b' }, /* anomaly */
                        { x: 360, h: 120, color: '#5b3fd1' },
                        { x: 410, h: 90, color: '#5b3fd1' },
                        { x: 460, h: 140, color: '#5b3fd1' },
                    ].map((bar, i) => (
                        <rect
                            key={i}
                            x={bar.x}
                            y={280 - bar.h}
                            width="30"
                            height={bar.h}
                            rx="4"
                            fill={bar.color}
                            opacity="0.6"
                        />
                    ))}
                    {/* Magnifying glass over anomaly */}
                    <circle cx="325" cy="100" r="30" stroke="#ffd43b" strokeWidth="2.5" fill="none" opacity="0.6" />
                    <line x1="347" y1="122" x2="370" y2="145" stroke="#ffd43b" strokeWidth="2.5" opacity="0.6" />
                    {/* Axis */}
                    <line x1="140" y1="280" x2="500" y2="280" stroke="#fff" strokeWidth="1" opacity="0.15" />
                </g>
            );

        case 5: // AI Art Gallery
            return (
                <g>
                    {/* Three framed "paintings" */}
                    <rect x="100" y="100" width="120" height="150" rx="4" stroke="#7c5ce7" strokeWidth="2" fill="none" opacity="0.4" />
                    <rect x="108" y="108" width="104" height="120" rx="2" fill="#5b3fd1" opacity="0.15" />
                    <circle cx="160" cy="155" r="25" fill="#7c5ce7" opacity="0.3" />
                    <rect x="130" y="170" width="60" height="30" rx="4" fill="#5b3fd1" opacity="0.2" />

                    <rect x="260" y="80" width="120" height="170" rx="4" stroke="#7c5ce7" strokeWidth="2" fill="none" opacity="0.4" />
                    <rect x="268" y="88" width="104" height="140" rx="2" fill="#5b3fd1" opacity="0.15" />
                    <polygon points="320,110 350,180 290,180" fill="#7c5ce7" opacity="0.3" />

                    <rect x="420" y="100" width="120" height="150" rx="4" stroke="#7c5ce7" strokeWidth="2" fill="none" opacity="0.4" />
                    <rect x="428" y="108" width="104" height="120" rx="2" fill="#5b3fd1" opacity="0.15" />
                    <rect x="445" y="130" width="70" height="70" rx="35" fill="#7c5ce7" opacity="0.25" />

                    {/* Stars / sparkles */}
                    <text x="240" y="100" fill="#ffd43b" fontSize="16" opacity="0.5">✦</text>
                    <text x="400" y="120" fill="#ffd43b" fontSize="12" opacity="0.4">✦</text>
                </g>
            );

        case 6: // Model Showdown
            return (
                <g>
                    {/* Two model boxes competing */}
                    <rect x="120" y="120" width="160" height="120" rx="8" fill="#5b3fd1" opacity="0.3" />
                    <text x="200" y="170" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600" opacity="0.7">Model A</text>
                    <text x="200" y="195" textAnchor="middle" fill="#51cf66" fontSize="20" fontWeight="700" opacity="0.8">92.4%</text>

                    <rect x="360" y="120" width="160" height="120" rx="8" fill="#5b3fd1" opacity="0.3" />
                    <text x="440" y="170" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600" opacity="0.7">Model B</text>
                    <text x="440" y="195" textAnchor="middle" fill="#ff6b6b" fontSize="20" fontWeight="700" opacity="0.8">87.1%</text>

                    {/* VS badge */}
                    <circle cx="320" cy="180" r="24" fill="#7c5ce7" opacity="0.8" />
                    <text x="320" y="186" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">VS</text>

                    {/* Trophy */}
                    <text x="200" y="270" textAnchor="middle" fill="#ffd43b" fontSize="24" opacity="0.6">🏆</text>
                </g>
            );

        case 7: // Bias Busters
            return (
                <g>
                    {/* Scale / balance */}
                    <line x1="240" y1="140" x2="400" y2="140" stroke="#7c5ce7" strokeWidth="3" opacity="0.6" />
                    <rect x="310" y="140" width="20" height="100" rx="4" fill="#5b3fd1" opacity="0.5" />
                    {/* Left pan (lower = biased) */}
                    <path d="M 220 140 L 200 190 L 280 190 Z" fill="#ff6b6b" opacity="0.4" />
                    <text x="240" y="180" textAnchor="middle" fill="#ff6b6b" fontSize="10" opacity="0.8">Biased</text>
                    {/* Right pan (higher = fair) */}
                    <path d="M 360 140 L 340 170 L 420 170 Z" fill="#51cf66" opacity="0.4" />
                    <text x="380" y="163" textAnchor="middle" fill="#51cf66" fontSize="10" opacity="0.8">Fair</text>
                    {/* Shield */}
                    <text x="320" y="280" textAnchor="middle" fill="#7c5ce7" fontSize="36" opacity="0.3">🛡️</text>
                </g>
            );

        case 8: // AI Escape Room
            return (
                <g>
                    {/* Key */}
                    <text x="180" y="160" fill="#ffd43b" fontSize="40" opacity="0.5">🔑</text>
                    {/* Lock */}
                    <text x="410" y="200" fill="#7c5ce7" fontSize="44" opacity="0.4">🔒</text>
                    {/* Puzzle pieces */}
                    <rect x="270" y="130" width="40" height="40" rx="4" fill="#5b3fd1" opacity="0.3" transform="rotate(15, 290, 150)" />
                    <rect x="310" y="160" width="40" height="40" rx="4" fill="#7c5ce7" opacity="0.3" transform="rotate(-10, 330, 180)" />
                    <rect x="280" y="190" width="40" height="40" rx="4" fill="#5b3fd1" opacity="0.25" transform="rotate(5, 300, 210)" />
                    {/* Clock */}
                    <circle cx="320" cy="270" r="28" stroke="#ff6b6b" strokeWidth="2" fill="none" opacity="0.4" />
                    <line x1="320" y1="270" x2="320" y2="252" stroke="#ff6b6b" strokeWidth="2" opacity="0.5" />
                    <line x1="320" y1="270" x2="332" y2="270" stroke="#ff6b6b" strokeWidth="2" opacity="0.5" />
                    <text x="320" y="310" textAnchor="middle" fill="#fff" fontSize="10" opacity="0.4">45:00</text>
                </g>
            );

        default:
            return null;
    }
}
