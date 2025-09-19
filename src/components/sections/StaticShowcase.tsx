"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";

// Using your files: public/images/video/{poster1.webp, video1.mp4, ...}
const CARDS = [
  {
    poster: "/images/video/poster3.webp",
    video: "/images/video/video3.mp4",
    alt: "Video 3",
  },
  {
    poster: "/images/video/poster2.webp",
    video: "/images/video/video2.mp4",
    alt: "Video 2",
  },{
    poster: "/images/video/sourcing.png",
    video: "/images/video/sourcing.mp4",
    alt: "Video Sourcing",
  },  
  {
    poster: "/images/video/poster3.webp",
    video: "/images/video/video3.mp4",
    alt: "Video 3",
  },
  {
    poster: "/images/video/poster2.webp",
    video: "/images/video/video2.mp4",
    alt: "Video 2 duplicate",
  },
];

type VideoSize = { width: number; height: number };

function VideoCard({
  poster,
  video,
  alt,
  size,
  className = "",
}: {
  poster: string;
  video: string;
  alt: string;
  size: VideoSize; // exact pixel size
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-2xl ${className}`}
      style={{ width: size.width, height: size.height }}
    >
      {/* Poster */}
      <Image
        src={poster}
        alt={alt}
        fill
        sizes={`${size.width}px`}
        className={`object-cover transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
        priority={false}
      />

      {/* Video (autoplay muted loop) */}
      <video
        ref={ref}
        className={`absolute inset-0 w-full h-full object-cover ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        playsInline
        muted
        loop
        autoPlay
        onCanPlay={() => setLoaded(true)}
        poster={poster}
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
    </div>
  );
}

export default function StaticShowcase() {
  // Exact sizes per spec
  const SIZE_CENTER: VideoSize = { width: 500, height: 316.667 };
  const SIZE_SIDE_1: VideoSize = { width: 245, height: 170 }; // first video on both side
  const SIZE_SIDE_2: VideoSize = { width: 183.75, height: 127.5 }; // second video on both side

  return (
    <Section
      padding="none"
      background="bg-[#020617]"
      className="relative wave_pattern_revert pt-[78px] pb-[78px]"
      containerSize="content"
    >
      {/* 52px from logo row above */}
      <div className="relative z-[1] mt-[52px]">
        <div className="flex items-center justify-center">
          {/* Left group (pulled 150px under center) */}
          <div className="flex items-center mr-[-150px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="-rotate-2 z-[5] -mr-[40px]"
            >
              <VideoCard {...CARDS[0]} size={SIZE_SIDE_2} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="-rotate-3 z-[10]"
            >
              <VideoCard {...CARDS[1]} size={SIZE_SIDE_1} />
            </motion.div>
          </div>

          {/* Center large (top layer) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="z-[30]"
          >
            <VideoCard {...CARDS[2]} size={SIZE_CENTER} />
          </motion.div>

          {/* Right group (pulled 150px under center) */}
          <div className="flex items-center ml-[-150px]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rotate-3 z-[10]"
            >
              <VideoCard {...CARDS[3]} size={SIZE_SIDE_1} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rotate-2 z-[5] -ml-[40px]"
            >
              <VideoCard {...CARDS[4]} size={SIZE_SIDE_2} />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
