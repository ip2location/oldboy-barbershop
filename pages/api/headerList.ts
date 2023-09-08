import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const headerList = [
    { title: 'Главная', href: '/' },
    { title: 'Услуги', href: '/services' },
    { title: 'Косметика', href: '/cosmetics' },
    { title: 'Блог', href: '/blog' },
    { title: 'Франшиза', href: '/franchising' },
    { title: 'Инвестиции', href: '/investment' },
    { title: 'Вакансии', href: '/vacancies' },
    { title: 'Барберы', href: '/barbers' },
    { title: 'Контакты', href: '/contacts' },
    { title: 'Филиалы', href: '#' },
  ];

  res.status(200).json({
    success: true,
    headerMainList: headerList,
  });
};
export default handler;
