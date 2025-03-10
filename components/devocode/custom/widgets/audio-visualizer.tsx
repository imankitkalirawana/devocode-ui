import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Visualizer = () => {
  const [bars, setBars] = useState(Array(40).fill(1));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(bars.map(() => Math.random() * 100));

      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [bars]);

  return (
    <div className="relative flex h-24 w-full items-center gap-[2px] overflow-x-hidden overflow-y-visible px-1 pt-2">
      {bars.map((height, index) => (
        <motion.div
          key={index}
          className="flex w-[2px] rounded bg-white opacity-80"
          animate={{ height: `calc(${height}%)` }}
          transition={{ duration: 1 }}
        />
      ))}
      <motion.div
        className="absolute flex h-[98%] w-full bg-[#1E1E1E] opacity-80"
        animate={{ left: `${progress}%` }}
        transition={{ type: "linear" }}
      >
        <div className="absolute h-[100%] w-[1px] bg-[#FA461F] text-xs before:absolute before:left-[-1.5px] before:top-[-2px] before:flex before:aspect-square before:h-1 before:w-1 before:rounded-full before:bg-[#FA461F] before:content-['']"></div>
      </motion.div>
    </div>
  );
};

export default Visualizer;
