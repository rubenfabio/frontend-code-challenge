export interface ProductSample {
  name: string;
  image_url: string;
  id: string;
  price_in_cents: number;
}

export interface Product extends ProductSample {
  category: string;
  description: string;
  created_at: string;
  sales: number;
}

export interface ProductCart extends Product {
  quantity: number;
}
