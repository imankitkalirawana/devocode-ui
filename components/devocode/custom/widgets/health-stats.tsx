import { cn } from "@/lib/utils";
import CircularProgress from "@/components/devocode/custom/widgets/circular-progress";

interface HealthStatsProps {
  className?: string;
}

export function HealthStats({ className }: HealthStatsProps) {
  return (
    <>
      <div
        className={cn(
          "relative flex aspect-[11/5] h-44 flex-col justify-between gap-4 overflow-hidden rounded-3xl bg-white p-6 text-black shadow-lg",
          className,
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-end">
            <p className="text-4xl font-semibold leading-none">2.8</p>
            <span className="">km</span>
          </div>
          <CircularProgress
            progress={70}
            size={60}
            strokeWidth={3}
            strokeColor="#E9E9E9"
            progressColor="#000"
            innerContent={
              <div className="flex flex-col items-center">
                <span className="leading-none">64</span>
                <span className="leading-none">km</span>
              </div>
            }
          />
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Steps</p>
            <p>2.8 km</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Goal</p>
            <p>64 km</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Calories</p>
            <p>134kcal</p>
          </div>
        </div>
      </div>
    </>
  );
}
