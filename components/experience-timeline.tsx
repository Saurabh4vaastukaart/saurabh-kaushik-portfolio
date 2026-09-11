import { experience } from "@/lib/portfolio";

export function ExperienceTimeline() {
  return (
    <div className="timeline">
      {experience.map((item, index) => (
        <article className="timeline__item" key={item.role} data-reveal>
          <div className="timeline__rail">
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="timeline__date">{item.period}</div>
          <div className="timeline__content">
            <div className="timeline__title">
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <span>Full-time</span>
            </div>
            <p className="timeline__summary">{item.summary}</p>
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
