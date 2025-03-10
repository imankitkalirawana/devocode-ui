import { cn } from "@/lib/utils";
import CircularProgress from "./circular-progress";
import { Leaf } from "lucide-react";

interface HabitsProps {
  className?: string;
}

export default function Habits({ className }: HabitsProps) {
  return (
    <>
      <div
        className={cn(
          "relative flex aspect-square h-44 w-44 flex-col justify-between gap-4 overflow-hidden rounded-3xl bg-[#1E1E1E] p-4 pb-12 text-white",
          className,
        )}
      >
        <div>
          <div className="text-xs text-[#9C9A9A]">Habits</div>
          <div className="flex flex-col font-medium">
            <span className="whitespace-nowrap">Reading Book</span>
            <span className="text-sm text-[#FA461F]">20m left</span>
          </div>
        </div>
        <div className="flex justify-end">
          <CircularProgress
            progress={24}
            size={50}
            strokeWidth={3}
            innerContent={<Leaf />}
            rotate={0}
          />
        </div>
      </div>
    </>
  );
}
