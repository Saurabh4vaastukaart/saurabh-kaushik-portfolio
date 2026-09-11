import type { Metadata } from "next";
import { CaseCard } from "@/components/case-card";
import { ArrowRight } from "@/components/icons";
import { caseStudies } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Product Work",
  description:
    "Product case studies by Saurabh Kaushik across healthcare AI, marketing intelligence, EdTech and consumer marketplaces.",
};

export default function WorkPage() {
  return (
    <main id="main-content" className="page-main">
      <section className="page-intro section-shell">
        <div className="page-intro__copy" data-reveal>
          <p className="section-label"><span />Product work</p>
          <h1>Decisions, trade-offs and outcomes behind the products.</h1>
          <p>
            Four case studies showing how I moved from the customer problem to product direction,
            cross-functional delivery and measurable impact.
          </p>
        </div>
        <aside className="page-intro__signal" data-reveal>
          <span>Portfolio at a glance</span>
          <strong>4 product stories</strong>
          <p>AI healthcare, marketing intelligence, EdTech and a consumer marketplace.</p>
          <a href="#case-studies">Explore the cases <ArrowRight /></a>
        </aside>
      </section>

      <section className="page-section section-shell" id="case-studies" aria-labelledby="case-studies-title">
        <header className="section-heading" data-reveal>
          <div>
            <p className="section-label"><span />Selected case studies</p>
            <h2 id="case-studies-title">Start with the outcome that matters to you.</h2>
          </div>
          <p>
            Each story follows the same PM lens: Problem, User, Insight, Decision, Execution and Impact.
          </p>
        </header>
        <div className="case-grid">
          {caseStudies.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <section className="page-principle section-shell" data-reveal>
        <span>My product principle</span>
        <p>Ship the smallest coherent answer to the right problem, then stay accountable for what changes.</p>
      </section>
    </main>
  );
}
