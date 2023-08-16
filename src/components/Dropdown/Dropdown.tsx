import Link from 'next/link';
import { ReactElement, PropsWithChildren } from 'react';

export interface InputDropdownProps extends PropsWithChildren {
  onChange?: () => void;
  placeholder: string;
  max_width: string;
  search_item: string;
  search_results_href: string;
  search_results_li: string;
}

export const Dropdown = ({
  onChange,
  max_width,
  placeholder,
  children,
  search_item,
  search_results_href,
  search_results_li,
}: InputDropdownProps): ReactElement => {
  return (
    <div className="form-dropdown">
      <div className={`w-full relative z-20 max-w-[${max_width}]`}>
        <form autoComplete="off">
          <input
            className="block border-2 rounded-full w-full border-orange-title h-10 font-rex px-4 text-header-bg placeholder:text-slate-500 outline-0 transition-all ease-out duration-200"
            placeholder={placeholder}
            onChange={onChange}
            type="search"
          />
          {children}
        </form>
        <div className="form_mic absolute top-2 right-10 w-4 h-6 bg-[url('/images/icons/mic.svg')] bg-no-repeat bg-cover cursor-pointer" />
      </div>
      <section className="search-results block relative z-10 w-full -mt-10 pt-10 pb-5 px-5 border border-slate-200 rounded-[20px] shadow-md">
        <h2 className="search-results__title mt-4 text-header-bg font-rex text-2xl">
          Результаты поиска:
        </h2>
        <p className="text-orange-title font-rex hidden">такого {search_item} не найдено</p>
        <ul className="search-result__list h-min max-h-[50vh] m-0 p-0 overflow-y-scroll">
          <li
            className="search-results__item relative mb-1 pl-4 text-sm
                before:absolute
                before:top-2/4
                before:left-0
                before:block
                before:w-2
                before:h-2
                before:bg-orange-title
                before:rounded-full
                before:-translate-y-2/4
                before:content-['']"
          >
            <Link
              href={`/${search_results_href}`}
              className="text-orange-bg max-w-full py-1.5 px-3 overflow-hidden 
                tracking-wider whitespace-nowrap text-ellipsis
                rounded-[20px] transition-all duration-200 linear font-sans uppercase font-semibold"
            >
              {search_results_li}
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
