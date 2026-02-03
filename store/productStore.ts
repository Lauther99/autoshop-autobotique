import { create } from "zustand";
import type { Product } from "@/types/product";

type SortType = "price-asc" | "price-desc";

type ProductState = {
  products: Product[];
  filteredProducts: Product[];
  sortedProducts: Product[];
  sortType: SortType;
  paginatedProducts: Product[];
  currentPage: number;
  perPage: number;
  totalPages: number;
  setProducts: (products: Product[]) => void;
  sortProducts: (type: SortType) => void;
  setSortType: (page: any) => void;
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
  setFilter: (key: string, value: string[] | number) => void;
  resetFilters: () => void;
  // isLoading: boolean;
  // setLoading: (value: boolean) => void;
};

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  sortedProducts: [],
  filteredProducts: [],
  paginatedProducts: [],
  sortType: "price-desc",
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
  // isLoading: true,

  setProducts: (products) => {
    const prices = products.map((p) => Number(p.price) || 0);
    const rawMin = Math.min(...prices);
    const rawMax = Math.max(...prices);
    const span = rawMax - rawMin;

    const minPrice = Math.max(0, Math.floor(rawMin - span * 0.1));
    const maxPrice = Math.ceil(rawMax + span * 0.2);

    set((state) => ({
      products,
      sortedProducts: products,
      priceRange: { min: minPrice, max: maxPrice },
      filters: {
        ...state.filters,
        minPrice:
          state.filters.minPrice === 0 ? minPrice : state.filters.minPrice,
        maxPrice:
          state.filters.maxPrice === 999999 ? maxPrice : state.filters.maxPrice,
      },
      isLoading: false,
    }));
  },

  setSortType: (type) => {
    set({ sortType: type });

    const { sortProducts } = get();
    sortProducts(type);
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
      sortType: type,
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
  resetFilters: () => {
    const { products, priceRange, perPage } = get();

    const defaultFilters = {
      categories: [],
      brands: [],
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
      sortType: "price-desc",
    };

    set({
      filters: defaultFilters,
      filteredProducts: products,
      sortedProducts: products,
      currentPage: 1,
      totalPages: Math.ceil(products.length / perPage),
      paginatedProducts: products.slice(0, perPage),
      sortType: "price-desc",
    });
  },
  // setLoading: (value) => set({ isLoading: value }),
}));
