import ProductLayout from "@/components/Product/ProductLayout";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import React from "react";

export const revalidate = 1800;

const Page = async ({ params }: { params: { id: string } }) => {
  const query = gql`
    query GetProductById($productId: ID!) {
      Product(id: $productId) {
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
    variables: { productId: params.id },
  });

  return (
    <>
      <ProductLayout product={data.Product} />
    </>
  );
};

export default Page;

export async function generateStaticParams() {
  const query = gql`
    query MyQuery {
      allProducts {
        id
      }
    }
  `;
  const client = getClient();
  const { data } = await client.query({ query });
  return data.allProducts.map((item: any) => ({
    id: item.id,
  }));
}
