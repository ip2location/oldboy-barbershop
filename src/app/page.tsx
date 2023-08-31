'use client';

import { HeaderPage } from '@/Features/header';
import { PromoCard } from '@/components/PromoCard';

import { Footer } from '@/components/Footer';

const Home = async () => {
  const response = await fetch('http://localhost:3000/api/barbershopsInfo');
  const jsonResponse = await response.json();
  const numberOfBranches = jsonResponse.branchesTotal;
  const numberOfCountries = jsonResponse.countriesTotal;
  const numberOfCapitals = jsonResponse.capitalsTotal;

  const res = await fetch('http://localhost:3000/api/footerLists');
  const jsonRes = await res.json();
  const { footerMainList } = jsonRes;
  const { footerServicesList } = jsonRes;
  const { footerInfoList } = jsonRes;

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
        footerMainItems={footerMainList}
        footerServicesItems={footerServicesList}
        footerInfoItems={footerInfoList}
      />
    </main>
  );
};

export default Home;
