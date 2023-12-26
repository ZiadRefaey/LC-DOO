import { useState } from "react";
import Tab from "../../ui/Tab";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";

export default function ProductsReviewsAndDescription() {
  const [activeTab, setActiveTab] = useState("Description");
  return (
    <>
      <div className={"w-full flex items-start gap-5 mb-10"}>
        <Tab
          activeTab={activeTab}
          onClick={() => setActiveTab("Description")}
          title={"Description"}
        />
        <Tab
          activeTab={activeTab}
          onClick={() => setActiveTab("Reviews")}
          title={"Reviews"}
        />
      </div>
      {activeTab === "Description" && <ProductDescription />}
      {activeTab === "Reviews" && <ProductReviews />}
    </>
  );
}
