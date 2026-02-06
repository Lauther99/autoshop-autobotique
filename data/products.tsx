import { Product } from "@/types/product";
import productsData from "@/products.json";
import imagesData from "@/images.json"
import { ImagesType } from "@/types/product"

const imagesByProductId = imagesData.reduce<Record<number, string[]>>(
  (acc, img: ImagesType) => {
    const productId = Number(img.product_id)
    if (!Number.isFinite(productId)) return acc

    if (!acc[productId]) acc[productId] = []
    acc[productId].push(img.url)

    return acc
  },
  {}
)

Object.values(imagesByProductId).forEach(urls => urls.sort())

export const products: Product[] = productsData.map(p => ({
  ...p,
  specs: p.specs?.map(s => ({
    label: s.label,
    value: s.content
  })) ?? null,
  images: imagesByProductId[p.id] ?? []
}))