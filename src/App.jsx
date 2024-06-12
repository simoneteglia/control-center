import { useState, useEffect } from "react";
import sonoma from "./assets/sonoma.jpeg";
import "./App.css";
import SingleBox from "./components/SingleBox";
import MusicPlayer from "./components/MusicPlayer";
import { FaGithub, FaTwitter, FaLinkedin, FaUser } from "react-icons/fa";
import hfLogo from "./assets/hflogo.svg";
import WhoAmI from "./components/WhoAmI";

import global from "./resources/global.json";
import BrightnessSlider from "./components/BrightnessSlider";
import VolumeSlider from "./components/VolumeSlider";

export default function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));
  });

  if (windowSize > 662)
    /**
     * DESKTOP VIEW
     */
    return (
      <div
        id="sonoma"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${sonoma})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="blurred-container">
          <section id="first-row-container">
            <div className="left-column">
              <SingleBox
                icon={<FaGithub />}
                linkTo="https://github.com/simoneteglia"
              />
              <SingleBox icon={<FaTwitter />} linkTo="https://x.com/Enimoss9" />
              <SingleBox
                icon={<FaLinkedin />}
                linkTo="https://www.linkedin.com/in/simone-teglia/"
              />
              <SingleBox
                icon={<img src={hfLogo} width={"50%"} />}
                linkTo="https://huggingface.co/simoneteglia"
              />
            </div>
            <div className="right-column">
              <MusicPlayer />
            </div>
          </section>
          <section id="second-row-container">
            <div className="left-column">
              <SingleBox icon={<FaUser />} type="whoami" />
              <SingleBox />
              <SingleBox />
            </div>
            <div className="right-column">
              <BrightnessSlider />
              <VolumeSlider />
            </div>
          </section>
        </div>
      </div>
    );
  else {
    /**
     * MOBILE VIEW
     */
    return (
      <div
        id="sonoma"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${sonoma})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="blurred-container">
          <section id="first-row-container-small">
            <div className="left-column-small">
              <SingleBox
                icon={<FaGithub />}
                linkTo="https://github.com/simoneteglia"
                dimension="small"
              />
              <SingleBox
                icon={<FaTwitter />}
                linkTo="https://x.com/Enimoss9"
                dimension="small"
              />
              <SingleBox
                icon={<FaLinkedin />}
                linkTo="https://www.linkedin.com/in/simone-teglia/"
                dimension="small"
              />
              <SingleBox
                icon={<img src={hfLogo} width={"50%"} />}
                linkTo="https://huggingface.co/simoneteglia"
                dimension="small"
              />
            </div>
            <div className="right-column-small">
              <MusicPlayer dimension="small" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
