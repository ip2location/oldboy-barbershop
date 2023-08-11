'use client';

import { useState } from 'react';

import { useAppDispatch } from '../store/store';
import { createFunction, HeaderPage } from '../Features/header';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  const alertOnClick = () => {
    dispatch(createFunction(inputValue));
  };

  return (
    <main className="overflow-hidden flex md:container md:max-w-screen-2xl mx-auto flex-col bg-header-bg">
      <div
        className="flex
        flex-col
        justify-between
        bg-[url('/images/bg/hero.jpg')]
        bg-no-repeat
        bg-[left_-3.4rem_bottom_0.4rem]
        relative
        bg-cover
        after:bg-[url('/images/bg/white-grunge.svg')]
        after:z-10
        after:h-32
        after:bg-repeat-x
        after:bg-[top_5rem_center]
        after:bg-[length:50rem]
        after:left-0
        after:w-full
        h-screen"
      >
        <HeaderPage />
      </div>
      <input
        type="text"
        placeholder="Enter any value here..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="rounded-full w-40 bg-orange-300 px-1" type="button" onClick={alertOnClick}>
        Click to display state value
      </button>
    </main>
  );
}
