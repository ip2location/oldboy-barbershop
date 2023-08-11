import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className="px-12">{children}</div>;
};
