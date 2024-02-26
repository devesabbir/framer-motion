/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function Box({ children }) {
  return (
    <>
      <motion.div
        className="w-80 h-80 bg-orange-400 text-slate-50 text-center leading-[20rem] rounded-sm m-2"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: false }}
      >
        {children}
      </motion.div>
    </>
  );
}

export default function ScrollReveal() {
  const greatings = ["1", "2", "3", "4", "5"];
  return (
    <>
      {greatings.map((item, index) => (
        <Box key={index}>{item}</Box>
      ))}
    </>
  );
}
