import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import CircularProgress from "./circular-progress";

interface AppleBatterySquareProps {
  className?: string;
  isDark?: boolean;
  device:
    | "iphone"
    | "ipad"
    | "macbook"
    | "watch"
    | "airpods"
    | "homepod"
    | "imac";
  batteryLevel?: number;
}

export default function AppleBatterySquare({
  className,
  isDark = false,
  device = "iphone",
  batteryLevel = 47,
}: AppleBatterySquareProps) {
  const DeviceIconMap: Record<string, React.ReactNode> = {
    iphone: (
      <Icon
        icon="icon-park-twotone:iphone"
        fontSize={28}
        className={isDark ? "text-gray-300" : "text-black"}
      />
    ),
    ipad: (
      <Icon
        icon="icon-park-twotone:ipad"
        fontSize={28}
        className={isDark ? "text-gray-300" : "text-black"}
      />
    ),
    macbook: (
      <Icon
        icon="ic:twotone-laptop-mac"
        fontSize={28}
        className={isDark ? "text-gray-300" : "text-black"}
      />
    ),
    imac: (
      <Icon
        icon="ic:twotone-desktop-mac"
        fontSize={28}
        className={isDark ? "text-gray-300" : "text-black"}
      />
    ),
    watch: (
      <Icon
        icon="solar:watch-square-bold-duotone"
        fontSize={32}
        className={isDark ? "text-gray-300" : "text-black"}
      />
    ),
    airpods: (
      <Icon
        icon="icon-park-twotone:iphone"
        fontSize={28}
        className={isDark ? "text-gray-300" : "text-black"}
      />
    ),
    homepod: (
      <Icon
        icon="mingcute:homepod-mini-line"
        fontSize={28}
        className={isDark ? "text-gray-300" : "text-black"}
      />
    ),
  };
  return (
    <>
      <div
        className={cn(
          "relative flex aspect-square h-44 w-44 flex-col justify-between gap-2 overflow-hidden rounded-3xl p-4 shadow-lg",
          isDark ? "bg-[#2E2E2E] text-white" : "bg-white",
          className,
        )}
      >
        <div className="flex justify-start">
          <CircularProgress
            progress={25}
            strokeWidth={8}
            size={75}
            progressColor={batteryLevel > 20 ? "#32D74B" : "#FF453A"}
            strokeColor={isDark ? "#434343" : "#C7C7CB"}
            innerContent={DeviceIconMap[device]}
          />
        </div>
        <div>
          <h3
            className={cn("text-5xl", isDark ? "text-gray-300" : "text-black")}
          >
            {batteryLevel}%
          </h3>
        </div>
      </div>
    </>
  );
}
