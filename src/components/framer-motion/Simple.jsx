import { motion } from "framer-motion";

export default function Simple() {
  return (
    <div>
      <motion.div
        className="w-32 h-32 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          backgroundColor: "red",
        }}
        transition={{
          duration: 1,
        }}
      ></motion.div>
    </div>
  );
}
