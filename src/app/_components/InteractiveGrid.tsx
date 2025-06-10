"use client";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

export const InteractiveGrid = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full overflow-hidden">
      <InteractiveGridPattern
        className={cn(
          "blur-[1px] opacity-60",
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
        width={25}
        height={25}
        squares={[96, 54]}
        squaresClassName="hover:fill-blue-500/50 transition-all duration-200"
      />
    </div>
  );
};
