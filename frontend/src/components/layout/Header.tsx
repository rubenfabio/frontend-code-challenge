"use client";
import React, { useEffect } from "react";
import { Container, Row as RowDefault } from "./Container";
import { useCartStore } from "../../store/useCartStore";
import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import Link from "next/link";
import CartIcon from "../icons/cart";
import { useProductsStore } from "@/store/useProductsStore";
import useFromStore from "@/hooks/useFromStore";
import SearchInput from "./SearchInput";
import Router from "next/router";

const saira_stencil_one = Saira_Stencil_One({ weight: "400", preload: false });

const Navbar = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 50;
`;
const Row = styled(RowDefault)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  ${saira_stencil_one.style}
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-decoration: none;
  color: #5d5d6d;
`;

const Flex = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Header = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart);

  return (
    <Navbar>
      <Container>
        <Row>
          <Logo href="/">capputeeno</Logo>
          <Flex>
            <SearchInput />
            <a href="/carrinho">
              <CartIcon quantity={cart?.length} />
            </a>
          </Flex>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
