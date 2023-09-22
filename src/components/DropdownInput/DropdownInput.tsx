import { ReactElement, PropsWithChildren, ChangeEvent, useState } from 'react';
import { DropdownCities } from '../DropdownCities';

type DropdownVariant = 'fullWidth' | 'halfWidth' | 'width75' | 'width25';

export interface DropdownInputProps extends PropsWithChildren {
  variant: DropdownVariant;
  placeholder: string;
  searchItem: string;
  russianRegion: RussianRegion[];
}

interface Place {
  id: string;
  place?: string;
  placeEnglishName?: string;
  address: string;
  addressDetail?: string;
  metro?: string;
}

interface RussianRegion {
  letter: string;
  places?: Place[];
}

export const DropdownInput = ({
  variant,
  placeholder,
  children,
  searchItem,
  russianRegion,
}: DropdownInputProps): ReactElement => {
  const classes: Record<DropdownVariant, string> = {
    fullWidth: 'w-full',
    halfWidth: 'w-1/2',
    width75: 'w-9/12',
    width25: 'w-3/12',
  };
  const [search, setSearch] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.target.value);
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
            onChange={handleChange}
            type="search"
            value={search}
          />
          {children}
        </form>
        <div className="form_mic absolute top-2 right-10 w-4 h-6 bg-[url('/images/icons/mic.svg')] bg-no-repeat bg-cover cursor-pointer" />
      </div>
      <section
        className={` ${
          search ? 'block' : 'hidden'
        } search-results relative z-10 w-full -mt-10 pt-10 pb-5 px-5 border border-slate-200 rounded-[20px] shadow-md`}
      >
        <h2 className="search-results__title mt-4 text-header-bg font-rex text-2xl">
          Результаты поиска:
        </h2>

        {search === '' ? (
          <p className="text-orange-title font-rex visible">такого {searchItem} не найдено</p>
        ) : (
          <ul className="search-result__list h-min max-h-[50vh] m-0 p-0 pt-5 overflow-y-scroll">
            {russianRegion &&
              russianRegion.map(({ places }) =>
                places?.map(({ place, placeEnglishName, id, address, metro }) =>
                  place?.toLowerCase().includes(search.toLowerCase()) ? (
                    <DropdownCities
                      id={id}
                      href="/[cityEnglishName]/[id]"
                      as={`/${placeEnglishName}/${id}`}
                      city={place}
                      address={address}
                      metro={metro}
                    />
                  ) : null,
                ),
              )}
          </ul>
        )}
      </section>
    </div>
  );
};
