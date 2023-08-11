import { ReactElement } from 'react';
import { CitySelect } from './City/CitySelect';
import { Language } from './Language';

export const CityLanguageSelect = (): ReactElement => {
  return (
    <div className="hero__city-select flex flex-start absolute top-0 right-0 align-items-start align-top">
      <Language languageValue={undefined} />
      <CitySelect myValue={undefined} />
    </div>
  );
};
