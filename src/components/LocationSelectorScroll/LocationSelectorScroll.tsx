import Link from 'next/link';
import { PropsWithChildren, ReactElement } from 'react';

export interface LocationSelectorProps extends PropsWithChildren {
  locationLetter: string;
  locationHref: string;
  locationName: string;
  locationAddress: string;
  locationPlace: string;
}

export const LocationSelectorScroll = ({
  locationLetter,
  locationHref,
  locationName,
  locationAddress,
  locationPlace,
}: LocationSelectorProps): ReactElement => {
  return (
    <div className="branch-addresses__index inline-block break-inside-avoid break-after-column touch-auto">
      <div
        className="branch-addresses__letter relative
                z-10
                w-8 
                mb-3.5
                text-orange-title
                text-2xl
                font-rex
                leading-8
                text-center
                border-b-[1px] border-orange-title"
      >
        <noindex className="">{locationLetter}</noindex>
      </div>
      <div className="branch-addresses__content">
        <noindex>
          <ul className="location-list">
            <li className="location-list__name">
              <Link className="text-header-bg text-xl font-rex" href={locationHref}>
                {locationName}
              </Link>
            </li>
            <li className="location-list__item">
              <Link
                href={locationHref}
                className="location-list__link max-w-full py-1.5 pr-3 pl-7
                  overflow-hidden
                  text-orange-bg
                  tracking-wider
                  whitespace-nowrap
                  text-ellipsis
                  rounded-3xl
                  relative
                  inline-block
                  font-semibold
                  font-sans
                  uppercase
                   
                  before:absolute
                  before:top-[0.85rem]
                  before:left-0
                  before:block
                  before:w-2
                  before:h-2
                  before:bg-orange-title
                  before:rounded-full
                  before:content-['']"
              >
                {locationAddress}
              </Link>
              <div
                className="location-list__place -top-1 left-0.5 py-[3px] px-2.5 text-header-bg text-xs tracking-wide align-middle
                  before:w-3.5
                  before:h-3.5
                  before:py-px pr-0.5
                  before:leading-4
                  before:bg-header-bg
                  before:border-1 
                  before:border-header-bg
                  before:shadow-2xl
                  before:content-['']"
              >
                {locationPlace}
              </div>
            </li>
          </ul>
        </noindex>
      </div>
    </div>
  );
};
