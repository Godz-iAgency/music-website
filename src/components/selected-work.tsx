import { products } from "@/data/portfolio";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";

export function SelectedWork() {
  return (
    <section id="work" className="section selected-work" aria-labelledby="work-heading">
      <div className="container">
        <SectionHeading label="Apps" title="Judge us by what we ship." description="Every app is live. Open one and see for yourself." id="work-heading" />
        <div className="product-grid">{products.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div>
      </div>
    </section>
  );
}
