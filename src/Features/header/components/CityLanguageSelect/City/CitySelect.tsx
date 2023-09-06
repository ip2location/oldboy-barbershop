import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import { useSetSelectedEntity } from '../../../../../hooks/useSetSelectedEntity';
import { Cookies } from '../../../../../constants';
import { LocationSelector } from '../../../../../components/LocationSelector/LocationSelector';
import { Modal } from '../../../../../components/Modal/Modal';

interface CitySelectProps {
  cityValue?: string;
}

export const CitySelect = ({ cityValue = 'Бишкек' }: CitySelectProps): ReactElement => {
  const [showModal, setShowModal] = useState(false);
  const [cityInput, setCityInput] = useState('');

  const { selectedEntity: selectedCity, setSelectedEntity: setSelectedCity } = useSetSelectedEntity(
    cityValue,
    Cookies.City,
  );

  const { selectedEntity: selectedCountry, setSelectedEntity: setSelectedCountry } =
    useSetSelectedEntity(cityValue, Cookies.Country);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setShowModal(true);
    return showModal;
  };

  const selectCity = (value: string) => {
    setCookie(Cookies.City, value, { expires: SEVEN_DAYS });
    setSelectedCity(value);
  };

  const selectCountry = (value: string) => {
    if (value === 'Москва') {
      const countryCode = 'RU';
      setCookie(Cookies.Country, countryCode, { expires: SEVEN_DAYS });
      setSelectedCountry(countryCode);
    }
    if (value === 'Бишкек') {
      const countryCode = 'KG';
      setCookie(Cookies.Country, countryCode, { expires: SEVEN_DAYS });
      setSelectedCountry(countryCode);
    }
  };

  const handlePickCity = (value: string) => {
    selectCity(value);
    selectCountry(value);
    setShowModal(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCityInput(event.currentTarget.value);
    return cityInput;
  };

return (
    <>
      <Link
        href="/"
        className="city-select relative z-20 block pl-12 text-left mr-3 
        cursor-pointer transition-all ease-out duration-200
        before:absolute
        before:bg-[url('/images/icons/place.svg')]
        before:w-8
        before:h-full
        before:bg-no-repeat
        before:bg-[position:top_right]
        before:translate-x-[-110%]
        before:content-['']"
      >
        <p
          onClick={handleOpen}
          className="city-select__title m-0 text-orange-title font-rex text-xs"
        >
          Выбери свой <br /> барбершоп:
          <span className="m-0 text-orange-title font-rex text-[8.5px]">&#x25BC;</span>
        </p>
        <p className="city-select__city font-rex m-0 text-base">
          {selectedCountry} - {selectedCity}
        </p>
      </Link>
      {showModal ? (
        <Modal showModal={showModal} onClose={() => setShowModal(false)}>
          <LocationSelector />
        </Modal>
      ) : null}
    </>
  );
};
