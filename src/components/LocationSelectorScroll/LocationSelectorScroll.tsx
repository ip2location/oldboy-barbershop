import Link from 'next/link';
import { PropsWithChildren, ReactElement } from 'react';

export interface LocationProps extends PropsWithChildren {
  letter?: string | null;
  href: string;
  title: string;
  address: string;
  place?: string;
  metro?: string;
}

export const LocationSelectorScroll = ({
  letter,
  href,
  title,
  address,
  place,
  metro,
}: LocationProps): ReactElement => {
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
        <div className="">{letter}</div>
      </div>
      <div className="branch-addresses__content">
        <div>
          <ul className="location-list">
            <li className="location-list__name">
              <Link className="text-header-bg text-xl font-rex" href={href}>
                {title}
              </Link>
            </li>
            <li className="location-list__item">
              <Link
                href={href}
                className="location-list__link w-64 py-1.5 pr-3 pl-7
                      overflow-hidden
                      text-sm
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
                      before:content-['']
                      
                      hover:bg-orange-title
                      hover:text-white"
              >
                {address}
              </Link>
              {place ? (
                <div
                  className="location-list__place 
                      -top-1 left-0.5 
                      py-[3px] px-2.5 
                      text-header-bg 
                      text-[0.6rem] 
                      tracking-wide 
                      align-middle
                      before:relative
                      before:top-[-1px]
                      before:inline-block
                      before:mr-1
                      before:font-bold
                      before:text-center
                      before:align-middle
                      before:rounded-full
                      before:w-3.5
                      before:h-3.5
                      before:pt-[1px]
                      before:pb-0.5
                      before:pr-0.5
                      before:leading-4
                      before:bg-header-bg
                      before:border-1
                      before:border-solid
                      before:border-black
                      before:shadow-[inset_0_0_0_3px_#fff]
                      before:content-['']"
                >
                  {place}
                </div>
              ) : null}

              {metro ? (
                <div className="location-list__metro">
                  <span
                    className="location-list__metro relative inline-block font-semibold font-sans uppercase text-red-700 left-[-1px] text-xs
                                      before:w-[17px]
                                      before:h-[17px]
                                      before:leading-3
                                      before:border-2 
                                      before:border-solid
                                      before:border-red-700
                                      before:content-['м']
                                      before:relative
                                      before:inline-block
                                      before:mr-1
                                      before:font-bold
                                      before:text-center
                                      before:align-middle
                                      before:rounded-full
                                      before:top-[-1px]
                                      before:tracking-wide
                                      before:text-[0.6rem]"
                  >
                    {metro}
                  </span>
                </div>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
