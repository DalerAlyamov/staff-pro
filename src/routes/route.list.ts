import React from "react";

/******************** App ********************/

const Home = React.lazy(() =>
  import("@pages").then(({ Home }) => ({ default: Home }))
);

export const App = Object.freeze(
  Object.seal({
    Home
  })
)