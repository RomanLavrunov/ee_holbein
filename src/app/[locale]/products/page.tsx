'use client'
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';

const products = [
  { name: 'Watercolour paints', description: 'High-quality oil paints' },
  { name: 'Acrylic Paint', description: 'Versatile acrylic paints' },
];

export default function Products() {
  return (
    <Layout>
      <h1>Our Products</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </Layout>
  );
}
