import React from "react";
import spinner from "@assets/gif/spinner.gif";

const Loading: React.FC = (): JSX.Element => {
  return React.createElement(
    "div",
    {
      className: "loading",
    },
    React.createElement(
      "img",
      { src: spinner, alt: "loading...", style: { width: "5rem" } },
      null
    )
  );
};

export default Loading;
