import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="section">
      <motion.h2 className="section-title">About Me</motion.h2>
      <div className="box max-w-3xl">
        Saya Front-End Developer yang fokus pada UI modern,
        responsive, dan clean menggunakan React.
      </div>
    </div>
  )
}
