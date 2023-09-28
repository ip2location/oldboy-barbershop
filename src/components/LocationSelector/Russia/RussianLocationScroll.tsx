import React, { ReactElement, ReactNode, WheelEvent } from 'react';
import { setCookie } from 'cookies-next';
import { useSetSelectedEntity } from '../../../types/useSetSelectedEntity';
import { Cookies, SEVEN_DAYS } from '../../../constants';
import { LocationSelectorScroll } from '../../LocationSelectorScroll/LocationSelectorScroll';

interface RussianLocationScrollProps {
  cityValue?: string;
  russianRegion: RussianRegion[];
}

interface Place {
  id: string;
  place?: string;
  placeEnglishName?: string;
  address?: string;
  addressDetail?: string;
  metro?: string;
}

interface RussianRegion {
  letter: string;
  places?: Place[];
}

export const RussianLocationScroll = ({
  cityValue = 'Москва',
  russianRegion,
}: RussianLocationScrollProps): ReactElement => {
  const { setSelectedEntity: setSelectedCity } = useSetSelectedEntity(cityValue, Cookies.City);

  const selectCity = (value: string) => {
    setCookie(Cookies.City, value, { expires: SEVEN_DAYS });
    setSelectedCity(value);
  };

  const handlePickCity = (value: string) => {
    selectCity(value);
    window.location.reload();
  };
  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    target.scrollLeft += event.deltaY + event.deltaX;
  };

  return (
    <div className="location-selector__content mt-0">
      <div className="branch-addresses px-32">
        <div
          className="branch-addresses__container relative pt-12 h-[43vh] overflow-y-scroll overflow-x-hidden columns-[15em]"
          onWheel={onWheel}
        >
          {russianRegion.reduce((acc: ReactNode[], { letter, places }) => {
            if (!places) {
              return acc;
            }

            const placeElements = places.map(({ place, address, addressDetail, id }, index) => {
              const renderOnce = index === 0 || place !== places[index - 1].place;

              return (
                <LocationSelectorScroll
                  key={id}
                  letter={!index ? letter : ''}
                  place={renderOnce ? place : ''}
                  address={address}
                  addressDetail={addressDetail}
                  onClick={() => handlePickCity(id)}
                  options="forRussia"
                />
              );
            });
            return [...acc, ...placeElements];
          }, [])}
        </div>
      </div>
    </div>
  );
};
