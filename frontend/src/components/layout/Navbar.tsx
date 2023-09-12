"use client";
import Link, { LinkProps } from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { Product } from "@/interface/Product";
import Select from "react-select";
import SearchInput from "./SearchInput";

const options = [
  { value: "lowestprice", label: "Menor Preço" },
  { value: "biggestprice", label: "Maior Preço" },
  { value: "mostrecent", label: "Mais Recentes" },
  { value: "bestseller", label: "Mais Vendidos" },
];

interface NavbarProps {
  categories: string[];
  setProdutos: (produtos: Product[]) => void;
  produtos: Product[];
  produtosDefault: Product[];
}

interface PropsNavLink extends LinkProps {
  pathname: string;
}

const NavLink = styled(Link)<PropsNavLink>`
  text-transform: uppercase;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 137.5% */
  text-transform: uppercase;
  color: ${(p) => p.theme.palette?.secondary?.main};
  &:hover {
    color: ${(p) => p.theme.palette?.primary?.main};
    font-weight: 600;
  }
  ${(p) =>
    p.href === p.pathname &&
    `color: ${p.theme.palette?.primary?.main};
    font-weight: 600!important;
    border-bottom: 4px solid #FFA585;
    `}
`;
const NavbarUl = styled.ul`
  display: flex;
  gap: 2.5rem;
`;
const NavMain = styled.nav`
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const SelectCustom = styled(Select)`
  > :nth-child(3n) {
    background: transparent;
    border: none;
  }
  > div {
    span {
      display: none;
    }
  }
`;

interface SelectProps {
  value: "lowestprice" | "biggestprice" | "mostrecent" | "bestseller";
  label: string[];
}

const Navbar: React.FC<NavbarProps> = ({
  categories,
  produtos,
  produtosDefault,
  setProdutos,
}) => {
  const currentRoute = usePathname();
  const [selectedOption, setSelectedOption] = useState<SelectProps | null>(
    null
  );
  function _handleFilter(e: SelectProps) {
    let sortedProducts = [...produtos];

    if (e.value === "lowestprice") {
      sortedProducts = sortedProducts.sort(
        (a, b) => a.price_in_cents - b.price_in_cents
      );
    } else if (e.value === "biggestprice") {
      sortedProducts = sortedProducts.sort(
        (a, b) => b.price_in_cents - a.price_in_cents
      );
    } else if (e.value === "bestseller") {
      sortedProducts = sortedProducts.sort((a, b) => b.sales - a.sales);
    } else if (e.value === "mostrecent") {
      sortedProducts.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    }
    setProdutos(sortedProducts);
    setSelectedOption(e);
  }

  return (
    <NavMain>
      <NavbarUl>
        <li>
          <NavLink href="/" pathname={currentRoute}>
            Todos os produtos
          </NavLink>
        </li>
        {categories.map((category, index) => (
          <li key={index}>
            <NavLink href={`/categorias/${category}`} pathname={currentRoute}>
              {category === "t-shirts"
                ? "Camisetas"
                : category === "mugs"
                ? "Canecas"
                : category}
            </NavLink>
          </li>
        ))}
      </NavbarUl>
      <SelectCustom
        placeholder="Organizar por"
        value={selectedOption}
        onChange={(e: any) => _handleFilter(e)}
        options={options}
      />
    </NavMain>
  );
};

export default Navbar;
