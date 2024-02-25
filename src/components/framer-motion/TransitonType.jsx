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
          duration: 1,
        }}
      >
        Transiton Type
      </motion.div>
      <motion.div>Transiton Type</motion.div>
      <motion.div>Transiton Type</motion.div>
    </>
  );
}
