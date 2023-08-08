import { CitySelect } from './City/CitySelect';
import { Language } from './Language';

export const CityLanguageSelect = () => {
  return (
    <div className="hero__city-select flex flex-start absolute top-0 right-0 align-items-start align-top">
      <Language />
      <CitySelect />
    </div>
  );
};
