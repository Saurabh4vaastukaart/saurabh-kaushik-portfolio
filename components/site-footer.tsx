import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, LinkedIn, Mail, Phone } from "@/components/icons";
import profilePhoto from "@/public/saurabh-profile.jpg";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-main" data-reveal>
          <p className="section-label"><span />Let&apos;s build something useful</p>
          <h2>Have a complex product problem?</h2>
          <p>
            I am open to Senior Product Manager and AI Product Manager opportunities where discovery,
            strategy and execution all matter.
          </p>
          <div className="footer-actions">
            <a className="button button--contact" href="mailto:saurabhkaushick@gmail.com">
              <Mail /> Email me
            </a>
            <a className="button button--secondary" href="tel:+919992182382">
              <Phone /> +91-9992182382
            </a>
            <a
              className="button button--secondary"
              href="https://www.linkedin.com/in/saurabhkaushick"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn /> LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <Link className="footer-brand" href="/">
            <span><Image src={profilePhoto} alt="" placeholder="blur" sizes="32px" /></span>
            Saurabh Kaushik
          </Link>
          <p>Product Manager focused on AI, SaaS and growth.</p>
          <a href="#top">
            Back to top <ArrowUpRight />
          </a>
        </div>
      </div>
    </footer>
  );
}
