import { FiNavigation } from 'react-icons/fi';
import { ReactElement, useMemo, useCallback } from 'react';

import { useFetchAllCityLocationsQuery } from '../Sidebar/SidebarSlice';
import { LoadingSpinner } from './LoadingSpinner';

interface CityList {
  city: string;
  branch: number;
}

export const Cities = (): ReactElement => {
  const { data, isLoading } = useFetchAllCityLocationsQuery('');

  const handleCityClick = useCallback(() => {
    return data;
  }, [data]);

  console.log(data);

  return useMemo(
    () => (
      <div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ul>
            {data?.map(({ city, branch }: CityList) => (
              <li key={city} className="border-xl" onClick={handleCityClick}>
                <div className="flex p-2 m-2 font-button_font">
                  <FiNavigation color="#BFA15C" size={20} fill="#BFA15C" className="mt-4" />
                  <div className="ml-4">
                    <p className="font-medium text-gold-title">{city}</p>
                    <p>{branch} филиалов</p>
                  </div>
                </div>
                <hr className="bg-black h-0.5 w-11/12 ml-4" />
              </li>
            ))}
          </ul>
        )}
      </div>
    ),
    [handleCityClick, data, isLoading],
  );
};
