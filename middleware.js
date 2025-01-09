import { NextResponse } from 'next/server';

export function middleware(request) {
  const locale = request.cookies.get('locale') || 'en'; // Default to 'en'
  return NextResponse.next().setHeader('Accept-Language', locale);
}
