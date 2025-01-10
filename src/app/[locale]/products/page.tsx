'use client'
import { useTranslations } from 'next-intl';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';

const products = [
  { name: 'Watercolour paints', description: 'High-quality oil paints' },
  { name: 'Acrylic Paint', description: 'Versatile acrylic paints' },
];

export default function Products() {
  const t = useTranslations('ProductPage');

  return (
    <Layout>
      <h1>{t('title')}</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </Layout>
  );
}
