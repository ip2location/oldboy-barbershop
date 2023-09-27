import { PropsWithChildren, ReactElement } from 'react';

type ContentPositionVariant = 'contentLeft' | 'contentRight';
type HeadlinePositionVariant = 'headlineLeft' | 'headlineRight';

interface StageContentprops extends PropsWithChildren {
  contentPosition: ContentPositionVariant;
  headlinePosition: HeadlinePositionVariant;
  stageHeadline: string;
}

export const StageContent = ({
  contentPosition,
  headlinePosition,
  stageHeadline,
  children,
}: StageContentprops): ReactElement => {
  const classes = {
    contentLeft: 'stage__content pt-[140px]',
    contentRight: 'stage__content_reversed',
    headlineLeft: 'stage__headline text-left',
    headlineRight: 'stage__headline_reversed text-right',
  };

  return (
    <div className={`${classes[contentPosition]} basis-[66%] p-10 -mt-10`}>
      <h3
        className={`${classes[headlinePosition]} my-0 mr-0 ml-auto text-[2rem] text-header-bg font-rex leading-normal w-auto`}
      >
        {stageHeadline}
      </h3>
      <div className="stage__text flex flex-col my-[18px] gap-[18px] text-left">{children}</div>
    </div>
  );
};
