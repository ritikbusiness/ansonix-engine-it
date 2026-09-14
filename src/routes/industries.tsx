import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { ClosingCta, CtaButton, Panel, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { absoluteUrl, INDUSTRIES } from "@/lib/site";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | IT Services for SaaS, Ecommerce, Finance | Ansonix IT" },
      {
        name: "description",
        content:
          "Ansonix IT delivers software, cloud, AI, data and design work for technology, ecommerce, healthcare, finance, education, professional services, SaaS, startups, SMBs and IT companies.",
      },
      { property: "og:title", content: "Industries | Ansonix IT" },
      {
        property: "og:description",
        content: "How Ansonix IT helps each sector build, modernise and scale technology.",
      },
      { property: "og:url", content: absoluteUrl("/industries") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/industries") }],
  }),
  component: IndustriesPage,
});

const detail: Record<string, string[]> = {
  Technology: ["Product engineering capacity", "Cloud and DevOps enablement", "Architecture reviews"],
  Ecommerce: ["Storefront performance", "Integrations and automation", "Analytics and merchandising data"],
  Healthcare: ["Secure patient-facing portals", "Workflow and admin tooling", "Access control and audit"],
  Finance: ["Security-first application builds", "Reporting and reconciliation", "Data pipelines and BI"],
  Education: ["Learning platforms", "Student and admin portals", "Content and assessment tooling"],
  "Professional Services": ["Client portals", "Process automation", "Internal systems and dashboards"],
  SaaS: ["MVP to multi-tenant platform", "Billing, roles and telemetry", "Cloud cost and reliability"],
  Startups: ["Lean delivery teams", "Architecture that survives growth", "Investor-ready product quality"],
  "Small & Medium Businesses": ["Websites and ecommerce", "Automation of manual work", "Dependable IT support"],
  "IT Companies": ["Dedicated engineers", "Overflow delivery capacity", "White-labelled engineering support"],
};

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Different sectors. Different constraints. Same engineering discipline."
        body="We adapt to the regulatory pressure, integration reality and commercial rhythm of your sector rather than applying one delivery template to every client."
      >
        <CtaButton to="/contact">Discuss your sector</CtaButton>
      </PageHero>

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 45}>
              <Panel className="h-full p-7">
                <h2 className="font-display text-xl font-bold">{ind.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                  {(detail[ind.title] ?? []).map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper" aria-hidden="true" />
                      <span className="min-w-0">{d}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          align="center"
          eyebrow="International delivery"
          title="India-based engineering team serving global clients."
          body="Our engineers work from Ahmedabad with working hours structured around clients in the United States, United Kingdom, Germany, the Netherlands, France, Ireland, Switzerland, the Nordics, Canada and Australia."
        />
      </Section>

      <ClosingCta />
    </>
  );
}
