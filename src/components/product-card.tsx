import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/portfolio";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const nameLogo = product.nameLogo ?? product.logo;
  const content = (
    <>
      <div className={`product-visual product-visual-${product.theme}`}>
        {product.background && <Image src={product.background} alt="" fill sizes="(max-width: 640px) 90vw, (max-width: 1100px) 45vw, 580px" className="product-background" />}
        <div className="product-caption"><span>{product.category}</span><span aria-hidden="true">0{index + 1}</span></div>
        <div className="product-brand">
          {product.artwork ? (
            <Image src={product.artwork.src} alt={product.artwork.alt} width={product.artwork.width} height={product.artwork.height}
              sizes="(max-width: 640px) 85vw, (max-width: 1100px) 40vw, 540px" className="product-artwork" />
          ) : product.logo ? (
            <Image src={product.logo.src} alt={`${product.name} logo`} width={product.logo.width} height={product.logo.height}
              sizes="(max-width: 640px) 80vw, 430px" className="product-logo" />
          ) : (
            // Plain text until the exact product logo is supplied; no substitute branding.
            <p className="product-name-display">{product.name}</p>
          )}
        </div>
      </div>
      <div className="product-copy">
        <p className="product-name">
          {nameLogo && <Image src={nameLogo.src} alt="" width={nameLogo.width} height={nameLogo.height} sizes="32px" className="product-small-logo" />}
          {product.name}
        </p>
        <h3>{product.headline}</h3>
        <p className="product-description">{product.description}</p>
        {product.url ? (
          <span className="product-link">View Live App <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></span>
        ) : (
          <div className="product-unavailable">
            <button className="product-link" type="button" disabled aria-describedby={`${product.id}-status`}>View Live App <ArrowUpRight size={17} aria-hidden="true" /></button>
            <span id={`${product.id}-status`} className="product-status">Live link coming soon.</span>
          </div>
        )}
      </div>
    </>
  );
  return (
    <article className={`product-card${product.url ? " product-card-linked" : ""}`} aria-label={product.name}>
      {product.url ? <a className="product-card-link" href={product.url} target="_blank" rel="noopener noreferrer">{content}</a> : content}
    </article>
  );
}
