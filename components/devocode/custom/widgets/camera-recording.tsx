import { cn } from "@/lib/utils";
import { ArrowUpRight, Square, Video } from "lucide-react";
import { motion } from "framer-motion";

interface CameraRecordingProps {
  className?: string;
  onClick?: () => void;
  isRecording?: boolean;
}

export default function CameraRecording({
  className,
  isRecording = true,
  onClick = () => {
    console.log("Recording");
  },
}: CameraRecordingProps) {
  return (
    <>
      <div
        className={cn(
          "relative flex aspect-square h-44 w-44 flex-col justify-between gap-2 overflow-hidden rounded-3xl bg-white p-4 shadow-lg",
          className,
        )}
      >
        <div className="flex">
          <div className="rounded-full bg-[#208BFF] p-4 text-white">
            <Video size={18} />
          </div>
        </div>
        <div>
          <h3 className="leading-nne font-medium">Camera</h3>
          <p className="text-xs text-gray-500">Recording</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">05:09:12</p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
            className="rounded-full bg-[#FA461F] p-4 text-white shadow-[0px_12px_70px_4px_rgba(250,70,21,0.5)]"
          >
            {isRecording ? <Square size={16} className="fill-white" /> : null}
          </motion.button>
        </div>
      </div>
    </>
  );
}
