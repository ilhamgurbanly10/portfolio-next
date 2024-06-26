import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  //Add locales you want in the app
  locales: ['en', 'az'],
 
  // default locale if no match
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(az|en)/:path*']
};