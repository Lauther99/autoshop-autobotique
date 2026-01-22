type CurrencyCode = "SOL" | "MXN" | "USD" | any;

export const currencies: Record<CurrencyCode, string> = {
  SOL: "S/",
  MXN: "$",
  USD: "$",
};

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

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image?: string;
  sku?: string
  currency: string;
  stock: number;
  
  isFreeShipping?: boolean | null;
  backorder: boolean;
  backorderDays: number;
  backorderQty: number;
}
