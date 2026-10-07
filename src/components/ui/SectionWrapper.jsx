import { motion, useReducedMotion } from "framer-motion";
function SectionWrapper({ children }) {
  const reducedMotion = useReducedMotion();
  return <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reducedMotion ? 0 : 0.25, ease: "easeOut" }}>{children}</motion.div>;
}
export default SectionWrapper;
