import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const sections = ["home", "about", "tools", "projects", "certificates", "contact"]

export default function Navbar() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.6 }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar">
      {sections.map(sec => (
        <a key={sec} href={`#${sec}`} className={active === sec ? "active" : ""}>
          {sec}
          {active === sec && <motion.span layoutId="nav" />}
        </a>
      ))}
    </nav>
  )
}
