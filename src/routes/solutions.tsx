import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { ClosingCta, CtaButton, Panel, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { absoluteUrl, ENGAGEMENTS, SCALE_LADDER } from "@/lib/site";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Engagement Models & IT Solutions | Ansonix IT" },
      {
        name: "description",
        content:
          "Build your product, hire dedicated engineers, stand up a full development team, run project-based delivery, managed IT and cloud services, or technology consulting.",
      },
      { property: "og:title", content: "Solutions & Engagement Models | Ansonix IT" },
      {
        property: "og:description",
        content: "Six ways to work with Ansonix IT, from a single product build to a complete engineering team.",
      },
      { property: "og:url", content: absoluteUrl("/solutions") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/solutions") }],
  }),
  component: SolutionsPage,
});

const comparison = [
  { model: "Build Your Product", best: "Defined product or website goal", control: "Ansonix owns delivery" },
  { model: "Dedicated Engineers", best: "Existing team needs specific skills", control: "You own delivery" },
  { model: "Development Teams", best: "New workstream or product line", control: "Shared, with Ansonix leads" },
  { model: "Project-Based", best: "Fixed scope and timeline", control: "Ansonix owns delivery" },
  { model: "Managed IT & Cloud", best: "Live systems needing operations", control: "Ansonix operates" },
  { model: "Technology Consulting", best: "Decisions before investment", control: "Advisory" },
];

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Six ways to work with us. One standard of engineering."
        body="Commercial structure should follow the problem, not the other way round. Choose the model that matches your stage, then change it as the work evolves."
      >
        <CtaButton to="/contact">Discuss your engagement</CtaButton>
      </PageHero>

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ENGAGEMENTS.map((e, i) => (
            <Reveal key={e.id} delay={i * 60}>
              <Panel className="h-full p-8">
                <span className="font-display text-3xl font-extrabold text-copper/30">{e.id}</span>
                <h2 className="mt-4 font-display text-xl font-bold">{e.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading eyebrow="Comparison" title="Which model fits your situation?" />
        <Reveal className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-[0.18em] text-copper">
                <th scope="col" className="py-4 pr-4 font-semibold">
                  Model
                </th>
                <th scope="col" className="py-4 pr-4 font-semibold">
                  Best when
                </th>
                <th scope="col" className="py-4 font-semibold">
                  Delivery ownership
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.model} className="border-b border-border/70">
                  <td className="py-4 pr-4 font-semibold text-foreground">{row.model}</td>
                  <td className="py-4 pr-4 text-muted-foreground">{row.best}</td>
                  <td className="py-4 text-muted-foreground">{row.control}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Scale"
          title="From a business website to an AI and data platform."
          body="Engagements grow. Many partnerships start with one website or one engineer and end up spanning product, cloud and data."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SCALE_LADDER.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 55}>
              <div className="h-full rounded-2xl border border-border p-6 transition-colors hover:border-copper/40">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-copper">0{i + 1}</span>
                <h3 className="mt-3 font-display text-base font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <ClosingCta />
    </>
  );
}
