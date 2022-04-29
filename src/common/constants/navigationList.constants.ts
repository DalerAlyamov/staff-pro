import * as i from "@interfaces";
import pageNames from './pageNames.constants';
import routes from './routes.constants';

const employeeList: i.Navigation[] = [
  {
    name: pageNames.app.businessTrips,
    path: routes.app.businessTrips,
  },
  {
    name: pageNames.app.vacations,
    path: routes.app.vacations,
  },
];

const directorList: i.Navigation[] = [
  {
    name: pageNames.app.applications,
    path: routes.app.applications,
  },
  {
    name: pageNames.app.employees,
    path: routes.app.employees,
  },
];

const hrList: i.Navigation[] = [
  {
    name: pageNames.app.applications,
    path: routes.app.applications,
  },
  {
    name: pageNames.app.employees,
    path: routes.app.employees,
  },
  {
    name: pageNames.app.templates,
    path: routes.app.templates,
  },
];

const buyerList: i.Navigation[] = [
  {
    name: pageNames.app.applications,
    path: routes.app.applications,
  },
  {
    name: "Мои",
    path: routes.app.myApplications,
  },
];

const accountantList: i.Navigation[] = [
  {
    name: pageNames.app.applications,
    path: routes.app.applications,
  }
];

const navigationList = Object.freeze(
  Object.seal({
    employeeList,
    directorList,
		hrList,
		buyerList,
		accountantList
  })
);

export default navigationList;
