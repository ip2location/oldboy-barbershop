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

export const russianRegion = [
  {
    letter: 'A',
    cities: [
      {
        city: 'Альметьевск',
        addresses: [
          {
            address: 'УЛ. ЛЕНИНА, Д. 46',
          },
        ],
      },
      {
        city: 'Армавир',
        addresses: [{ address: 'УЛ. ЕФРЕМОВА, Д. 123/5' }],
      },
      {
        city: 'Архангельск',
        addresses: [{ address: 'НАБ. СЕВЕРНОЙ ДВИНЫ, Д. 71' }],
        place: 'ЖК «ОМЕГА ХАУС»',
      },
    ],
  },
  {
    letter: 'Б',
    cities: [
      {
        city: 'Балашиха',
        addresses: [
          {
            address: 'МКР. ЖЕЛЕЗНОДОРОЖНЫЙ, ПР-Т ГЕРОЕВ, Д. 5',
            place: 'МКР. ЖЕЛЕЗНОДОРОЖНЫЙ',
          },
          {
            address: 'УЛ. РЕУТОВСКАЯ Д. 5',
          },
        ],
      },
      {
        city: 'Белгород',
        addresses: [
          {
            address: 'УЛ. ГУБКИНА, Д. 38Б',
          },
          {
            address: 'УЛ. ПОПОВА, Д. 36',
          },
        ],
      },
      {
        city: 'Боровичи',
        addresses: [
          {
            address: 'УЛ. ДЗЕРЖИНСКОГО, 8',
          },
        ],
      },
      {
        city: 'Брянск',
        addresses: [
          {
            address: 'УЛ. ДУКИ, Д. 51',
          },
        ],
      },
    ],
  },
  {
    letter: 'B',
    cities: [
      {
        city: 'Великий Новгород',
        addresses: [
          {
            address: 'УЛ. ПСКОВСКАЯ, Д. 11',
          },
        ],
      },
      {
        city: 'Владивосток',
        addresses: [
          {
            address: 'ПРОСПЕКТ ОКЕАНСКИЙ, Д. 30',
          },
        ],
      },
      {
        city: 'Владикавказ',
        addresses: [
          {
            address: 'УЛ. ГЕНЕРАЛА ПЛИЕВА, Д. 54',
          },
        ],
      },
      {
        city: 'Владимир',
        addresses: [
          {
            address: 'УЛ. ТРАКТОРНАЯ, Д. 50',
          },
        ],
      },
      {
        city: 'Воронеж',
        addresses: [
          {
            address: 'ПРОСПЕКТ ЛЕНИНСКИЙ, Д. 1Д',
            place: 'ТРК «ЛЕВЫЙ БЕРЕГ»',
          },
          {
            address: 'УЛ. ВОРОШИЛОВА Д. 1А',
          },
          {
            address: 'УЛ. ХОЛЬЗУНОВА, Д. 15',
          },
          {
            address: 'УЛ. ШИШКОВА, Д. 142',
          },
        ],
      },
    ],
  },
  {
    letter: 'Г',
    cities: [
      {
        city: 'Гатчина',
        addresses: [{ address: 'УЛ. ЛЕНИНА, Д. 46' }],
      },
      {
        city: 'Геленджик',
        addresses: [{ address: 'УЛ. ЕФРЕМОВА, Д. 123/5' }],
      },
      {
        city: 'Грозный',
        addresses: [{ address: 'НАБ. СЕВЕРНОЙ ДВИНЫ, Д. 71' }],
      },
    ],
  },
  {
    letter: 'Д',
    cities: [
      {
        city: 'Дербент',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
      },
      {
        city: 'Долгопрудный',
        addresses: [{ address: 'ДОЛГОПРУДНЫЙ, ПР-Т РАКЕТОСТРОИТЕЛЕЙ, 7К1' }],
      },
    ],
  },
  {
    letter: 'Е',
    cities: [
      {
        city: 'Екатеринбург',
        addresses: [{ address: 'УЛ. АКАДЕМИКА ШВАРЦА, Д. 14' }],
      },
      {
        city: 'Ессентуки',
        addresses: [{ address: 'УЛ. ПЯТИГОРСКАЯ, Д. 133Б' }],
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
        city: 'Жуковский',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
      },
    ],
  },
  {
    letter: 'З',
    cities: [
      {
        city: 'Зеленоградск',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
      },
    ],
  },
  {
    letter: 'И',
    cities: [
      {
        city: 'Ижевск',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
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
        city: 'Казань',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
      },
    ],
  },
  {
    letter: 'Л',
    cities: [
      {
        city: 'Лобня',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
      },
    ],
  },
  {
    letter: 'М',
    cities: [
      {
        city: 'МО Люберцы',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
      },
      {
        city: 'Москва',
        addresses: [
          {
            address: 'БУЛЬВАР ВЕЛАСКЕСА, Д. 2',
          },
          {
            address: 'УЛ. АВТОЗАВОДСКАЯ, Д. 18',
            place: 'ТРЦ «РИВЬЕРА»',
            metro: 'АВТОЗАВОДСКАЯ',
          },
        ],
      },
    ],
  },
  {
    letter: 'Н',
    cities: [
      {
        city: 'Набережные Челны',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
      },
    ],
  },
  {
    letter: 'О',
    cities: [
      {
        city: 'Омск',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
      },
    ],
  },
  {
    letter: 'П',
    cities: [
      {
        city: 'Пенза',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
      },
    ],
  },
  {
    letter: 'Р',
    cities: [
      {
        city: 'Раменское',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
      },
    ],
  },
  {
    letter: 'С',
    cities: [
      {
        city: 'Самара',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
      },
    ],
  },
  {
    letter: 'Т',
    cities: [
      {
        city: 'Таганрог',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
      },
    ],
  },
  {
    letter: 'У',
    cities: [
      {
        city: 'Улан-Удэ',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
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
        city: 'Хабаровск',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
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
        city: 'Челябинск',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
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
        city: 'Югорск',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
      },
    ],
  },
  {
    letter: 'Я',
    cities: [
      {
        city: 'Ярославль',
        addresses: [{ address: 'УЛ. 345-Й ДАГЕСТАНСКОЙ СТРЕЛКОВОЙ ДИВИЗИИ, Д. 1/4' }],
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
                  <li className="font-rex text-orange-title text-base mr-1.5">
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
                  <li className="font-rex text-orange-title text-base mr-1.5">
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
