import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Promo } from './components/Promo';
import { Sidebar } from './components/Sidebar';
import { ContactUs } from '../../components/ContactUs';

interface HeaderPageProps {
  barbershopCount: string;
}

export const HeaderPage = ({ barbershopCount }: HeaderPageProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <div>
        <Header />
        <Promo barbershopCount={barbershopCount} />
        <div className="mt-6 m-12">
          <Button variant="standard" onClick={() => setIsOpen((prevState) => !prevState)}>
            Запись онлайн
          </Button>
          <div className="mt-6">
            <Link href="/">
              <Button variant="accentLink">Купить косметику</Button>
            </Link>
          </div>
        </div>
        <ContactUs onClick={() => setIsOpen((prevState) => !prevState)} />
      </div>
      {isOpen && <Sidebar setIsOpen={() => setIsOpen((prevState) => !prevState)} />}
    </Layout>
  );
};
