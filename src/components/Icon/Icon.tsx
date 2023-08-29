import { IconContext } from 'react-icons';
import { PropsWithChildren } from 'react';

interface IconProps extends PropsWithChildren {
  value: object;
}
export const Icon = ({ value, children }: IconProps) => {
  return (
    <div>
      <IconContext.Provider value={value}>{children}</IconContext.Provider>
    </div>
  );
};
