const status: {
  idToName: { [key: number]: string };
  nameToId: { [key: string]: number };
} = Object.freeze(
  Object.seal({
    idToName: {
      0: "Черновик",
      1: "На рассмотрении",
      2: "Одобрено",
      3: "Отказано",
      4: "На доработку",
      5: "В закупке",
      6: "В процессе",
      7: "Проверка документов",
      8: "Доработка документов",
      9: "Завершено",
    },
    nameToId: {
      "Черновик": 0,
      "На рассмотрении": 1,
      "Одобрено": 2,
      "Отказано": 3,
      "На доработку": 4,
      "В закупке": 5,
      "В процессе": 6,
      "Проверка документов": 7,
      "Доработка документов": 8,
      "Завершено": 9,
    },
  })
);

const applicationType: {
  idToName: { [key: number]: string };
  nameToId: { [key: string]: number };
} = Object.freeze(
  Object.seal({
    idToName: {
      1: "Командировка",
      2: "Отпуск",
    },
    nameToId: {
      "Командировка": 1,
      "Отпуск": 2,
    },
  })
);

const monthInParentPadezh: { 
  numberToString: { [key: number]: string };
  stringToNumber: { [key: string]: number };
} = Object.freeze(
  Object.seal({
    numberToString: {
      1: "Января",
      2: "Февраля",
      3: "Марта",
      4: "Апреля",
      5: "Мая",
      6: "Июня",
      7: "Июля",
      8: "Августа",
      9: "Сентября",
      10: "Октября",
      11: "Ноября",
      12: "Декабря",
    },
    stringToNumber: {
      "Января": 1,
      "Февраля": 2,
      "Марта": 3,
      "Апреля": 4,
      "Мая": 5,
      "Июня": 6,
      "Июля": 7,
      "Августа": 8,
      "Сентября": 9,
      "Октября": 10,
      "Ноября": 11,
      "Декабря": 12,
    },
  })
);

const dateFormat: {
  dayAndMonth: (date: number) => string;
  date: (date: number) => string;
} = Object.freeze(
  Object.seal({
    dayAndMonth: (dt: number) => {
      const date = new Date(dt);
      const monthCount: number = date.getMonth() + 1;
      return `${date.getDate()} ${monthInParentPadezh.numberToString[monthCount]}`;
    },
    date: (dt: number) => {
      const date = new Date(dt).toLocaleDateString();
      return String(date);
    }
  })
);

export const translator = Object.freeze(
  Object.seal({
    status,
    applicationType,
    monthInParentPadezh,
    dateFormat
  })
);