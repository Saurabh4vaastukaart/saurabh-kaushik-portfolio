import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { caseStudies, getCaseStudy, getNextCaseStudy } from "@/lib/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type AccentStyle = CSSProperties & {
  "--case-accent": string;
  "--case-accent-soft": string;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) return {};

  return {
    title: `${study.name} Case Study`,
    description: `${study.summary} Read the problem, product decisions, execution and impact.`,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.name} Product Case Study`,
      description: study.summary,
      url: `/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const nextStudy = getNextCaseStudy(slug);
  const style: AccentStyle = {
    "--case-accent": study.accent,
    "--case-accent-soft": study.accentSoft,
  };

  return (
    <main id="main-content" className="case-page" style={style}>
      <section className="case-hero section-shell" aria-labelledby="case-title">
        <nav className="breadcrumb" aria-label="Breadcrumb" data-reveal>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/work">Work</Link>
          <span>/</span>
          <span aria-current="page">{study.name}</span>
        </nav>

        <div className="case-hero__grid">
          <div className="case-hero__copy" data-reveal>
            <p className="section-label"><span />Case study {study.index}&nbsp; | &nbsp;{study.category}</p>
            <h1 id="case-title">{study.name}</h1>
            <p>{study.summary}</p>
            <div className="case-hero__actions">
              {study.liveUrl ? (
                <a className="button button--primary" href={study.liveUrl} target="_blank" rel="noreferrer">
                  {study.liveLabel} <ArrowUpRight />
                </a>
              ) : (
                <span className="case-private">Private product case study</span>
              )}
              <Link className="button button--secondary" href="/work">
                All product work
              </Link>
            </div>
          </div>

          <aside className="case-scorecard" data-reveal>
            <div className="case-scorecard__glow" />
            <span>Primary outcome</span>
            <strong>{study.metric}</strong>
            <p>{study.secondaryMetric}</p>
            <div className="case-scorecard__signal">
              <i />
              <span>Measured product impact</span>
            </div>
          </aside>
        </div>

        <dl className="case-snapshot" data-reveal>
          {study.snapshot.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="case-story section-shell">
        <aside className="story-nav" data-reveal>
          <strong>Inside this story</strong>
          {study.sections.map((section) => (
            <a href={`#${section.id}`} key={section.id}>
              <span>{section.step}</span>
              {section.label}
            </a>
          ))}
        </aside>

        <div className="story-sections">
          {study.sections.map((section) => (
            <article className="story-section" id={section.id} key={section.id} data-reveal>
              <div className="story-section__label">
                <span>{section.step}</span>
                <p>{section.label}</p>
              </div>
              <h2>{section.title}</h2>
              <div className="story-section__copy">
                {section.copy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.items ? (
                <div className="story-items">
                  {section.items.map((item, index) => (
                    <div key={item.title}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {section.metrics ? (
                <div
                  className="story-metrics"
                  style={{ gridTemplateColumns: `repeat(${section.metrics.length}, minmax(0, 1fr))` }}
                >
                  {section.metrics.map((metric) => (
                    <div key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              {section.callout ? (
                <blockquote>
                  <span />
                  <p>{section.callout}</p>
                </blockquote>
              ) : null}
            </article>
          ))}

          {study.confidentiality ? (
            <p className="confidentiality-note">
              <strong>Confidentiality note</strong>
              {study.confidentiality}
            </p>
          ) : null}
        </div>
      </section>

      <section className="next-case section-shell" data-reveal>
        <div>
          <p className="section-label"><span />Next case study</p>
          <h2>{nextStudy.name}</h2>
          <p>{nextStudy.summary}</p>
        </div>
        <Link className="button button--primary" href={`/case-studies/${nextStudy.slug}`}>
          Read next story <ArrowRight />
        </Link>
      </section>
    </main>
  );
}
