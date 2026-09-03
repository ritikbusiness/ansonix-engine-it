import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { ClosingCta, CtaButton, Panel, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { SERVICES, SERVICE_MAP } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICE_MAP[params.slug];
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const service = loaderData?.service;
    if (!service) {
      return {
        meta: [{ title: "Service not found | Ansonix IT" }, { name: "robots", content: "noindex" }],
      };
    }
    return {
      meta: [
        { title: service.metaTitle },
        { name: "description", content: service.metaDescription },
        { property: "og:title", content: service.metaTitle },
        { property: "og:description", content: service.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metaDescription,
            serviceType: service.title,
            provider: { "@type": "Organization", name: "Ansonix IT" },
            areaServed: ["US", "GB", "EU", "CA", "AU", "IN"],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
              { "@type": "ListItem", position: 3, name: service.title, item: `/services/${params.slug}` },
            ],
          }),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={service.title} title={service.headline} body={service.intro}>
        <CtaButton to="/contact">Start a Conversation</CtaButton>
        <CtaButton to="/services" variant="ghost">
          All services
        </CtaButton>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="What we do" title="Capabilities in this practice" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.capabilities.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 35}>
                <div className="flex items-start gap-3 rounded-xl border border-border p-4 transition-colors hover:border-copper/40">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
                  <span className="min-w-0 text-sm text-foreground">{c}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading eyebrow="How the work runs" title="What an engagement looks like" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.outcomes.map((o, i) => (
            <Reveal key={o.title} delay={i * 60}>
              <Panel className="h-full p-6">
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-copper">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Technology ecosystem"
          title="Multiple stacks, chosen for the problem."
          body="Representative technologies for this practice. We are not tied to a single framework or vendor — the stack follows the requirement, the team and the roadmap."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {service.stack.map((t, i) => (
            <Reveal key={t} delay={i * 30}>
              <span className="inline-flex rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-copper/50 hover:text-copper">
                {t}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading eyebrow="Related" title="Often combined with" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {related.map((r, i) => (
            <Reveal key={r.slug} delay={i * 60}>
              <Link to="/services/$slug" params={{ slug: r.slug }} className="block h-full">
                <Panel className="h-full p-6">
                  <h3 className="font-display text-lg font-bold">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.short}</p>
                </Panel>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
