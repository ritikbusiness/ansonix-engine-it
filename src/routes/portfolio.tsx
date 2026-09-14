import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { ClosingCta, CtaButton, Panel, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies | Ansonix IT" },
      {
        name: "description",
        content:
          "Case study structure for Ansonix IT engagements across web, software, cloud, AI, data and security work. Published projects are added as clients approve them.",
      },
      { property: "og:title", content: "Portfolio & Case Studies | Ansonix IT" },
      {
        property: "og:description",
        content: "How we document engagements: challenge, solution, technology, architecture and result.",
      },
      { property: "og:url", content: absoluteUrl("/portfolio") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/portfolio") }],
  }),
  component: PortfolioPage,
});

const placeholders = [
  { industry: "Technology", type: "Web Application" },
  { industry: "Ecommerce", type: "Commerce Platform" },
  { industry: "SaaS", type: "Product Engineering" },
  { industry: "Finance", type: "Data & BI" },
  { industry: "Healthcare", type: "Secure Portal" },
  { industry: "IT Company", type: "Dedicated Team" },
];

const fields = ["Challenge", "Solution", "Technology", "Architecture", "Result"];

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Case studies, published only when clients approve them."
        body="We do not invent results, logos or metrics. The structure below is how every Ansonix IT case study is documented — each card becomes a real project as clients give permission to publish."
      >
        <CtaButton to="/contact">Ask about relevant experience</CtaButton>
      </PageHero>

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((p, i) => (
            <Reveal key={`${p.industry}-${p.type}`} delay={i * 55}>
              <Panel className="h-full p-7">
                <div className="grid h-36 place-items-center rounded-xl border border-dashed border-border bg-surface-2/40">
                  <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Project image placeholder
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-copper/40 px-3 py-1 text-xs text-copper">
                    {p.industry}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {p.type}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-lg font-bold">Client / project name placeholder</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {fields.map((f) => (
                    <li key={f}>
                      <span className="font-semibold text-foreground/80">{f}:</span> to be completed with verified
                      project detail.
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
          eyebrow="In the meantime"
          title="Ask us directly about comparable work."
          body="If you would like to understand our experience in a specific sector or technology, we will walk you through relevant engagements in a call, within the limits of client confidentiality."
        />
      </Section>

      <ClosingCta />
    </>
  );
}
