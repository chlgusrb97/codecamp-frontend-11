import React from "react";
import ReactPlayer from "react-player";

// Render a YouTube video player
export default function Player() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=j9DsLrVkj4E"
      volume={0}
      playing={true}
    />
  );
}
