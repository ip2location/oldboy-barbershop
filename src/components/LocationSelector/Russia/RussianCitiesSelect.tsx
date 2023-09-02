import { useState } from 'react';
import { setCookie } from 'cookies-next';
import Link from 'next/link';
import Image from 'next/image';
import { DropdownInput } from '../../DropdownInput/DropdownInput';
import { Cookies, SEVEN_DAYS } from '../../../constants';
import { useSetSelectedEntity } from '../../../hooks/useSetSelectedEntity';

interface RussianCitiesSelectProps {
  cityValue?: string;
}

export const russianRegion: Array<{
  letter: string;
  href?: string;
  cities?: Array<{ city: string; address: string; place?: string; metro?: string }>;
}> = [
  {
    letter: 'A',
    href: '/',
    cities: [
      {
        city: 'Альметьевск',
        address: 'ул. Ленина, Д. 46',
      },
      {
        city: 'Армавир',
        address: 'ул. Ефремова, Д. 123/5',
      },
      {
        city: 'Архангельск',
        address: 'наб. Северной Двины, Д. 71',
      },
    ],
  },
  {
    letter: 'Б',
    href: '/',
    cities: [
      {
        city: 'Балашиха',
        address: 'мкр. Железнодорожный, пр-т Героев, Д. 5',
        place: 'мкр. Железнодорожный',
      },
      {
        city: 'Балашиха',
        address: 'ул. Реутовская Д. 5',
      },
      {
        city: 'Белгород',
        address: 'ул. Губкина, Д. 38Б',
      },
      {
        city: 'Белгород',
        address: 'ул. Попова, Д. 36',
      },
      {
        city: 'Боровичи',
        address: 'ул. Дзержинского, 8',
      },
      {
        city: 'Брянск',
        address: 'ул. Дуки, Д. 51',
      },
    ],
  },
  {
    letter: 'B',
    href: '/',
    cities: [
      {
        city: 'Великий Новгород',
        address: 'ул. Псковская, Д. 11',
      },
      {
        city: 'Владивосток',
        address: 'проспект Океанский, Д. 30',
      },
      {
        city: 'Владикавказ',
        address: 'ул. генерала Плиева, Д. 54',
      },
      {
        city: 'Владимир',
        address: 'ул. Тракторная, Д. 50',
      },
      {
        city: 'Воронеж',
        address: 'проспект Ленинский, Д. 1Д',
        place: 'ТРК «Левый берег»',
      },
      {
        city: 'Воронеж',
        address: 'ул. Ворошилова Д. 1А',
      },
      {
        city: 'Воронеж',
        address: 'ул. Хользунова, Д. 15',
      },
      {
        city: 'Воронеж',
        address: 'ул. Шишкова, Д. 142',
      },
    ],
  },
  {
    letter: 'Г',
    href: '/',
    cities: [
      {
        city: 'Гатчина',
        address: 'ул. Ленина, Д. 46',
      },
      {
        city: 'Геленджик',
        address: 'ул. Ефремова, Д. 123/5',
      },
      {
        city: 'Грозный',
        address: 'наб. Северной Двины, Д. 71',
      },
    ],
  },
  {
    letter: 'Д',
    href: '/',
    cities: [
      {
        city: 'Дербент',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
      {
        city: 'Долгопрудный',
        address: 'Долгопрудный, пр-т Ракетостроителей, 7К1',
      },
    ],
  },
  {
    letter: 'Е',
    href: '/',
    cities: [
      {
        city: 'Екатеринбург',
        address: 'ул. академика Шварца, Д. 14',
      },
      {
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
    href: '/',
    cities: [
      {
        city: 'Жуковский',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'З',
    href: '/',
    cities: [
      {
        city: 'Зеленоградск',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'И',
    href: '/',
    cities: [
      {
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
    href: '/',
    cities: [
      {
        city: 'Казань',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
      {
        city: 'Казань',
        address: 'ул. Петербурская, Д. 9',
        place: 'ТЦ «РЕСПУБЛИКА»',
        metro: 'площадь Габдуллы Тукая',
      },
    ],
  },
  {
    letter: 'Л',
    href: '/',
    cities: [
      {
        city: 'Лобня',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'М',
    href: '/',
    cities: [
      {
        city: 'МО Люберцы',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
      {
        city: 'Москва',
        address: 'Бульвар Веласкеса, Д. 2',
      },
      {
        city: 'Москва',
        address: 'ул. Автозаводская, Д. 18',
        place: 'ТРЦ «Ривьера»',
        metro: 'Автозаводская',
      },
    ],
  },
  {
    letter: 'Н',
    href: '/',
    cities: [
      {
        city: 'Набережные Челны',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'О',
    href: '/',
    cities: [
      {
        city: 'Омск',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'П',
    href: '/',
    cities: [
      {
        city: 'Пенза',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'Р',
    href: '/',
    cities: [
      {
        city: 'Раменское',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
      {
        city: 'Реутов',
        address: 'РЕУТОВ, ПР-Т ЮБИЛЕЙНЫЙ, Д. 40',
        metro: 'НОВОКОСИНО',
      },
    ],
  },
  {
    letter: 'С',
    href: '/',
    cities: [
      {
        city: 'Самара',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'Т',
    href: '/',
    cities: [
      {
        city: 'Таганрог',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'У',
    href: '/',
    cities: [
      {
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
    href: '/',
    cities: [
      {
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
    href: '/',
    cities: [
      {
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
    href: '/',
    cities: [
      {
        city: 'Югорск',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
  {
    letter: 'Я',
    href: '/',
    cities: [
      {
        city: 'Ярославль',
        address: 'ул. 345-й Дагестанской Стрелковой дивизии, Д. 1/4',
      },
    ],
  },
];

export const RussianCitiesSelect = ({ cityValue = 'Москва' }: RussianCitiesSelectProps) => {
  const [cityInput, setCityInput] = useState('');
  const { setSelectedEntity: setSelectedCity } = useSetSelectedEntity(cityValue, Cookies.City);

  const selectCity = (value: string) => {
    setCookie(Cookies.City, value, { expires: SEVEN_DAYS });
    setSelectedCity(value);
  };

  const handlePickCity = (value: string) => {
    selectCity(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCityInput(event.currentTarget.value);
    return cityInput;
  };

  return (
    <div className="location-logo__image flex flex-col items-center pb-24">
      <h1 className="text-black font-rex text-2xl font-bold mb-4">
        Выбери <span className="text-orange-title">свой барбершоп</span>
      </h1>
      <DropdownInput
        placeholder="город, улица или метро"
        searchItem="города"
        searchResultsHref="/"
        searchResultsText={cityInput}
        onChange={handleChange}
        inputValue={cityInput}
        variant="halfWidth"
      />
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
