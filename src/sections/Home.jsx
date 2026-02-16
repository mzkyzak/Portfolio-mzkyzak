import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="section center">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Hi, I'm <span className="accent">Mzkyzak</span>
      </motion.h1>
      <p>Front-End Developer & UI/UX Enthusiast</p>
    </div>
  )
}
