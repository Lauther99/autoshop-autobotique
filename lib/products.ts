import { supabase } from "@/lib/supabase";
import { Product } from "@/types/product";

const SELECT_QUERY = `
  id,
  name,
  description,
  price,
  stock,
  sku,
  images,
  is_free_shiping,
  back_order,
  back_order_days,
  product_brands ( name ),
  product_category ( name ),
  product_specifications ( label, content )
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapToProduct(row: any): Product {
  return {
    id: row.id,
    title: row.name,
    description: row.description ?? null,
    price: row.price,
    stock: row.stock,
    sku: row.sku ?? null,
    currency: "SOL",
    brand: row.product_brands?.name ?? null,
    category: row.product_category?.name ?? null,
    isFreeShipping: row.is_free_shiping ?? null,
    images: row.images ?? [],
    backorder: row.back_order ?? false,
    backorderDays: row.back_order_days ?? 0,
    specs:
      row.product_specifications?.map(
        (s: { label: string; content: string }) => ({
          label: s.label,
          value: s.content,
        })
      ) ?? null,
  };
}

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select(SELECT_QUERY)
    .order("id");

  if (error) throw new Error(error.message);

  return (data ?? []).map(mapToProduct);
}

export async function getProductById(id: number): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select(SELECT_QUERY)
    .eq("id", id)
    .single();

  if (error) return null;

  return mapToProduct(data);
}

export async function searchProducts(query: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select(SELECT_QUERY)
    .ilike("name", `%${query}%`)
    .order("id");

  if (error) throw new Error(error.message);

  return (data ?? []).map(mapToProduct);
}
