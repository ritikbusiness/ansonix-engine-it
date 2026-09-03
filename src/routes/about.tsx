import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { LOGO_URL } from "@/components/site/logo";
import { ClosingCta, CtaButton, Panel, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { SITE, TRUST_PILLARS } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ansonix IT | India-Based Global Technology Company" },
      {
        name: "description",
        content:
          "Ansonix IT is an India-based technology company in Ahmedabad helping businesses and IT organisations worldwide build, modernise and scale digital solutions.",
      },
      { property: "og:title", content: "About Ansonix IT" },
      {
        property: "og:description",
        content: "Who we are, what we believe, and how we build long-term technology partnerships.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Ansonix IT",
          email: "hello@ansonixit.site",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
          description:
            "IT services and software development company in Ahmedabad, India, serving clients across the US, UK, Europe and beyond.",
        }),
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Honest engineering", b: "We would rather lose a project than promise a timeline or a technology we do not believe in." },
  { t: "Craft over volume", b: "Fewer, better engagements. Reviewed code, documented decisions, tested releases." },
  { t: "Client fluency", b: "Engineers who can explain trade-offs to a founder, a CTO and a finance director." },
  { t: "Ownership", b: "We treat your systems as if we will still be maintaining them in three years — because we might be." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ansonix IT"
        title="A global technology partner. Built in India."
        body="Ansonix IT is an India-based technology company focused on helping businesses and technology organisations build and scale modern digital solutions — from Ahmedabad, for clients across the United States, United Kingdom, Europe and beyond."
      >
        <CtaButton to="/contact">Start a Conversation</CtaButton>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Engineering capability, organised around trust."
              body="Ansonix IT was founded on a simple observation: businesses rarely struggle to find people who can write code. They struggle to find a partner who understands the business behind the code, communicates clearly across time zones, and is still there when the second and third phases arrive."
            />
            <Reveal className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                We work across software engineering, cloud and DevOps, AI/ML, cybersecurity, data and business
                intelligence, product design and technology consulting. That breadth means a client can start with
                a website and grow into a platform without changing partners.
              </p>
              <p>
                Our delivery base is in Ahmedabad, Gujarat. Our clients are international. We are explicit about
                both, because we believe an honest structure is easier to trust than a fictional global footprint.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <Panel className="grid place-items-center p-14">
              <img
                src={LOGO_URL}
                alt="Ansonix IT logo"
                width={220}
                height={220}
                className="h-auto w-[220px] max-w-full object-contain"
              />
              <p className="mt-8 text-center font-display text-sm font-semibold italic text-muted-foreground">
                {SITE.slogan}
              </p>
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <Panel className="h-full p-8">
              <h2 className="font-display text-xl font-bold text-copper">Mission</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To give growing businesses and technology companies access to serious engineering capability —
                delivered transparently, priced fairly, and built to last beyond the first release.
              </p>
            </Panel>
          </Reveal>
          <Reveal delay={80}>
            <Panel className="h-full p-8">
              <h2 className="font-display text-xl font-bold text-copper">Vision</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To be the technology partner international companies name first — not because we are the largest,
                but because we are the one they trust with the work that matters.
              </p>
            </Panel>
          </Reveal>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 55}>
              <div className="h-full rounded-2xl border border-border p-6">
                <h3 className="font-display text-base font-bold">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border" id="leadership">
        <SectionHeading eyebrow="Leadership" title="The people accountable for the work." />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {SITE.leadership.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <Panel className="h-full p-8">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-copper/40 font-display text-lg font-bold text-copper">
                    {p.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-xl font-bold">{p.name}</h3>
                    <p className="text-sm uppercase tracking-[0.18em] text-copper">{p.role}</p>
                  </div>
                </div>
                <p className="mt-6 rounded-xl border border-dashed border-border p-5 text-sm italic leading-relaxed text-muted-foreground">
                  Leadership biography placeholder — this section is reserved for {p.name}&apos;s own words and
                  professional background, to be provided by Ansonix IT.
                </p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          align="center"
          eyebrow="Partnership philosophy"
          title="Money buys code. Trust builds partnerships."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 45}>
              <div className="h-full rounded-2xl border border-border p-6">
                <h3 className="font-display text-base font-bold text-copper">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
