import type { Metadata } from "next";
import { ArrowUpRight, Download, LinkedIn, Location, Mail, Phone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Saurabh Kaushik for Senior Product Manager and AI Product Manager opportunities.",
};

const contactMethods = [
  {
    label: "Email",
    value: "saurabhkaushick@gmail.com",
    href: "mailto:saurabhkaushick@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91-9992182382",
    href: "tel:+919992182382",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saurabhkaushick",
    href: "https://www.linkedin.com/in/saurabhkaushick",
    icon: LinkedIn,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main id="main-content" className="page-main contact-page">
      <section className="contact-hero section-shell">
        <div className="contact-hero__copy" data-reveal>
          <p className="section-label"><span />Contact</p>
          <h1>Let&apos;s talk about the problem worth solving.</h1>
          <p>
            I am open to Senior Product Manager and AI Product Manager opportunities where customer
            insight, product strategy and strong execution all matter.
          </p>
          <div className="contact-hero__meta">
            <span><Location /> Gurugram, India</span>
            <a href="/Saurabh_Kaushik_Product_Manager_Resume.pdf" download><Download /> Download resume</a>
          </div>
        </div>
        <aside className="contact-hero__signal" data-reveal>
          <span>Best way to reach me</span>
          <a href="mailto:saurabhkaushick@gmail.com">saurabhkaushick@gmail.com <ArrowUpRight /></a>
          <p>I typically respond to relevant product conversations directly.</p>
        </aside>
      </section>

      <section className="contact-methods section-shell" aria-label="Contact options">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <a
              key={method.label}
              className="contact-method"
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noreferrer" : undefined}
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span className="contact-method__icon"><Icon /></span>
              <span>{method.label}</span>
              <strong>{method.value}</strong>
              <ArrowUpRight className="contact-method__arrow" />
            </a>
          );
        })}
      </section>

      <section className="contact-note section-shell" data-reveal>
        <p>AI products. B2B SaaS. Healthcare. EdTech. Growth.</p>
        <span>Available for the right product challenge.</span>
      </section>
    </main>
  );
}
