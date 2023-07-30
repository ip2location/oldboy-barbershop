'use client';

import Link from 'next/link';
import { ReactElement, useState } from 'react';

import { Header } from '../../components/Header';
import { PromoBanner } from '../../components/PromoBanner';
import { barbsershopData } from '../../components/PromoBanner/PromoData';
import { Sidebar } from '../sidebar/sidebar';

export const HeaderPage = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <Header />
        <PromoBanner barbershopCount={barbsershopData.barbershopCount} />
        <div className="display: inline-grid absolute top-96 mt-44 ml-12">
          <button
            onClick={(previous) => setIsOpen(!previous)}
            type="button"
            className="text-white bg-orange-title border-2 border-orange-title h-10 w-44 m-2 rounded-3xl font-button_font uppercase text-xs font-medium hover:bg-white hover:text-black"
          >
            запись онлайн
          </button>

          <Link href="/">
            <button
              type="button"
              className="text-btn-blue bg-transparent border-2 border-btn-blue h-10 w-44 m-2 rounded-3xl font-button_font uppercase text-xs font-medium shadow-btn opacity-70 hover:opacity-100"
            >
              купить косметику
            </button>
          </Link>
        </div>
      </div>
      {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};
