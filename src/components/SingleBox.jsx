import React, { useState } from "react";
import { Squircle } from "@squircle-js/react";
import "../resources/singlebox.css";
import global from "../resources/global.json";

export default function SingleBox({ icon, linkTo, type, dimension }) {
  if (type === "whoami") {
    const [height, setHeight] = useState(global.UTILS.SINGLE_BOX_WIDTH);
    return (
      <Squircle
        className="single-box box"
        cornerRadius={32}
        cornerSmoothing={1}
        width={global.UTILS.BOX_HEIGHT}
        height={height}
        onClick={() =>
          setHeight(
            height === global.UTILS.SINGLE_BOX_WIDTH
              ? global.UTILS.BOX_HEIGHT
              : global.UTILS.SINGLE_BOX_WIDTH
          )
        }
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <span
          style={{
            fontSize: "40px",
            color: "white",
          }}
        >
          {icon}
        </span>
        <h1>Who Am I? </h1>
      </Squircle>
    );
  } else if (dimension == "small") {
    return (
      <Squircle
        className="single-box box"
        cornerRadius={24}
        cornerSmoothing={1}
        width={80}
        height={80}
      >
        <a
          href={linkTo}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
            color: "white",
          }}
        >
          {icon}
        </a>
      </Squircle>
    );
  } else
    return (
      <Squircle
        className="single-box box"
        cornerRadius={32}
        cornerSmoothing={1}
        width={128}
        height={128}
      >
        <a
          href={linkTo}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "50px",
            color: "white",
          }}
        >
          {icon}
        </a>
      </Squircle>
    );
}
