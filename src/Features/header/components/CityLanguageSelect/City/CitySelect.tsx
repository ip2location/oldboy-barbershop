import Link from 'next/link';
import React, { ReactElement, useState, useEffect } from 'react';
import { setCookie, getCookie, CookieValueTypes } from 'cookies-next';
import { Modal } from '../../../../../components/Modal/Modal';
import { SEVEN_DAYS } from '../../../../../constants';

interface CitySelectProps {
  cityValue: string;
}

export const CitySelect = ({ cityValue }: CitySelectProps): ReactElement => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(cityValue);

  useEffect(() => {
    const cookieValue = getCookie('cityValue') as CookieValueTypes;
    if (typeof cookieValue === 'string') {
      setSelectedCity(cookieValue);
    }
  }, []);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setShowModal(true);
    return showModal;
  };

  const selectCity = (value: string) => {
    setCookie('cityValue', value, { expires: SEVEN_DAYS });
    setSelectedCity(value);
  };

  const handlePickCity = (value: string) => {
    selectCity(value);
    setShowModal(false);
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
        <p className="city-select__city font-rex m-0 text-base">{selectedCity}</p>
      </Link>
      {showModal ? (
        <Modal showModal={showModal} onClose={() => setShowModal(false)}>
          <h1 className="text-black font-rex">Выбери свой барбершоп</h1>
          <p
            className="font-rex p-2 mt-5 text-black cursor-pointer"
            onClick={() => handlePickCity('Москва')}
          >
            Москва
          </p>
          <p
            className="font-rex p-2 text-black cursor-pointer"
            onClick={() => handlePickCity('Бишкек')}
          >
            Бишкек
          </p>
        </Modal>
      ) : null}
    </>
  );
};
