import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const cisRegion = [
    {
      letter: 'BY',
      country: 'Беларусь',
      places: [
        {
          id: 'Минск',
          placeEnglishName: 'Minsk',
          address: 'МИНСК',
        },
      ],
    },
    {
      letter: 'KZ',
      country: 'Казахстан',
      places: [
        {
          id: 'Актау',
          placeEnglishName: 'Aktau',
          address: 'Г. АКТАУ, 6-Й МИКРОРАЙОН, 39',
        },
        {
          id: 'Астана',
          placeEnglishName: 'Astana-Amman',
          address: 'Г. АСТАНА, УЛ. АММАН, Д. 2',
          addressDetail: 'ЖК «МИЛАНСКИЙ КВАРТАЛ»',
        },
        {
          id: 'Астана',
          placeEnglishName: 'Astana-Imanova',
          address: 'Г. АСТАНА, УЛ. ИМАНОВА, Д. 16',
        },
        {
          id: 'Астана',
          placeEnglishName: 'Astana-Kunaeva',
          address: 'Г. АСТАНА, УЛ. ДИНМУХАМЕДА КУНАЕВА, Д. 10',
          addressDetail: 'БЦ «ИЗУМРУДНЫЙ КВАРТАЛ»',
        },
        {
          id: 'Атырау',
          placeEnglishName: 'Atyrau',
          address: 'Г. АТЫРАУ, УЛ. ГУРЬЕВСКАЯ, Д. 1',
        },
        {
          id: 'Костанай',
          placeEnglishName: 'Kostanai',
          address: 'Г. КОСТАНАЙ, УЛ. АЛТЫНСАРИНА, Д. 110',
        },
        {
          id: 'Усть-Каменогорск',
          placeEnglishName: 'Ust-Kamenogorsk',
          address: 'Г. УСТЬ-КАМЕНОГОРСК, УЛ. КАБАНБАЙ БАТЫРА, 156',
        },
      ],
    },
    {
      letter: 'KG',
      country: 'Кыргызстан',
      places: [
        {
          id: 'Бишкек',
          placeEnglishName: 'Bishkek',
          address: 'Г. БИШКЕК, УЛ. ЛОГВИНЕНКО, Д. 51',
        },
      ],
    },
    {
      letter: 'GE',
      country: 'Грузия',
      places: [
        {
          id: 'Тбилиси',
          placeEnglishName: 'Tbilisi',
          address: 'Г. ТБИЛИСИ, ПР-КТ АЛЕКСАНДРА КАЗБЕГИ, Д. 11',
        },
      ],
    },
    {
      letter: 'TM',
      country: 'Туркменистан',
      places: [
        {
          id: 'Ашхабад',
          placeEnglishName: 'Ashkhabad-Ataturk',
          address: 'АШХАБАД, УЛ. АТАТЮРК, Д. 80',
          addressDetail: 'ТРЦ «БЕРКЕРАР», 1 ЭТАЖ, B15',
        },
        {
          id: 'Ашхабад',
          placeEnglishName: 'Ashkhabad-Magtymkuly',
          address: 'УЛ. МАГТЫМКУЛЫ',
          addressDetail: 'ТРЦ «GÜL ZEMIN» A11',
        },
        {
          id: 'Ашхабад',
          placeEnglishName: 'Ashkhabad-Tahran',
          address: 'УЛ. ТАХРАН',
          addressDetail: 'ТРЦ «ASHGABAT» C-1.71',
        },
      ],
    },
  ];

  res.status(200).json({
    success: true,
    cisRegionList: cisRegion,
  });
};
export default handler;
