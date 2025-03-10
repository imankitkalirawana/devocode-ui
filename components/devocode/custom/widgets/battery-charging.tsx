"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Pause, Zap } from "lucide-react";

interface BatteryChargingProps {
  className?: string;
  isCharging?: boolean;
  batteryLevel?: number;
  timeLeft?: string;
}

export default function BatteryCharging({
  className,
  isCharging = true,
  batteryLevel = 67,
  timeLeft = "54 min",
}: BatteryChargingProps) {
  return (
    <>
      <div
        className={cn(
          "relative flex aspect-square h-44 w-44 flex-col justify-between gap-2 overflow-hidden rounded-3xl bg-[#1E1E1E] p-4 text-white shadow-lg",
          className,
        )}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span>
              <Zap
                className={cn("fill-[#C8FF01] stroke-[#C8FF01]", {
                  "fill-[#FA461F] stroke-[#FA461F]": batteryLevel < 20,
                  "animate-pulse": isCharging,
                })}
              />
            </span>
            <p className="text-sm text-[#A6A7A3]">
              {isCharging ? "Charging..." : "Not Charging"}
            </p>
          </div>
          <div className="line-clamp-1 flex items-center gap-0 whitespace-nowrap text-sm text-[#FDFFF6]">
            {`${batteryLevel}% • ${timeLeft} left`}
          </div>
        </div>
        <div className="relativ flex flex-col gap-1">
          <div className="flex justify-between text-xs text-[#9F9F9E]">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div className="relative h-16 w-full rounded-xl border-2 border-[#3C3D36] bg-[#2C2E27]">
            <motion.div
              className={cn(
                "relative h-[110%] -translate-x-[3px] -translate-y-[3px] rounded-xl bg-[#C8FF01] shadow-[0_0_50px_4px_rgba(200,255,1,0.25)] after:absolute after:right-3 after:top-1/2 after:h-6 after:w-[3px] after:-translate-y-1/2 after:rounded-full after:bg-[#373C24] after:content-['']",
                {
                  "bg-[#FA461F] shadow-[0_0_50px_4px_rgba(250,70,31,0.25)]":
                    batteryLevel < 20,
                },
              )}
              initial={{ width: "10%" }}
              animate={{ width: `calc(${batteryLevel}% + 10px)` }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
