import { motion } from "framer-motion";

export default function ProductCardSkeleton() {
  return (
    <div className="shop-card skeleton-card">
      <motion.div
        className="skeleton-image"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="skeleton-content">
        <motion.div
          className="skeleton-line"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="skeleton-line short"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
