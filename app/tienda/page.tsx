"use client";

import Image from "next/image";
import "./styles.css";
import { products } from "@/data/products";
import ShopBreadcrumbs from "../components/shop/ShopBreadcrumbs";
import ShopFilters from "../components/shop/ShopFilters";
import ShopHeader from "../components/shop/ShopHeader";
import ProductGrid from "../components/shop/ProductGrid";
import ShopPagination from "../components/shop/ShopPagination";
import { useEffect } from 'react'
import { useProductStore } from '@/store/productStore'


export default function ShopPage() {
  const setProducts = useProductStore(state => state.setProducts)
  useEffect(() => {
    setProducts(products)
  }, [setProducts])


  return (
    <div className="container">
      <ShopBreadcrumbs />
      <div className="shop-container">
        <ShopFilters />
        <div className="shop-content">
          <ShopHeader/>
          <ProductGrid />
          <ShopPagination />
        </div>
      </div>
    </div>
  );
}
