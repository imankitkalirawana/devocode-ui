"use client";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Wifi } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface WifiToggleProps {
  className?: string;
  isOn?: boolean;
  wifiName?: string;
  href?: string;
}

export default function WifiToggle({
  className,
  isOn,
  wifiName,
  href,
}: WifiToggleProps) {
  const [checked, setChecked] = useState(isOn || false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div
        className={cn(
          "flex aspect-square h-44 w-44 flex-col justify-between gap-2 rounded-3xl bg-white p-4 shadow-lg",
          className,
        )}
      >
        <div className={cn("flex items-center justify-between gap-4")}>
          <motion.div
            className={cn(
              "flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white transition-colors",
              {
                "bg-blue-500 hover:bg-blue-400": checked,
                "bg-gray-100 text-black hover:bg-gray-200": !checked,
              },
            )}
            onClick={handleChange}
            whileTap={{ scale: 0.9 }}
          >
            <Wifi fontSize={20} />
          </motion.div>
          <motion.a
            href={href || "#"}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-black transition-colors hover:bg-gray-200",
            )}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUpRight fontSize={20} />
          </motion.a>
        </div>
        <div>
          <h3>Wi-Fi</h3>
          <div className="line-clamp-1 flex items-center gap-0 whitespace-nowrap text-sm text-gray-500">
            {checked ? `On • ${wifiName || "ankit's_wifi"}` : "Off"}
          </div>
        </div>
        <div className="flex justify-end">
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              className="peer sr-only"
              value=""
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            />
            <div className="peer h-10 w-16 rounded-full bg-gray-200 outline-none duration-100 after:absolute after:left-1 after:top-1 after:flex after:h-8 after:w-8 after:items-center after:justify-center after:rounded-full after:bg-white after:font-bold after:text-sky-800 after:outline-none after:duration-500 peer-checked:bg-green-500 peer-checked:shadow-[0_22px_70px_4px_rgba(34,197,94,0.5)] peer-checked:after:translate-x-6 peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500"></div>
          </label>
        </div>
      </div>
    </>
  );
}
