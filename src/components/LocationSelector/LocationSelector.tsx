import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { RussianCitiesSelect } from './Russia/RussianCitiesSelect';
import { CISCountriesSelect } from './CIS/CISCountriesSelect';

type ClassesVariant = 'activeClass' | 'onHover';

export const LocationSelector = (): ReactElement => {
  const classes: Record<ClassesVariant, string> = {
    activeClass: 'active drop-shadow-[1px_1px_0_orange]',
    onHover:
      'hover:transition-filter hover:duration-200 hover:ease hover:opacity-100 hover:drop-shadow-[1px_1px_0_orange]',
  };
  const [isRegionActive, setIsRegionActive] = useState('Russia');

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsRegionActive(event.currentTarget.id);
  };

  return (
    <section
      className="location-selector flex flex-col top-0 bottom-0 left-0 z-40 
        w-full h-full
        bg-white transition-all duration-150 ease-out overflow-auto"
    >
      <header className="location-selector__header z-40 w-full p-[50px] bg-white h-[188px]">
        <div className="location-selector__caption flex justify-between px-16 mb-20">
          <div className="main-countries flex items-start">
            <div className="logo-selector">
              <div className="logo-text flex">
                <Link
                  key={1}
                  onClick={handleClick}
                  id="1"
                  className={`location-logo relative cursor-pointer relative cursor-pointer mr-4 transition-filter duration-200 ease opacity-100 ${
                    isRegionActive === 'Russia' ? classes.activeClass : undefined
                  } ${classes.onHover}`}
                  href="/"
                >
                  <div>
                    <Image
                      alt="OldBoy Barbershop CIS Logo"
                      width="120"
                      height="100"
                      src="/images/logo/location-rus-hover.png"
                    />
                  </div>
                </Link>
                <Link
                  className={`location-logo relative cursor-pointer relative cursor-pointer ${
                    isRegionActive === 'CIS' ? classes.activeClass : undefined
                  } ${classes.onHover}`}
                  href="/"
                  key={2}
                  onClick={handleClick}
                  id="2"
                >
                  <div className="location-logo__image">
                    <Image
                      alt="OldBoy Barbershop CIS Logo"
                      width="120"
                      height="100"
                      src="/images/logo/location-sng.png"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <p className="location-selector__intro text-header-bg font-rex text-2xl text-center leading-8">
            <em className="text-orange-title not-italic">294 филиалов в 11 странах</em>
            <br />
            крупнейшая международная
            <br />
            сеть барбершопов
          </p>
          <div className="location-logo__wrapper">
            <div className="location-logo__box flex">
              <Link
                className={`location-logo relative cursor-pointer mr-4
                                ${classes.onHover}`}
                href="/europe"
              >
                <div className="location-logo__image">
                  <Image
                    alt="OldBoy Barbershop EU Logo"
                    width="120"
                    height="100"
                    src="/images/logo/location-europe-hover.png"
                  />
                </div>
              </Link>
              <Link
                className={`location-logo relative cursor-pointer
                                ${classes.onHover}`}
                href="/usa"
              >
                <div className="location-logo__image">
                  <Image
                    alt="OldBoy Barbershop USA Logo"
                    width="120"
                    height="100"
                    src="/images/logo/location-usa-hover.png"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {isRegionActive === 'Russia' ? <RussianCitiesSelect /> : <CISCountriesSelect />}
    </section>
  );
};
