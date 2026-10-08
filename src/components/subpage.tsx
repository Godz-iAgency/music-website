import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { jsonLd } from "@/lib/site";

// Shared frame for pages outside the homepage, with breadcrumbs and structured data.
export function Subpage({ crumbs, data, children }: { crumbs: { name: string; href: string }[]; data: object; children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation home={false} />
      <main id="main-content" tabIndex={-1}>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(data)} />
        <nav aria-label="Breadcrumb" className="container breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            {crumbs.map((crumb, index) => (
              <li key={crumb.href}>{index === crumbs.length - 1 ? <span aria-current="page">{crumb.name}</span> : <Link href={crumb.href}>{crumb.name}</Link>}</li>
            ))}
          </ol>
        </nav>
        {children}
      </main>
      <Footer home={false} />
    </>
  );
}
