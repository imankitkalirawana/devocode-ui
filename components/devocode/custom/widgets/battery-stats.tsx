"use client";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

interface BatteryStatsProps {
  className?: string;
  batteryLevel?: number;
  isCharging?: boolean;
  timeLeft?: string;
}

export default function BatteryStats({
  className,
  batteryLevel = 47,
  isCharging = true,
  timeLeft = "2hr 28min",
}: BatteryStatsProps) {
  const numberOfBars = 5;
  const fullBars = Math.floor(batteryLevel / (100 / numberOfBars));
  const remainderFill =
    (batteryLevel % (100 / numberOfBars)) / (100 / numberOfBars);

  return (
    <div
      className={cn(
        "relative flex aspect-square h-44 w-44 flex-col justify-between gap-2 rounded-3xl bg-white p-6 shadow-lg",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-2">
        {isCharging && (
          <Zap className="animate-pulse fill-[#FA461F] stroke-[#FA461F]" />
        )}
        <p className="text-4xl font-medium">{batteryLevel}%</p>
      </div>
      <div className="grid h-12 grid-cols-5 gap-2">
        {[...Array(numberOfBars)].map((_, index) => {
          const fillPercentage =
            index < fullBars
              ? "100%"
              : index === fullBars
                ? `${remainderFill * 100}%`
                : "0%";
          return (
            <div
              key={index}
              className="relative h-full w-full overflow-hidden rounded-md bg-[#F2F2F2]"
            >
              <motion.div
                className="absolute bottom-0 left-0 w-full bg-[#FA461F]"
                style={{ height: fillPercentage }}
              />
            </div>
          );
        })}
      </div>
      <div>
        <p className="text-center text-sm text-gray-500">~ {timeLeft}</p>
      </div>
    </div>
  );
}
