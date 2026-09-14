import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { ClosingCta, CtaButton, Panel, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { absoluteUrl, ROLES } from "@/lib/site";

export const Route = createFileRoute("/engineering-teams")({
  head: () => ({
    meta: [
      { title: "Dedicated Developers & Engineering Teams | Ansonix IT" },
      {
        name: "description",
        content:
          "Extend your engineering capacity with dedicated developers, DevOps, cloud, AI, data, QA, design and security specialists working as part of your existing team.",
      },
      { property: "og:title", content: "Need More Engineering Power? | Ansonix IT" },
      {
        property: "og:description",
        content:
          "Dedicated engineers and complete development teams from Ansonix IT, working inside your process and tools.",
      },
      { property: "og:url", content: absoluteUrl("/engineering-teams") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/engineering-teams") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do dedicated engineers from Ansonix IT work with our team?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "They join your existing process, tools and rituals — your board, your repositories, your standups — and report as part of your team while Ansonix handles employment, retention and technical backup.",
              },
            },
            {
              "@type": "Question",
              name: "Can Ansonix IT provide a complete development team?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. A team can combine developers, DevOps and cloud engineers, QA, designers, data specialists and a technical lead, assembled around your roadmap.",
              },
            },
            {
              "@type": "Question",
              name: "Which time zones can Ansonix IT cover?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our engineering base is in Ahmedabad, India, and teams commit to overlapping working hours with US, UK and European clients.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: EngineeringTeamsPage,
});

const why = [
  { t: "Hire capability, not headcount", b: "Add a specific skill for a specific period without a permanent hire, a recruitment cycle or a redundancy risk." },
  { t: "Inside your process", b: "Our engineers use your board, your repository, your review standards and your definition of done." },
  { t: "Backed by a bench", b: "Behind every engineer sits a wider practice — architecture, security, cloud and data input when a problem needs it." },
  { t: "Overlapping hours", b: "Working hours structured to overlap meaningfully with US, UK and European teams." },
  { t: "Scale up and down", b: "Grow the team for a release push, reduce it when the roadmap steadies." },
  { t: "Clear commercials", b: "Transparent rates, defined notice periods and no hidden delivery overheads." },
];

function EngineeringTeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering teams"
        title="Need More Engineering Power?"
        body="Technology companies, agencies and product teams use Ansonix IT to extend technical capacity — adding proven engineers to existing teams, or standing up a complete delivery unit, without building a technical organisation from scratch."
      >
        <CtaButton to="/contact">Build Your Engineering Team</CtaButton>
        <CtaButton to="/solutions" variant="ghost">
          Engagement models
        </CtaButton>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Roles"
          title="Engineering roles we provide"
          body="Individual specialists or a blended team. We do not publish headcount figures — we scope the roles your roadmap actually needs and confirm availability before you commit."
        />
        <ul className="mt-12 flex flex-wrap gap-3">
          {ROLES.map((r, i) => (
            <Reveal as="li" key={r} delay={i * 25}>
              <span className="inline-flex rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-copper/50 hover:text-copper">
                {r}
              </span>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading eyebrow="Why it works" title="An engineering extension, not an outsourcing desk." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <Reveal key={w.t} delay={i * 55}>
              <Panel className="h-full p-7">
                <h3 className="font-display text-lg font-bold">{w.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.b}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="Getting started" title="From first call to first commit." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { s: "01", t: "Scope the roles", b: "We map your roadmap to specific roles, seniority and duration." },
            { s: "02", t: "Meet the engineers", b: "You interview candidates and approve every person who joins." },
            { s: "03", t: "Onboard", b: "Access, tooling, context and a written onboarding plan in week one." },
            { s: "04", t: "Deliver and review", b: "Regular performance reviews and the freedom to change the mix." },
          ].map((step, i) => (
            <Reveal key={step.s} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border p-6">
                <span className="font-display text-sm font-extrabold text-copper">{step.s}</span>
                <h3 className="mt-3 font-display text-base font-bold">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta
        title="Build Your Engineering Team."
        body="Tell us the roles, the roadmap and the timeline. We will tell you what is realistic and when it can start."
      />
    </>
  );
}
