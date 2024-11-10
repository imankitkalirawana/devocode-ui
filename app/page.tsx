"use client";
import Flight from "@/components/devocode/custom/widgets/flight";
import WifiToggle from "@/components/devocode/custom/widgets/wifi-toggle";
import { Clipboard } from "lucide-react";
import { motion } from "framer-motion";
import { HealthStats } from "@/components/devocode/custom/widgets/health-stats";
import Habits from "@/components/devocode/custom/widgets/habits";
import BoardingDirection from "@/components/devocode/custom/widgets/boarding-direction";
import AudioPlayer from "@/components/devocode/custom/widgets/audio-player";
import { MapDirections } from "@/components/devocode/custom/widgets/map-directions";

const widgets = [
  { name: "WifiToggle", component: <WifiToggle /> },
  { name: "Flight", component: <Flight progress={52} /> },
  { name: "Health Stats", component: <HealthStats /> },
  { name: "Habits", component: <Habits /> },
  { name: "Boarding Direction", component: <BoardingDirection /> },
  { name: "Audio Player", component: <AudioPlayer /> },
  { name: "Map Direction", component: <MapDirections /> },
];

export default function Home() {
  return (
    <>
      <div className="relative flex max-w-full flex-wrap gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {widgets.map((widget) => (
          <Card key={widget.name} widget={widget} />
        ))}
      </div>
    </>
  );
}

function Card({
  widget,
}: {
  widget: { name: string; component: JSX.Element };
}) {
  const copyToClipboard = () => {};
  return (
    <>
      <div
        key={widget.name}
        className="flex flex-col gap-2 rounded-xl rounded-b-[36px] border border-gray-500/30 bg-gray-100 p-4"
      >
        <div className="flex items-center justify-end">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="rounded-sm p-1 transition-colors hover:bg-gray-200"
            onClick={copyToClipboard}
          >
            <Clipboard className="size-3" strokeWidth={1} />
          </motion.button>
        </div>
        {widget.component}
      </div>
    </>
  );
}
