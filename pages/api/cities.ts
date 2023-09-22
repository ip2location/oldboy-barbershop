import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const cityLocations = [
    { id: 0, name: 'Москва', branch: 92 },
    { id: 1, name: 'Санкт-Петербург', branch: 16 },
    { id: 2, name: 'Калининград', branch: 10 },
    { id: 3, name: 'Красногорск', branch: 5 },
    { id: 4, name: 'Воронеж', branch: 4 },
    { id: 5, name: 'Долгопрудный', branch: 3 },
    { id: 6, name: 'Красноярск', branch: 3 },
    { id: 7, name: 'Раменское', branch: 3 },
    { id: 8, name: 'Пушкино', branch: 2 },
    { id: 9, name: 'Гатчина', branch: 2 },
    { id: 10, name: 'Новороссийск', branch: 2 },
    { id: 11, name: 'Балашиха', branch: 2 },
    { id: 12, name: 'Воскресенск', branch: 2 },
    { id: 13, name: 'Рязань', branch: 2 },
    { id: 14, name: 'Котельники', branch: 2 },
    { id: 15, name: 'Кемерово', branch: 2 },
    { id: 16, name: 'Орехово-Зуево', branch: 2 },
    { id: 17, name: 'Симферополь', branch: 2 },
    { id: 18, name: 'Дербент', branch: 2 },
    { id: 19, name: 'Казань', branch: 2 },
    { id: 20, name: 'Тюмень', branch: 2 },
    { id: 21, name: 'Жуковский', branch: 2 },
    { id: 22, name: 'Псков', branch: 2 },
    { id: 23, name: 'Ростов-на-Дону', branch: 2 },
    { id: 24, name: 'Тамбов', branch: 2 },
    { id: 25, name: 'Хабаровск', branch: 2 },
    { id: 26, name: 'Норильск', branch: 2 },
    { id: 27, name: 'Белгород', branch: 2 },
    { id: 28, name: 'Щелково', branch: 2 },
    { id: 29, name: 'Краснодар', branch: 2 },
    { id: 30, name: 'Нижний Новогород', branch: 2 },
    { id: 31, name: 'Сочи', branch: 2 },
    { id: 32, name: 'Химки', branch: 2 },
    { id: 33, name: 'Североморск', branch: 1 },
    { id: 34, name: 'Рославль', branch: 1 },
    { id: 35, name: 'Старый Оскол', branch: 1 },
    { id: 36, name: 'Прохладный', branch: 1 },
    { id: 37, name: 'Чита', branch: 1 },
    { id: 38, name: 'Электрогорск', branch: 1 },
  ];

  const page = Number(req.query.page);
  const offset = Number(req.query.offset);

  res.status(200).json({
    success: true,
    data: cityLocations.slice(page * offset, offset * (page + 1)),
  });
};
export default handler;
