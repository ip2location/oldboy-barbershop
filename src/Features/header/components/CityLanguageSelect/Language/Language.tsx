import Link from 'next/link';
import { useState } from 'react';

export const Language = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        <p className="p-1 text-center">ru</p>
      </div>
      <div
        className={`${
          isVisible ? 'visible' : 'hidden'
        } language-select__popup absolute top-0 right-0 left-auto py-8 px-8 bg-orange-bg rounded-2xl z-40`}
      >
        <ul className="w-max m-0 p-0">
          <li>
            <Link className="font-rex" href="/">
              EN - US &nbsp;&nbsp;English
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
