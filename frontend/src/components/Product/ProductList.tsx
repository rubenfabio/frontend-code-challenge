"use client";
import { Container, Row } from "@/components/layout/Container";
import ProductCard from "./ProductCard";
import { Product } from "@/interface/Product";
import Navbar from "../layout/Navbar";
import { useState } from "react";

interface ProductList {
  data: Product[];
  categories: string[];
}

const ProductList: React.FC<ProductList> = ({ data, categories }) => {
  const [produtos, setProdutos] = useState<Product[]>(data);
  let ProdutosDefault = data;
  return (
    <Container>
      <Row>
        <Navbar
          categories={categories}
          produtosDefault={ProdutosDefault}
          setProdutos={setProdutos}
          produtos={produtos}
        />
      </Row>
      <Row grid={4} gap="2rem">
        {produtos.map((product: Product, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
