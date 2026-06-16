import PageComponent from '../../../../views/Services/ServiceDetail';
import { servicesDetail } from '../../../../data/servicesData';
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return Object.keys(servicesDetail).map((slug) => ({ slug }));
}

export default async function Page({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PageComponent />;
}
