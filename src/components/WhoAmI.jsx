import { Squircle } from "@squircle-js/react";
import global from "../resources/global.json";
import "../resources/whoami.css";

export default function WhoAmI() {
  return (
    <Squircle
      className="box"
      height={global.UTILS.BOX_HEIGHT}
      width={global.UTILS.BOX_HEIGHT * 2 + global.UTILS.GAP}
      cornerRadius={56}
      cornerSmoothing={1}
    >
      <div
        className="whoami-box"
        style={{
          width: "100%",
          height: "100%",
          color: "white",
          padding: "28px 40px",
        }}
      >
        <h1>SIMONE TEGLIA</h1>
      </div>
    </Squircle>
  );
}
