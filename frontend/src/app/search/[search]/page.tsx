import ProductList from "@/components/Product/ProductList";
import { gql } from "@apollo/client";
import { Product } from "@/interface/Product";
import { getClient } from "@/lib/client";

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

export default async function Search({
  params,
}: {
  params: { search: string };
}) {
  const { data } = await getClient().query({ query });
  const arrayCategorias: string[] = data?.allProducts?.map((item: Product) => {
    return item.category;
  });
  console.log(decodeURIComponent(params.search));
  const set = new Set(arrayCategorias);
  const categorias = Array.from(set);
  const filteredProduts = data?.allProducts?.filter((product: Product) => {
    return product.name
      .toLowerCase()
      .includes(decodeURIComponent(params.search).toLowerCase());
  });
  return (
    <main>
      <ProductList categories={categorias} data={filteredProduts} />
    </main>
  );
}
