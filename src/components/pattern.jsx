export default function Pattern({ color1 = "#f68686", color2 = "#a97b7b", color3 = "#453d46", bg = "#191b22" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      className="w-full h-auto"
    >
      <rect width="600" height="600" fill={bg} />
      {/* Row 1 */}
      <rect x="0" y="0" width="200" height="200" fill={color1} />
      <path d="M200,0 A200,200 0 0,1 0,200 L0,0 Z" fill={color3} />
      <rect x="200" y="0" width="200" height="200" fill={color2} />
      <circle cx="300" cy="100" r="80" fill={color3} />
      <rect x="400" y="0" width="200" height="200" fill={color3} />
      <path d="M400,0 A200,200 0 0,1 600,200 L400,200 Z" fill={color1} />
      <rect x="600" y="0" width="200" height="200" fill={color2} />
      <circle cx="700" cy="100" r="60" fill={color3} />

      {/* Row 2 */}
      <rect x="0" y="200" width="200" height="200" fill={color2} />
      <path d="M0,200 A200,200 0 0,0 200,400 L0,400 Z" fill={color1} />
      <rect x="200" y="200" width="200" height="200" fill={color3} />
      <path d="M200,200 A200,200 0 0,1 400,400 L200,400 Z" fill={color2} />
      <rect x="400" y="200" width="200" height="200" fill={color1} />
      <circle cx="500" cy="300" r="60" fill={color3} />
      <rect x="600" y="200" width="200" height="200" fill={color3} />
      <path d="M600,200 A200,200 0 0,0 800,400 L600,400 Z" fill={color2} />

      {/* Row 3 */}
      <rect x="0" y="400" width="200" height="200" fill={color3} />
      <circle cx="100" cy="500" r="80" fill={color1} />
      <rect x="200" y="400" width="200" height="200" fill={color2} />
      <path d="M200,400 A200,200 0 0,1 400,600 L200,600 Z" fill={color3} />
      <rect x="400" y="400" width="200" height="200" fill={color3} />
      <path d="M400,400 A200,200 0 0,0 600,600 L400,600 Z" fill={color1} />
      <rect x="600" y="400" width="200" height="200" fill={color2} />
      <circle cx="700" cy="500" r="80" fill={color3} />
    </svg>
  );
}
