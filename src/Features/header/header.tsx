import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/Button';

import { Header } from '../../components/Header';
import { Promo } from './components/Promo';
import { Sidebar } from './components/Sidebar';

export const HeaderPage = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <div>
        <Header />
        <Promo />
        <div className="mt-6">
          <Button variant="standard" onClick={() => setIsOpen((prevState) => !prevState)}>
            Запись онлайн
          </Button>
          <div className="mt-6">
            <Link href="/">
              <Button variant="accentLink">Купить косметику</Button>
            </Link>
          </div>
        </div>
      </div>
      {isOpen && <Sidebar setIsOpen={() => setIsOpen((prevState) => !prevState)} />}
    </Layout>
  );
};
