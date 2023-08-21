import { useState } from 'react';
import { setCookie } from 'cookies-next';
import Link from 'next/link';
import Image from 'next/image';
import { LocationSelectorScroll } from '../../LocationSelectorScroll/LocationSelectorScroll';
import { DropdownInput } from '../../DropdownInput/DropdownInput';
import { Cookies, SEVEN_DAYS } from '../../../constants';
import { useSetSelectedEntity } from '../../../hooks/useSetSelectedEntity';

interface RussianCitiesSelectProps {
  cityValue?: string;
}

const alphabet = [
  { active: 'А', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'Б', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'В', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'Г', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'Д', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'Е', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { inactive: 'Ё', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'Ж', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'З', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'И', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { inactive: 'Й', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'К', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'Л', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'М', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'Н', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'О', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'П', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'Р', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'С', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'Т', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'У', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { inactive: 'Ф', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'Х', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { inactive: 'Ц', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'Ч', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { inactive: 'Ш', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { inactive: 'Щ', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { inactive: 'Э', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'Ю', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
  { active: 'Я', city: 'Альметьевск', address: 'УЛ. ЛЕНИНА, Д. 46' },
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
    <div className="location-logo__image flex flex-col items-center mt-52">
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
      {alphabet.map(({ active, city, address }) => {
        return (
          <LocationSelectorScroll
            locationHref="/"
            locationName={city}
            locationAddress={address}
            locationLetter={active}
          />
        );
      })}
    </div>
  );
};
