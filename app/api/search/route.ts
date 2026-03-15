import { searchProducts } from "@/lib/products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") ?? "";
  const offset = Number(searchParams.get("offset") ?? "0");
  const limit = Number(searchParams.get("limit") ?? "8");

  if (!query.trim()) return NextResponse.json([]);

  const products = await searchProducts(query, offset, limit);
  return NextResponse.json(products);
}
