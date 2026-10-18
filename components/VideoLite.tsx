"use client";

import Image from "next/image";
import { useState } from "react";
import type { Img } from "@/lib/content";
import { Play } from "./icons";

/** Poster + play button; the YouTube iframe is only created after a click. */
export default function VideoLite({ videoId, title, poster }: { videoId: string; title: string; poster: Img }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="video">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <>
          <Image src={poster.src} alt={poster.alt} fill sizes="(max-width: 1199px) 100vw, 1170px" />
          <a
            className="video-play"
            href={`https://youtu.be/${videoId}`}
            onClick={(e) => {
              e.preventDefault();
              setPlaying(true);
            }}
          >
            <span className="video-play-btn">
              <Play />
            </span>
            <span className="video-title">{title}</span>
          </a>
        </>
      )}
    </div>
  );
}
