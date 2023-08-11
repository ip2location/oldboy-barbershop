import { CookieValueTypes, getCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import { ReactElement, useEffect, useState } from 'react';

interface LanguageSelectProps {
  languageValue: string | undefined;
}

// eslint-disable-next-line react/prop-types
export const Language: React.FC<LanguageSelectProps> = ({ languageValue }): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(languageValue);

  useEffect(() => {
    const cookieValue = getCookie('languageValue') as CookieValueTypes;
    if (typeof cookieValue === 'string') {
      setSelectedValue(cookieValue || undefined);
    }
  }, []);

  const selectValue = (value: string) => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    setCookie('languageValue', value, { expires });
    setSelectedValue(value);
  };

  const handlePClick = (value: string) => {
    selectValue(value);
  };

  const handleShow = () => {
    setIsVisible((current) => !current);
  };

  console.log(`Selected language:${selectedValue}`);

  return (
    <div className="language-select flex relative z-30 w-8">
      <div
        className="language-select__current relative font-rex z-50 flex align-items-center 
        align-content-center justify-center h-8 w-8 border-2 
        border-orange-title rounded-full
        hover:bg-orange-title transition-all ease-out duration-200 select-none"
        onClick={handleShow}
      >
        <p className="p-1 text-center">{selectedValue === 'RU' ? 'ru' : 'en'}</p>
      </div>

      <section
        className={`${
          isVisible ? 'visible' : 'hidden'
        } language-select__popup absolute top-0 right-0 left-auto py-8 px-8 bg-orange-bg rounded-2xl z-40`}
      >
        <ul className="w-max m-0 p-0">
          <li>
            {selectedValue === 'RU' ? (
              <Link className="font-rex" onClick={() => handlePClick('EN')} href="/">
                EN - US &nbsp;&nbsp;English
              </Link>
            ) : (
              <Link className="font-rex" onClick={() => handlePClick('RU')} href="/">
                RU - RU &nbsp;&nbsp;Russian
              </Link>
            )}
          </li>
        </ul>
      </section>
    </div>
  );
};
