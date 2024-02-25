import { motion } from "framer-motion";

export default function TextMotion() {
  const message = "We are enjoying Reactive Accelarator Course";
  const wordArray = message.split(" ");
  return (
    <div>
      {wordArray.map((word, index) => {
        return (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: index / 20,
            }}
            key={index}
          >
            {" "}
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}
