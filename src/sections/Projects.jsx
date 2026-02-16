import ProjectsCard from "../components/ProjectsCard"

export default function Projects() {
  return (
    <div className="section">
      <h2 className="section-title">Projects</h2>
      <div className="grid">
        <ProjectsCard title="Portfolio React" desc="Modern portfolio website" />
        <ProjectsCard title="CRUD App" desc="PHP & MySQL project" />
      </div>
    </div>
  )
}
