import React from "react";

/******************** Auth ********************/

const ChangePassword = React.lazy(() =>
  import("@pages").then(({ ChangePassword }) => ({ default: ChangePassword }))
);

const Login = React.lazy(() =>
  import("@pages").then(({ Login }) => ({ default: Login }))
);

const PasswordRecovery = React.lazy(() =>
  import("@pages").then(({ PasswordRecovery }) => ({ default: PasswordRecovery }))
);


/******************** App ********************/

const Applications = React.lazy(() =>
  import("@pages").then(({ Applications }) => ({ default: Applications }))
);

const MyApplications = React.lazy(() =>
  import("@pages").then(({ MyApplications }) => ({ default: MyApplications }))
);

const BusinessTrip = React.lazy(() =>
  import("@pages").then(({ BusinessTrip }) => ({ default: BusinessTrip }))
);

const BusinessTrips = React.lazy(() =>
  import("@pages").then(({ BusinessTrips }) => ({ default: BusinessTrips }))
);

const Employee = React.lazy(() =>
  import("@pages").then(({ Employee }) => ({ default: Employee }))
);

const Employees = React.lazy(() =>
  import("@pages").then(({ Employees }) => ({ default: Employees }))
);

const Vacation = React.lazy(() =>
  import("@pages").then(({ Vacation }) => ({ default: Vacation }))
);

const Vacations = React.lazy(() =>
  import("@pages").then(({ Vacations }) => ({ default: Vacations }))
);

const Home = React.lazy(() =>
  import("@pages").then(({ Home }) => ({ default: Home }))
);

const Notifications = React.lazy(() =>
  import("@pages").then(({ Notifications }) => ({ default: Notifications }))
);

const Templates = React.lazy(() =>
  import("@pages").then(({ Templates }) => ({ default: Templates }))
);

const Auth = Object.freeze(
  Object.seal({
    ChangePassword,
    Login,
    PasswordRecovery
  })
);

const App = Object.freeze(
  Object.seal({
    Applications,
    BusinessTrip,
    BusinessTrips,
    Employee,
    Employees,
    Vacation,
    Vacations,
    Home,
    MyApplications,
    Notifications,
    Templates
  })
);

const RouteList = Object.freeze(
  Object.seal({
    Auth,
    App
  })
)

export default RouteList;