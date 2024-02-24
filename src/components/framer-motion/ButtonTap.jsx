import { motion } from "framer-motion";

export default function ButtonTap() {
  return (
    <div>
      <motion.button
        className="px-2 py-1 bg-red-500 m-3"
        whileTap={{
          scale: 0.4,
          transition: {
            duration: 0.4,
          },
        }}
        whileHover={{
          scale: 0.9,
        }}
      >
        Tap me
      </motion.button>
    </div>
  );
}
