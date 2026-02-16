const skills = [
  "UI Design",
  "UX Research",
  "Responsive Design",
  "React Development",
  "Problem Solving",
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2>My Skills</h2>

      <div className="grid">
        {skills.map((skill, i) => (
          <div className="card-box" key={i}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
