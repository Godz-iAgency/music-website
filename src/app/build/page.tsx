import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Subpage } from "@/components/subpage";
import { appPages, products } from "@/data/portfolio";
import { callUrl, pageMetadata, siteUrl } from "@/lib/site";

const title = "Custom App Development in Austin, Texas | GODZ-i";
const description = "We build custom apps for your company and maintain them for life. Not satisfied? 30 more days free. Book a free 30 minute video call.";

export const metadata = pageMetadata({ title, description, path: "/build" });

const pains = [
  "The developer launched it and stopped answering.",
  "Every fix means a new quote and a long wait.",
  "Your team works around the app instead of with it.",
];

const method = [
  { title: "Build", text: "We scope it with you, then build it." },
  { title: "Launch", text: "We put it live and make sure it runs." },
  { title: "Maintain", text: "We fix what breaks, for life." },
];

const data = {
  "@graph": [
    {
      "@type": "Service", name: "Custom app development", serviceType: "Custom app development",
      description, url: `${siteUrl}/build`, provider: { "@id": `${siteUrl}/#organization` },
      areaServed: [{ "@type": "City", name: "Austin, Texas" }, { "@type": "Country", name: "United States" }],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Build Your App", item: `${siteUrl}/build` },
      ],
    },
  ],
};

function CallButton() {
  return <a href={callUrl} className="button button-accent" target="_blank" rel="noopener noreferrer">Book a Free Call <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>;
}

export default function BuildPage() {
  return (
    <Subpage crumbs={[{ name: "Build Your App", href: "/build" }]} data={data}>
      <section id="hero" className="hero page-hero" aria-labelledby="page-heading">
        <div className="container">
          <p className="eyebrow hero-eyebrow">For companies that need an app built</p>
          <h1 id="page-heading">Your app, built <span>and maintained for life.</span></h1>
          <p className="hero-description">Most developers hand over the code and disappear. We stay.</p>
          <div className="hero-actions">
            <CallButton />
            <a href="#method" className="hero-contact">See How <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="section page-section" aria-labelledby="pain-heading">
        <div className="container">
          <h2 id="pain-heading" className="page-heading">Sound familiar?</h2>
          <ul className="pain-list">{pains.map((pain) => <li key={pain}>{pain}</li>)}</ul>
        </div>
      </section>

      <section id="method" className="section page-section" aria-labelledby="method-heading">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Our method</p>
            <h2 id="method-heading">Built for Life.</h2>
            <p className="section-description">One team builds it, launches it and keeps it running.</p>
          </div>
          <ol className="benefit-grid">
            {method.map((step, index) => (
              <li key={step.title} className="benefit capability-splitmic">
                <span className="capability-number">0{index + 1}</span>
                <h3>{step.title}</h3><p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section page-section" aria-labelledby="proof-heading">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Proof</p>
            <h2 id="proof-heading">We run our own apps this way.</h2>
            <p className="section-description">Open them and judge for yourself.</p>
          </div>
          <ul className="more-apps-list">
            {appPages.map((entry) => (
              <li key={entry.slug}><Link href={`/apps/${entry.slug}`}>{products.find((item) => item.id === entry.productId)?.name}<ArrowRight size={16} aria-hidden="true" /></Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section page-cta" aria-labelledby="offer-heading">
        <div className="container page-cta-layout">
          <div>
            <p className="eyebrow">Our guarantee</p>
            <h2 id="offer-heading">If it breaks, we fix it. For life.</h2>
            <p className="section-description">Not satisfied after launch? We work 30 more days free until we hit the result we agreed on.</p>
          </div>
          <div>
            <p className="contact-offer">Start with a free 30 minute video call. You leave with a plan, hire us or not.</p>
            <ol className="contact-steps"><li>Pick a time</li><li>Share your idea</li><li>Get your plan</li></ol>
            <div className="hero-actions"><CallButton /></div>
            <p className="page-ps"><strong>P.S.</strong> The call is free. Waiting costs another month of doing it by hand.</p>
          </div>
        </div>
      </section>
    </Subpage>
  );
}
