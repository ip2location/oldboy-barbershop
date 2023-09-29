import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import { Cookies } from '../../../../../constants';
import { useSetSelectedEntity } from '../../../../../types/useSetSelectedEntity';
import { LocationSelector } from '../../../../../components/LocationSelector/LocationSelector';
import { Modal } from '../../../../../components/Modal/Modal';

export const CitySelect = (): ReactElement => {
  const [showModal, setShowModal] = useState(false);
  const { selectedEntity: selectedCity } = useSetSelectedEntity('', Cookies.City);
  const { selectedEntity: selectedCountry } = useSetSelectedEntity('', Cookies.Country);

  const toggleModal = () => {
    setShowModal((current) => !current);
    document.body.style.overflow = showModal ? 'auto' : 'hidden';
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
          onClick={toggleModal}
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
        <Modal showModal={showModal} onClose={toggleModal}>
          <LocationSelector />
        </Modal>
      ) : null}
    </>
  );
};
