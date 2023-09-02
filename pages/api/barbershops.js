const handler = (req, res) => {
  const barbershops = {
    number: 294,
  };

  res.status(200).json({
    success: true,
    data: barbershops.number,
  });
};

export default handler;
