export type StoryItem = {
  title: string;
  copy: string;
};

export type StoryMetric = {
  value: string;
  label: string;
};

export type StorySection = {
  id: string;
  step: string;
  label: string;
  title: string;
  copy: string[];
  callout?: string;
  items?: StoryItem[];
  metrics?: StoryMetric[];
};

export type CaseStudy = {
  slug: string;
  index: string;
  name: string;
  category: string;
  summary: string;
  tags: string[];
  accent: string;
  accentSoft: string;
  metric: string;
  metricLabel: string;
  secondaryMetric: string;
  liveUrl?: string;
  liveLabel?: string;
  confidentiality?: string;
  snapshot: Array<{ label: string; value: string }>;
  sections: StorySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "itrials",
    index: "01",
    name: "iTrials",
    category: "Healthcare AI",
    summary:
      "A GenAI and RAG patient-eligibility platform for US healthcare, taken from discovery through launch with a focus on faster review.",
    tags: ["GenAI + RAG", "B2B SaaS", "US Healthcare"],
    accent: "#65e7ff",
    accentSoft: "#1f8199",
    metric: "75% faster",
    metricLabel: "Patient review time",
    secondaryMetric: "180 sec to 45 sec",
    liveUrl: "https://www.itrials.ai/",
    liveLabel: "Visit iTrials",
    snapshot: [
      { label: "Product", value: "B2B SaaS" },
      { label: "Role", value: "Product Manager" },
      { label: "Scope", value: "Discovery to launch" },
      { label: "Market", value: "US Healthcare" },
    ],
    sections: [
      {
        id: "problem",
        step: "01",
        label: "Problem",
        title: "Eligibility review was slow, repetitive and cognitively heavy.",
        copy: [
          "Patient-eligibility review required teams to compare clinical-trial criteria with detailed patient histories. The baseline task took about 180 seconds per patient.",
          "The product opportunity was to use generative AI and RAG to reduce repetitive review effort while keeping the workflow clear for healthcare teams.",
        ],
      },
      {
        id: "user",
        step: "02",
        label: "User",
        title: "Hospital teams needed speed without giving up accountability.",
        copy: [
          "Healthcare reviewers needed a faster way to assess eligibility without making the product difficult to understand or use inside an established workflow.",
        ],
        callout:
          "Product principle: AI supports the decision. The trained reviewer owns it.",
      },
      {
        id: "insight",
        step: "03",
        label: "Insight",
        title: "A match score alone would not earn trust.",
        copy: [
          "The product had to improve the complete review task, not only demonstrate model capability. That made workflow speed and review clarity the most useful measures of value.",
        ],
      },
      {
        id: "decision",
        step: "04",
        label: "Decision",
        title: "Design the product as an evidence-first review aid.",
        copy: [
          "I prioritised an assisted review experience over a black-box automation story, keeping the product grounded in the real user task and a measurable baseline.",
        ],
        items: [
          {
            title: "Keep the human in the loop",
            copy: "The system prepares a review-ready answer without replacing trained judgement.",
          },
          {
            title: "Show supporting evidence",
            copy: "Keep relevant context connected to the eligibility result.",
          },
          {
            title: "Make uncertainty explicit",
            copy: "Treat low-confidence cases as a review need, not a reason to overstate certainty.",
          },
        ],
      },
      {
        id: "execution",
        step: "05",
        label: "Execution",
        title: "Turned a complex AI pipeline into one clear workflow.",
        copy: [
          "I owned discovery, product requirements, prioritisation, cross-functional delivery, UAT and launch. The roadmap connected the GenAI/RAG capability with the healthcare review workflow and its success metric.",
        ],
        items: [
          { title: "Discover", copy: "Understand the healthcare review task and baseline." },
          { title: "Define", copy: "Translate the problem into a focused product workflow." },
          { title: "Deliver", copy: "Lead design, engineering, UAT and launch." },
          { title: "Measure", copy: "Compare the completed task with the original baseline." },
        ],
      },
      {
        id: "impact",
        step: "06",
        label: "Impact",
        title: "Measured the complete task, not the model in isolation.",
        copy: [
          "The end-to-end patient review time fell from about 180 seconds to 45 seconds, a 75% reduction.",
        ],
        metrics: [
          { value: "180 sec to 45 sec", label: "Review time" },
          { value: "75%", label: "Time reduction" },
        ],
        callout:
          "Learning: in high-stakes AI, explainability is part of the product experience.",
      },
    ],
  },
  {
    slug: "growth-ops",
    index: "02",
    name: "Growth Ops",
    category: "Marketing Intelligence",
    summary:
      "An AI/LLM acquisition and attribution product designed to improve conversion and return on ad spend for marketing teams.",
    tags: ["AI + Analytics", "B2B SaaS", "Growth"],
    accent: "#9b8cff",
    accentSoft: "#5d4cc7",
    metric: "4.1x ROAS",
    metricLabel: "Up from 2.9x",
    secondaryMetric: "2.8% to 3.6% conversion",
    confidentiality:
      "Customer-specific data and implementation details are intentionally excluded.",
    snapshot: [
      { label: "Product", value: "B2B SaaS" },
      { label: "Role", value: "Product Manager" },
      { label: "Scope", value: "0-to-1 launch + growth" },
      { label: "Domain", value: "Marketing intelligence" },
    ],
    sections: [
      {
        id: "problem",
        step: "01",
        label: "Problem",
        title: "Marketing data was visible, but the next decision was not.",
        copy: [
          "Acquisition and attribution data needed to translate into clearer marketing decisions. Reporting activity alone was not enough if conversion and return on spend did not improve.",
          "The commercial question was direct: could a better decision loop improve conversion and produce more return from the same area of spend?",
        ],
      },
      {
        id: "user",
        step: "02",
        label: "User",
        title: "Growth teams needed one actionable view of performance.",
        copy: [
          "Marketing and business teams needed to connect acquisition activity with downstream performance using shared outcome metrics.",
        ],
      },
      {
        id: "insight",
        step: "03",
        label: "Insight",
        title: "The product had to shorten the path from signal to action.",
        copy: [
          "The product needed to connect acquisition and attribution in one experience, with conversion and ROAS acting as the shared definition of success.",
        ],
        callout:
          "A useful analytics product answers: what changed, why it matters and what should I inspect next?",
      },
      {
        id: "decision",
        step: "04",
        label: "Decision",
        title: "Build around a continuous allocation loop.",
        copy: [
          "I anchored prioritisation in conversion and ROAS rather than feature activity. Acquisition and attribution were treated as one product story, supported by AI/LLM capabilities.",
        ],
        items: [
          { title: "Connect", copy: "Treat acquisition and attribution as one journey." },
          { title: "Prioritise", copy: "Use business outcomes to guide the roadmap." },
          { title: "Improve", copy: "Plan post-launch optimisation as part of the product lifecycle." },
        ],
      },
      {
        id: "execution",
        step: "05",
        label: "Execution",
        title: "Led definition, delivery, launch and post-launch optimisation.",
        copy: [
          "I aligned product, engineering and business stakeholders around one outcome model, translated it into a prioritised roadmap, and kept launch readiness and adoption inside the product plan.",
          "Post-launch analytics informed iteration rather than treating the first release as the finish line.",
        ],
      },
      {
        id: "impact",
        step: "06",
        label: "Impact",
        title: "Efficiency and effectiveness improved together.",
        copy: [
          "Conversion improved from 2.8% to 3.6%, and return on ad spend increased from 2.9x to 4.1x.",
        ],
        metrics: [
          { value: "2.8% to 3.6%", label: "Conversion" },
          { value: "2.9x to 4.1x", label: "Return on ad spend" },
        ],
        callout:
          "Learning: the value of an analytics product lives in the decision it improves.",
      },
    ],
  },
  {
    slug: "zetaleap",
    index: "03",
    name: "Zetaleap",
    category: "AI EdTech",
    summary:
      "A structured learning product that helps students and early-career engineers turn AI concepts into practical, job-ready skills.",
    tags: ["EdTech", "B2B + B2C", "Product-led Growth"],
    accent: "#ff77bd",
    accentSoft: "#a63872",
    metric: "49% retention",
    metricLabel: "Up from 34% weekly active",
    secondaryMetric: "22% to 31% onboarding",
    liveUrl: "https://zetaleap.ai",
    liveLabel: "Visit Zetaleap",
    snapshot: [
      { label: "Product", value: "B2B + B2C SaaS" },
      { label: "Role", value: "Product Manager" },
      { label: "Scope", value: "0-to-1 + iteration" },
      { label: "Domain", value: "AI upskilling" },
    ],
    sections: [
      {
        id: "problem",
        step: "01",
        label: "Problem",
        title: "AI interest was high, but the route to practical ability was unclear.",
        copy: [
          "While hiring engineers, we saw fresh graduates who understood concepts but struggled to apply them in a real role. Learners also found it difficult to know where to begin and how one topic connected to the next.",
        ],
      },
      {
        id: "user",
        step: "02",
        label: "User",
        title: "Learners needed direction, practice and proof of progress.",
        copy: [
          "Students and early-career engineers needed a clearer path from learning a concept to building practical ability.",
        ],
      },
      {
        id: "insight",
        step: "03",
        label: "Insight",
        title: "More content was not the answer.",
        copy: [
          "The first-value journey and repeat use had to improve together. That made onboarding conversion and weekly active retention the right paired outcomes.",
        ],
        callout:
          "Retention improved when motivation, practice and the next useful step worked as one system.",
      },
      {
        id: "decision",
        step: "04",
        label: "Decision",
        title: "Make practical progress easy to understand.",
        copy: [
          "I prioritised a structured learning journey that reduced onboarding friction and made continued product value easier to discover.",
        ],
        items: [
          { title: "Guide the start", copy: "Reduce friction in the path to first value." },
          { title: "Support progress", copy: "Keep the learning journey structured and understandable." },
          { title: "Earn the return", copy: "Improve the value that brings learners back each week." },
        ],
      },
      {
        id: "execution",
        step: "05",
        label: "Execution",
        title: "Owned the product from definition through launch and iteration.",
        copy: [
          "I led roadmap definition, PRDs, backlog and cross-functional delivery with design and engineering. After launch, funnel behaviour and weekly retention shaped the next priorities.",
          "Product analytics and experimentation connected journey improvements with measurable activation and retention outcomes.",
        ],
      },
      {
        id: "impact",
        step: "06",
        label: "Impact",
        title: "Improved both the first success and continued use.",
        copy: [
          "Onboarding conversion increased from 22% to 31%, and weekly active retention improved from 34% to 49%.",
        ],
        metrics: [
          { value: "22% to 31%", label: "Onboarding" },
          { value: "34% to 49%", label: "Weekly active retention" },
        ],
        callout:
          "Learning: engagement mechanics work only when they reinforce real progress.",
      },
    ],
  },
  {
    slug: "akashvaani",
    index: "04",
    name: "Akashvaani",
    category: "Consumer Marketplace",
    summary:
      "A live consumer marketplace where I owned expert discovery and booking improvements to support stronger monetisation.",
    tags: ["Marketplace", "Consumer", "Monetisation"],
    accent: "#ffb45e",
    accentSoft: "#b96823",
    metric: "45% higher ARPU",
    metricLabel: "INR 420 to INR 610",
    secondaryMetric: "Clearer discovery + booking",
    liveUrl: "https://www.akashvaani.com/",
    liveLabel: "Visit Akashvaani",
    snapshot: [
      { label: "Product", value: "Live consumer marketplace" },
      { label: "Role", value: "Product owner for revamp" },
      { label: "Scope", value: "Discovery, booking + growth" },
      { label: "Domain", value: "Expert consultation" },
    ],
    sections: [
      {
        id: "problem",
        step: "01",
        label: "Problem",
        title: "Customers wanted guidance, but the purchase felt uncertain.",
        copy: [
          "The existing marketplace needed a clearer expert discovery and booking journey so customers could move toward a consultation with more confidence.",
        ],
      },
      {
        id: "user",
        step: "02",
        label: "User",
        title: "Customers needed help expressing a real concern.",
        copy: [
          "Consumers needed to find a relevant expert and complete booking with fewer points of uncertainty.",
        ],
      },
      {
        id: "insight",
        step: "03",
        label: "Insight",
        title: "More choice was reducing confidence.",
        copy: [
          "Discovery and booking had to work as one connected journey. Improving only one step would leave friction elsewhere in the path to customer value.",
        ],
        callout:
          "In a trust-sensitive marketplace, clarity can be more valuable than breadth.",
      },
      {
        id: "decision",
        step: "04",
        label: "Decision",
        title: "Organise the experience around the customer's question.",
        copy: [
          "I focused the roadmap on expert discovery, booking and the points where customers needed more clarity before completing the journey.",
        ],
        items: [
          { title: "Discover", copy: "Help customers find a relevant expert." },
          { title: "Evaluate", copy: "Make the choice easier to understand." },
          { title: "Book", copy: "Reduce friction in completing the consultation journey." },
        ],
      },
      {
        id: "execution",
        step: "05",
        label: "Execution",
        title: "Led the revamp of an already-live product.",
        copy: [
          "I joined after Akashvaani was already live. My ownership covered problem framing, roadmap, expert discovery, booking and cross-functional delivery.",
          "Research, product analytics and controlled experiments informed the improvements shipped during this role.",
        ],
      },
      {
        id: "impact",
        step: "06",
        label: "Impact",
        title: "A clearer value exchange improved monetisation.",
        copy: [
          "Average revenue per user increased from INR 420 to INR 610, a 45% improvement. The result indicated that customers saw more confidence and value in the revised service journey.",
        ],
        metrics: [
          { value: "INR 420 to INR 610", label: "Average revenue per user" },
          { value: "45%", label: "ARPU improvement" },
        ],
        callout:
          "Learning: make the service understandable before asking the customer to buy it.",
      },
    ],
  },
];

export const experience = [
  {
    period: "Apr 2023 - Present",
    role: "Product Manager",
    company: "Rise11 AI",
    summary:
      "Own AI and SaaS products from discovery and strategy through delivery, launch and measurable growth.",
    highlights: [
      "Partner with co-founders and the CTO on product vision, OKRs, North Star metrics and roadmap trade-offs.",
      "Lead 15+ engineers and designers across product design, engineering, business and operations.",
      "Use customer research, SQL, GA4 and Mixpanel to prioritise problems and evaluate impact.",
      "Define GTM and product-led growth motions for new products and major features.",
    ],
  },
  {
    period: "Sep 2020 - Mar 2023",
    role: "Associate Product Manager",
    company: "Rise11 AI",
    summary:
      "Improved core customer journeys through research, funnel analysis and controlled experimentation.",
    highlights: [
      "Raised onboarding conversion from 19% to 29% through interviews and activation-flow improvements.",
      "Improved payment success from 71% to 89% with checkout UX, UPI integrations and recovery flows.",
      "Owned recommendation and search from discovery through launch, increasing engagement by 22%.",
      "Ran A/B tests and feature-flagged experiments across onboarding, payments and engagement.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Product craft",
    skills: ["Strategy", "Discovery", "Roadmaps", "PRDs", "Prototype", "GTM", "PLG", "RICE", "OKRs"],
  },
  {
    label: "Data + growth",
    skills: ["Funnel analysis", "A/B testing", "GA4", "Mixpanel", "Basic SQL", "CRO"],
  },
  {
    label: "AI + platforms",
    skills: ["AI/LLM", "GenAI", "RAG", "B2B SaaS", "APIs", "Workflow automation"],
  },
  {
    label: "Collaboration",
    skills: ["Figma", "Jira", "Confluence", "Stakeholders", "Team leadership"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getNextCaseStudy(slug: string) {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  return caseStudies[(index + 1) % caseStudies.length];
}
