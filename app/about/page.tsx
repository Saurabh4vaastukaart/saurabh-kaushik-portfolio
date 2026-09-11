import type { Metadata } from "next";
import Image from "next/image";
import { SkillsGrid } from "@/components/skills-grid";
import profilePhoto from "@/public/saurabh-profile.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Saurabh Kaushik, a Product Manager who connects customer evidence, business context and engineering execution.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="page-main">
      <section className="about-hero section-shell">
        <div className="about-hero__copy" data-reveal>
          <p className="section-label"><span />About me</p>
          <h1>A product manager who stays close to the problem.</h1>
          <p>
            I am comfortable moving between a customer conversation, a funnel, a technical workflow
            and an executive decision because each reveals a different part of the product picture.
          </p>
        </div>
        <figure className="about-hero__portrait" data-reveal>
          <Image
            src={profilePhoto}
            alt="Saurabh Kaushik in a modern office"
            priority
            placeholder="blur"
            sizes="(max-width: 800px) 90vw, 430px"
          />
          <figcaption><span>Based in</span> Gurugram, India</figcaption>
        </figure>
      </section>

      <section className="about-story section-shell" data-reveal>
        <p className="section-label"><span />My approach</p>
        <div>
          <h2>Clarity before velocity.</h2>
          <div>
            <p>
              Fast execution matters after the team understands the user problem, the trade-offs and
              what success should look like. I use research, product analytics and commercial context
              to make those choices explicit.
            </p>
            <p>
              What matters most to me is meaningful ownership: understand why the problem matters,
              help the team choose deliberately and stay accountable for the outcome after launch.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section section-shell" aria-labelledby="skills-page-title">
        <header className="section-heading section-heading--stack" data-reveal>
          <p className="section-label"><span />Product toolkit</p>
          <h2 id="skills-page-title">The craft behind the work.</h2>
        </header>
        <SkillsGrid />
      </section>

      <section className="education-panel section-shell" aria-labelledby="education-title" data-reveal>
        <div>
          <p className="section-label"><span />Education</p>
          <h2 id="education-title">Technical foundation, business depth.</h2>
        </div>
        <div className="education-panel__items">
          <article><span>2018 - 2020</span><h3>MBA, Information Technology</h3><p>MDU, Rohtak</p></article>
          <article><span>2010 - 2014</span><h3>B.Tech, Electronics and Communication</h3><p>RTU, Kota</p></article>
        </div>
      </section>
    </main>
  );
}
