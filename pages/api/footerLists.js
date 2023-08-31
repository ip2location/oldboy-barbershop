const handler = (req, res) => {
  const footerLists = {
    footerMainList: [
    { title: 'Главная', href: '#' },
    { title: 'Услуги', href: '#' },
    { title: 'Косметика', href: '#' },
    { title: 'Франшиза', href: '#' },
    { title: 'Инвестиции', href: '#' },
    { title: 'Блог', href: '#' },
    { title: 'FAQ', href: '#' },
    ],
    footerServicesList: [
      { title: 'Стрижки', href: '#' },
      { title: 'Усы и борода', href: '#' },
      { title: 'Опасное бритье', href: '#' },
      { title: 'Королевское бритье', href: '#' },
      { title: 'Татуировки', href: '#' },
    ], 
    footerInfoList: [
      { title: 'Политика конфиденциальности', href: '#' },
      { title: 'Условия использования', href: '#' },
    ],
  };

  res.status(200).json({
    success: true,
    footerMainList: footerLists.footerMainList,
    footerServicesList: footerLists.footerServicesList,
    footerInfoList: footerLists.footerInfoList,
  });
};
export default handler;
