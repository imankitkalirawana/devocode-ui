import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";

interface AppleCalendarSquareProps {
  className?: string;
  events?: {
    title: string;
    colorCode: string;
  }[];
  isDark?: boolean;
}

export default function AppleCalendarSquare({
  className,
  isDark = false,
  events = [
    {
      title: "Veterans Day",
      colorCode: "#63DA38",
    },
    {
      title: "Lunch with Sarah",
      colorCode: "#FF453A",
    },
  ],
}: AppleCalendarSquareProps) {
  const date = new Date();

  return (
    <>
      <div
        className={cn(
          "relative flex aspect-square h-44 w-44 flex-col justify-start gap-2 overflow-hidden rounded-3xl p-4 shadow-lg",
          isDark ? "bg-[#2E2E2E] text-white" : "bg-white",
          className,
        )}
      >
        <div>
          <span className="text-xs capitalize leading-none text-[#FF453A]">
            {new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date)}
          </span>
          <h3 className="text-3xl leading-none">{date.getDate()}</h3>
          <p
            className={cn(
              "text-xs",
              isDark ? "text-gray-300" : "text-gray-500",
            )}
          >
            {new Intl.DateTimeFormat("en-US", {
              month: "long",
              year: "numeric",
            }).format(date)}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {events.map((event, i) => {
            const bgColor = event.colorCode + "40";
            return (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full pr-[2px]"
                style={{
                  color: event.colorCode,
                  backgroundColor: bgColor,
                }}
              >
                <span
                  className={cn(
                    "rounded-full p-1",
                    isDark ? "text-[#2E2E2E]" : "text-white",
                  )}
                  style={{ backgroundColor: event.colorCode }}
                >
                  <CalendarDays size={10} />
                </span>
                <span className="text-xs">{event.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
