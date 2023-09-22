import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const russianRegion = [
    {
      letter: 'A',
      places: [
        {
          id: 'Альметьевск',
          placeEnglishName: 'Almetyevsk',
          place: 'Альметьевск',
          address: 'ул. Ленина, Д. 46',
        },
        {
          id: 'Армавир',
          placeEnglishName: 'Armavir',
          place: 'Армавир',
          address: 'ул. Ефремова, Д. 123/5',
        },
        {
          id: 'Архангельск',
          placeEnglishName: 'Arkhangelsk',
          place: 'Архангельск',
          address: 'наб. Северной Двины, Д. 71',
        },
      ],
    },
    {
      letter: 'Б',
      places: [
        {
          id: 'Балашиха',
          placeEnglishName: 'Balashikha',
          place: 'Балашиха',
          address: 'мкр. Железнодорожный, пр-т Героев, Д. 5',
          addressDetail: 'мкр. Железнодорожный',
        },
        {
          id: 'Балашиха',
          placeEnglishName: 'Balashikha-Reutovskaya',
          place: 'Балашиха',
          address: 'ул. Реутовская Д. 5',
        },
        {
          id: 'Белгород',
          placeEnglishName: 'Belgorod',
          place: 'Белгород',
          address: 'ул. Губкина, Д. 38Б',
        },
        {
          id: 'Белгород',
          placeEnglishName: 'Belgorod-Popova',
          place: 'Белгород',
          address: 'ул. Попова, Д. 36',
        },
        {
          id: 'Боровичи',
          placeEnglishName: 'Borovichi',
          place: 'Боровичи',
          address: 'ул. Дзержинского, 8',
        },
        {
          id: 'Брянск',
          placeEnglishName: 'Bryansk',
          place: 'Брянск',
          address: 'ул. Дуки, Д. 51',
        },
      ],
    },
    {
      letter: 'B',
      places: [
        {
          id: 'Великий Новгород',
          placeEnglishName: 'Veliky Novgorod',
          place: 'Великий Новгород',
          address: 'ул. Псковская, Д. 11',
        },
        {
          id: 'Владивосток',
          placeEnglishName: 'Vladivostok',
          place: 'Владивосток',
          address: 'проспект Океанский, Д. 30',
        },
        {
          id: 'Владикавказ',
          placeEnglishName: 'Vladikavkaz',
          place: 'Владикавказ',
          address: 'ул. генерала Плиева, Д. 54',
        },
        {
          id: 'Владимир',
          placeEnglishName: 'Vladimir',
          place: 'Владимир',
          address: 'ул. Тракторная, Д. 50',
        },
        {
          id: 'Воронеж',
          placeEnglishName: 'Voronezh',
          place: 'Воронеж',
          address: 'проспект Ленинский, Д. 1Д',
          addressDetail: 'ТРК «Левый берег»',
        },
        {
          id: 'Воронеж',
          placeEnglishName: 'Voronezh-Voroshilova',
          place: 'Воронеж',
          address: 'ул. Ворошилова Д. 1А',
        },
        {
          id: 'Воронеж',
          placeEnglishName: 'Voronezh-Holzunova',
          place: 'Воронеж',
          address: 'ул. Хользунова, Д. 15',
        },
        {
          id: 'Воронеж',
          placeEnglishName: 'Voronezh-Shishkova',
          place: 'Воронеж',
          address: 'ул. Шишкова, Д. 142',
        },
      ],
    },
    {
      letter: 'Г',
      places: [
        {
          id: 'Гатчина',
          placeEnglishName: 'Gatchina',
          place: 'Гатчина',
          address: 'ул. Ленина, Д. 46',
        },
        {
          id: 'Геленджик',
          placeEnglishName: 'Gelenzhik',
          place: 'Геленджик',
          address: 'ул. Ефремова, Д. 123/5',
        },
        {
          id: 'Грозный',
          placeEnglishName: 'Grozny',
          place: 'Грозный',
          address: 'наб. Северной Двины, Д. 71',
        },
      ],
    },
    {
      letter: 'Д',
      places: [
        {
          id: 'Дербент',
          placeEnglishName: 'Derbent',
          place: 'Дербент',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
        {
          id: 'Долгопрудный',
          placeEnglishName: 'Dolgoprudny',
          place: 'Долгопрудный',
          address: 'Долгопрудный, пр-т Ракетостроителей, 7К1',
        },
      ],
    },
    {
      letter: 'Е',
      places: [
        {
          id: 'Екатеринбург',
          placeEnglishName: 'Ekaterinburg',
          place: 'Екатеринбург',
          address: 'ул. академика Шварца, Д. 14',
        },
        {
          id: 'Ессентуки',
          placeEnglishName: 'Esentuki',
          place: 'Ессентуки',
          address: 'ул. Пятигорская, Д. 133Б',
        },
      ],
    },
    {
      letter: 'Ё',
    },
    {
      letter: 'Ж',
      places: [
        {
          id: 'Жуковский',
          placeEnglishName: 'Zhukovsky',
          place: 'Жуковский',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
      ],
    },
    {
      letter: 'З',
      places: [
        {
          id: 'Зеленоградск',
          placeEnglishName: 'Zelenogradsk',
          place: 'Зеленоградск',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
      ],
    },
    {
      letter: 'И',
      places: [
        {
          id: 'Ижевск',
          placeEnglishName: 'Izhevsk',
          place: 'Ижевск',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
      ],
    },
    {
      letter: 'Й',
    },
    {
      letter: 'К',
      places: [
        {
          id: 'Казань',
          placeEnglishName: 'Kazan',
          place: 'Казань',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
        {
          id: 'Казань',
          placeEnglishName: 'Kazan-Petersburg',
          place: 'Казань',
          address: 'ул. Петербурская, Д. 9',
          addressDetail: 'ТЦ «РЕСПУБЛИКА»',
          metro: 'площадь Габдуллы Тукая',
        },
      ],
    },
    {
      letter: 'Л',
      places: [
        {
          id: 'Лобня',
          placeEnglishName: 'Lobnya',
          place: 'Лобня',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
      ],
    },
    {
      letter: 'М',
      places: [
        {
          id: 'МО Люберцы',
          placeEnglishName: 'Moscow region Lyubercy',
          place: 'МО Люберцы',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
        {
          id: 'Москва',
          placeEnglishName: 'Moscow',
          place: 'Москва',
          address: 'Бульвар Веласкеса, Д. 2',
        },
        {
          id: 'Москва',
          placeEnglishName: 'Moscow-Avtozavodskaya',
          place: 'Москва',
          address: 'ул. Автозаводская, Д. 18',
          addressDetail: 'ТРЦ «Ривьера»',
          metro: 'Автозаводская',
        },
      ],
    },
    {
      letter: 'Н',
      places: [
        {
          id: 'Набережные Челны',
          placeEnglishName: 'Naberezhnye Chelny',
          place: 'Набережные Челны',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
      ],
    },
    {
      letter: 'О',
      places: [
        {
          id: 'Омск',
          placeEnglishName: 'Omsk',
          place: 'Омск',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
      ],
    },
    {
      letter: 'П',
      places: [
        {
          id: 'Пенза',
          placeEnglishName: 'Penza',
          place: 'Пенза',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
      ],
    },
    {
      letter: 'Р',
      places: [
        {
          id: 'Раменское',
          placeEnglishName: 'Ramenskoe',
          place: 'Раменское',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
        {
          id: 'Реутов',
          placeEnglishName: 'Reutov',
          place: 'Реутов',
          address: 'РЕУТОВ, ПР-Т ЮБИЛЕЙНЫЙ, Д. 40',
          metro: 'НОВОКОСИНО',
        },
      ],
    },
    {
      letter: 'С',
      places: [
        {
          id: 'Самара',
          placeEnglishName: 'Samara',
          place: 'Самара',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
      ],
    },
    {
      letter: 'Т',
      places: [
        {
          id: 'Таганрог',
          placeEnglishName: 'Taganrog',
          place: 'Таганрог',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
      ],
    },
    {
      letter: 'У',
      places: [
        {
          id: 'Улан-Удэ',
          placeEnglishName: 'Ulan-Ude',
          place: 'Улан-Удэ',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
      ],
    },
    {
      letter: 'Ф',
    },
    {
      letter: 'Х',
      places: [
        {
          id: 'Хабаровск',
          placeEnglishName: 'Khabarovsk',
          place: 'Хабаровск',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
      ],
    },
    {
      letter: 'Ц',
    },
    {
      letter: 'Ч',
      places: [
        {
          id: 'Челябинск',
          placeEnglishName: 'Chelyabinsk',
          place: 'Челябинск',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
      ],
    },
    {
      letter: 'Ш',
    },
    {
      letter: 'Щ',
    },
    {
      letter: 'Э',
    },
    {
      letter: 'Ю',
      places: [
        {
          id: 'Югорск',
          placeEnglishName: 'Yugorsk',
          place: 'Югорск',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
      ],
    },
    {
      letter: 'Я',
      places: [
        {
          id: 'Ярославль',
          placeEnglishName: 'Yaroslavl',
          place: 'Ярославль',
          address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
        },
      ],
    },
  ];

  res.status(200).json({
    success: true,
    russianRegionList: russianRegion,
  });
};
export default handler;
