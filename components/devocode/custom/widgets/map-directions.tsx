import { cn } from "@/lib/utils";
import CircularProgress from "@/components/devocode/custom/widgets/circular-progress";
import { CornerUpLeft } from "lucide-react";

interface MapDirectionsProps {
  className?: string;
}

export function MapDirections({ className }: MapDirectionsProps) {
  return (
    <>
      <div
        className={cn(
          "relative flex aspect-[11/5] h-44 flex-col justify-between gap-4 overflow-hidden rounded-3xl bg-[#1E1E1E] p-4 text-white shadow-lg",
          className,
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-2">
            <CornerUpLeft />
            <div className="flex items-end">
              <p className="text-4xl font-semibold leading-none">150</p>
              <span>m</span>
            </div>
          </div>
          <CircularProgress
            progress={70}
            size={60}
            strokeWidth={3}
            strokeColor="#353535"
            progressColor="#fff"
            innerContent={
              <div className="flex flex-col items-center">
                <span className="leading-none">57</span>
                <span className="leading-none">km</span>
              </div>
            }
          />
        </div>
        <hr className="border-[#2C2C2C]" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">ETA</p>
            <p>14:59</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Speed</p>
            <p>79 km/hr</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Distance Left</p>
            <p>8.3 kms</p>
          </div>
        </div>
      </div>
    </>
  );
}
