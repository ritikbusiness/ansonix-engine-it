import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { ClosingCta, CtaButton, Panel, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { ENGAGEMENTS, REGION_MAP, REGIONS, SERVICES, TRUST_PILLARS } from "@/lib/site";

export const Route = createFileRoute("/it-services/$region")({
  loader: ({ params }) => {
    const region = REGION_MAP[params.region];
    if (!region) throw notFound();
    return { region };
  },
  head: ({ params, loaderData }) => {
    const region = loaderData?.region;
    if (!region) {
      return {
        meta: [{ title: "Unavailable | Ansonix IT" }, { name: "robots", content: "noindex" }],
      };
    }
    return {
      meta: [
        { title: region.metaTitle },
        { name: "description", content: region.metaDescription },
        { property: "og:title", content: region.metaTitle },
        { property: "og:description", content: region.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/it-services/${params.region}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/it-services/${params.region}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `IT Services for ${region.market}`,
            description: region.metaDescription,
            provider: { "@type": "Organization", name: "Ansonix IT" },
            areaServed: region.areaServed,
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
              {
                "@type": "ListItem",
                position: 3,
                name: `IT Services for ${region.market}`,
                item: `/it-services/${params.region}`,
              },
            ],
          }),
        },
      ],
    };
  },
  component: RegionPage,
});

function RegionPage() {
  const { region } = Route.useLoaderData();
  const others = REGIONS.filter((r) => r.slug !== region.slug);

  return (
    <>
      <PageHero eyebrow={`${region.market} clients`} title={region.headline} body={region.intro}>
        <CtaButton to="/contact">Start a Conversation</CtaButton>
        <CtaButton to="/services" variant="ghost">
          Explore Our Capabilities
        </CtaButton>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Capabilities"
            title={`What we deliver for ${region.demonym} businesses`}
            body="One partner across the whole technology stack, from a first website to a long-running engineering team."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 35}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="block h-full">
                  <div className="flex h-full items-start gap-3 rounded-xl border border-border p-4 transition-colors hover:border-copper/40">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
                    <span className="min-w-0 text-sm text-foreground">{s.title}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="Working together"
          title="Engagement models that suit your side of the world."
          body={region.overlap}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ENGAGEMENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 55}>
              <Panel className="h-full p-6">
                <h3 className="font-display text-lg font-bold">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Why Ansonix IT"
          title="A global technology partner. Built in India."
          body="Experienced talent across multiple stacks, flexible engagement, transparent communication and partnerships measured in years."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_PILLARS.slice(0, 4).map((p, i) => (
            <Reveal key={p.title} delay={i * 55}>
              <Panel className="h-full p-6">
                <h3 className="font-display text-base font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading eyebrow="Other markets" title="We also work with" />
        <div className="mt-10 flex flex-wrap gap-3">
          {others.map((r, i) => (
            <Reveal key={r.slug} delay={i * 30}>
              <Link
                to="/it-services/$region"
                params={{ region: r.slug }}
                className="inline-flex rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-copper/50 hover:text-copper"
              >
                {r.market}
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
