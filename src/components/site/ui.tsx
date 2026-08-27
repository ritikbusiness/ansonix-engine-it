import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";
import { SITE } from "@/lib/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-copper">
      <span className="h-px w-6 bg-copper/60" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag className="mt-5 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.9rem]">{title}</Tag>
      {body ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">{body}</p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function CtaButton({
  to,
  children,
  variant = "primary",
  className = "",
  href,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-copper text-primary-foreground shadow-[0_10px_30px_-12px_var(--copper)] hover:brightness-110 hover:shadow-[0_16px_40px_-14px_var(--copper)]"
      : "border border-border text-foreground hover:border-copper/60 hover:text-copper";
  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );
  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {content}
      </a>
    );
  }
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link to={to as any} className={`${base} ${styles} ${className}`}>
      {content}
    </Link>
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`panel relative overflow-hidden rounded-2xl transition-all duration-500 hover:border-copper/40 ${className}`}
    >
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  body: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grain-grid opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-copper/20 blur-[130px] drift"
        aria-hidden="true"
      />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <Reveal className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{body}</p>
          {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
        </Reveal>
      </Container>
    </header>
  );
}

export function ClosingCta({
  title = "Let's Build Something Great.",
  body = "Tell us where you are today — a website, a product, a platform, or a team you need to extend. We will tell you honestly how we can help.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-border">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--copper)_18%,transparent),transparent_65%)]"
        aria-hidden="true"
      />
      <Container className="relative py-20 text-center sm:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">{body}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CtaButton to="/contact">Start a Conversation</CtaButton>
            <CtaButton to="/services" variant="ghost">
              Explore Our Capabilities
            </CtaButton>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.28em] text-muted-foreground">{SITE.slogan}</p>
        </Reveal>
      </Container>
    </section>
  );
}
