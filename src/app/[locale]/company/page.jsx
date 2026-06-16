import PageComponent from '../../../views/Company';
import { setRequestLocale } from 'next-intl/server';

export default async function Page({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PageComponent />;
}
