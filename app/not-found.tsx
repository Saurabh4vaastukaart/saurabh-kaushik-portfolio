import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found section-shell">
      <p className="section-label"><span />404</p>
      <h1>This page drifted out of orbit.</h1>
      <p>The product story you are looking for may have moved.</p>
      <Link className="button button--primary" href="/">
        Return home <ArrowRight />
      </Link>
    </main>
  );
}
