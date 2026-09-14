import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote } from "lucide-react";
import { HeroVisual } from "@/components/site/hero-visual";
import { Reveal } from "@/components/site/reveal";
import {
  ClosingCta,
  Container,
  CtaButton,
  Eyebrow,
  Panel,
  Section,
  SectionHeading,
} from "@/components/site/ui";
import {
  absoluteUrl,
  ENGAGEMENTS,
  INDUSTRIES,
  PROCESS,
  SCALE_LADDER,
  SERVICES,
  SITE,
  TRUST_PILLARS,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ansonix IT | Software, Cloud, DevOps & AI Engineering" },
      {
        name: "description",
        content:
          "Ansonix IT delivers software development, cloud, DevOps, AI/ML, cybersecurity, data and design services, plus dedicated engineering teams for global businesses.",
      },
      { property: "og:title", content: "Ansonix IT | Software, Cloud, DevOps & AI Engineering" },
      {
        property: "og:description",
        content:
          "Software development, cloud, DevOps, AI/ML, cybersecurity, data and design services, plus dedicated engineering teams. One trusted technology partner.",
      },
      { property: "og:url", content: absoluteUrl("/") },
      { name: "twitter:title", content: "Ansonix IT | Software, Cloud, DevOps & AI Engineering" },
      {
        name: "twitter:description",
        content:
          "Software development, cloud, DevOps, AI/ML, cybersecurity, data and design services, plus dedicated engineering teams. One trusted technology partner.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <HowWeWork />
      <EngineeringTeam />
      <ScaleSection />
      <TrustSection />
      <ProcessSection />
      <IndustriesStrip />
      <Testimonials />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grain-grid opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-[-15%] top-[-10%] h-[520px] w-[520px] rounded-full bg-copper/15 blur-[140px] drift"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <Reveal>
            <Eyebrow>A global technology partner. Built in India.</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.03] sm:text-6xl lg:text-[4.1rem]">
              Technology Built <span className="copper-text">Around Your Business.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl font-display text-base font-semibold text-foreground/90 sm:text-lg">
              Software. Cloud. AI. DevOps. Design. Engineering Teams. One trusted technology partner.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Ansonix IT helps businesses and technology companies build, modernise, automate and scale with
              experienced engineering talent across software development, cloud, DevOps, AI/ML, cybersecurity,
              data, design and more.
            </p>
          </Reveal>
          <Reveal delay={330}>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaButton to="/contact">Start a Conversation</CtaButton>
              <CtaButton to="/services" variant="ghost">
                Explore Our Capabilities
              </CtaButton>
            </div>
          </Reveal>
          <Reveal delay={420}>
            <p className="mt-12 border-l-2 border-copper/60 pl-4 text-xs uppercase tracking-[0.26em] text-muted-foreground">
              {SITE.slogan}
            </p>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <HeroVisual />
        </Reveal>
      </Container>
    </section>
  );
}

function Capabilities() {
  return (
    <Section className="border-t border-border">
      <SectionHeading
        eyebrow="Capabilities"
        title={
          <>
            One technology partner.
            <br />
            <span className="text-muted-foreground">An entire engineering ecosystem.</span>
          </>
        }
        body="Eight practices, one delivery culture. Engage a single specialism or the whole ecosystem — the standards, communication and accountability stay the same."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={i * 60}>
            <Link to="/services/$slug" params={{ slug: s.slug }} className="block h-full">
              <Panel className="group h-full p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold leading-snug">{s.title}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              </Panel>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function HowWeWork() {
  return (
    <Section id="how-we-work" className="border-t border-border bg-surface/30">
      <SectionHeading
        eyebrow="How we work"
        title="Engagement models that fit how your business actually operates."
        body="Whether you need a finished product, a few specialists inside your team, or an entire delivery unit, the commercial model adapts to you."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ENGAGEMENTS.map((e, i) => (
          <Reveal key={e.id} delay={i * 60}>
            <Panel className="h-full p-7">
              <span className="font-display text-3xl font-extrabold text-copper/30">{e.id}</span>
              <h3 className="mt-4 font-display text-xl font-bold">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            </Panel>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <CtaButton to="/solutions" variant="ghost">
          Compare engagement models
        </CtaButton>
      </Reveal>
    </Section>
  );
}

function EngineeringTeam() {
  return (
    <Section className="border-t border-border">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Engineering capacity"
            title="Extend your engineering capacity without building a technical team from scratch."
            body="Technology companies and IT firms use Ansonix as an engineering extension — adding developers, DevOps, cloud, QA, AI, data and security specialists to teams that already have more work than capacity."
          />
          <Reveal className="mt-8">
            <CtaButton to="/engineering-teams">Build Your Engineering Team</CtaButton>
          </Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { t: "Software Engineering", b: "Full-stack, frontend, backend, mobile, SaaS, enterprise, APIs and microservices across React, Next.js, Node.js, Java, Python, .NET, PHP and TypeScript." },
            { t: "Cloud & DevOps", b: "AWS architecture, migration, CI/CD, Kubernetes, Docker, Infrastructure as Code, monitoring, observability and reliability engineering." },
            { t: "AI, Data & BI", b: "Generative AI and LLM integration, machine learning, MLOps, data engineering, pipelines, analytics and business intelligence dashboards." },
            { t: "Security & Design", b: "Application, cloud and infrastructure security, IAM and secure development alongside UI/UX, product design and design systems." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <Panel className="h-full p-6">
                <h3 className="font-display text-base font-bold">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ScaleSection() {
  return (
    <Section className="border-t border-border bg-surface/30">
      <SectionHeading
        eyebrow="Project scale"
        title="From small business websites to large technology projects."
        body="The same engineering discipline applies whether the brief is a five-page site or a multi-region platform. Only the shape of the team changes."
      />
      <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SCALE_LADDER.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 60}>
            <Panel className="h-full p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-copper/40 text-xs font-bold text-copper">
                  {i + 1}
                </span>
                <h3 className="min-w-0 font-display text-base font-bold">{s.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </Panel>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

function TrustSection() {
  return (
    <Section className="relative overflow-hidden border-t border-border">
      <div
        className="pointer-events-none absolute right-[-10%] top-1/4 h-[380px] w-[380px] rounded-full bg-copper/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative">
        <SectionHeading
          align="center"
          eyebrow="Partnership"
          title={<span className="copper-text">Money buys code. Trust builds partnerships.</span>}
          body="We are not looking for one-time transactions. We want to become the technology partner you keep calling — which means earning it on every engagement."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 50}>
              <div className="h-full rounded-2xl border border-border p-6 transition-colors hover:border-copper/40">
                <h3 className="font-display text-base font-bold text-copper">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProcessSection() {
  return (
    <Section className="border-t border-border bg-surface/30">
      <SectionHeading
        eyebrow="Process"
        title="A delivery process you can follow from the outside."
        body="Seven stages, each with visible outputs. You always know what has been done, what is next and what is blocked."
      />
      <div className="mt-14 space-y-3">
        {PROCESS.map((p, i) => (
          <Reveal key={p.step} delay={i * 60}>
            <div className="group grid grid-cols-[auto_1fr] items-start gap-5 rounded-2xl border border-border p-6 transition-colors hover:border-copper/40 sm:grid-cols-[80px_220px_1fr] sm:items-center">
              <span className="font-display text-2xl font-extrabold text-copper/40 transition-colors group-hover:text-copper">
                {p.step}
              </span>
              <h3 className="min-w-0 font-display text-lg font-bold">{p.title}</h3>
              <p className="col-span-2 text-sm leading-relaxed text-muted-foreground sm:col-span-1">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function IndustriesStrip() {
  return (
    <Section className="border-t border-border">
      <SectionHeading
        eyebrow="Industries"
        title="Sector context, not generic delivery."
        body="We work across technology, ecommerce, healthcare, finance, education, professional services, SaaS and growing IT companies."
      />
      <div className="mt-12 flex flex-wrap gap-3">
        {INDUSTRIES.map((ind, i) => (
          <Reveal key={ind.title} delay={i * 35}>
            <span className="inline-flex rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-copper/50 hover:text-copper">
              {ind.title}
            </span>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <CtaButton to="/industries" variant="ghost">
          See how we help each sector
        </CtaButton>
      </Reveal>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section className="border-t border-border bg-surface/30">
      <SectionHeading
        align="center"
        eyebrow="Client voices"
        title="Client testimonials will be added here."
        body="We do not publish testimonials we have not earned. As partnerships mature and clients agree to be named, their words will appear in this space."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <Reveal key={i} delay={i * 70}>
            <div className="h-full rounded-2xl border border-dashed border-border p-7">
              <Quote className="h-6 w-6 text-copper/50" aria-hidden="true" />
              <p className="mt-5 text-sm italic leading-relaxed text-muted-foreground">
                Client testimonial placeholder — reserved for a verified client statement.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">Name · Company</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
