const auth = Object.freeze(
  Object.seal({
    login: "Вход",
    passwordRecovery: "Восстановление пароля",
    changePassword: "Изменение пароля",
  })
);

const app = Object.freeze(
  Object.seal({
    home: "Личный кабинет", 
    businessTrips: "Командировки", 
    businessTrip: (name: string) => `${name} | Командировка`, 
    holidays: "Отпуска", 
    holiday: (name: string) => `${name} | Отпуск`, 
    notifications: "Уведомления", 
    employees: "Сотрудники", 
    employee: (name: string) => `${name} | Сотрудник`, 
    applications: "Заявки", 
    myApplications: "Мои заявки", 
    templates: "Шаблоны",
  })
);

const pageNames = Object.freeze(
  Object.seal({
    auth,
    app,
  })
);

export default pageNames;
