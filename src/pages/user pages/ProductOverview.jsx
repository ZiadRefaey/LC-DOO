import ProductDescriptionSection from "../../features/products/ProductDescriptionSection";
import ProductImageSection from "../../features/products/ProductImageSection";
import ProductsReviewsAndDescription from "../../features/products/ProductsReviewsAndDescription";
import Section from "../../ui/Section";
export default function ProductOverview() {
  return (
    <Section className={"px-5"}>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10">
        <ProductImageSection />
        <ProductDescriptionSection />
      </div>
      <Section>
        <ProductsReviewsAndDescription />
      </Section>
    </Section>
  );
}
