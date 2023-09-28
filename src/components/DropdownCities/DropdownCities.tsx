import Link from 'next/link';
import { ReactElement } from 'react';
import { setCookie } from 'cookies-next';
import { Cookies, SEVEN_DAYS } from '../../constants';
import { useSetSelectedEntity } from '../../types/useSetSelectedEntity';

export interface DropdownCitiesProps {
  id: string;
  href: string;
  city: string;
  address: string;
  metro?: string;
  as: string;
}

export const DropdownCities = ({
  id,
  city,
  address,
  href,
  metro,
  as,
}: DropdownCitiesProps): ReactElement => {
  const { setSelectedEntity: setSelectedID } = useSetSelectedEntity(
    id.toLocaleString(),
    Cookies.City,
  );

  const selectCity = (value: string) => {
    setCookie(Cookies.City, value, { expires: SEVEN_DAYS });
    setSelectedID(value);
  };

  const handlePickCity = (value: string) => {
    selectCity(value);
  };

  return (
    <li
      key={id}
      className="search-results__item relative mb-4 pl-4 text-sm
                      before:absolute
                      before:top-2/4
                      before:left-0
                      before:block
                      before:w-2
                      before:h-2
                      before:bg-orange-title
                      before:rounded-full
                      before:-translate-y-2/4
                      before:content-['']"
    >
      <Link
        href={href}
        as={as}
        onClick={() => handlePickCity(id)}
        className="text-orange-bg max-w-full py-1.5 px-3 overflow-hidden 
                        tracking-wider whitespace-nowrap text-ellipsis
                        rounded-[20px] transition-all duration-200 linear font-sans uppercase font-semibold hover:bg-orange-title
                        hover:text-white"
      >
        {city}, {address}
        <br />
      </Link>
      {metro ? (
        <div
          className="location-list__metro relative inline-block font-semibold mt-1 font-sans uppercase text-red-700 left-[-1px] text-xs
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
                                      before:ml-3
                                      before:font-bold
                                      before:text-center
                                      before:align-middle
                                      before:rounded-full
                                      before:top-[-1px]
                                      before:tracking-wide
                                      before:text-[0.6rem]"
        >
          <span className="text-reddish">{metro}</span>
        </div>
      ) : null}
    </li>
  );
};
