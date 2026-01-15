

export interface Product {
  id: number;
  brand: string;
  title: string;
  category: string | null;
  price: number;
  oldPrice?: number | null;
  image: string;
  tag?: string | null;
  tagType?: string | null;
}
