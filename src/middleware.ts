import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  //Add locales you want in the app
  locales: ['en', 'fr', 'nl'],
 
  // default locale if no match
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|nl|en)/:path*']
};