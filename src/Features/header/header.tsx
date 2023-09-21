import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Promo } from './components/Promo';
import { Sidebar } from './components/Sidebar';
import { ContactUs } from '../../components/ContactUs';
import { LinkOptions } from '../../types/link';

interface HeaderPageProps {
  mainNavList: LinkOptions;
  branchesTotal: number;
}

export const HeaderPage = ({ mainNavList, branchesTotal }: HeaderPageProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <div>
        <Header mainNavList={mainNavList} />
        <Promo branchesTotal={branchesTotal} />
        <div className="flex justify-center lg:block">
          <div className="mt-6 ">
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
        <ContactUs onClick={() => setIsOpen((prevState) => !prevState)} />
      </div>
      {isOpen && <Sidebar setIsOpen={() => setIsOpen((prevState) => !prevState)} />}
    </Layout>
  );
};
