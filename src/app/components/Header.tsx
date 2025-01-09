'use client'
import {Link} from '@/i18n/routing';
import styled from 'styled-components';
import Logo from '../../../public/images/logo/new-en_logo.png'
import routes from '../[locale]/routes';
import Image from 'next/image';
import './Header.css'
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function Header() {

  const t = useTranslations("HomePage");

  return (
    <HeaderContainer className='header-container'>
      <Link className='logo-image' href="/"><Image src={Logo} alt='logo'></Image></Link>
      <nav>
        <Link className='header-links' href={'/about'}>{t('header.about')}</Link>
        <Link className='header-links' href={'/products'}>{t('header.products')}</Link>
        <Link className='header-links' href={'/news'}>{t('header.news')}</Link>
        <Link className='header-links' href={'/contacts'}>{t('header.contacts')}</Link>
      </nav>
    </HeaderContainer>
  );
}
