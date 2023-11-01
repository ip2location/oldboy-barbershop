import { setCookie } from 'cookies-next';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DropdownInput } from '../../DropdownInput/DropdownInput';
import { Cookies, SEVEN_DAYS } from '../../../constants';
import { useSetSelectedEntity } from '../../../types/useSetSelectedEntity';
import { RussianLocationScroll } from './RussianLocationScroll';

interface RussianCitiesSelectProps {
  cityValue?: string;
}
interface Place {
  id: string;
  place?: string;
  placeEnglishName?: string;
  address: string;
  addressDetail?: string;
  metro?: string;
}

interface RussianRegion {
  letter: string;
  places?: Place[];
}

export const RussianCitiesSelect = ({ cityValue = 'Москва' }: RussianCitiesSelectProps) => {
  const { setSelectedEntity: setSelectedCity } = useSetSelectedEntity(cityValue, Cookies.City);
  const [russianRegion, setRussianRegion] = useState<RussianRegion[]>([]);

  useEffect(() => {
    if (russianRegion && russianRegion.length === 0) {
      const fetchRussianRegion = async () => {
        try {
          const response = await axios.get('/api/russianCitiesLists');
          setRussianRegion(response.data.russianRegionList);
        } catch (error) {
          // console.log('Error fetching data from API:', error);
        }
      };
      fetchRussianRegion();
    }
  }, [russianRegion]);

  const selectCity = (value: string) => {
    setCookie(Cookies.City, value, { expires: SEVEN_DAYS });
    setSelectedCity(value);
  };

  const handlePickCity = (value: string) => {
    selectCity(value);
    window.location.reload();
  };

  return (
    <>
      <div className="location-logo__image flex flex-col items-center pb-24">
        <h1 className="text-black font-rex text-2xl font-bold mb-4">
          Выбери <span className="text-orange-title">свой барбершоп</span>
        </h1>
        <DropdownInput
          placeholder="город, улица или метро"
          searchItem="города"
          variant="halfWidth"
          russianRegion={russianRegion}
        />
        <div className="location-selector__alphabet mt-12 flex justify-center w-full">
          <div className="alphabet relative flex justify-center mr-14">
            <div>
              <ul className="alphabet__content flex justify-center w-[416px] flex-wrap">
                {russianRegion &&
                  russianRegion.map(({ letter, places }) =>
                    places ? (
                      <li className="font-rex text-orange-title text-base mr-1.5" key={letter}>
                        <Link
                          href="#letter"
                          className="alphabet__trigger text-orange-title hover:underline hover:underline-offset-4 decoration-2 
                                          inline-block pr-2
                                          w-5
                                          h-5
                                          text-center
                                          uppercase
                                          border-1 border-transparent"
                        >
                          {letter}
                        </Link>
                      </li>
                    ) : (
                      <li className="font-rex text-orange-title text-base mr-1.5" key={letter}>
                        <Link
                          className="alphabet__trigger text-neutral-300 hover:underline hover:underline-offset-4 decoration-2
                            inline-block pr-2
                            w-5
                            h-5
                            text-center
                            uppercase
                            border-1 border-transparent"
                          href="#letter"
                        >
                          {letter}
                        </Link>
                      </li>
                    ),
                  )}
                ,
              </ul>
            </div>
          </div>
          <div className="location-selector__links flex self-center justify-between w-[290px]">
            <Link
              className="location-selector__top h-[71px] ease-in-out duration-200 bg-transparent"
              href="/"
            >
              <Image
                src="/images/logo/location-moscow.png"
                alt="Oldboy Barbershop Moscow logo"
                className="h-full 
                            hover:transition-filter 
                            hover:duration-200 
                            hover:ease 
                            hover:opacity-100 
                            hover:drop-shadow-[1px_1px_0_orange]"
                width={126}
                height={100}
                onClick={() => handlePickCity('Москва')}
              />
            </Link>
            <Link
              className="location-selector__top h-[71px] ease-in-out duration-200 bg-transparent"
              href="/"
            >
              <Image
                src="/images/logo/location-peterburg.png"
                alt="Oldboy Barbershop St. Petersburg logo"
                className="h-full
                              hover:transition-filter 
                              hover:duration-200 
                              hover:ease 
                              hover:opacity-100 
                              hover:drop-shadow-[1px_1px_0_orange]"
                width={126}
                height={100}
                onClick={() => handlePickCity('Санкт-Петербург')}
              />
            </Link>
          </div>
        </div>
      </div>
      <RussianLocationScroll cityValue={cityValue} russianRegion={russianRegion} />
    </>
  );
};
