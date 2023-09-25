import { ReactElement } from 'react';
import Link from 'next/link';
import { LinkOptions } from '../../types/link';

interface FooterNavListProps {
  navTitle: string;
  navList: LinkOptions;
}

export const FooterNavList = ({ navTitle, navList }: FooterNavListProps): ReactElement => {
  return (
    <div>
      <h3 className="text-footer-grey font-rex text-[1.6rem] leading-loose text-left uppercase pt-4">
        {navTitle}
      </h3>
      <ul className="text-left pb-4">
        {navList?.map(({ title, href }) => {
          return (
            <li key={title}>
              <Link
                href={href}
                className="font-rex text-lg leading-loose transition duration-[.25s] ease-out hover:text-orange-title"
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
