import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Clock } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/site/reveal";
import { Container, CtaButton, Eyebrow, Panel, Section, SectionHeading } from "@/components/site/ui";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ansonix IT | Start a Technology Conversation" },
      {
        name: "description",
        content:
          "Talk to Ansonix IT about software development, cloud, DevOps, AI/ML, cybersecurity, data, design or dedicated engineering teams. Based in Ahmedabad, serving clients worldwide.",
      },
      { property: "og:title", content: "Contact Ansonix IT" },
      {
        property: "og:description",
        content: "Let's build something great. Tell us about your project or the engineering capacity you need.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid business email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  service: z.string().max(80).optional().or(z.literal("")),
  engagement_type: z.string().max(80).optional().or(z.literal("")),
  budget_range: z.string().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(20, "Please give us at least a couple of sentences").max(5000),
  preferred_contact: z.string().max(40).optional().or(z.literal("")),
});

const services = [
  "Website",
  "Software Development",
  "Dedicated Engineers",
  "Cloud / DevOps",
  "AI / ML",
  "Cybersecurity",
  "Data / BI",
  "UI/UX",
  "Consulting",
  "Other",
];

const engagements = [
  "Build Your Product",
  "Dedicated Engineers",
  "Dedicated Development Team",
  "Project-Based Development",
  "Managed IT & Cloud",
  "Technology Consulting",
  "Not sure yet",
];

const budgets = [
  "Under $5,000",
  "$5,000 – $25,000",
  "$25,000 – $75,000",
  "$75,000 – $250,000",
  "$250,000+",
  "Monthly retainer",
  "To be discussed",
];

const contactMethods = ["Email", "Phone", "Video call", "Messaging app"];

const fieldClass =
  "mt-2 w-full rounded-xl border border-input bg-surface/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-copper";

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError(null);
    const form = new FormData(event.currentTarget);
    const raw = Object.fromEntries(form.entries()) as Record<string, string>;
    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      const first = document.getElementById(String(parsed.error.issues[0]?.path[0]));
      first?.focus();
      return;
    }

    setErrors({});
    setStatus("sending");
    const { error } = await supabase.from("contact_enquiries").insert({
      name: parsed.data.name,
      company: parsed.data.company || null,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      country: parsed.data.country || null,
      service: parsed.data.service || null,
      engagement_type: parsed.data.engagement_type || null,
      budget_range: parsed.data.budget_range || null,
      message: parsed.data.message,
      preferred_contact: parsed.data.preferred_contact || null,
    });

    if (error) {
      setStatus("idle");
      setServerError(
        `We couldn't send that just now. Please email us directly at ${SITE.emails.business} and we'll pick it up.`,
      );
      return;
    }
    setStatus("sent");
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 grain-grid opacity-40" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-32 right-[-8%] h-[420px] w-[420px] rounded-full bg-copper/20 blur-[130px] drift"
          aria-hidden="true"
        />
        <Container className="relative grid gap-14 py-20 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
          <div>
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl">
                Let&apos;s Build <span className="copper-text">Something Great.</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Tell us where you are today — a website, a product, a platform, or a team you need to extend. We
                reply to every serious enquiry, usually within one business day.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-10 space-y-5 text-sm">
              <a
                href={`mailto:${SITE.emails.hello}`}
                className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-copper"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                    General
                  </span>
                  {SITE.emails.hello}
                </span>
              </a>
              <a
                href={`mailto:${SITE.emails.business}`}
                className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-copper"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                    New business
                  </span>
                  {SITE.emails.business}
                </span>
              </a>
              <p className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                    Engineering base
                  </span>
                  {SITE.location}
                </span>
              </p>
              <p className="flex items-start gap-3 text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                    Collaboration hours
                  </span>
                  Overlapping working hours with US, UK and European teams
                </span>
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <Panel className="p-6 sm:p-9">
              {status === "sent" ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-copper" aria-hidden="true" />
                  <h2 className="mt-6 font-display text-2xl font-bold">Thank you — your enquiry is with us.</h2>
                  <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    A member of the Ansonix IT team will review the detail you sent and reply from{" "}
                    {SITE.emails.business}, usually within one business day. If it is urgent, email us directly.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <CtaButton to="/services" variant="ghost">
                      Explore our capabilities
                    </CtaButton>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="Name" required error={errors.name}>
                      <input id="name" name="name" className={fieldClass} placeholder="Your full name" />
                    </Field>
                    <Field id="company" label="Company" error={errors.company}>
                      <input id="company" name="company" className={fieldClass} placeholder="Company name" />
                    </Field>
                    <Field id="email" label="Business email" required error={errors.email}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={fieldClass}
                        placeholder="you@company.com"
                      />
                    </Field>
                    <Field id="phone" label="Phone" error={errors.phone}>
                      <input id="phone" name="phone" className={fieldClass} placeholder="+1 555 000 0000" />
                    </Field>
                    <Field id="country" label="Country" error={errors.country}>
                      <input id="country" name="country" className={fieldClass} placeholder="United States" />
                    </Field>
                    <Field id="service" label="Service">
                      <select id="service" name="service" className={fieldClass} defaultValue="">
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field id="engagement_type" label="Engagement type">
                      <select id="engagement_type" name="engagement_type" className={fieldClass} defaultValue="">
                        <option value="">Select an engagement</option>
                        {engagements.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field id="budget_range" label="Budget range">
                      <select id="budget_range" name="budget_range" className={fieldClass} defaultValue="">
                        <option value="">Select a range</option>
                        {budgets.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field id="message" label="Project description" required error={errors.message}>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={fieldClass}
                      placeholder="What are you trying to build, fix or scale? Timelines and constraints help too."
                    />
                  </Field>

                  <Field id="preferred_contact" label="Preferred contact method">
                    <select id="preferred_contact" name="preferred_contact" className={fieldClass} defaultValue="">
                      <option value="">No preference</option>
                      {contactMethods.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>

                  {serverError ? (
                    <p role="alert" className="rounded-xl border border-destructive/40 p-4 text-sm text-destructive">
                      {serverError}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-copper px-6 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Send enquiry"}
                  </button>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    We use your details only to respond to this enquiry. See our privacy policy for more.
                  </p>
                </form>
              )}
            </Panel>
          </Reveal>
        </Container>
      </section>

      <Section className="bg-surface/30">
        <SectionHeading
          align="center"
          eyebrow="What happens next"
          title="Three steps, no sales theatre."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { t: "We read it properly", b: "Your enquiry goes to a technical person, not a queue." },
            { t: "A short discovery call", b: "30 minutes to understand the goal, constraints and timeline." },
            { t: "An honest proposal", b: "Scope, approach, team shape and cost — or a referral if we are not the right fit." },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border p-6">
                <span className="font-display text-sm font-extrabold text-copper">0{i + 1}</span>
                <h3 className="mt-3 font-display text-base font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
        {required ? <span className="text-copper"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
