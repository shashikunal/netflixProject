import React from "react";
import "./slider.css";
const PreLoadedVideo = () => {
  return (
    <section id="preLoadedBlock">
      <article>
        <video src="video/BreakingBad.mp4" autoPlay loop muted></video>
      </article>
    </section>
  );
};

export default PreLoadedVideo;
