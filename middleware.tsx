import { NextRequest, NextResponse } from 'next/server';
import { Cookies, SEVEN_DAYS } from '@/constants';

export const config = {
  matcher: '/',
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const getCountry = req.cookies.get('country')?.value ?? '';
  const getCity = req.cookies.get('city')?.value ?? '';
  if (!getCountry || !getCity) {
    try {
      const response = await fetch(`http://ip-api.com/json`);
      const userData = await response.json();
      const { countryCode, city } = userData;
      if (userData) {
        res.cookies.set(Cookies.Country, countryCode, { expires: SEVEN_DAYS });
        res.cookies.set(Cookies.City, city, { expires: SEVEN_DAYS });
      }
    } catch (error) {
      try {
        const response2 = await fetch(`http://api.ip2location.io`);
        const userData2 = await response2.json();
        const { country_code, city_name } = userData2;
        if (userData2) {
          res.cookies.set(Cookies.Country, country_code, { expires: SEVEN_DAYS });
          res.cookies.set(Cookies.City, city_name, { expires: SEVEN_DAYS });
        }
      } catch (error2) {
        return error2;
      }
    }
  }
  return res;
}
