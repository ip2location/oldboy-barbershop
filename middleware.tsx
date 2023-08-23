import { NextRequest, NextResponse } from 'next/server';
import { Cookies, SEVEN_DAYS } from '@/constants';

export const config = {
  matcher: '/',
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const getCountry = req.cookies.get('country')?.value ?? '';

  const userIp = req.ip ?? req.headers.get('x-real-ip');

  if (userIp) {
    res.cookies.set('user-ip', userIp, {
      httpOnly: false,
    });
  }

  if (!getCountry) {
    try {
      const response = await fetch(`http://ip-api.com/json/${ipCook}`);
      const setCountry = await response.json();
      if (setCountry) {
        res.cookies.set(Cookies.Country, setCountry, { expires: SEVEN_DAYS });
      }
    } catch (error) {
      return error;
    }
  }
  return res;
}
