import { ReactElement } from 'react';
import { setCookie } from 'cookies-next';
import { useSetSelectedEntity } from '../../../types/useSetSelectedEntity';
import { Cookies, SEVEN_DAYS } from '../../../constants';
import { LocationSelectorScroll } from '../../LocationSelectorScroll';

interface CISCountriesSelectProps {
  cityValue?: string;
}

export const cisRegion: Array<{
  letter: string;
  country: string;
  places?: Array<{
    id: string;
    place?: string;
    placeEnglishName?: string;
    address: string;
    addressDetail?: string;
  }>;
}> = [
  {
    letter: 'BY',
    country: 'Беларусь',
    places: [
      {
        id: 'Минск',
        placeEnglishName: 'Minsk',
        address: 'МИНСК',
      },
    ],
  },
  {
    letter: 'KZ',
    country: 'Казахстан',
    places: [
      {
        id: 'Актау',
        placeEnglishName: 'Aktau',
        address: 'Г. АКТАУ, 6-Й МИКРОРАЙОН, 39',
      },
      {
        id: 'Астана',
        placeEnglishName: 'Astana-Amman',
        address: 'Г. АСТАНА, УЛ. АММАН, Д. 2',
        addressDetail: 'ЖК «МИЛАНСКИЙ КВАРТАЛ»',
      },
      {
        id: 'Астана',
        placeEnglishName: 'Astana-Imanova',
        address: 'Г. АСТАНА, УЛ. ИМАНОВА, Д. 16',
      },
      {
        id: 'Астана',
        placeEnglishName: 'Astana-Kunaeva',
        address: 'Г. АСТАНА, УЛ. ДИНМУХАМЕДА КУНАЕВА, Д. 10',
        addressDetail: 'БЦ «ИЗУМРУДНЫЙ КВАРТАЛ»',
      },
      {
        id: 'Атырау',
        placeEnglishName: 'Atyrau',
        address: 'Г. АТЫРАУ, УЛ. ГУРЬЕВСКАЯ, Д. 1',
      },
      {
        id: 'Костанай',
        placeEnglishName: 'Kostanai',
        address: 'Г. КОСТАНАЙ, УЛ. АЛТЫНСАРИНА, Д. 110',
      },
      {
        id: 'Усть-Каменогорск',
        placeEnglishName: 'Ust-Kamenogorsk',
        address: 'Г. УСТЬ-КАМЕНОГОРСК, УЛ. КАБАНБАЙ БАТЫРА, 156',
      },
    ],
  },
  {
    letter: 'KG',
    country: 'Кыргызстан',
    places: [
      {
        id: 'Бишкек',
        placeEnglishName: 'Bishkek',
        address: 'Г. БИШКЕК, УЛ. ЛОГВИНЕНКО, Д. 51',
      },
    ],
  },
  {
    letter: 'GE',
    country: 'Грузия',
    places: [
      {
        id: 'Тбилиси',
        placeEnglishName: 'Tbilisi',
        address: 'Г. ТБИЛИСИ, ПР-КТ АЛЕКСАНДРА КАЗБЕГИ, Д. 11',
      },
    ],
  },
  {
    letter: 'TM',
    country: 'Туркменистан',
    places: [
      {
        id: 'Ашхабад',
        placeEnglishName: 'Ashkhabad-Ataturk',
        address: 'АШХАБАД, УЛ. АТАТЮРК, Д. 80',
        addressDetail: 'ТРЦ «БЕРКЕРАР», 1 ЭТАЖ, B15',
      },
      {
        id: 'Ашхабад',
        placeEnglishName: 'Ashkhabad-Magtymkuly',
        address: 'УЛ. МАГТЫМКУЛЫ',
        addressDetail: 'ТРЦ «GÜL ZEMIN» A11',
      },
      {
        id: 'Ашхабад',
        placeEnglishName: 'Ashkhabad-Tahran',
        address: 'УЛ. ТАХРАН',
        addressDetail: 'ТРЦ «ASHGABAT» C-1.71',
      },
    ],
  },
];

export const CISCountriesSelect = ({
  cityValue = 'Москва',
}: CISCountriesSelectProps): ReactElement => {
  const { setSelectedEntity: setSelectedCity } = useSetSelectedEntity(cityValue, Cookies.City);

  const selectCity = (value: string) => {
    setCookie(Cookies.City, value, { expires: SEVEN_DAYS });
    setSelectedCity(value);
  };

  const handlePickCity = (value: string) => {
    selectCity(value);
    window.location.reload();
  };
  let lastRenderedCountry = '';
  return (
    <div className="location-selector__abroad">
      <div className="px-32 mt-32">
        <div className="flex flex-row flex-wrap justify-between  relative pt-12 h-full overflow-y-scroll overflow-x-hidden columns-[15em]">
          {cisRegion.map(({ letter, country, places }) => {
            if (!places) {
              return null;
            }

            return places.map(({ address, addressDetail, id }, index) => {
              const renderCountry = lastRenderedCountry !== country;
              lastRenderedCountry = country;
              return (
                <div className="countries-block block w-[257px]">
                  <LocationSelectorScroll
                    key={id}
                    letter={!index ? letter : ''}
                    place={renderCountry ? country : ''}
                    address={address}
                    addressDetail={addressDetail}
                    onClick={() => handlePickCity(id)}
                  />
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};
