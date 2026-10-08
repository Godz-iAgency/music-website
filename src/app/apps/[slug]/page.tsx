import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Subpage } from "@/components/subpage";
import { appPages, products } from "@/data/portfolio";
import { callUrl, pageMetadata, siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return appPages.map((page) => ({ slug: page.slug }));
}

function findApp(slug: string) {
  const page = appPages.find((entry) => entry.slug === slug);
  const product = products.find((entry) => entry.id === page?.productId);
  if (!page || !product) notFound();
  return { page, product };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { page } = findApp((await params).slug);
  return pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: `/apps/${page.slug}` });
}

export default async function AppPage({ params }: { params: Promise<{ slug: string }> }) {
  const { page, product } = findApp((await params).slug);
  const path = `${siteUrl}/apps/${page.slug}`;
  const others = appPages.filter((entry) => entry.slug !== page.slug);
  const mark = product.nameLogo ?? product.logo;
  const data = {
    "@graph": [
      {
        "@type": "SoftwareApplication", name: product.name, url: product.url, description: page.metaDescription,
        applicationCategory: page.schemaCategory, operatingSystem: "Web", mainEntityOfPage: path,
        image: `${siteUrl}${(product.logo ?? product.artwork)?.src}`,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: product.name, item: path },
        ],
      },
    ],
  };

  return (
    <Subpage crumbs={[{ name: product.name, href: `/apps/${page.slug}` }]} data={data}>
      <section id="hero" className="hero page-hero" aria-labelledby="page-heading">
        <div className="container">
          <p className="page-app-name">
            {mark && <Image src={mark.src} alt="" width={mark.width} height={mark.height} sizes="32px" loading="eager" className="product-small-logo" />}
            {product.name}
          </p>
          <p className="eyebrow hero-eyebrow">{page.eyebrow}</p>
          <h1 id="page-heading">{page.title}</h1>
          <p className="hero-description">{page.intro}</p>
          <div className="hero-actions">
            {product.url && <a href={product.url} className="button button-accent" target="_blank" rel="noopener noreferrer">{page.cta} <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> on {product.name} (opens in a new tab)</span></a>}
            {page.note && <span className="page-note">{page.note}</span>}
          </div>
        </div>
      </section>

      <section className="section page-section" aria-labelledby="benefits-heading">
        <div className="container">
          <h2 id="benefits-heading" className="sr-only">What you get with {product.name}</h2>
          <ul className="benefit-grid">
            {page.benefits.map((benefit, index) => (
              <li key={benefit.title} className={`benefit capability-${product.theme}`}>
                <span className="capability-number">0{index + 1}</span>
                <h3>{benefit.title}</h3><p>{benefit.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section page-cta" aria-labelledby="build-heading">
        <div className="container page-cta-layout">
          <div>
            <p className="eyebrow">Built by GODZ-i</p>
            <h2 id="build-heading">Want an app like this?</h2>
            <p className="section-description">We build it, then maintain it for life. Start with a free video call.</p>
          </div>
          <div className="hero-actions">
            <a href={callUrl} className="button button-accent" target="_blank" rel="noopener noreferrer">Book a Free Call <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
            <Link href="/build" className="hero-contact">How We Build <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <nav className="section more-apps" aria-labelledby="more-heading">
        <div className="container">
          <h2 id="more-heading" className="more-apps-heading">More apps we built</h2>
          <ul className="more-apps-list">
            {others.map((entry) => (
              <li key={entry.slug}><Link href={`/apps/${entry.slug}`}>{products.find((item) => item.id === entry.productId)?.name}<ArrowRight size={16} aria-hidden="true" /></Link></li>
            ))}
          </ul>
        </div>
      </nav>
    </Subpage>
  );
}
