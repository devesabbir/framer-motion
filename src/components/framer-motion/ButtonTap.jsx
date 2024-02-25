import { motion } from "framer-motion";

export default function ButtonTap() {
  return (
    <div>
      <motion.button
        className="uppercase font-semibold px-2 py-1 bg-red-500 m-3 text-slate-50 rounded-sm"
        whileTap={{
          scale: 0.4,
          transition: {
            duration: 0.4,
          },
        }}
        whileHover={{
          scale: 0.9,
          transitionP: {
            duration: 0.3,
          },
        }}
      >
        Tap me
      </motion.button>
    </div>
  );
}
