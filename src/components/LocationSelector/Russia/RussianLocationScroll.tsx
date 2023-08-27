import { ReactElement, WheelEvent } from 'react';
import { LocationSelectorScroll } from '../../LocationSelectorScroll/LocationSelectorScroll';
import { russianRegion } from './RussianCitiesSelect';

export const RussianLocationScroll = (): ReactElement => {
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
          {russianRegion.map(({ letter, cities }) =>
            cities?.map(({ city, addresses }) =>
              addresses.map(({ address, place, metro }) => (
                <LocationSelectorScroll
                  key={letter}
                  href="/"
                  title={city}
                  address={address}
                  letter={cities ? letter : null}
                  place={place}
                  metro={metro}
                />
              )),
            ),
          )}
          ;
        </div>
      </div>
    </div>
  );
};
