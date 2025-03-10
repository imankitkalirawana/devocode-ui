import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface BoardingDirectionProps {
  className?: string;
}

export default function BoardingDirection({
  className,
}: BoardingDirectionProps) {
  return (
    <>
      <div
        className={cn(
          "relative flex aspect-square h-44 w-44 flex-col justify-between gap-2 rounded-3xl bg-white p-6 shadow-lg",
          className,
        )}
      >
        <span className="absolute left-3 top-3 size-[10px] rounded-full bg-gray-200"></span>
        <span className="absolute right-3 top-3 size-[10px] rounded-full bg-gray-200"></span>
        <span className="absolute bottom-3 left-3 size-[10px] rounded-full bg-gray-200"></span>
        <span className="absolute bottom-3 right-3 size-[10px] rounded-full bg-gray-200"></span>
        <div className="flex flex-col">
          <div className="flex justify-end">
            <motion.div
              whileInView={{ rotate: [0, -45, 20, 0] }}
              transition={{ duration: 3 }}
            >
              <ArrowUpRight fontSize={24} size={36} />
            </motion.div>
          </div>
          <div>
            <h3 className="text-4xl font-medium">A12</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="">Gate Open</h3>
            <h3 className="text-[11px] text-gray-400">
              Departure in <span className="font-medium">32 min</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
