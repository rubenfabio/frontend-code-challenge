import { Suspense } from "react";
import ProductList from "@/components/Product/ProductList";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { Product } from "@/interface/Product";

const query = gql`
  query MyQuery {
    allProducts {
      id
      name
      description
      price_in_cents
      category
      created_at
      sales
      image_url
    }
  }
`;

export const revalidate = 1800;

export default async function Home() {
  const client = getClient();
  const { data } = await client.query({ query });
  const arrayCategorias: string[] = data.allProducts.map((item: Product) => {
    return item.category;
  });
  const set = new Set(arrayCategorias);
  const categorias = Array.from(set);
  return (
    <main>
      <ProductList categories={categorias} data={data.allProducts} />
    </main>
  );
}
