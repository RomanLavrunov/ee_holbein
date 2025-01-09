import styled from 'styled-components';

const Card = styled.div`
  padding: 20px;
  border: 1px solid #eaeaea;
  margin: 10px;
`;


interface product {
  name: string,
  description: string,
}
interface ProductCardProps {
  product: product;
} 

const ProductCard = ({product}: ProductCardProps) => {
  const {name, description} = product;
  return (
    <Card>
      <h3>{name}</h3>
      <p>{description}</p>
    </Card>
  );
}

export default ProductCard;