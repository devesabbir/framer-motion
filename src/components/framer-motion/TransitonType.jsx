import { motion } from "framer-motion";

export default function TransitonType() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          type: "inertia",
          velocity: 50,
        }}
      >
        Transiton Type
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          type: "spring",
        }}
      >
        Transiton Type
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          bounce: 0.8,
          type: "spring",
        }}
      >
        Transiton Type
      </motion.div>
    </>
  );
}
