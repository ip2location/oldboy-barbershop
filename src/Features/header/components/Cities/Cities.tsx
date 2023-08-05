import { FiNavigation } from 'react-icons/fi';
import { ReactElement, useMemo, useCallback } from 'react';

export const cityLocations = [
  { city: 'Москва', branch: 92 },
  { city: 'Санкт-Петербург', branch: 16 },
  { city: 'Калининград', branch: 10 },
  { city: 'Красногорск', branch: 5 },
  { city: 'Воронеж', branch: 4 },
  { city: 'Долгопрудный', branch: 3 },
  { city: 'Красноярск', branch: 3 },
  { city: 'Раменское', branch: 3 },
];

export const Cities = (): ReactElement => {
  const handleCityClick = useCallback(() => {
    return cityLocations;
  }, []);

  return useMemo(
    () => (
      <ul>
        {cityLocations.map(({ city, branch }) => (
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
    ),
    [handleCityClick],
  );
};
