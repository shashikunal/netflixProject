import React, { useRef, useState } from "react";
import "./slider.css";
const PreLoadedVideo = () => {
  let videoRef = useRef(null);
  let [Play, setPlay] = useState(true);
  let [videoIcon, setVideoIcon] = useState(<i className="fas fa-play"></i>);

  let MakePlayOrPause = () => {
    setPlay(!Play);
    Play === true ? videoRef.current.play() : videoRef.current.pause();
    Play === true
      ? setVideoIcon(<i className="fas fa-pause"></i>)
      : setVideoIcon(<i className="fas fa-play"></i>);
  };
  return (
    <section id="preLoadedBlock">
      <article>
        <aside className="videoDesc">
          <h2>Watch Season 2 now</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            cum? ut?
          </p>
          <span>
            <button onClick={MakePlayOrPause}>
              {videoIcon}
              {Play ? "Play" : "Pause"}
            </button>
            <button>
              <i class="far fa-info-circle"></i>
              More Info
            </button>
          </span>
        </aside>
        <video
          onClick={MakePlayOrPause}
          src="video/BreakingBad.mp4"
          autoPlay
          loop
          muted
          ref={videoRef}
        ></video>
      </article>
    </section>
  );
};

export default PreLoadedVideo;
