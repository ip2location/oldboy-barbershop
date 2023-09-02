import { IconContext } from 'react-icons';
import { ReactElement, PropsWithChildren } from 'react';

interface IconProps extends PropsWithChildren {
  value: object;
}

export const Icon = ({ value, children }: IconProps): ReactElement => {
  return (
    <div role="img">
      <IconContext.Provider value={value}>{children}</IconContext.Provider>
    </div>
  );
};
