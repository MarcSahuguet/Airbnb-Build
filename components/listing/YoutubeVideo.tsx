"use client";
import dynamic from "next/dynamic";
import React from "react";

type Props = {
  videoId: string;
  autoplay?: boolean;
};

function YoutubeVideo({
  videoId,
  autoplay = false,
}: Props) {

  return (
    <div className="flex flex-col ">
    <h2 className="text-xl font-semibold my-5">
      Interrail en Europe : comment ça marche ?
    </h2>
    <div className="">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1': ''}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg w-full aspect-video"
      ></iframe>
    </div>
  </div>
  );
}

export default YoutubeVideo;
