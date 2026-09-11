import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Six years of product-management experience across AI, SaaS, healthcare, EdTech and growth products.",
};

const experienceStats = [
  { value: "6 years", label: "Product management" },
  { value: "15+", label: "Engineers and designers led" },
  { value: "$1.2M+", label: "Revenue growth contributed" },
  { value: "700K+", label: "Users served" },
];

export default function ExperiencePage() {
  return (
    <main id="main-content" className="page-main">
      <section className="page-intro section-shell">
        <div className="page-intro__copy" data-reveal>
          <p className="section-label"><span />Experience</p>
          <h1>Ownership across the complete product lifecycle.</h1>
          <p>
            From improving onboarding and payments to setting AI product roadmaps, leading teams and
            taking new SaaS products to market.
          </p>
        </div>
        <aside className="page-intro__signal page-intro__signal--violet" data-reveal>
          <span>Current focus</span>
          <strong>AI + B2B SaaS</strong>
          <p>0-to-1 product strategy, product-led growth and measurable customer outcomes.</p>
        </aside>
      </section>

      <section className="page-stats" aria-label="Career summary">
        <div className="section-shell page-stats__grid">
          {experienceStats.map((stat, index) => (
            <article key={stat.label} data-reveal style={{ transitionDelay: `${index * 60}ms` }}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section section-shell" aria-labelledby="career-title">
        <header className="section-heading" data-reveal>
          <div>
            <p className="section-label"><span />Career path</p>
            <h2 id="career-title">Progress built on wider responsibility.</h2>
          </div>
          <p>Two roles at Rise11 AI, connected by increasing ownership and stronger business accountability.</p>
        </header>
        <ExperienceTimeline />
      </section>

      <div className="page-link section-shell" data-reveal>
        <Link href="/work">See the product decisions behind these outcomes <ArrowRight /></Link>
      </div>
    </main>
  );
}
