"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideProps } from "lucide-react";

interface FlightProps {
  className?: string;
  progress: number;
}

export default function Flight({ className, progress = 50 }: FlightProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  const clampedWidth = `${clampedProgress}%`;

  return (
    <>
      <div
        className={cn(
          "relative flex aspect-square h-44 w-44 flex-col justify-between gap-4 overflow-hidden rounded-3xl bg-[#1E1E1E] p-4 pb-12 text-white shadow-lg",
          className,
        )}
      >
        <div>
          <div className="text-xs text-[#9C9A9A]">Arrival in</div>
          <div className="text-2xl font-medium">41min</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-[#9C9A9A]">10:30</span>
            <h4 className="text-lg">LHR</h4>
            <span className="text-xs text-[#9C9A9A]">London</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-[#9C9A9A]">15:30</span>
            <h4 className="text-lg">DEL</h4>
            <span className="text-xs text-[#9C9A9A]">New Delhi</span>
          </div>
        </div>
        <motion.div
          className={cn(
            "absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-orange-500/10",
          )}
          //   style={{ width: clampedWidth }}
          initial={{ width: "0%" }}
          animate={{ width: clampedWidth }}
          transition={{ duration: 5, type: "spring" }}
        >
          <div className="absolute bottom-0 left-0 h-4 w-full bg-[#FA461F]"></div>
          <div className="absolute bottom-0 right-[-2px] h-[40%] w-[1px] bg-[#FA461F] text-xs before:absolute before:left-[-1.5px] before:top-[-2px] before:flex before:aspect-square before:h-1 before:w-1 before:rounded-full before:bg-[#FA461F] before:content-['']"></div>
          <div className="absolute bottom-[45%] right-[-10px]">
            <Plane className="size-4 rotate-45 fill-[#FA461F] stroke-none" />
          </div>
        </motion.div>
      </div>
    </>
  );
}

function Plane(props: LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}
