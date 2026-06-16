import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ScrollToTop from '../../components/common/ScrollToTop';

import '../../styles/index.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);
 
  const messages = await getMessages();
 
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <title>INJAZ Digital Hub</title>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-accent/20 selection:text-accent">
            <ScrollToTop />
            <Navbar />
            <main className="relative">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
