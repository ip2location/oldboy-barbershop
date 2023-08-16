import Link from 'next/link';
import { ReactElement, PropsWithChildren, ChangeEvent } from 'react';

type DropdownVariant = 'fullWidth' | 'halfWidth' | 'width75' | 'width25';

export interface DropdownInputProps extends PropsWithChildren {
  variant: DropdownVariant;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  searchItem: string;
  searchResultsHref: string;
  searchResultsText: string;
  inputValue: string;
}

export const DropdownInput = ({
  onChange,
  variant,
  placeholder,
  children,
  searchItem,
  searchResultsHref,
  searchResultsText,
  inputValue,
}: DropdownInputProps): ReactElement => {
  const classes: Record<DropdownVariant, string> = {
    fullWidth: 'w-full',
    halfWidth: 'w-1/2',
    width75: 'w-9/12',
    width25: 'w-3/12',
  };
  return (
    <div className={`flex flex-col form-dropdown ${classes[variant]}`}>
      <div className="relative z-20 w-full">
        <form autoComplete="off">
          <input
            className="block border-2 rounded-full w-full border-orange-title h-10 font-rex px-4 text-header-bg 
              placeholder:text-slate-500 outline-0 
              transition-all ease-out 
              duration-200
              focus:border-orange-bg
              focus:shadow-xl"
            placeholder={placeholder}
            onChange={onChange}
            type="search"
            value={inputValue}
          />
          {children}
        </form>
        <div className="form_mic absolute top-2 right-10 w-4 h-6 bg-[url('/images/icons/mic.svg')] bg-no-repeat bg-cover cursor-pointer" />
      </div>
      <section
        className={` ${
          inputValue ? 'block' : 'hidden'
        } search-results relative z-10 w-full -mt-10 pt-10 pb-5 px-5 border border-slate-200 rounded-[20px] shadow-md`}
      >
        <h2 className="search-results__title mt-4 text-header-bg font-rex text-2xl">
          Результаты поиска:
        </h2>
        <p className="text-orange-title font-rex hidden">такого {searchItem} не найдено</p>
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
              href={`/${searchResultsHref}`}
              className="text-orange-bg max-w-full py-1.5 px-3 overflow-hidden 
                tracking-wider whitespace-nowrap text-ellipsis
                rounded-[20px] transition-all duration-200 linear font-sans uppercase font-semibold"
            >
              {searchResultsText}
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
