import { NextRequest, NextResponse } from 'next/server';
import { Cookies, SEVEN_DAYS } from '@/constants';

export const config = {
  matcher: '/',
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const getCountry = req.cookies.get('country')?.value ?? '';

  if (!getCountry) {
    try {
      const response = await fetch(`http://ip-api.com/json`);
      const userCountry = await response.json();
      const { countryCode } = userCountry;
      if (userCountry) {
        res.cookies.set(Cookies.Country, countryCode, { expires: SEVEN_DAYS });
      }
    } catch (error) {
      return error;
    }
  }
  return res;
}
