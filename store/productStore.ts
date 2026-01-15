import { create } from 'zustand'
import type { Product } from '@/types/product'

type SortType = 'price-asc' | 'price-desc' | null

type ProductState = {
  products: Product[]
  sortedProducts: Product[]
  paginatedProducts: Product[]
  currentPage: number
  perPage: number
  totalPages: number
  setProducts: (products: Product[]) => void
  sortProducts: (type: SortType) => void
  goToPage: (page: number) => void
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  sortedProducts: [],
  paginatedProducts: [],
  currentPage: 1,
  perPage: 9,
  totalPages: 1,

  setProducts: (products) => {
    const totalPages = Math.ceil(products.length / get().perPage)
    set({
      products,
      sortedProducts: products,
      totalPages,
      currentPage: 1,
      paginatedProducts: products.slice(0, get().perPage)
    })
  },

  sortProducts: (type) => {
    const { products, perPage } = get()

    const sorted = [...products].sort((a, b) => {
      if (type === 'price-asc') return a.price - b.price
      if (type === 'price-desc') return b.price - a.price
      return 0
    })

    const totalPages = Math.ceil(sorted.length / perPage)

    set({
      sortedProducts: sorted,
      currentPage: 1,
      totalPages,
      paginatedProducts: sorted.slice(0, perPage)
    })
  },

  goToPage: (page) => {
    const { sortedProducts, perPage, totalPages } = get()
    if (page < 1 || page > totalPages) return

    const start = (page - 1) * perPage
    const end = start + perPage

    set({
      currentPage: page,
      paginatedProducts: sortedProducts.slice(start, end)
    })
  }
}))
