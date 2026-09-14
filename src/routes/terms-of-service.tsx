import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHero } from "@/components/site/ui";
import { absoluteUrl, SITE } from "@/lib/site";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Ansonix IT" },
      {
        name: "description",
        content:
          "The terms that govern use of the Ansonix IT website, the information published on it, and enquiries submitted through it.",
      },
      { property: "og:title", content: "Terms of Service | Ansonix IT" },
      { property: "og:description", content: "Terms governing use of the Ansonix IT website." },
      { property: "og:url", content: absoluteUrl("/terms-of-service") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/terms-of-service") }],
  }),
  component: TermsPage,
});

const sections = [
  {
    h: "Use of this website",
    p: "You may browse and use this website for lawful purposes connected with evaluating or engaging Ansonix IT services. You may not attempt to disrupt the site, gain unauthorised access, or extract content for republication without permission.",
  },
  {
    h: "Information on this site",
    p: "Content describing our services, capabilities and process is provided for general information. It does not constitute a binding offer, a professional recommendation for your specific circumstances, or a guarantee of a particular outcome.",
  },
  {
    h: "Enquiries and proposals",
    p: "Submitting the contact form does not create a contract. Any engagement between you and Ansonix IT is governed by a separate written agreement covering scope, pricing, intellectual property, confidentiality and liability.",
  },
  {
    h: "Intellectual property",
    p: "The Ansonix IT name, logo, written content and design of this website are the property of Ansonix IT. Third-party technology names appear only to describe the tools our engineers work with and remain the property of their owners.",
  },
  {
    h: "Third-party links",
    p: "Where this website links to external resources, we are not responsible for their content, availability or privacy practices.",
  },
  {
    h: "Limitation of liability",
    p: "To the fullest extent permitted by law, Ansonix IT is not liable for indirect or consequential loss arising from use of this website or reliance on information published on it.",
  },
  {
    h: "Governing law",
    p: "Use of this website is governed by the laws of India, without prejudice to mandatory consumer protections available to you in your country of residence.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        body="These terms apply to your use of the Ansonix IT website and to enquiries submitted through it."
      />
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl space-y-10">
          <p className="text-sm text-muted-foreground">Last updated: 27 August 2026</p>
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-xl font-bold">{s.h}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.p}</p>
            </section>
          ))}
          <section>
            <h2 className="font-display text-xl font-bold">Contact</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Questions about these terms:{" "}
              <a href={`mailto:${SITE.emails.business}`} className="text-copper hover:underline">
                {SITE.emails.business}
              </a>
              . Ansonix IT, {SITE.location}.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
