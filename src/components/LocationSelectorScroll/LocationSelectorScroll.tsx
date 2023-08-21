import Link from 'next/link';
import { PropsWithChildren, ReactElement } from 'react';

export interface LocationSelectorProps extends PropsWithChildren {
  locationLetter: string;
  locationHref: string;
  locationName: string;
  locationAddress: string;
}

export const LocationSelectorScroll = ({
  locationLetter,
  locationHref,
  locationName,
  locationAddress,
}: LocationSelectorProps): ReactElement => {
  return (
    <div className="branch-addresses__index">
      <div
        className="branch-addresses__letter relative underline underline-offset-4
            z-10
            w-8
            mb-3.5
            text-orange-title
            text-2xl
            font-rex
            leading-8
            text-center
            border-b- 1 border-orange-title
            before:w-8 
            before:h-[400px]
            before:-mt-[400px]
            before:content-['']
            "
      >
        <noindex>{locationLetter}</noindex>
      </div>
      <div className="branch-addresses__content">
        <noindex>
          <div className="location-list">
            <p className="location-list__name">
              <Link className="text-header-bg text-xl font-rex" href={locationHref}>
                {locationName}
              </Link>
            </p>
            <p className="location-list__item">
              <Link
                className="before:absolute
                              before:top-2.5
                              before:left-0
                              before:block
                              before:w-2
                              before:h-2
                              before:bg-orange-title
                              before:rounded-full
                              before:content-['']"
                href={locationHref}
              >
                {locationAddress}
              </Link>
            </p>
          </div>
        </noindex>
      </div>
    </div>
  );
};
