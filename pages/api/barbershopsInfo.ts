const handler = (
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: {
          success: boolean;
          branchesTotal: number;
          countriesTotal: number;
          capitalsTotal: number;
        }): void;
        new (): any;
      };
    };
  },
) => {
  const barbershops = {
    branches: 294,
    countries: 11,
    capitals: 7,
  };

  res.status(200).json({
    success: true,
    branchesTotal: barbershops.branches,
    countriesTotal: barbershops.countries,
    capitalsTotal: barbershops.capitals,
  });
};

export default handler;
