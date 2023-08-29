import { IconContext } from 'react-icons';
import { PropsWithChildren } from 'react';

interface ReactIconProps extends PropsWithChildren {
  value: object;
}
export const ReactIcon = ({ value, children }: ReactIconProps) => {
  return (
    <div>
      <IconContext.Provider value={value}>{children}</IconContext.Provider>
    </div>
  );
};
