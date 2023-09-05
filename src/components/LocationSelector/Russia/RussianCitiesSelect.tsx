import { setCookie } from 'cookies-next';
import Link from 'next/link';
import Image from 'next/image';
// eslint-disable-next-line import/no-cycle
import { DropdownInput } from '../../DropdownInput/DropdownInput';
import { Cookies, SEVEN_DAYS } from '../../../constants';
import { useSetSelectedEntity } from '../../../hooks/useSetSelectedEntity';

interface RussianCitiesSelectProps {
  cityValue?: string;
}

export const russianRegion: Array<{
  letter: string;
  cities?: Array<{
    id: number;
    cityEnglishName: string;
    city: string;
    address: string;
    place?: string;
    metro?: string;
  }>;
}> = [
  {
    letter: 'A',
    cities: [
      {
        id: 1,
        cityEnglishName: 'Almetyevsk',
        city: 'Альметьевск',
        address: 'ул. Ленина, Д. 46',
      },
      {
        id: 2,
        cityEnglishName: 'Armavir',
        city: 'Армавир',
        address: 'ул. Ефремова, Д. 123/5',
      },
      {
        id: 3,
        cityEnglishName: 'Arkhangelsk',
        city: 'Архангельск',
        address: 'наб. Северной Двины, Д. 71',
      },
    ],
  },
  {
    letter: 'Б',
    cities: [
      {
        id: 4,
        cityEnglishName: 'Balashikha',
        city: 'Балашиха',
        address: 'мкр. Железнодорожный, пр-т Героев, Д. 5',
        place: 'мкр. Железнодорожный',
      },
      {
        id: 5,
        cityEnglishName: 'Balashikha',
        city: 'Балашиха',
        address: 'ул. Реутовская Д. 5',
      },
      {
        id: 6,
        cityEnglishName: 'Belgorod',
        city: 'Белгород',
        address: 'ул. Губкина, Д. 38Б',
      },
      {
        id: 7,
        cityEnglishName: 'Belgorod',
        city: 'Белгород',
        address: 'ул. Попова, Д. 36',
      },
      {
        id: 8,
        cityEnglishName: 'Borovichi',
        city: 'Боровичи',
        address: 'ул. Дзержинского, 8',
      },
      {
        id: 9,
        cityEnglishName: 'Bryansk',
        city: 'Брянск',
        address: 'ул. Дуки, Д. 51',
      },
    ],
  },
  {
    letter: 'B',
    cities: [
      {
        id: 10,
        cityEnglishName: 'Veliky Novgorod',
        city: 'Великий Новгород',
        address: 'ул. Псковская, Д. 11',
      },
      {
        id: 11,
        cityEnglishName: 'Vladivostok',
        city: 'Владивосток',
        address: 'проспект Океанский, Д. 30',
      },
      {
        id: 12,
        cityEnglishName: 'Vladikavkaz',
        city: 'Владикавказ',
        address: 'ул. генерала Плиева, Д. 54',
      },
      {
        id: 13,
        cityEnglishName: 'Vladimir',
        city: 'Владимир',
        address: 'ул. Тракторная, Д. 50',
      },
      {
        id: 14,
        cityEnglishName: 'Voronezh',
        city: 'Воронеж',
        address: 'проспект Ленинский, Д. 1Д',
        place: 'ТРК «Левый берег»',
      },
      {
        id: 15,
        cityEnglishName: 'Voronezh',
        city: 'Воронеж',
        address: 'ул. Ворошилова Д. 1А',
      },
      {
        id: 16,
        cityEnglishName: 'Voronezh',
        city: 'Воронеж',
        address: 'ул. Хользунова, Д. 15',
      },
      {
        id: 17,
        cityEnglishName: 'Voronezh',
        city: 'Воронеж',
        address: 'ул. Шишкова, Д. 142',
      },
    ],
  },
  {
    letter: 'Г',
    cities: [
      {
        id: 18,
        cityEnglishName: 'Gatchina',
        city: 'Гатчина',
        address: 'ул. Ленина, Д. 46',
      },
      {
        id: 19,
        cityEnglishName: 'Gelenzhik',
        city: 'Геленджик',
        address: 'ул. Ефремова, Д. 123/5',
      },
      {
        id: 20,
        cityEnglishName: 'Grozny',
        city: 'Грозный',
        address: 'наб. Северной Двины, Д. 71',
      },
    ],
  },
  {
    letter: 'Д',
    cities: [
      {
        id: 21,
        cityEnglishName: 'Derbent',
        city: 'Дербент',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
      {
        id: 22,
        cityEnglishName: 'Dolgoprudny',
        city: 'Долгопрудный',
        address: 'Долгопрудный, пр-т Ракетостроителей, 7К1',
      },
    ],
  },
  {
    letter: 'Е',
    cities: [
      {
        id: 23,
        cityEnglishName: 'Ekaterinburg',
        city: 'Екатеринбург',
        address: 'ул. академика Шварца, Д. 14',
      },
      {
        id: 24,
        cityEnglishName: 'Esentuki',
        city: 'Ессентуки',
        address: 'ул. Пятигорская, Д. 133Б',
      },
    ],
  },
  {
    letter: 'Ё',
  },
  {
    letter: 'Ж',
    cities: [
      {
        id: 25,
        cityEnglishName: 'Zhukovsky',
        city: 'Жуковский',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'З',
    cities: [
      {
        id: 26,
        cityEnglishName: 'Zelenogradsk',
        city: 'Зеленоградск',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'И',
    cities: [
      {
        id: 27,
        cityEnglishName: 'Izhevsk',
        city: 'Ижевск',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'Й',
  },
  {
    letter: 'К',
    cities: [
      {
        id: 28,
        cityEnglishName: 'Kazan',
        city: 'Казань',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
      {
        id: 29,
        cityEnglishName: 'Kazan',
        city: 'Казань',
        address: 'ул. Петербурская, Д. 9',
        place: 'ТЦ «РЕСПУБЛИКА»',
        metro: 'площадь Габдуллы Тукая',
      },
    ],
  },
  {
    letter: 'Л',
    cities: [
      {
        id: 30,
        cityEnglishName: 'Lobnya',
        city: 'Лобня',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'М',
    cities: [
      {
        id: 31,
        cityEnglishName: 'Moscow region Lyubercy',
        city: 'МО Люберцы',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
      {
        id: 32,
        cityEnglishName: 'Moscow',
        city: 'Москва',
        address: 'Бульвар Веласкеса, Д. 2',
      },
      {
        id: 33,
        cityEnglishName: 'Moscow',
        city: 'Москва',
        address: 'ул. Автозаводская, Д. 18',
        place: 'ТРЦ «Ривьера»',
        metro: 'Автозаводская',
      },
    ],
  },
  {
    letter: 'Н',
    cities: [
      {
        id: 34,
        cityEnglishName: 'Naberezhnye Chelny',
        city: 'Набережные Челны',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'О',
    cities: [
      {
        id: 35,
        cityEnglishName: 'Omsk',
        city: 'Омск',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'П',
    cities: [
      {
        id: 36,
        cityEnglishName: 'Penza',
        city: 'Пенза',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'Р',
    cities: [
      {
        id: 37,
        cityEnglishName: 'Ramenskoe',
        city: 'Раменское',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
      {
        id: 38,
        cityEnglishName: 'Reutov',
        city: 'Реутов',
        address: 'РЕУТОВ, ПР-Т ЮБИЛЕЙНЫЙ, Д. 40',
        metro: 'НОВОКОСИНО',
      },
    ],
  },
  {
    letter: 'С',
    cities: [
      {
        id: 39,
        cityEnglishName: 'Samara',
        city: 'Самара',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'Т',
    cities: [
      {
        id: 40,
        cityEnglishName: 'Taganrog',
        city: 'Таганрог',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'У',
    cities: [
      {
        id: 41,
        cityEnglishName: 'Ulan-Ude',
        city: 'Улан-Удэ',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'Ф',
  },
  {
    letter: 'Х',
    cities: [
      {
        id: 42,
        cityEnglishName: 'Khabarovsk',
        city: 'Хабаровск',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'Ц',
  },
  {
    letter: 'Ч',
    cities: [
      {
        id: 43,
        cityEnglishName: 'Chelyabinsk',
        city: 'Челябинск',
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
    cities: [
      {
        id: 44,
        cityEnglishName: 'Yugorsk',
        city: 'Югорск',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'Я',
    cities: [
      {
        id: 45,
        cityEnglishName: 'Yaroslavl',
        city: 'Ярославль',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
];

export const RussianCitiesSelect = ({ cityValue = 'Москва' }: RussianCitiesSelectProps) => {
  const { setSelectedEntity: setSelectedCity } = useSetSelectedEntity(cityValue, Cookies.City);

  const selectCity = (value: string) => {
    setCookie(Cookies.City, value, { expires: SEVEN_DAYS });
    setSelectedCity(value);
  };

  const handlePickCity = (value: string) => {
    selectCity(value);
  };

  return (
    <div className="location-logo__image flex flex-col items-center pb-24">
      <h1 className="text-black font-rex text-2xl font-bold mb-4">
        Выбери <span className="text-orange-title">свой барбершоп</span>
      </h1>
      <DropdownInput placeholder="город, улица или метро" searchItem="города" variant="halfWidth" />
      <div className="location-selector__alphabet mt-12 flex justify-center w-full">
        <div className="alphabet relative flex justify-center mr-14">
          <div>
            <ul className="alphabet__content flex justify-center w-[416px] flex-wrap">
              {russianRegion.map(({ letter, cities }) =>
                cities ? (
                  <li className="font-rex text-orange-title text-base mr-1.5" key={letter}>
                    <Link
                      href="#letter"
                      className="alphabet__trigger text-orange-title hover:underline hover:underline-offset-4 decoration-2 
                                          inline-block pr-2
                                          w-5
                                          h-5
                                          text-center
                                          uppercase
                                          border-1 border-transparent"
                    >
                      {letter}
                    </Link>
                  </li>
                ) : (
                  <li className="font-rex text-orange-title text-base mr-1.5" key={letter}>
                    <Link
                      className="alphabet__trigger text-neutral-300 hover:underline hover:underline-offset-4 decoration-2
                            inline-block pr-2
                            w-5
                            h-5
                            text-center
                            uppercase
                            border-1 border-transparent"
                      href="#letter"
                    >
                      {letter}
                    </Link>
                  </li>
                ),
              )}
              ,
            </ul>
          </div>
        </div>
        <div className="location-selector__links flex self-center justify-between w-[290px]">
          <Link
            className="location-selector__top h-[71px] ease-in-out duration-200 bg-transparent"
            href="/"
          >
            <Image
              src="/images/logo/location-moscow.png"
              alt="Oldboy Barbershop Moscow logo"
              className="h-full 
                            hover:transition-filter 
                            hover:duration-200 
                            hover:ease 
                            hover:opacity-100 
                            hover:drop-shadow-[1px_1px_0_orange]"
              width={126}
              height={100}
              onClick={() => handlePickCity('Москва')}
            />
          </Link>
          <Link
            className="location-selector__top h-[71px] ease-in-out duration-200 bg-transparent"
            href="/"
          >
            <Image
              src="/images/logo/location-peterburg.png"
              alt="Oldboy Barbershop St. Petersburg logo"
              className="h-full
                              hover:transition-filter 
                              hover:duration-200 
                              hover:ease 
                              hover:opacity-100 
                              hover:drop-shadow-[1px_1px_0_orange]"
              width={126}
              height={100}
              onClick={() => handlePickCity('Санкт-Петербург')}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
