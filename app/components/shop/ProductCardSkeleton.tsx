import { motion } from "framer-motion";

export default function ProductCardSkeleton() {
  return (
    <div className="rounded-xl border border-[#222] bg-[#0f0f0f] p-3">
      <motion.div
        className="mb-3 h-[180px] w-full rounded-[10px] bg-[linear-gradient(100deg,#1a1a1a_40%,#2a2a2a_50%,#1a1a1a_60%)]"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="flex flex-col gap-2">
        <motion.div
          className="h-3.5 w-full rounded-md bg-[#1a1a1a]"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="h-3.5 w-[60%] rounded-md bg-[#1a1a1a]"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
