"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  innerContent?: React.ReactNode;
  progressColor?: string;
  strokeColor?: string;
  rotate?: number;
  className?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  size = 100,
  strokeWidth = 10,
  innerContent,
  progressColor = "#FA461F",
  strokeColor = "#292929",
  rotate = -90,
  className,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const rotation = `rotate(${rotate}deg)`;

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        className={`transform`}
        style={{
          transform: rotation,
        }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke="currentColor"
          style={{
            color: strokeColor,
          }}
        />

        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          className={cn("transition-all duration-500 ease-out")}
          style={{
            color: progressColor,
          }}
          strokeDasharray={circumference}
          stroke="currentColor"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
        />
      </svg>

      {innerContent && <div className="absolute">{innerContent}</div>}
    </div>
  );
};

export default CircularProgress;
