import { MdReviews } from "react-icons/md";
import PrimaryButton from "../../ui/PrimaryButton";
import StarRatingDisplay from "../../ui/StarRatingDisplay";
import Review from "./Review";
import ProductRating from "./ProductRating";
import { useState } from "react";

export default function ProductReviews() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="w-full rounded-xl bg-blue-50 px-6 py-4 border-translucent border">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-4 mb-4">
          <p className="font-medium text-lightGray text-lg">
            <span className="font-bold text-3xl text-black">4.5</span>/5
          </p>
          <StarRatingDisplay rating={4.5} size={32} />
          <p className="text-xl font-thin">
            <span className="font-medium">200 </span>Ratings and
            <span className="font-medium">50</span> reviews
          </p>
        </div>
        <PrimaryButton onCLick={() => setIsCollapsed(false)}>
          <MdReviews className="inline" /> Rate this product
        </PrimaryButton>
      </div>
      <ProductRating
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
      <div className="flex items-start justify-start gap-4 flex-col">
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
}
