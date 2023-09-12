"use client";
import Price from "@/components/Product/Price";
import ProductCard from "@/components/Product/ProductCard";
import CartItem from "@/components/cart/CartItem";
import {
  Container,
  Row as RowDefault,
  Separator as SeparatorDefault,
} from "@/components/layout/Container";
import useFromStore from "@/hooks/useFromStore";
import { Product, ProductCart } from "@/interface/Product";
import { useCartStore } from "@/store/useCartStore";
import styled from "styled-components";

export default function Home() {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) =>
        acc + product.price_in_cents * (product.quantity as number),
      0
    );
  }

  return (
    <main>
      <section>
        <Container>
          <Row>
            <ContainerCart>
              <Title className="text-2xl font-bold mb-4">Seu Carrinho</Title>
              <ListItensCart>
                {cart?.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </ListItensCart>
            </ContainerCart>
            <ContainerInvoice>
              <TitleInvoice>Resumo do pedido</TitleInvoice>
              <div>
                <Wrapper>
                  <span>Subtotal de produtos</span>
                  <Price value={total} weight="400" />
                </Wrapper>
                <Wrapper>
                  <span>Entrega</span>
                  {total > 90000 ? (
                    <span>Gratís</span>
                  ) : (
                    <Price value={4000} weight="400" />
                  )}
                </Wrapper>
              </div>
              <div>
                <Separator />
                <Wrapper>
                  <span>Total</span>
                  {total > 90000 ? (
                    <Price value={total} />
                  ) : (
                    <Price value={total + 4000} />
                  )}
                </Wrapper>
              </div>
            </ContainerInvoice>
          </Row>
        </Container>
      </section>
    </main>
  );
}

const Separator = styled(SeparatorDefault)`
  margin-bottom: 12px;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 2.25rem */
  text-transform: uppercase;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Row = styled(RowDefault)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
`;
const ContainerCart = styled.div`
  grid-column: span 2 / span 2;
`;
const ContainerInvoice = styled.div`
  background-color: white;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TitleInvoice = styled.h2`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 1.875rem */
  text-transform: uppercase;
`;

const ListItensCart = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
