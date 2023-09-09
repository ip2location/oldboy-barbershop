import React, { ReactElement, WheelEvent } from 'react';
// eslint-disable-next-line import/no-cycle
import { useSetSelectedEntity } from '@/types/useSetSelectedEntity';
import { Cookies, SEVEN_DAYS } from '@/constants';
import { setCookie } from 'cookies-next';
// eslint-disable-next-line import/no-cycle
import { russianRegion } from './RussianCitiesSelect';
import {
  LocationProps,
  LocationSelectorScroll,
} from '../../LocationSelectorScroll/LocationSelectorScroll';

interface RussianLocationScrollProps {
  cityValue?: string;
}

export const RussianLocationScroll = ({
  cityValue = 'Москва',
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

  const groupedCities: Record<string, LocationProps[]> = {};
  let lastRenderedPlace = '';

  russianRegion.forEach(({ places }) => {
    if (places) {
      places.forEach(({ place, address, addressDetail, metro }) => {
        if (!groupedCities[place]) {
          groupedCities[place] = [];
        }
        groupedCities[place].push({
          place,
          address,
          addressDetail,
          metro,
        });
      });
    }
  });

  return (
    <div className="location-selector__content mt-0">
      <div className="branch-addresses px-32">
        <div
          className="branch-addresses__container relative pt-12 h-[43vh] overflow-y-scroll overflow-x-hidden columns-[15em]"
          onWheel={onWheel}
        >
          {russianRegion.map(({ letter, places }) => {
            if (!places) {
              return null;
            }

            return places.map(({ place, address, addressDetail, metro, id }, index) => {
              const renderPlace = lastRenderedPlace !== place;
              lastRenderedPlace = place;

              return (
                <LocationSelectorScroll
                  key={id}
                  letter={!index && renderPlace ? letter : undefined}
                  place={renderPlace ? place : undefined}
                  address={address}
                  addressDetail={addressDetail}
                  metro={metro}
                  onClick={() => handlePickCity(id)}
                />
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};
