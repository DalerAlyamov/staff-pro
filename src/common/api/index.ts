import accountant from "./accountant.api";
import auth from "./auth.api";
import businessTrip from "./businessTrip.api";
import buyer from "./buyer.api";
import director from "./director.api";
import employee from "./employee.api";
import hr from "./hr.api";
import notifications from "./notifications.api";
import vacation from "./vacation.api";

const api = Object.freeze(
  Object.seal({
    accountant,
    auth,
    businessTrip,
    buyer,
    director,
    employee,
    hr,
    notifications,
    vacation
  })
);

export default api;
