import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa"

export default function Tools() {
  const tools = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
  ]

  return (
    <div className="section">
      <h2 className="section-title">Tools & Skills</h2>
      <div className="grid">
        {tools.map((t, i) => (
          <div key={i} className="skill-box">
            {t.icon}
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
