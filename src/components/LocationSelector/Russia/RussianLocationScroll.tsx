import React, { ReactElement, WheelEvent } from 'react';
import {
  LocationProps,
  LocationSelectorScroll,
} from '../../LocationSelectorScroll/LocationSelectorScroll';
import { russianRegion } from './RussianCitiesSelect';

export const RussianLocationScroll = (): ReactElement => {
  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    target.scrollLeft += event.deltaY + event.deltaX;
  };

  const groupedCities: Record<string, LocationProps[]> = {};

  russianRegion.forEach(({ cities }) => {
    if (cities) {
      cities.forEach(({ city, address, place, metro }) => {
        if (!groupedCities[city]) {
          groupedCities[city] = [];
        }
        groupedCities[city].push({
          city,
          address,
          place,
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
          {russianRegion.map(({ letter, cities }) => {
            if (!cities) {
              return null;
            }

            return cities.map(({ city, address, place, metro, id }, index) => {
              return (
                <LocationSelectorScroll
                  key={id}
                  letter={!index ? letter : ''}
                  city={city}
                  address={address}
                  place={place}
                  metro={metro}
                />
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};
