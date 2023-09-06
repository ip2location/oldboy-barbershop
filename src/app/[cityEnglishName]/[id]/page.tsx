import { ReactElement } from 'react';

type CitiesProps = {
  params: {
    id: number;
    cityEnglishName: string;
  };
};

export default function Cities({ params: { id, cityEnglishName } }: CitiesProps): ReactElement {
  return (
    <h2>
      {cityEnglishName}, {id}
    </h2>
  );
}
