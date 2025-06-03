
import type { SVGProps } from 'react';

export function AppLogoIcon(props: SVGProps<SVGSVGElement>) {
  const baseStrokeWidth = typeof props.strokeWidth === 'number' 
    ? props.strokeWidth 
    : parseFloat(props.strokeWidth || "1.5");
  
  const symbolStrokeWidth = baseStrokeWidth * 0.8; // Adjusted for Rupee symbol
  const coinStrokeWidth = baseStrokeWidth * 0.3;

  // Green for bag, Gold for coins, Dark Green/Brown for symbol
  const bagColor = "hsl(130, 45%, 45%)"; // A pleasant green
  const bagStrokeColor = "hsl(130, 45%, 35%)"; // Darker green for outline
  const coinColor = "hsl(45, 100%, 60%)"; // Bright gold
  const coinStrokeColor = "hsl(40, 80%, 50%)"; // Slightly darker gold for coin outline
  const rupeeSymbolColor = "hsl(30, 30%, 30%)"; // Dark brown for knowledge symbol

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

      {/* Rupee Symbol (₹) on the front of the bag */}
      {/* Main vertical bar */}
      <path 
        d="M12 12 V 18" 
        fill="none" 
        stroke={rupeeSymbolColor} 
        strokeWidth={symbolStrokeWidth} 
      />
      {/* Top horizontal bar */}
      <path 
        d="M9.5 12 H 14.5" 
        fill="none" 
        stroke={rupeeSymbolColor} 
        strokeWidth={symbolStrokeWidth} 
      />
      {/* Lower horizontal bar (slightly shorter or offset for Rupee 'R' part) */}
      <path 
        d="M9.5 14 H 13.5" 
        fill="none" 
        stroke={rupeeSymbolColor} 
        strokeWidth={symbolStrokeWidth} 
      />
      {/* 'R' curve part (simplified) - this is tricky to do perfectly as a simple path, might need a more complex one or adjust strokes */}
      {/* A simple 'R' like tail - may need adjustment */}
       <path 
        d="M12 14.5 C 13.5 14.5 14 15 14 15.5 S 13.5 16.5 12.5 16.5"
        fill="none"
        stroke={rupeeSymbolColor}
        strokeWidth={symbolStrokeWidth*0.8} 
      />
    </svg>
  );
}
