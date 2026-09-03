import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { ClosingCta, Panel, PageHero, Section, SectionHeading, CtaButton } from "@/components/site/ui";
import { PROCESS, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "IT Services & Software Development Services | Ansonix IT" },
      {
        name: "description",
        content:
          "Website development, custom software, cloud and DevOps, AI/ML, cybersecurity, data and BI, UI/UX design and technology consulting from Ansonix IT.",
      },
      { property: "og:title", content: "Services | Ansonix IT" },
      {
        property: "og:description",
        content:
          "Eight engineering practices under one partner: software, web, cloud, DevOps, AI/ML, security, data and design.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a modern technology partner should be able to do."
        body="Ansonix IT is not a single-service shop. Engage one practice or combine several — the delivery culture, communication and engineering standards are shared across all of them."
      >
        <CtaButton to="/contact">Talk to a Technology Expert</CtaButton>
        <CtaButton to="/solutions" variant="ghost">
          How we engage
        </CtaButton>
      </PageHero>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50}>
              <Link to="/services/$slug" params={{ slug: s.slug }} className="block h-full">
                <Panel className="group h-full p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-display text-2xl font-bold">{s.title}</h2>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.intro}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.capabilities.slice(0, 4).map((c) => (
                      <li
                        key={c}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </Panel>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="Process"
          title="Understand → Strategize → Design → Build → Test → Deploy → Scale."
          body="Every service follows the same seven-stage delivery process, scaled to the size of the engagement."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 50}>
              <div className="h-full rounded-2xl border border-border p-6">
                <span className="font-display text-sm font-extrabold text-copper">{p.step}</span>
                <h3 className="mt-3 font-display text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
