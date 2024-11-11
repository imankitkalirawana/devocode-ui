import { cn } from "@/lib/utils";

import {
  ListMusic,
  LucideProps,
  Pause,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { motion } from "framer-motion";

interface MusicPlayerProps {
  className?: string;
  musicLength: number; // in seconds
  musicCurrentTime: number; // in seconds
  musicTitle: string;
  musicArtist: string;
  musicCover: string;
  isPlaying: boolean;
  onShuffle?: () => void;
  onPrevious?: () => void;
  onPlayPause?: () => void;
  onNext?: () => void;
  onRepeat?: () => void;
}

export function MusicPlayer({
  className,
  musicLength = 212,
  musicCurrentTime = 97,
  musicTitle = "Love Me Like You Do",
  musicArtist = "Ellie Goulding",
  musicCover = "https://upload.wikimedia.org/wikipedia/en/1/17/Ellie_Goulding_-_Love_Me_Like_You_Do.png",
  isPlaying = false,
  onShuffle,
  onPrevious,
  onPlayPause,
  onNext,
  onRepeat,
}: MusicPlayerProps) {
  return (
    <>
      <div
        className={cn(
          "relative flex aspect-[11/5] h-44 flex-col justify-between gap-4 overflow-hidden rounded-3xl bg-white p-6 text-black shadow-lg",
          className,
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
              <img
                src={musicCover}
                alt="music cover"
                width="50"
                height="50"
                className="rounded-lg shadow-[0_10px_100px_0px_#FA461F]"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="capitalize">{musicTitle}</h3>
              <p className="text-xs text-gray-500">{musicArtist}</p>
            </div>
          </div>
          <div>
            <Spotify fontSize={28} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-xs text-gray-500">
              {Math.floor(musicCurrentTime / 60)}:
              {musicCurrentTime % 60 < 10
                ? `0${musicCurrentTime % 60}`
                : musicCurrentTime % 60}
            </span>
            <span className="text-xs text-gray-500">
              {Math.floor(musicLength / 60)}:
              {musicLength % 60 < 10
                ? `0${musicLength % 60}`
                : musicLength % 60}
            </span>
          </div>
          <div className="h-[5px] w-full rounded-full bg-[#F7F7F7]">
            <motion.div
              className="relative h-full rounded-full bg-black after:absolute after:-right-1 after:-top-[4px] after:h-3 after:w-3 after:rounded-full after:bg-black after:content-['']"
              initial={{ width: "0%" }}
              animate={{ width: `${(musicCurrentTime / musicLength) * 100}%` }}
            />
          </div>
        </div>
        <div className="grid grid-cols-5 justify-items-center">
          <motion.button
            className="w-fit rounded-full p-2 transition-all hover:bg-[#F7F7F7]"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={onShuffle}
          >
            <Shuffle size={16} />
          </motion.button>
          <motion.button
            className="w-fit rounded-full p-2 transition-all hover:bg-[#F7F7F7]"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={onPrevious}
          >
            <SkipBack size={16} />
          </motion.button>
          <motion.button
            className="w-fit rounded-full p-2 transition-all hover:bg-[#F7F7F7]"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={onPlayPause}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </motion.button>
          <motion.button
            className="w-fit rounded-full p-2 transition-all hover:bg-[#F7F7F7]"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={onNext}
          >
            <SkipForward size={16} />
          </motion.button>
          <motion.button
            className="w-fit rounded-full p-2 transition-all hover:bg-[#F7F7F7]"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={onRepeat}
          >
            <ListMusic size={16} />
          </motion.button>
        </div>
      </div>
    </>
  );
}

function Spotify(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="#1ed760"
        d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.98 7.98 0 0 1-9.552-6.007a7.97 7.97 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975m15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187z"
      />
    </svg>
  );
}
