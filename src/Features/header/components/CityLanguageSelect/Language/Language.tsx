import { setCookie } from 'cookies-next';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { useSetSelectedEntity } from '../../../../../hooks/useSetSelectedEntity';
import { SEVEN_DAYS, EN, RU, Cookies } from '../../../../../constants';

interface LanguageSelectProps {
  languageValue: string;
}

export const Language = ({ languageValue }: LanguageSelectProps): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
  const { selectedEntity: selectedLanguage, setSelectedEntity: setSelectedLanguage } =
    useSetSelectedEntity(languageValue, Cookies.Language);

  const selectLanguage = (value: string) => {
    setCookie(Cookies.Language, value, { expires: SEVEN_DAYS });
    setSelectedLanguage(value);
  };

  const handlePickLanguage = (value: string) => {
    selectLanguage(value);
  };

  const handleShow = () => {
    setIsVisible((current) => !current);
  };

  return (
    <div className="language-select flex relative z-30 w-8">
      <div
        className="language-select__current relative font-rex z-50 flex align-items-center 
        align-content-center justify-center h-8 w-8 border-2 
        border-orange-title rounded-full
        hover:bg-orange-title transition-all ease-out duration-200 select-none"
        onClick={handleShow}
      >
        <p className="p-1 text-center">{selectedLanguage === EN ? 'ru' : 'en'}</p>
      </div>

      <section
        className={`${
          isVisible ? 'visible' : 'hidden'
        } language-select__popup absolute top-0 right-0 left-auto py-8 px-8 bg-orange-bg rounded-2xl z-40`}
      >
        <ul className="w-max m-0 p-0">
          <li>
            {selectedLanguage === RU ? (
              <Link className="font-rex" onClick={() => handlePickLanguage(EN)} href="/">
                RU - РУ - РУССКИЙ
              </Link>
            ) : (
              <Link className="font-rex" onClick={() => handlePickLanguage(RU)} href="/">
                EN - US - ENGLISH
              </Link>
            )}
          </li>
        </ul>
      </section>
    </div>
  );
};
