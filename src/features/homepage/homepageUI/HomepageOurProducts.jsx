import { useState } from "react";
import Section from "../../../ui/Section";
import SectionTitle from "../../../ui/SectionTitle";
import Tab from "../../../ui/Tab";
import ProductCard from "../../../ui/ProductCard";
import ProductsWrapper from "../../../ui/ProductsWrapper";
const tabs = ["Women Bags", "Belts", "Wallets", "Jackets"];
export default function HomepageOurProducts() {
  const [activeTab, setActiveTab] = useState(null);
  return (
    <Section>
      <SectionTitle>Our Products</SectionTitle>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4 max-w-[800px] m-auto mb-10 ">
        {tabs.map((tab, index) => (
          <Tab
            title={tab}
            key={index}
            activeTab={activeTab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
      <ProductsWrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsWrapper>
    </Section>
  );
}
