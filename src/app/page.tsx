import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Capabilities } from "@/components/capabilities";
import { Technology } from "@/components/technology";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { appPages, products, team } from "@/data/portfolio";
import { jsonLd, siteUrl } from "@/lib/site";

const structuredData = {
  "@graph": [
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "GODZ-i", publisher: { "@id": `${siteUrl}/#organization` } },
    {
      "@type": "ItemList", name: "Apps built by GODZ-i",
      itemListElement: appPages.map((page, index) => ({
        "@type": "ListItem", position: index + 1, url: `${siteUrl}/apps/${page.slug}`,
        name: products.find((product) => product.id === page.productId)?.name,
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation showTeam={team.length > 0} />
      <main id="main-content" tabIndex={-1}>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
        <Hero />
        <SelectedWork />
        <Capabilities />
        <Technology />
        <Team members={team} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
