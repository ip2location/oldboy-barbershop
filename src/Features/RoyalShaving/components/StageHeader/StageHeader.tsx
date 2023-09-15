import { ReactElement, PropsWithChildren } from 'react';

type HeaderPositionVariant = 'headerLeft' | 'headerRight';
type TitlePositionVariant = 'titleLeft' | 'titleRight';
type ImagePositionVariant = 'imageLeft' | 'imageRight';
type PositionVariant = HeaderPositionVariant | TitlePositionVariant | ImagePositionVariant;

interface StageHeaderProps extends PropsWithChildren {
  headerTitleTop: string;
  headerTitleBottom: string;
  headerPosition: HeaderPositionVariant;
  titlePosition: TitlePositionVariant;
  imagePosition: ImagePositionVariant;
}

export const StageHeader = ({
  headerTitleTop,
  headerTitleBottom,
  headerPosition,
  titlePosition,
  imagePosition,
  children,
}: StageHeaderProps): ReactElement => {
  const classes: { [K in PositionVariant]: string } = {
    headerLeft: 'stage__header mr-10',
    headerRight: 'stage__heade_reversed ml-10 mr-0',
    titleLeft: 'after:-right-5',
    titleRight: 'mr-0 ml-auto after:right-auto after:-left-5 after:rotate-180',
    imageLeft: 'stage__image after:-right-5',
    imageRight: 'stage__image_reversed -left-10 after:right-auto after:left-0 after:rotate-180',
  };

  return (
    <header
      className={`${classes[headerPosition]} basis-4/12 mb-10 relative z-20 w-[90%] max-w-[600px] skew-y-15`}
    >
      <div
        className={`${classes[titlePosition]}
        max-w-[90%]
        px-10 py-4 mb-[10px]
        text-[2rem] 
        text-white font-rex 
        leading-tight 
        shadow-[-5px_10px_15px_0_rgba(19,19,19,.25)]
        relative z-20 
        bg-orange-title
        after:absolute
        after:top-0
        after:bg-[url('/images/bg/gold-v-grunge.svg')]
        after:bg-repeat-y
        after:bg-[position:center_center]
        after:bg-cover
        after:w-10
        after:h-full
        after:content-['']`}
      >
        <h2 className="stage__title block drop-shadow-[-4px_3px_0_#896322]">
          {headerTitleTop}
          <br />
          {headerTitleBottom}
        </h2>
      </div>
      <div
        className={`${classes[imagePosition]}
          max-h-[440px] 
          mt-[-60px] 
          relative 
          z-10 
          w-stageImageWidth 
          overflow-hidden   
          after:absolute
          after:top-0
          after:bg-[url('/images/bg/white-grunge-90.svg')]
          after:bg-150
          after:w-14
          after:h-full
          after:content-['']`}
      >
        {children}
      </div>
    </header>
  );
};
