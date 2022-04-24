import React from "react";

/******************** App ********************/

const Home = React.lazy(() =>
import("@pages").then(({ Home }) => ({ default: Home }))
);

const BusinessTrip = React.lazy(() =>
  import("@pages").then(({ BusinessTrip }) => ({ default: BusinessTrip }))
);

const BusinessTrips = React.lazy(() =>
  import("@pages").then(({ BusinessTrips }) => ({ default: BusinessTrips }))
);

const Holidays = React.lazy(() =>
  import("@pages").then(({ Holidays }) => ({ default: Holidays }))
);


const App = Object.freeze(
  Object.seal({
    Home,
    BusinessTrip,
    BusinessTrips,
    Holidays,
  })
);

export default App;