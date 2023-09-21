'use client';

import { Footer } from '../components/Footer/Footer';
import { HeaderPage } from '../Features/header';
import { PromoCard } from '../components/PromoCard';

const Home = async () => {
  const [headerListResponse, barbershopsInfoResponse, footerListsResponse] = await Promise.all([
    fetch('http://localhost:3000/api/headerList'),
    fetch('http://localhost:3000/api/barbershopsInfo'),
    fetch('http://localhost:3000/api/footerLists'),
  ]);
  const [
    { headerMainList },
    { branchesTotal, countriesTotal, capitalsTotal },
    { footerMainList, footerServicesList, footerInfoList },
  ] = await Promise.all([
    headerListResponse.json(),
    barbershopsInfoResponse.json(),
    footerListsResponse.json(),
  ]);

  return (
    <>
      <main className="overflow-hidden flex md:container md:max-w-screen-2xl mx-auto flex-col">
        <div
          className="flex
          flex-col
          justify-between
          bg-[url('/images/hero_overlay.png'),_url('/images/bg/hero.jpg')]
          bg-no-repeat
          bg-[position:center_bottom,_left_bottom_0.4rem]
          bg-[length:90%,_cover]
          mb-20
          relative
          after:bg-[url('/images/bg/white-grunge.svg')]
          after:z-10
          after:h-12
          after:bg-repeat-x
          after:bg-[top_1rem_center]
          after:bg-[length:50rem]
          after:left-0
          after:w-full"
        >
          <HeaderPage mainNavList={headerMainList} branchesTotal={branchesTotal} />
        </div>
        <PromoCard />
      </main>
      <Footer
        branchesTotal={branchesTotal}
        countriesTotal={countriesTotal}
        capitalsTotal={capitalsTotal}
        footerMainTitle="Меню"
        footerServicesTitle="Услуги"
        footerInfoTitle="Информация"
        footerMainList={footerMainList}
        footerServicesList={footerServicesList}
        footerInfoList={footerInfoList}
      />
    </>
  );
};

export default Home;
