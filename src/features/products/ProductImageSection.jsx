import ProductDifferentAngels from "./ProductDifferentAngels";
import ProductOverviewImage from "./ProductOverviewImage";
import PrimaryButton from "../../ui/PrimaryButton";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

export default function ProductImageSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-start justify-start md:flex-row gap-4">
          <ProductDifferentAngels />
          <ProductOverviewImage />
        </div>
        <div className="flex items-center justify-center gap-4 w-full">
          <PrimaryButton size={"small"} className={"w-full"}>
            <FaHeart className="inline mr-3" />
            Add to wish list
          </PrimaryButton>
          <PrimaryButton size={"small"} className={"w-full"}>
            <FaShoppingCart className="inline mr-3" />
            Add to cart
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
