import { useState } from 'react';
import { setCookie } from 'cookies-next';
import Link from 'next/link';
import Image from 'next/image';
import { DropdownInput } from '../../DropdownInput/DropdownInput';
import { Cookies, SEVEN_DAYS } from '../../../constants';
import { useSetSelectedEntity } from '../../../hooks/useSetSelectedEntity';

interface CitySelectProps {
  cityValue?: string;
}

const alphabet = [
  { active: 'А' },
  { active: 'Б' },
  { active: 'В' },
  { active: 'Г' },
  { active: 'Д' },
  { active: 'Е' },
  { inactive: 'Ё' },
  { active: 'Ж' },
  { active: 'З' },
  { active: 'И' },
  { inactive: 'Й' },
  { active: 'К' },
  { active: 'Л' },
  { active: 'М' },
  { active: 'Н' },
  { active: 'О' },
  { active: 'П' },
  { active: 'Р' },
  { active: 'С' },
  { active: 'Т' },
  { active: 'У' },
  { inactive: 'Ф' },
  { active: 'Х' },
  { inactive: 'Ц' },
  { active: 'Ч' },
  { inactive: 'Ш' },
  { inactive: 'Щ' },
  { inactive: 'Э' },
  { active: 'Ю' },
  { active: 'Я' },
];

export const RussianCitiesSelect = ({ cityValue = 'Москва' }: CitySelectProps) => {
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
    <div className="location-logo__image flex flex-col items-center">
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
          <noindex>
            <ul className="alphabet__content flex justify-center w-[416px] flex-wrap">
              {alphabet.map(({ active, inactive }) => {
                return (
                  <li className="font-rex text-orange-title text-base mr-1.5">
                    <Link
                      className={`${
                        inactive
                          ? 'text-neutral-300'
                          : 'text-orange-title hover:underline hover:underline-offset-4 decoration-2'
                      } alphabet__trigger inline-block pr-2
                                  w-5
                                  h-5
                                  text-center
                                  uppercase
                                  border-1 border-transparent`}
                      href="#letter"
                    >
                      {active} {inactive}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </noindex>
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
