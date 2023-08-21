import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import { RussianCitiesSelect } from './Russia/RussianCitiesSelect';

export const LocationSelector = (): ReactElement => {
  return (
    <section
      className="location-selector fixed flex flex-col top-0 bottom-0 left-0 z-40 
                    w-full h-full overflow-x-hidden overflow-y-scroll
                    bg-white transition-all duration-150 ease-out"
    >
      <header className="location-selector__header fixed z-40 w-full p-[50px] bg-white h-[188px]">
        <div className="location-selector__caption flex justify-between px-16 mb-20">
          <div className="main-countries flex items-start">
            <div className="logo-selector">
              <div className="logo-text flex">
                <Link
                  className="location-logo relative cursor-pointer relative cursor-pointer mr-4 transition-filter duration-200 ease opacity-100 drop-shadow-[1px_1px_0_orange]"
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
                  className="location-logo relative cursor-pointer relative cursor-pointer 
                                hover:transition-filter 
                                hover:duration-200 
                                hover:ease 
                                hover:opacity-100 
                                hover:drop-shadow-[1px_1px_0_orange]"
                  href="/"
                >
                  <div className="location-logo__image">
                    <Image
                      alt="OldBoy Barbershop EU Logo"
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
                className="location-logo relative cursor-pointer mr-4
                                hover:transition-filter 
                                hover:duration-200 
                                hover:ease 
                                hover:opacity-100 
                                hover:drop-shadow-[1px_1px_0_orange]"
                href="/"
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
                className="location-logo relative cursor-pointer
                                hover:transition-filter 
                                hover:duration-200 
                                hover:ease 
                                hover:opacity-100 
                                hover:drop-shadow-[1px_1px_0_orange]"
                href="/"
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
      <div className="location-selector__content">
        <div className="branch-addresses">
          <div className="branch-addresses__container relative h-[43vh] pt-12 overflow-x-scroll">
            <RussianCitiesSelect />
          </div>
        </div>
      </div>
    </section>
  );
};
