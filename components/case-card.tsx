import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import type { CaseStudy } from "@/lib/portfolio";

type CaseCardProps = {
  study: CaseStudy;
};

type AccentStyle = CSSProperties & {
  "--case-accent": string;
  "--case-accent-soft": string;
};

export function CaseCard({ study }: CaseCardProps) {
  const style: AccentStyle = {
    "--case-accent": study.accent,
    "--case-accent-soft": study.accentSoft,
  };

  return (
    <article className="case-card" style={style} data-reveal>
      <div className="case-card__halo" />
      <div className="case-card__topline">
        <span>{study.index}</span>
        <span>{study.category}</span>
      </div>
      <div className="case-card__body">
        <div>
          <h3>{study.name}</h3>
          <p>{study.summary}</p>
        </div>
        <div className="case-card__metric">
          <strong>{study.metric}</strong>
          <span>{study.metricLabel}</span>
        </div>
      </div>
      <div className="case-card__tags" aria-label={`${study.name} product areas`}>
        {study.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="case-card__actions">
        <Link href={`/case-studies/${study.slug}`}>
          Read case study <ArrowRight />
        </Link>
        {study.liveUrl ? (
          <a href={study.liveUrl} target="_blank" rel="noreferrer">
            Live product <ArrowUpRight />
          </a>
        ) : (
          <span className="private-label">Private product</span>
        )}
      </div>
    </article>
  );
}
