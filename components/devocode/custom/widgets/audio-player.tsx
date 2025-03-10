"use client";
import { cn } from "@/lib/utils";
import Visualizer from "./audio-visualizer";
import { LucideProps, Pause } from "lucide-react";
import { motion } from "framer-motion";

interface AudioPlayerProps {
  className?: string;
}

export default function AudioPlayer({ className }: AudioPlayerProps) {
  return (
    <>
      <div
        className={cn(
          "relative flex aspect-square h-44 w-44 flex-col justify-between gap-4 overflow-hidden rounded-3xl bg-[#1E1E1E] p-4 text-white shadow-lg",
          className,
        )}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-[#9C9A9A]">Recording 1</div>
            <div className="text-2xl font-medium">41min</div>
          </div>
          <motion.button
            className="rounded-full bg-[#292929] p-2 hover:bg-[#373737]"
            whileTap={{ scale: 0.9 }}
          >
            <Toggle />
          </motion.button>
        </div>
        <Visualizer />
        <div className="flex items-center justify-between">
          <span>01:18:16</span>
          <motion.button
            className="rounded-full bg-[#FA461F] p-2 shadow-[0_12px_30px_4px_rgba(250,70,21,0.5)] transition-colors hover:bg-[#ef5a39]"
            whileTap={{ scale: 0.9 }}
          >
            <Pause size={16} className="fill-white" strokeWidth={0} />
          </motion.button>
        </div>
      </div>
    </>
  );
}

function Toggle(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path d="M10 8h10M4 16h10" />
        <circle cx="7" cy="8" r="3" transform="rotate(90 7 8)" />
        <circle cx="17" cy="16" r="3" transform="rotate(90 17 16)" />
      </g>
    </svg>
  );
}
