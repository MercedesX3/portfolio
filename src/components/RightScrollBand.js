import { clamp } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function RightScrollBand({ 
  children, 
  speed = 1,           // scroll speed multiplier
  startOffset = 0.5,   // where to start (0.5 = halfway off right edge)
  fontSize = "responsive", // "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "responsive"
  className = ""       // additional classes
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [dimensions, setDimensions] = useState({ containerWidth: 0, trackWidth: 0 });

  // Measure dimensions on mount and resize
  useEffect(() => {
    const measureDimensions = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;
        setDimensions({ containerWidth, trackWidth });
      }
    };

    measureDimensions();
    window.addEventListener("resize", measureDimensions);
    return () => window.removeEventListener("resize", measureDimensions);
  }, [children]);

  useEffect(() => {
    if (dimensions.containerWidth === 0 || dimensions.trackWidth === 0) return;

    const onScroll = () => {
      if (!trackRef.current) return;

      const scrollY = window.scrollY;
      const { containerWidth, trackWidth } = dimensions;
      
        // Calculate start and end positions
        const startPosition = -containerWidth * startOffset; // Start off-screen to the left
        // End position: stop when text reaches desired position on the right
        const endPosition = containerWidth * 0.4; // Stop at 20% from left edge (adjust as needed)

        // Calculate current position based on scroll (ADD instead of subtract for rightward movement)
        const currentPosition = startPosition + (scrollY * speed);

        // Clamp the position to not go past the end position
        const clampedPosition = Math.min(currentPosition, endPosition);


      // Debug logs
      console.log({
        scrollY,
        containerWidth,
        trackWidth,
        startPosition,
        endPosition,
        currentPosition,
        clampedPosition
      });

      trackRef.current.style.transform = `translateX(${clampedPosition}px)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dimensions, speed, startOffset]);

  // Font size mapping
  const getFontSizeClass = () => {
    if (fontSize === "responsive") {
      return "text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl";
    }
    
    const sizeMap = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg", 
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl"
    };
    
    return sizeMap[fontSize] || "text-2xl";
  };

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <div
        ref={trackRef}
        className={`sticky top-0 left-0 z-10 flex items-center gap-4 sm:gap-6 md:gap-8 will-change-transform py-2 sm:py-3 md:py-4 whitespace-nowrap font-semibold ${getFontSizeClass()} ${className}`}
      >
        {children}
      </div>
    </div>
  );
}