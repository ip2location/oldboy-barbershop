import { PropsWithChildren, ReactElement } from 'react';

type StageSectionVariant = 'row' | 'rowReverse';

interface StageSectionProps extends PropsWithChildren {
  variant: StageSectionVariant;
}

export const StageSection = ({ variant, children }: StageSectionProps): ReactElement => {
  const classes: Record<StageSectionVariant, string> = {
    row: 'stage flex flex-row mb-10',
    rowReverse: 'stage_flipped flex flex-row-reverse mb-28',
  };

  return <section className={`${classes[variant]}`}>{children}</section>;
};
