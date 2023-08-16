import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import { setCookie } from 'cookies-next';
import { useSetSelectedEntity } from '../../../../../hooks/useSetSelectedEntity';
import { Modal } from '../../../../../components/Modal/Modal';
import { SEVEN_DAYS, Cookies } from '../../../../../constants';

interface CitySelectProps {
  cityValue: string;
}

export const CitySelect = ({ cityValue }: CitySelectProps): ReactElement => {
  const [showModal, setShowModal] = useState(false);
  const { selectedEntity: selectedCity, setSelectedEntity: setSelectedCity } = useSetSelectedEntity(
    cityValue,
    Cookies.City,
  );

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setShowModal(true);
    return showModal;
  };

  const selectCity = (value: string) => {
    setCookie(Cookies.City, value, { expires: SEVEN_DAYS });
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
          <h1 className="text-black font-rex text-2xl font-bold">
            Выбери <span className="text-orange-title">свой барбершоп</span>
          </h1>
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
