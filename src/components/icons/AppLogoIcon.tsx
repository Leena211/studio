
import type { SVGProps } from 'react';

export function AppLogoIcon(props: SVGProps<SVGSVGElement>) {
  const baseStrokeWidth = typeof props.strokeWidth === 'number' 
    ? props.strokeWidth 
    : parseFloat(props.strokeWidth || "1.5");
  
  const coinStrokeWidth = baseStrokeWidth * 0.3;

  // Green for bag, Gold for coins, Dark Green/Brown for symbol/text
  const bagColor = "hsl(130, 45%, 45%)"; // A pleasant green
  const bagStrokeColor = "hsl(130, 45%, 35%)"; // Darker green for outline
  const coinColor = "hsl(45, 100%, 60%)"; // Bright gold
  const coinStrokeColor = "hsl(40, 80%, 50%)"; // Slightly darker gold for coin outline
  const textColor = "hsl(30, 30%, 30%)"; // Dark brown for text

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={baseStrokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props} // Passes className (for h, w) and any other SVG props
    >
      {/* Bag shape */}
      <path 
        d="M18 21H6C4.89543 21 4 20.1046 4 19V9C4 7.89543 4.89543 7 6 7H18C19.1046 7 20 7.89543 20 9V19C20 20.1046 19.1046 21 18 21Z"
        fill={bagColor}
        stroke={bagStrokeColor}
      />
      {/* Top cinch part of the bag (outline only) */}
      <path 
        d="M8 6 V4 C8 2.89543 8.89543 2 10 2 H14 C15.1046 2 16 2.89543 16 4 V6"
        fill="none"
        stroke={bagStrokeColor}
      />
      
      {/* Overfilled Coins - more coins, some slightly overlapping or on top */}
      {/* Base coins */}
      <circle cx="10" cy="8.5" r="1.8" fill={coinColor} stroke={coinStrokeColor} strokeWidth={coinStrokeWidth}/>
      <circle cx="12.5" cy="7.5" r="2" fill={coinColor} stroke={coinStrokeColor} strokeWidth={coinStrokeWidth}/>
      <circle cx="15" cy="8.5" r="1.8" fill={coinColor} stroke={coinStrokeColor} strokeWidth={coinStrokeWidth}/>
      
      {/* Additional coins for "overfilled" look */}
      <circle cx="11" cy="6.5" r="1.5" fill={coinColor} stroke={coinStrokeColor} strokeWidth={coinStrokeWidth}/>
      <circle cx="14" cy="6.5" r="1.5" fill={coinColor} stroke={coinStrokeColor} strokeWidth={coinStrokeWidth}/>
      <circle cx="8.5" cy="7.5" r="1.6" fill={coinColor} stroke={coinStrokeColor} strokeWidth={coinStrokeWidth}/>
      <circle cx="16.5" cy="7.5" r="1.6" fill={coinColor} stroke={coinStrokeColor} strokeWidth={coinStrokeWidth}/>
      <circle cx="12.5" cy="5.5" r="1.3" fill={coinColor} stroke={coinStrokeColor} strokeWidth={coinStrokeWidth}/>

      {/* "FinLit" Text */}
      <text
        x="12" // Center horizontally
        y="15.5" // Adjust for vertical centering on the bag
        fill={textColor}
        fontSize="3.5" // Adjust font size as needed
        fontFamily="Arial, sans-serif" // Or your preferred font
        fontWeight="bold"
        textAnchor="middle" // Horizontally centers the text
        stroke="none" // No stroke for text for clarity
      >
        FinLit
      </text>
    </svg>
  );
}
