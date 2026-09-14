import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "./logo";
import { Container } from "./ui";
import { REGIONS, SERVICES, SITE } from "@/lib/site";

const company = [
  { label: "About", to: "/about" },
  { label: "Leadership", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const solutions = [
  { label: "Dedicated Engineers", to: "/engineering-teams" },
  { label: "Development Teams", to: "/engineering-teams" },
  { label: "Project Development", to: "/solutions" },
  { label: "Managed IT", to: "/solutions" },
  { label: "Technology Consulting", to: "/services/it-consulting" },
];

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-copper">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr]">
          <div className="max-w-sm">
            <Logo size={44} />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              A global technology partner, built in India. Software, cloud, AI, data, security, design and
              engineering teams for businesses worldwide.
            </p>
            <p className="mt-6 font-display text-sm font-semibold italic text-foreground">{SITE.slogan}</p>
          </div>

          <Column title="Company">
            {company.map((l) => (
              <li key={l.label}>
                <Link
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  to={l.to as any}
                  className="text-muted-foreground transition-colors hover:text-copper"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </Column>

          <Column title="Services">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-muted-foreground transition-colors hover:text-copper"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </Column>

          <Column title="Solutions">
            {solutions.map((l) => (
              <li key={l.label}>
                <Link
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  to={l.to as any}
                  className="text-muted-foreground transition-colors hover:text-copper"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </Column>

          <Column title="Contact">
            <li>
              <a
                href={`mailto:${SITE.emails.hello}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-copper"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {SITE.emails.hello}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.emails.business}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-copper"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {SITE.emails.business}
              </a>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {SITE.location}
            </li>
          </Column>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-copper">
            Global markets
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {REGIONS.map((r) => (
              <li key={r.slug}>
                <Link
                  to="/it-services/$region"
                  params={{ region: r.slug }}
                  className="text-muted-foreground transition-colors hover:text-copper"
                >
                  IT Services for {r.market}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ansonix IT. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-copper">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="transition-colors hover:text-copper">
              Terms of Service
            </Link>
            <Link to="/industries" className="transition-colors hover:text-copper">
              Industries
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
