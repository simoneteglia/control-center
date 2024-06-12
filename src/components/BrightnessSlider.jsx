import { Squircle } from "@squircle-js/react";
import global from "../resources/global.json";
import { CiBrightnessDown, CiBrightnessUp } from "react-icons/ci";

export default function BrightnessSlider() {
  return (
    <Squircle
      className="box"
      height={global.UTILS.BOX_HEIGHT}
      width={global.UTILS.SINGLE_BOX_WIDTH}
      cornerRadius={32}
      cornerSmoothing={1}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "40px",
          position: "relative",
        }}
      >
        <CiBrightnessDown
          style={{ position: "absolute", bottom: 40, color: "#000", zIndex: 3 }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            width: "100%",
            height: "50%",
          }}
        ></div>
      </div>
    </Squircle>
  );
}
