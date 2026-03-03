import { useTranslation } from 'react-i18next';
import Header from "../components/Header";
import Hero from '../components/Hero';
import Products from '../components/Products';
import PageTransition from "../components/PageTransition";
import SEO from '../components/SEO';

export default function Home() {
  const { t } = useTranslation();
  return (
    <PageTransition>
    <>
      <SEO title={t('seo.home.title')} description={t('seo.home.description')} path="/" />
      <Header />
      <Hero />
      <Products />
    </>
    </PageTransition>
  );
}


