'use client'
import { useTranslations } from 'next-intl';
import Layout from '../../components/Layout';

const About = () => {
  const t = useTranslations('AboutPage');
  return (
    <Layout>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </Layout>
  );
}

export default About;