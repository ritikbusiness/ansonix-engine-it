import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { ClosingCta, CtaButton, Panel, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { ROLES, SITE } from "@/lib/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Ansonix IT | Engineering Jobs in Ahmedabad" },
      {
        name: "description",
        content:
          "Join Ansonix IT in Ahmedabad and work with international clients across software engineering, cloud, DevOps, AI/ML, data, security and design.",
      },
      { property: "og:title", content: "Careers | Ansonix IT" },
      {
        property: "og:description",
        content: "Engineering careers with international exposure, from our Ahmedabad base.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const perks = [
  { t: "International exposure", b: "Work directly with clients and teams in the US, UK and Europe." },
  { t: "Breadth of work", b: "Move between product, cloud, data and AI work rather than one narrow lane." },
  { t: "Engineering standards", b: "Code review, testing and architecture discussion are part of normal delivery." },
  { t: "Learning time", b: "Structured time for certification, deep work and internal knowledge sharing." },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Serious engineering work, for clients around the world."
        body="We hire engineers who care about the business outcome as much as the implementation. If that is you, we would like to hear from you — even when no specific role is advertised."
      >
        <CtaButton href={`mailto:${SITE.emails.hello}?subject=Career%20enquiry%20-%20Ansonix%20IT`}>
          Send your CV
        </CtaButton>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Open applications"
          title="Disciplines we hire across"
          body="Specific vacancies are published here as they open. In the meantime, speculative applications are genuinely read."
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
        <Reveal className="mt-10">
          <div className="rounded-2xl border border-dashed border-border p-8 text-sm text-muted-foreground">
            Current vacancy listings will appear in this section. To apply speculatively, email{" "}
            <a href={`mailto:${SITE.emails.hello}`} className="text-copper hover:underline">
              {SITE.emails.hello}
            </a>{" "}
            with your CV and a short note about the work you want to do.
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading eyebrow="Working here" title="What we offer engineers." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={p.t} delay={i * 55}>
              <Panel className="h-full p-6">
                <h3 className="font-display text-base font-bold">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.b}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta
        title="Think you would fit here?"
        body="Send us your CV and tell us what you would like to build next."
      />
    </>
  );
}
