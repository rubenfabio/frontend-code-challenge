"use client";

import { Product, ProductSample } from "@/interface/Product";
import React from "react";
import styled from "styled-components";
import Price from "./Price";
import { Separator } from "../layout/Container";

interface ProductSampleProps {
  product: Product;
}

const Name = styled.h2`
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

const ContentProduct = styled.div`
  padding: 0.75rem 0.5rem;
  border-radius: 0rem 0rem 0.25rem 0.25rem;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContainerProduct = styled.a`
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ProductCard: React.FC<ProductSampleProps> = ({ product }) => {
  return (
    <ContainerProduct href={`/produto/${product.id}`}>
      <img
        src={product.image_url}
        alt=""
        style={{ maxWidth: "100%", width: "100%" }}
      />
      <ContentProduct>
        <Name>{product.name}</Name>
        <Separator />
        <Price value={product.price_in_cents} size="small" />
      </ContentProduct>
    </ContainerProduct>
  );
};

export default ProductCard;
