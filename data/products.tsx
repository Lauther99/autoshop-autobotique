import { Product } from "@/types/product";
import productsData from "@/products.json";

export const products: Product[] = productsData.map(p => ({
  ...p,
  specs: p.specs?.map(s => ({
    label: s.label,
    value: s.content
  })) ?? null
}));