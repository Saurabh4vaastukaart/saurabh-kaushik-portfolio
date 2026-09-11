import Link from "next/link";
import { CaseCard } from "@/components/case-card";
import {
  ArrowRight,
  Download,
  Spark,
} from "@/components/icons";
import { ProfileCard } from "@/components/profile-card";
import { caseStudies, experience, skillGroups } from "@/lib/portfolio";

const outcomes = [
  { value: "$1.2M+", label: "Revenue growth contributed" },
  { value: "700K+", label: "Users served across products" },
  { value: "15+", label: "Engineers and designers led" },
  { value: "6 years", label: "End-to-end product ownership" },
];

const operatingModel = [
  {
    number: "01",
    title: "Discover the real problem",
    copy: "Combine user conversations, behaviour and business context until the problem is specific enough to solve.",
  },
  {
    number: "02",
    title: "Frame the right decision",
    copy: "Turn evidence into a clear hypothesis, success measure and set of trade-offs the team can understand.",
  },
  {
    number: "03",
    title: "Build with the team",
    copy: "Create focus across design and engineering, then ship the smallest coherent release that tests the core assumption.",
  },
  {
    number: "04",
    title: "Stay for the outcome",
    copy: "Measure adoption and business impact after launch, then use the result to make the next decision better.",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero__copy" data-reveal>
          <p className="hero__eyebrow">
            <span className="eyebrow-dot" />
            Product Manager&nbsp; | &nbsp;AI, SaaS &amp; Growth
          </p>
          <h1 id="hero-title">
            I turn ambiguous problems into products people trust and businesses can
            <span className="gradient-text"> measure.</span>
          </h1>
          <p className="hero__lead">
            I&apos;m Saurabh Kaushik, a Product Manager with six years of experience leading 0-to-1
            products and growth across AI/LLM, healthcare, EdTech and B2B SaaS.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" href="/work">
              Explore my work <ArrowRight />
            </Link>
            <a
              className="button button--secondary button--resume"
              href="/Saurabh_Kaushik_Product_Manager_Resume.pdf"
              download
            >
              <Download /> Download resume
            </a>
          </div>
        </div>

        <ProfileCard />
      </section>

      <section className="impact-rail" aria-label="Career outcomes">
        <div className="section-shell impact-rail__grid">
          {outcomes.map((outcome, index) => (
            <article key={outcome.label} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
              <strong>{outcome.value}</strong>
              <span>{outcome.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-shell" id="work" aria-labelledby="work-title">
        <header className="section-heading" data-reveal>
          <div>
            <p className="section-label"><span />Selected product work</p>
            <h2 id="work-title">Four products, each tied to a real outcome.</h2>
          </div>
          <p>
            Not a feature gallery. Each case study shows the user problem, the product decision,
            how I led execution and what changed after launch.
          </p>
        </header>

        <div className="case-grid">
          {caseStudies.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <section className="content-section section-shell operating" aria-labelledby="operating-title">
        <header className="section-heading section-heading--stack" data-reveal>
          <p className="section-label"><span />How I work</p>
          <h2 id="operating-title">Clarity first. Momentum next. Accountability throughout.</h2>
          <p>
            My operating model connects customer evidence, commercial judgement and close
            collaboration with design and engineering.
          </p>
        </header>

        <div className="operating-grid">
          {operatingModel.map((step, index) => (
            <article key={step.number} className="operating-step" data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
              <div className="operating-step__head">
                <span>{step.number}</span>
                <Spark />
              </div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-shell experience" id="experience" aria-labelledby="experience-title">
        <header className="section-heading" data-reveal>
          <div>
            <p className="section-label"><span />Experience</p>
            <h2 id="experience-title">Increasing scope, one measurable result at a time.</h2>
          </div>
          <p>
            Progressed at Rise11 AI from improving customer journeys to setting product direction,
            leading multi-disciplinary teams and launching new AI products.
          </p>
        </header>

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
      </section>

      <section className="content-section section-shell about" id="about" aria-labelledby="about-title">
        <div className="about__statement" data-reveal>
          <p className="section-label"><span />About me</p>
          <h2 id="about-title">
            I stay close to the problem, comfortable moving between a customer conversation,
            a funnel, a technical workflow and an executive decision.
          </h2>
        </div>
        <div className="about__details" data-reveal>
          <p>
            I enjoy turning unclear customer and business challenges into a direction that teams can
            understand, build and measure. My work spans discovery, strategy, roadmapping, PRDs,
            delivery, go-to-market and post-launch growth.
          </p>
          <p>
            What matters most to me is meaningful ownership: understand why the problem matters,
            choose deliberately, and stay accountable for the result after launch.
          </p>
          <div className="education-row">
            <div><span>2018 - 2020</span><strong>MBA, Information Technology</strong><small>MDU, Rohtak</small></div>
            <div><span>2010 - 2014</span><strong>B.Tech, ECE</strong><small>RTU, Kota</small></div>
          </div>
        </div>
      </section>

      <section className="content-section section-shell skills" aria-labelledby="skills-title">
        <header className="section-heading section-heading--stack" data-reveal>
          <p className="section-label"><span />Product toolkit</p>
          <h2 id="skills-title">The craft behind the outcomes.</h2>
        </header>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article key={group.label} className="skill-group" data-reveal style={{ transitionDelay: `${index * 60}ms` }}>
              <h3>{group.label}</h3>
              <div>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
