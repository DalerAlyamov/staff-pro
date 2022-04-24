const auth = Object.freeze(
  Object.seal({
    login: "/login",
    passwordRecovery: "/password-recovery",
    changePassword: "/change-password",
  })
);

const app = Object.freeze(
  Object.seal({
    // личный кабинет
    home: "/",

    // список командировок
    businessTrips: "/business-trips",

    // командировка (создание/редактирование/просмотр)
    businessTrip: "/business-trips/",

    // список отпусков
    holidays: "/holidays",

    // отпускная (создание/редактирование/просмотр)
    holiday: "/holiday/",

    // список больничных
    sickLeaveList: "/sick-leave",

    // больничаня (создание/редактирование/просмотр)
    sickLeave: "/sick-leave/",

    // список уведомлений
    notifications: "/notifications",

    // список сотрудников
    employees: "/employees",

    // сотрудник (создание/редактирование/просмотр)
    employee: "/employee/",

    // список заявок
    applications: "/applications",

    // список моих заявок
    myApplications: "/applications/my",
  })
);

const routes = Object.freeze(
  Object.seal({
    auth,
    app,
  })
);

export default routes;
