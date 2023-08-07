'use client';

import { useState } from 'react';
import { useAppDispatch } from '@/store/store';
import { HeaderPage, createFunction } from '@/Features/header';
import { PromoCard } from '@/components/PromoCard';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  const alertOnClick = () => {
    dispatch(createFunction(inputValue));
  };

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
        <HeaderPage />
      </div>
      <PromoCard />
      <input
        type="text"
        placeholder="Enter any value here..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={alertOnClick}>
        Click to display state value
      </button>
    </main>
  );
}
