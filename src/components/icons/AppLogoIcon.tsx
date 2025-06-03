
import type { SVGProps } from 'react';

export function AppLogoIcon(props: SVGProps<SVGSVGElement>) {
  // Use provided strokeWidth or default to 1.5, then calculate relative stroke for book
  const baseStrokeWidth = typeof props.strokeWidth === 'number' 
    ? props.strokeWidth 
    : parseFloat(props.strokeWidth || "1.5");
  
  const bookStrokeWidth = baseStrokeWidth * 0.6;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor" // Main fill for the bag, derived from text-primary via className
      stroke="currentColor" // Main stroke for the bag
      strokeWidth={baseStrokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props} // Passes className (for h, w, color) and any other SVG props
    >
      {/* Bag shape: A rounded rectangle (main body) with a cinched top suggestion */}
      <path 
        d="M8 6 V4 C8 2.89543 8.89543 2 10 2 H14 C15.1046 2 16 2.89543 16 4 V6" // Top cinch part (outline)
        fill="none" 
      />
      <path 
        d="M18 21H6C4.89543 21 4 20.1046 4 19V9C4 7.89543 4.89543 7 6 7H18C19.1046 7 20 7.89543 20 9V19C20 20.1046 19.1046 21 18 21Z"
        // Main bag body, will be filled by `currentColor` (from svg element's fill prop)
      />
      
      {/* Coins peeking from the top of the bag */}
      {/* Filled with primary-foreground for contrast, with a thin background-colored stroke for separation */}
      <circle cx="10" cy="10" r="1" fill="hsl(var(--primary-foreground))" stroke="hsl(var(--background))" strokeWidth="0.5"/>
      <circle cx="12" cy="9" r="1.5" fill="hsl(var(--primary-foreground))" stroke="hsl(var(--background))" strokeWidth="0.5"/>
      <circle cx="14" cy="10" r="1" fill="hsl(var(--primary-foreground))" stroke="hsl(var(--background))" strokeWidth="0.5"/>

      {/* Open Book Symbol on the front of the bag */}
      {/* Strokes are primary-foreground for contrast, and thinner than the main bag stroke. */}
      <path 
        d="M10 14.5 L14 14.5 M10 16.5 L14 16.5 M12 13 V18" // Represents open book pages and spine
        fill="none"
        stroke="hsl(var(--primary-foreground))" 
        strokeWidth={bookStrokeWidth} 
      />
    </svg>
  );
}
