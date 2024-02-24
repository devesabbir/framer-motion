import { motion } from "framer-motion";

export default function Keyframe() {
  return (
    <div>
      <motion.div
        className="w-32 h-32 bg-emerald-600 rounded-full m-2"
        animate={{
          borderRadius: [0, 0, 20, 20, 0, 20],
          rotate: [0, 20, 80, 180, 0],
        }}
        transition={{
          duration: 1,
        }}
      ></motion.div>
    </div>
  );
}
