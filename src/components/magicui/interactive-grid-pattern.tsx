import React, { useState } from "react";

// Utility function to combine class names
const cn = (...classes: (string | undefined | null | boolean)[]): string => {
  return classes.filter(Boolean).join(" ");
};

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number]; // [horizontal, vertical]
  className?: string;
  squaresClassName?: string;
}

export const InteractiveGridPattern = ({
  width = 20,
  height = 20,
  squares = [80, 80],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) => {
  const [horizontal, vertical] = squares;
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

  return (
    <svg
      viewBox={`0 0 ${width * horizontal} ${height * vertical}`}
      preserveAspectRatio="none"
      className={cn("absolute inset-0 h-full w-full", className)}
      {...props}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width;
        const y = Math.floor(index / horizontal) * height;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            fill="transparent"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="0.5"
            className={cn(
              "transition-all duration-300 ease-out",
              hoveredSquare === index
                ? "fill-blue-500/40 stroke-blue-400/60"
                : "fill-transparent hover:fill-blue-500/20",
              squaresClassName
            )}
            onMouseEnter={() => {
              console.log("Mouse entered square:", index);
              setHoveredSquare(index);
            }}
            onMouseLeave={() => {
              console.log("Mouse left square:", index);
              setHoveredSquare(null);
            }}
          />
        );
      })}
    </svg>
  );
};
