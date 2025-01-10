'use client'
import { useTranslations } from 'next-intl';
import Layout from '../../components/Layout';
import './page.css'


export default function Contact() {
  const t = useTranslations('ContactPage');
  
  return (
    <Layout>
      <h2>{t('title')}</h2>
      <form className='contact-form'>
        <label htmlFor="name">{t('name')}</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="name">{t('email')}</label>
        <input type="text" id="email" name="email" required />
        <label htmlFor="message">{t('message')}</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">{t('send')}</button>
      </form>
    </Layout>
  );
}
