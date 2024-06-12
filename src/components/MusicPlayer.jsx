import { useEffect, useState } from "react";
import { Squircle } from "@squircle-js/react";
import { FaPlay, FaPause } from "react-icons/fa";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import hmhas from "../assets/hmhas.webp";
import chihiro from "../assets/chihiro.mp3";
import useSound from "use-sound";

export default function MusicPlayer({ dimension }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause }] = useSound(chihiro, { volume: 0.5 });

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  if (dimension == "small") {
    return (
      <Squircle
        className="box"
        cornerRadius={24}
        cornerSmoothing={1}
        width={178}
        height={178}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgb(8, 54, 89) 20%, #000000 100%)",
            padding: "15px",
            lineHeight: "10px",
            fontSize: "11px",
          }}
        >
          <Squircle
            cornerRadius={10}
            cornerSmoothing={1}
            width={65}
            height={65}
          >
            <img src={hmhas} width={65} height={65} alt="Cover" />
          </Squircle>

          <h1>CHIHIRO</h1>
          <h2 style={{ color: "rgba(255, 255, 255, 0.6)" }}>Billie Eilish</h2>
          <section
            style={{
              marginTop: "10px",
              width: "calc(178px - 30px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <TbPlayerTrackPrevFilled style={{ fontSize: "15px" }} />
            {!isPlaying ? (
              <FaPlay
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={playingButton}
              />
            ) : (
              <FaPause
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={playingButton}
              />
            )}
            <TbPlayerTrackNextFilled style={{ fontSize: "15px" }} />
          </section>
        </div>
      </Squircle>
    );
  } else
    return (
      <Squircle
        className="box"
        cornerRadius={32}
        cornerSmoothing={1}
        width={286}
        height={286}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgb(8, 54, 89) 20%, #000000 100%)",
            padding: "28px",
            lineHeight: "10px",
            fontSize: "15px",
          }}
        >
          <Squircle
            cornerRadius={24}
            cornerSmoothing={1}
            width={100}
            height={100}
            style={{ marginBottom: "20px" }}
          >
            <img src={hmhas} width={100} height={100} alt="Cover" />
          </Squircle>
          <h1>CHIHIRO</h1>
          <h2 style={{ color: "rgba(255, 255, 255, 0.6)" }}>Billie Eilish</h2>
          <section
            style={{
              marginTop: "30px",
              width: "calc(286px - 56px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <TbPlayerTrackPrevFilled style={{ fontSize: "30px" }} />
            {!isPlaying ? (
              <FaPlay
                style={{ fontSize: "35px", cursor: "pointer" }}
                onClick={playingButton}
              />
            ) : (
              <FaPause
                style={{ fontSize: "35px", cursor: "pointer" }}
                onClick={playingButton}
              />
            )}
            <TbPlayerTrackNextFilled style={{ fontSize: "30px" }} />
          </section>
        </div>
      </Squircle>
    );
}
