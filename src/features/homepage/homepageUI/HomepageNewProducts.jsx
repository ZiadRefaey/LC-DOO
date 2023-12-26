import Section from "../../../ui/Section";
import SectionTitle from "../../../ui/SectionTitle";
import ProductCard from "../../../ui/ProductCard";
import ProductsWrapper from "../../../ui/ProductsWrapper";

export default function HomepageNewProducts() {
  return (
    <Section>
      <SectionTitle>New Products</SectionTitle>
      <ProductsWrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsWrapper>
    </Section>
  );
}
