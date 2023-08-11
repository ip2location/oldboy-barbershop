import Link from 'next/link';
import React, { ReactElement, useState, useEffect } from 'react';
import { setCookie, getCookie, CookieValueTypes } from 'cookies-next';
import { Modal } from '../../../../../components/Modal/Modal';

interface CitySelectProps {
  myValue: string | undefined;
}

export const CitySelect: React.FC<CitySelectProps> = ({ myValue }): ReactElement => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(myValue);

  useEffect(() => {
    const cookieValue = getCookie('myValue') as CookieValueTypes;
    if (typeof cookieValue === 'string') {
      setSelectedValue(cookieValue || undefined);
    }
  }, []);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setShowModal(true);
  };

  const selectValue = (value: string) => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    setCookie('myValue', value, { expires });
    setSelectedValue(value);
  };

  const handlePClick = (value: string) => {
    selectValue(value);
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
        <p className="city-select__city font-rex m-0 text-base">Москва</p>
      </Link>
      {showModal ? (
        <Modal showModal={showModal} onClose={() => setShowModal(false)}>
          <h1 className="text-black font-rex">Выбери свой барбершоп</h1>
          <p
            className="font-rex p-2 mt-5 text-black cursor-pointer"
            onClick={() => handlePClick('Москва')}
          >
            Москва
          </p>
          <p
            className="font-rex p-2 text-black cursor-pointer"
            onClick={() => handlePClick('Бишкек')}
          >
            Бишкек
          </p>

          {selectedValue && <p className="text-black font-rex">Ваш город: {selectedValue}</p>}
        </Modal>
      ) : null}
    </>
  );
};
