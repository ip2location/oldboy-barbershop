import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';
import { FooterNavList } from '../FooterNavList';
import { LinkOptions } from '../../types/link';

export interface FooterProps {
  branchesTotal: number;
  countriesTotal: number;
  capitalsTotal: number;
  footerMainTitle: string;
  footerServicesTitle: string;
  footerInfoTitle: string;
  footerMainList: LinkOptions;
  footerServicesList: LinkOptions;
  footerInfoList: LinkOptions;
}

export const Footer = ({
  branchesTotal,
  countriesTotal,
  capitalsTotal,
  footerMainTitle,
  footerServicesTitle,
  footerInfoTitle,
  footerMainList,
  footerServicesList,
  footerInfoList,
}: FooterProps): ReactElement => {
  return (
    <footer
      className="footer
      relative
      mt-5
      pt-20 px-12 pb-12
      bg-[url('/images/bg/barberpull.jpg')]
      bg-repeat-x
      bg-no-repeat
      bg-[top_-310px_center]

      text-white
    "
    >
      <div className='absolute top-0 left-0 w-full h-[40px] bg-[url("/images/bg/white-grunge.svg")] bg-cover rotate-180' />
      <div className="footer__content relative flex flex-wrap align-end justify-end h-full pr-10">
        <div className="footer__info-n-contacts flex justify-between w-full">
          <div className="footer__info absolute top-o left-0 pr-10 pl-0 flex flex-col justify-between w-80 pb-10">
            <div className="footer__logo pr-[10px] pb-[30px]">
              <Link href="/">
                <Image
                  src="/images/logo/logo.svg"
                  alt="Oldboy Barbershop vector logo"
                  sizes="(width:100%)"
                  width="270"
                  height="145"
                  role="img"
                />
              </Link>
            </div>
            <div className="footer__caption text-left">
              <h2 className="footer__title text-orange-title font-rex text-xl leading-normal uppercase my-4">
                <span className="branches-total">{branchesTotal}</span>
                <span className="branches-word"> филиала</span> в
                <span className="countries-total"> {countriesTotal}</span> странах и
                <span className="capitals-total"> {capitalsTotal}</span> столицах
              </h2>
              <p className="footer__subtitle font-button_font text-sm leading-normal uppercase my-3.5">
                Крупнейшая международная сеть мужских парикмахерских
              </p>
              <p className="footer__text text-footer-grey font-button_font text-sm leading-normal mb-[0.5em]">
                OldBoy Barbershop — намного больше, чем просто мужская парикмахерская, это даже
                больше, чем мужской клуб по интересам, это именно то место, где ты найдёшь себя и
                свой стиль.
              </p>
            </div>
          </div>
        </div>
        <div className="footer__menues flex justify-between basis-footer-basis py-10 px-5 mb-10 border-y-2 border-y-solid border-y-orange-title">
          <FooterNavList navTitle={footerMainTitle} navList={footerMainList} />
          <FooterNavList navTitle={footerServicesTitle} navList={footerServicesList} />
          <FooterNavList navTitle={footerInfoTitle} navList={footerInfoList} />
        </div>
      </div>
      <div className="footer__copyrights font-button_font text-footer-grey text-xs font-semibold text-right uppercase pr-10">
        <p>
          <span className="footer__copyrights-stress text-white text-[10px] font-bold">
            Копирование материалов запрещено 18+
          </span>
          &nbsp;&#169; 2014–2023 ИП&nbsp;Мирзоев&nbsp;Эльдар&nbsp;Арзуманович
        </p>
      </div>
    </footer>
  );
};
