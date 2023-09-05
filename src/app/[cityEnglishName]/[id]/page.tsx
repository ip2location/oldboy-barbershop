type Params = {
  params: {
    id: number;
    cityEnglishName: string;
  };
};

export default function Cities({ params: { id, cityEnglishName } }: Params) {
  return (
    <h2>
      {cityEnglishName}, {id}
    </h2>
  );
}
