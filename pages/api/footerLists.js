const handler = (req, res) => {
  const footerLists = {
    footerMainList: [
      { title: 'Главная', href: '/' },
      { title: 'Услуги', href: '/services' },
      { title: 'Косметика', href: '/cosmetics' },
      { title: 'Франшиза', href: '/franchising' },
      { title: 'Инвестиции', href: '/investment' },
      { title: 'Блог', href: '/blog' },
      { title: 'FAQ', href: '/faq' },
    ],
    footerServicesList: [
      { title: 'Стрижки', href: '/services/haircut' },
      { title: 'Усы и борода', href: '/services/beard' },
      { title: 'Опасное бритье', href: '/services/shaving' },
      { title: 'Королевское бритье', href: '/services/royal-shaving' },
      { title: 'Татуировки', href: '/services/tatoo' },
    ],
    footerInfoList: [
      { title: 'Политика конфиденциальности', href: '/privacy' },
      { title: 'Условия использования', href: '/terms' },
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
