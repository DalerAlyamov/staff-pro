const auth = Object.freeze(
  Object.seal({
    // изменение пароля
    changePassword: "/auth/change-password",

    // вход
    login: "/auth",

    // восстановление пароля
    passwordRecovery: "/auth/password-recovery",
  })
);

const app = Object.freeze(
  Object.seal({
    // список заявок
    applications: "/applications",

    // список моих заявок
    myApplications: "/applications/my",

    // командировка (создание/редактирование/просмотр)
    businessTrip: "/business-trips/",

    // список командировок
    businessTrips: "/business-trips",

    // сотрудник (создание/редактирование/просмотр)
    employee: "/employees/",

    // список сотрудников
    employees: "/employees",

    // отпускная (создание/редактирование/просмотр)
    holiday: "/holidays/",

    // список отпусков
    holidays: "/holidays",

    // личный кабинет
    home: "/",

    // список уведомлений
    notifications: "/notifications",

    // больничаня (создание/редактирование/просмотр)
    sickLeave: "/sick-leave/",

    // список больничных
    sickLeaveList: "/sick-leave",
  })
);

const routes = Object.freeze(
  Object.seal({
    auth,
    app,
  })
);

export default routes;
