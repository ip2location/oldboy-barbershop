'use client';

import { HeaderPage } from '@/Features/header';
import { PromoCard } from '@/components/PromoCard';

import { Footer } from '@/components/Footer';

const Home = async () => {
  const barbershopsInfoResponse = await fetch('http://localhost:3000/api/barbershopsInfo');
  const barbershopsInfoJsonResponse = await barbershopsInfoResponse.json();
  const numberOfBranches = barbershopsInfoJsonResponse.branchesTotal;
  const numberOfCountries = barbershopsInfoJsonResponse.countriesTotal;
  const numberOfCapitals = barbershopsInfoJsonResponse.capitalsTotal;

  const footerListsResponse = await fetch('http://localhost:3000/api/footerLists');
  const footerListsJsonResponse = await footerListsResponse.json();
  const { footerMainList } = footerListsJsonResponse;
  const { footerServicesList } = footerListsJsonResponse;
  const { footerInfoList } = footerListsJsonResponse;

  return (
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
        <HeaderPage branchesTotal={numberOfBranches} />
      </div>
      <PromoCard />

      <Footer
        branchesTotal={numberOfBranches}
        countriesTotal={numberOfCountries}
        capitalsTotal={numberOfCapitals}
        footerMainTitle="Меню"
        footerServicesTitle="Услуги"
        footerInfoTitle="Информация"
        footerMainList={footerMainList}
        footerServicesList={footerServicesList}
        footerInfoList={footerInfoList}
      />
    </main>
  );
};

export default Home;
