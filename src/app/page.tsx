'use client';

import { HeaderPage } from '@/Features/header';
import { PromoCard } from '@/components/PromoCard';

export default function Home() {
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
        after:h-32
        after:bg-repeat-x
        after:bg-[top_5rem_center]
        after:bg-[length:50rem]
        after:left-0
        after:w-full"
      >
        <HeaderPage />
      </div>
      <PromoCard />
    </main>
  );
}
