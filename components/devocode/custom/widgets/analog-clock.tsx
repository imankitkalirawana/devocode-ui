"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnalogClockProps {
  className?: string;
}

export default function AnalogClock({ className }: AnalogClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate rotation for each hand based on the current time
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondRotation = seconds * 6; // 360 degrees / 60 seconds
  const minuteRotation = minutes * 6 + seconds * 0.1; // 360 degrees / 60 minutes + small adjustment based on seconds
  const hourRotation = hours * 30 + minutes * 0.5; // 360 degrees / 12 hours + small adjustment based on minutes

  return (
    <div
      className={cn(
        "relative flex aspect-square h-48 w-48 flex-col justify-between gap-2 rounded-3xl",
        className,
      )}
    >
      <div
        className="relative flex aspect-square items-center justify-center rounded-full border-4 border-[#1E1E1E] bg-[#F5F5F5] bg-cover bg-center before:absolute before:h-3 before:w-3 before:rounded-full before:border-2 before:border-[#6e50fd] before:bg-[#6e50fd] before:transition-all before:content-[''] before:zoom-in-90"
        style={{ backgroundImage: "url('/clock.png')" }}
      >
        <motion.div
          className="absolute z-[2] flex h-[50%] w-[10em] justify-center before:absolute before:h-1/2 before:w-[5px] before:bg-black"
          style={{ transform: `rotate(${hourRotation}deg)` }}
          initial={{ height: "0%" }}
          animate={{ height: "50%" }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute z-[3] flex h-[70%] w-[12em] justify-center before:h-1/2 before:w-[3px] before:bg-black before:content-['']"
          style={{ transform: `rotate(${minuteRotation}deg)` }}
          initial={{ height: "0%" }}
          animate={{ height: "70%" }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="absolute z-20 flex h-[80%] justify-center transition-all before:h-1/2 before:w-[2px] before:bg-[#F8393F] before:content-['']"
          style={{ transform: `rotate(${secondRotation}deg)` }}
          initial={{ height: "0%" }}
          animate={{ height: "80%" }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="after:content[''] absolute bottom-1/2 left-[1px] h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#F8393F] after:absolute after:left-1/2 after:h-4 after:w-[2px] after:-translate-x-1/2 after:bg-[#F8393F]"></div>
        </motion.div>
        <div className="absolute z-10 h-4 w-4 rounded-full bg-white shadow-lg" />
        <div className="relative h-full w-full">
          <div className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 transform text-7xl font-bold text-white drop-shadow-lg">
            {hours}
          </div>
        </div>
      </div>
    </div>
  );
}
