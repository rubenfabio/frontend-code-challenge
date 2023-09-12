"use client";
import { ProductCart } from "@/interface/Product";
import { useCartStore } from "@/store/useCartStore";
import React from "react";
import styled from "styled-components";
import TrashIcon from "../icons/trash";
import { SrOnly } from "../layout/Container";
import Price from "../Product/Price";

interface CartItemProps {
  product: ProductCart;
}

const ContainerProduct = styled.li`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  border-radius: 8px;
  overflow: hidden;
`;
const ProductContent = styled.div`
  grid-column: span 2 / span 2;
  padding: 1rem 1rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Paragraph = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.3125rem */
`;

const Title = styled.h3`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 30px */
  margin-bottom: 12px;
`;

const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BottomCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const reduceCart = useCartStore((state) => state.reduceCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <ContainerProduct>
      <img src={product.image_url} alt="" />
      <ProductContent>
        <div>
          <HeaderCard>
            <Title>{product.name}</Title>
            <button onClick={() => removeFromCart(product)}>
              <TrashIcon />
              <SrOnly>Remover {product.name} do carrinho</SrOnly>
            </button>
          </HeaderCard>
          <Paragraph>{product.description}</Paragraph>
        </div>
        <BottomCard>
          <div>
            <button
              onClick={() => reduceCart(product)}
              disabled={product.quantity < 2}
            >
              -
            </button>

            <span>{product.quantity}</span>
            <button onClick={() => addToCart(product)}>+</button>
          </div>
          <Price value={product.price_in_cents * product.quantity} />
        </BottomCard>
      </ProductContent>
    </ContainerProduct>
  );
};

export default CartItem;
