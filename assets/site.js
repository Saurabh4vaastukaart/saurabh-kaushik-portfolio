const icons = {
  arrow: `<svg class="icon-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg>`,
  menu: `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  chevron: `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>`,
  location: `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
  briefcase: `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="M3 13h18"/></svg>`,
  mail: `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/><path d="m22 7-10 7L2 7"/></svg>`,
  phone: `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></svg>`,
  linkedin: `<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.54V8.98H7.1v11.47Z"/></svg>`
};

const navItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "experience", label: "Experience", href: "/experience/" },
  { key: "case-studies", label: "Case Studies", href: "/case-studies/" },
  { key: "about", label: "About", href: "/about/" },
  { key: "contact", label: "Contact", href: "/contact/" }
];

function renderHeader() {
  const target = document.querySelector("#site-header");
  if (!target) return;

  const active = document.body.dataset.section || "home";
  const nav = navItems
    .map(
      (item) =>
        `<a class="nav-link" href="${item.href}"${item.key === active ? ' aria-current="page"' : ""}>${item.label}</a>`
    )
    .join("");

  target.innerHTML = `
    <header class="site-header" data-site-header>
      <div class="container nav-shell">
        <a class="brand" href="/" aria-label="Saurabh Kaushik, home">
          <span class="brand-mark" aria-hidden="true">SK</span>
          <span class="brand-label">Saurabh Kaushik</span>
        </a>
        <nav class="main-nav" id="main-navigation" aria-label="Primary navigation">${nav}</nav>
        <div class="nav-actions">
          <a class="button button-secondary button-small" href="/assets/Saurabh_Kaushik_Product_Manager_Resume.pdf" download>
            Résumé ${icons.arrow}
          </a>
          <button class="menu-button" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="main-navigation">
            ${icons.menu}
          </button>
        </div>
      </div>
    </header>`;

  const header = target.querySelector("[data-site-header]");
  const menuButton = target.querySelector(".menu-button");
  const menu = target.querySelector(".main-nav");

  const closeMenu = () => {
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  document.addEventListener("click", (event) => {
    if (!target.contains(event.target)) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1060) closeMenu();
  });

  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function renderFooter() {
  const target = document.querySelector("#site-footer");
  if (!target) return;

  target.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-copy">© <span data-year></span> Saurabh Kaushik. Product Manager, Gurugram.</div>
        <div class="footer-links">
          <a href="mailto:saurabhkaushick@gmail.com">Email</a>
          <a href="tel:+919992182382">Phone</a>
          <a href="https://www.linkedin.com/in/saurabhkaushick" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/assets/Saurabh_Kaushik_Product_Manager_Resume.pdf" download>Download résumé</a>
        </div>
      </div>
    </footer>`;

  const year = target.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
}

function enhanceCaseLinks() {
  document.querySelectorAll("[data-case-link]").forEach((link) => {
    const go = link.querySelector(".case-go");
    if (go && !go.innerHTML.trim()) go.innerHTML = icons.arrow;
  });
}

function enhanceBreadcrumbs() {
  document.querySelectorAll("[data-chevron]").forEach((item) => {
    item.innerHTML = icons.chevron;
  });
}

function enhanceContactCards() {
  document.querySelectorAll("[data-contact-icon]").forEach((item) => {
    const icon = item.dataset.contactIcon;
    if (icons[icon]) item.innerHTML = icons[icon];
  });
}

function setupContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "Portfolio enquiry").trim();
    const message = String(formData.get("message") || "").trim();
    const body = `Hi Saurabh,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;
    const mailto = `mailto:saurabhkaushick@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    status.textContent = "Your email app should open now. If it does not, use the email link on this page.";
    window.location.href = mailto;
  });
}

renderHeader();
renderFooter();
enhanceCaseLinks();
enhanceBreadcrumbs();
enhanceContactCards();
setupContactForm();
