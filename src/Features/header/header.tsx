import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { Header } from '../../components/Header';
import { Sidebar } from './components/Sidebar';
import { Promo } from './components/Promo';

export const HeaderPage = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hero-content relative flex flex-col justify-between grow mx-14">
        <Header />
        <Promo />
        <div className="display: inline-grid mt-28">
          <button
            onClick={(previous) => setIsOpen(!previous)}
            type="button"
            className="text-white bg-orange-title border-2 border-orange-title h-10 w-44 m-2 ml-0 rounded-3xl font-button_font uppercase text-xs font-medium hover:bg-white hover:text-black"
          >
            запись онлайн
          </button>

          <Link href="/">
            <button
              type="button"
              className="text-btn-blue bg-transparent border-2 border-btn-blue h-10 w-44 m-2 ml-0 rounded-3xl font-button_font uppercase text-xs font-medium shadow-btn opacity-70 hover:opacity-100"
            >
              купить косметику
            </button>
          </Link>
        </div>
      </div>
      {isOpen && <Sidebar setIsOpen={() => setIsOpen((prevState) => !prevState)} />}
    </>
  );
};
