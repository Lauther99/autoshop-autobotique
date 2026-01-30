import { CartItem } from "@/types/product";
import { create } from "zustand";

interface CartState {
  isCartOpen: boolean;

  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  items: CartItem[];
  setItems: (items: CartItem[]) => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isCartOpen: false,
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  setItems: (items) => set({ items }),

  addItem: (item: CartItem) => {
    const items = get().items;
    const existing = items.find((i) => i.id === item.id);

    if (!existing) {
      let backorderQty = 0;

      if (item.stock >= 1) {
        
      } else if (item.backorder) {
        backorderQty = 1;
      } else {
        return;
      }

      const newItem = {
        ...item,
        // quantity: 1,
        backorderQty,
      };

      const updatedItems = [...items, newItem];
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      set({ items: updatedItems });
      return;
    }

    get().updateQuantity(existing.id, existing.quantity + 1);
  },

  removeItem: (id) => {
    const updatedItems = get().items.filter((i) => i.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    set({ items: updatedItems });
  },

  updateQuantity: (id: number, newQuantity: number) => {
    const items = get().items;

    const updatedItems = items
      .map((item) => {
        if (item.id !== id) return item;

        // Eliminar si llega a 0
        if (newQuantity <= 0) {
          return null;
        }

        // Caso 1: alcanza stock
        if (newQuantity <= item.stock) {
          return {
            ...item,
            quantity: newQuantity,
            backorderQty: 0,
          };
        }

        // Caso 2: no alcanza stock
        const backorderQty = newQuantity - item.stock;

        if (item.backorder) {
          return {
            ...item,
            quantity: newQuantity,
            backorderQty,
          };
        }

        // Caso 3: no hay backorder → bloquear
        return item;
      })
      .filter(Boolean);

    localStorage.setItem("cart", JSON.stringify(updatedItems));
    set({ items: updatedItems as typeof items });
  },

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ items: [] });
  },
}));
