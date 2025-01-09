import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background: #f4f4f4;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Holbein. All Rights Reserved.</p>
    </FooterContainer>
  );
}
