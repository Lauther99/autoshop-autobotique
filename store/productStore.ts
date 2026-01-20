import { create } from "zustand";
import type { Product } from "@/types/product";

type SortType = "price-asc" | "price-desc" | null;

type ProductState = {
  products: Product[];
  filteredProducts: Product[];
  sortedProducts: Product[];
  paginatedProducts: Product[];
  currentPage: number;
  perPage: number;
  totalPages: number;
  setProducts: (products: Product[]) => void;
  sortProducts: (type: SortType) => void;
  goToPage: (page: number) => void;
  filters: {
    categories: string[];
    brands: string[];
    minPrice: number;
    maxPrice: number;
  };
  priceRange: {
    min: number;
    max: number;
  };
  applyFilters: () => void;
  setFilter: (key: string, value: string[] | Number) => void;
  resetFilters: () => void;
};

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  sortedProducts: [],
  filteredProducts: [],
  paginatedProducts: [],
  currentPage: 1,
  perPage: 9,
  totalPages: 1,
  filters: {
    categories: [],
    brands: [],
    minPrice: 0,
    maxPrice: 999999,
  },
  priceRange: {
    min: 0,
    max: 999999,
  },

  setProducts: (products) => {
    const prices = products.map((p) => Number(p.price) || 0);
    const rawMin = Math.min(...prices);
    const rawMax = Math.max(...prices);
    const span = rawMax - rawMin;

    const minPrice = Math.max(0, Math.floor(rawMin - span * 0.1));
    const maxPrice = Math.ceil(rawMax + span * 0.2);

    set({
      products,
      sortedProducts: products,
      priceRange: {
        min: minPrice,
        max: maxPrice,
      },
      currentPage: 1,
      filters: {
        categories: [],
        brands: [],
        minPrice: minPrice,
        maxPrice: maxPrice,
      },
    });
  },

  sortProducts: (type) => {
    const { filteredProducts, perPage } = get();

    const sorted = [...filteredProducts].sort((a, b) => {
      if (type === "price-asc") return a.price - b.price;
      if (type === "price-desc") return b.price - a.price;
      return 0;
    });

    const totalPages = Math.ceil(sorted.length / perPage);

    set({
      sortedProducts: sorted,
      currentPage: 1,
      totalPages,
      paginatedProducts: sorted.slice(0, perPage),
    });
  },

  goToPage: (page) => {
    const { sortedProducts, perPage, totalPages } = get();
    if (page < 1 || page > totalPages) return;

    const start = (page - 1) * perPage;
    const end = start + perPage;
    set({
      currentPage: page,
      paginatedProducts: sortedProducts.slice(start, end),
    });
  },

  applyFilters: () => {
    const { products, filters } = get();

    let filtered = [...products];

    // categories
    if (filters.categories.length > 0) {
      filtered = filtered.filter((p) =>
        filters.categories.includes(p.category),
      );
    }

    // brands
    if (filters.brands.length > 0) {
      filtered = filtered.filter((p) => {
        if (p.brand) {
          if (filters.brands.includes(p.brand.trim())) {
            return p;
          }
        }
      });
    }

    // price
    if (filters.minPrice !== null) {
      filtered = filtered.filter((p) => p.price >= filters.minPrice);
    }

    if (filters.maxPrice !== null) {
      filtered = filtered.filter((p) => p.price <= filters.maxPrice);
    }

    const totalPages = Math.ceil(filtered.length / get().perPage);
    set({
      filteredProducts: filtered,
      currentPage: 1,
      totalPages,
      paginatedProducts: filtered.slice(0, get().perPage),
    });
  },

  setFilter: (key, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    }));
  },
  resetFilters: () => {},
}));
