"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
const VideoPlayer = ({ bg, hours }) => {
  let url;

  if (hours > 6 && hours < 18) {
    url = `/Videos/Day/${bg.toLowerCase()}.mp4`;
  } else {
    url = `/Videos/Night/${bg.toLowerCase()}.mp4`;
  }
  return (
    <>
      <ReactPlayer
        className='h-dvh absolute max-[850px]:fixed -z-10 video'
        muted
        playing
        url={url}
        loop
      />

      <source src={url} type='video/mp4' />
    </>
  );
};

export default VideoPlayer;
