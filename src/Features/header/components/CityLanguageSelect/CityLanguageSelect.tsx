import { ReactElement } from 'react';
import { CitySelect } from './City/CitySelect';
import { Language } from './Language/Language';

export const CityLanguageSelect = (): ReactElement => {
  return (
    <div className="hero__city-select flex flex-start absolute top-0 right-[3.5rem] lg:right-0 items-start align-top">
      <Language />
      <CitySelect />
    </div>
  );
};
