import ProductLayout from "@/components/Product/ProductLayout";
import ProductList from "@/components/Product/ProductList";
import { Product } from "@/interface/Product";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import React from "react";

export const revalidate = 1800;
export const dynamicParams = false;

const Page = async ({ params }: { params: { category: string } }) => {
  const query = gql`
    query getAllProducts {
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
  const client = getClient();
  const { data } = await client.query({
    query,
    variables: { productCategory: params.category },
  });
  const produtos = data.allProducts.filter((product: Product) => {
    return product.category === params.category;
  });
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
};

export default Page;

export async function generateStaticParams() {
  const query = gql`
    query MyQuery {
      allProducts {
        category
      }
    }
  `;
  const client = getClient();
  const { data } = await client.query({ query });
  const arrayCategorias = data.allProducts.map((item: any) => {
    return item.category;
  });
  const set = new Set(arrayCategorias);
  const categorias = Array.from(set);
  return categorias.map((item: any) => ({
    category: item,
  }));
}
