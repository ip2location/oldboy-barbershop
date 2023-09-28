import React, { ReactElement, useEffect, useState } from 'react';
import { setCookie } from 'cookies-next';
import axios from 'axios';
import { useSetSelectedEntity } from '../../../types/useSetSelectedEntity';
import { Cookies, SEVEN_DAYS } from '../../../constants';
import { LocationSelectorScroll } from '../../LocationSelectorScroll';

interface CISCountriesSelectProps {
  cityValue?: string;
}

interface Place {
  id: string;
  place?: string;
  placeEnglishName?: string;
  address: string;
  addressDetail?: string;
}

interface Region {
  letter: string;
  country: string;
  places?: Place[];
}

export const CISCountriesSelect = ({
  cityValue = 'Москва',
}: CISCountriesSelectProps): ReactElement => {
  const [cisRegion, setCisRegion] = useState<Region[]>([]);

  useEffect(() => {
    const fetchCisRegion = async () => {
      try {
        const response = await axios.get('/api/cisRegionLists');
        setCisRegion(response.data.cisRegionList);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchCisRegion();
  }, []);

  const { setSelectedEntity: setSelectedCity } = useSetSelectedEntity(cityValue, Cookies.City);

  const selectCity = (value: string) => {
    setCookie(Cookies.City, value, { expires: SEVEN_DAYS });
    setSelectedCity(value);
  };

  const handlePickCity = (value: string) => {
    selectCity(value);
    window.location.reload();
  };

  return (
    <div className="location-selector__abroad">
      <div className="branch-addresses px-32 mt-32">
        <div className="branch-addresses__container flex flex-row flex-wrap justify-center pt-12 h-auto overflow-visible">
          {cisRegion.reduce((accelerator: React.ReactNode[], { letter, country, places }) => {
            if (!places) {
              return accelerator;
            }

            const countryHeader = (
              <div className="country-header w-0 h-0" key={`header-${country}`}>
                {country}
              </div>
            );

            const placeElements = places.map(({ address, addressDetail, id }, index) => (
              <LocationSelectorScroll
                key={id}
                letter={!index ? letter : ''}
                place={!index ? country : ''}
                address={address}
                addressDetail={addressDetail}
                onClick={() => handlePickCity(id)}
                options="forCIS"
              />
            ));

            return [...accelerator, countryHeader, ...placeElements];
          }, [])}
        </div>
      </div>
    </div>
  );
};

export default CISCountriesSelect;

// import { ReactElement, useEffect, useState } from 'react';
// import { setCookie } from 'cookies-next';
// import axios from 'axios';
// import { useSetSelectedEntity } from '../../../types/useSetSelectedEntity';
// import { Cookies, SEVEN_DAYS } from '../../../constants';
// import { LocationSelectorScroll } from '../../LocationSelectorScroll';

// interface CISCountriesSelectProps {
//   cityValue?: string;
// }

// export const CISCountriesSelect = ({
//   cityValue = 'Москва',
// }: CISCountriesSelectProps): ReactElement => {
//   const [cisRegion, setCisRegion] = useState<
//     Array<{
//       letter: string;
//       country: string;
//       places?: Array<{
//         id: string;
//         place?: string;
//         placeEnglishName?: string;
//         address: string;
//         addressDetail?: string;
//       }>;
//     }>
//   >([]);

//   useEffect(() => {
//     const regionsUrl = 'http://localhost:3000/api/cisRegionLists';

//     axios
//       .get(regionsUrl)
//       .then((response) => {
//         setCisRegion(response.data.cisRegionList);
//       })
//       .catch((error) => {
//         console.error('Error fetching data from API:', error);
//       });
//   }, []);
//   const { setSelectedEntity: setSelectedCity } = useSetSelectedEntity(cityValue, Cookies.City);

//   const selectCity = (value: string) => {
//     setCookie(Cookies.City, value, { expires: SEVEN_DAYS });
//     setSelectedCity(value);
//   };

//   const handlePickCity = (value: string) => {
//     selectCity(value);
//     window.location.reload();
//   };
//   let lastRenderedCountry = '';
//   return (
//     <div className="location-selector__abroad">
//       <div className="px-32 mt-32">
//         <div className="flex flex-row flex-wrap justify-between  relative pt-12 h-full overflow-y-scroll overflow-x-hidden columns-[15em]">
//           {cisRegion.map(({ letter, country, places }) => {
//             if (!places) {
//               return null;
//             }

//             return places.map(({ address, addressDetail, id }, index) => {
//               const renderCountry = lastRenderedCountry !== country;
//               lastRenderedCountry = country;
//               return (
//                 <div className="countries-block block w-[257px]">
//                   <LocationSelectorScroll
//                     key={id}
//                     letter={!index ? letter : ''}
//                     place={renderCountry ? country : ''}
//                     address={address}
//                     addressDetail={addressDetail}
//                     onClick={() => handlePickCity(id)}
//                   />
//                 </div>
//               );
//             });
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
