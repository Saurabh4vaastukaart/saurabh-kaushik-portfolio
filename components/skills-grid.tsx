import { skillGroups } from "@/lib/portfolio";

export function SkillsGrid() {
  return (
    <div className="skills-grid">
      {skillGroups.map((group, index) => (
        <article
          key={group.label}
          className="skill-group"
          data-reveal
          style={{ transitionDelay: `${index * 60}ms` }}
        >
          <h3>{group.label}</h3>
          <div>
            {group.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
