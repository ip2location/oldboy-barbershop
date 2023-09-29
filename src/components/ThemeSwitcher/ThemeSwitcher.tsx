import { setCookie } from 'cookies-next';
import { ReactElement } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useSetSelectedEntity } from '../../types/useSetSelectedEntity';
import { SEVEN_DAYS, Cookies, ThemeMode } from '../../constants';
import { Icon } from '../Icon';

export const ThemeSwitcher = (): ReactElement => {
  const { selectedEntity: selectedTheme, setSelectedEntity: setSelectedTheme } =
    useSetSelectedEntity(ThemeMode.Light, Cookies.Theme);

  const switchTheme = (value: string) => {
    const switchedTheme = value === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;
    setSelectedTheme(switchedTheme);
    setCookie(Cookies.Theme, switchedTheme, { expires: SEVEN_DAYS });
  };

  return (
    <div className="theme-select flex w-8 relative right-44">
      <div
        className="theme-select__current font-rex z-20 flex items-center 
        content-center justify-center h-8 w-8 border-2 
        border-orange-title rounded-full
        hover:bg-orange-title transition-all ease-out duration-200 select-none"
      >
        <div className="p-1 text-center" onClick={() => switchTheme(selectedTheme)}>
          <Icon value={{ className: 'text-base text-white', role: 'img' }}>
            {selectedTheme === ThemeMode.Light ? <BsMoonFill /> : <BsSunFill />}
          </Icon>
        </div>
      </div>
    </div>
  );
};
