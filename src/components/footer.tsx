import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { appPages, products } from "@/data/portfolio";

export function Footer({ home = true }: { home?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <Link href="/" className="footer-brand">GODZ-i</Link>
        <nav aria-label="Footer" className="footer-links">
          {appPages.map((page) => <Link key={page.slug} href={`/apps/${page.slug}`}>{products.find((product) => product.id === page.productId)?.name}</Link>)}
          <Link href="/build">Build Your App</Link>
        </nav>
        <p>© GODZ-i 2026 · Austin, Texas</p>
        <a href={home ? "#hero" : "#main-content"} className="back-to-top">Back to top <ArrowUp size={15} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
