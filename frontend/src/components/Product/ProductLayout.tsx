"use client";
import React from "react";
import { Container, Row } from "../layout/Container";
import { Product, ProductCart } from "@/interface/Product";
import styled from "styled-components";
import Price from "./Price";
import { useCartStore } from "@/store/useCartStore";

interface ProductLayoutProps {
  product: ProductCart;
}

const Button = styled.button`
  color: ${(p) => p.theme.palette?.common?.white};
  background: ${(p) => p.theme.palette?.common?.brand};
  display: inline;
  text-align: center;
  font-size: 16px;
  border-radius: 4px;
  font-style: normal;
  padding: 10px;
  border: 0;
  font-weight: 500;
  line-height: 150%; /* 24px */
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  color: ${(p) => p.theme.palette?.primary?.main};
`;
const Description = styled.p`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${(p) => p.theme.palette?.primary?.main};
`;
const Paragraph = styled.p`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

const ProductLayout: React.FC<ProductLayoutProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <Container>
      <Row grid={2} gap="2rem">
        <div>
          <img src={product?.image_url} alt="" />
        </div>
        <Wrapper>
          <div>
            <Title>{product?.name}</Title>
            <Price value={product?.price_in_cents} size="large" />
            <Paragraph>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.{" "}
            </Paragraph>
          </div>
          <div>
            <h3>DESCRIÇÃO</h3>
            <Description>{product?.description}</Description>
          </div>
          <Button onClick={() => addToCart(product)}>
            Adicionar ao Carrinho
          </Button>
        </Wrapper>
      </Row>
    </Container>
  );
};

export default ProductLayout;
