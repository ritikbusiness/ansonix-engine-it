import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHero } from "@/components/site/ui";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Ansonix IT" },
      {
        name: "description",
        content:
          "How Ansonix IT collects, uses, stores and protects personal information submitted through this website and during client engagements.",
      },
      { property: "og:title", content: "Privacy Policy | Ansonix IT" },
      { property: "og:description", content: "Our approach to personal data and privacy." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "Information we collect",
    p: "We collect the information you choose to send us: your name, company, business email, phone number, country, the service and engagement type you are interested in, an indicative budget range and your project description. We also collect standard technical information such as browser type and pages visited.",
  },
  {
    h: "How we use it",
    p: "Your information is used to respond to your enquiry, prepare proposals, deliver agreed services and maintain our business relationship. We do not sell personal information, and we do not share it with third parties for their own marketing.",
  },
  {
    h: "Legal basis",
    p: "Where the GDPR or comparable legislation applies, we process enquiry data on the basis of taking steps at your request prior to entering a contract, and on our legitimate interest in responding to business enquiries.",
  },
  {
    h: "Retention",
    p: "Enquiry records are kept for as long as needed to evaluate and pursue the opportunity, and thereafter for the period required by our legal and accounting obligations.",
  },
  {
    h: "Your rights",
    p: "You may request access to, correction of, or deletion of the personal information we hold about you, and you may object to or restrict certain processing. Email us and we will respond within the timeframe required by applicable law.",
  },
  {
    h: "Security",
    p: "We apply access control, encryption in transit and secure development practices to the systems that hold enquiry and client information.",
  },
  {
    h: "Cookies",
    p: "This website uses only the storage necessary to remember your light or dark theme preference. It does not set advertising cookies.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        body="This policy explains how Ansonix IT handles personal information collected through this website and during client engagements."
      />
      <Container className="prose-none py-16 sm:py-20">
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
              Privacy questions can be sent to{" "}
              <a href={`mailto:${SITE.emails.hello}`} className="text-copper hover:underline">
                {SITE.emails.hello}
              </a>
              . Ansonix IT, {SITE.location}.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
