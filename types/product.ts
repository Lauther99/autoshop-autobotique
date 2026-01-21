export interface ProductSpecs {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  sku?: string | null;
  brand?: string | null;
  title: string;
  category: string;
  price: number;
  currency: string;
  description?: string | null;
  specs?: ProductSpecs[] | null;
  isFreeShipping?: boolean | null;
  stock: number;
  images?: string[] | null;
  backorder: boolean;
  backorderDays: number
}
