import Bag from "../../assets/Beige.png";
import StarRatingDisplay from "../../ui/StarRatingDisplay";
export default function ProductsTableProduct({ children }) {
  return (
    <div className="flex items-center justify-start gap-6 w-full ">
      <div className="object-contain w-[50px]">
        <img src={Bag} alt="product image" className="w-full h-full" />
      </div>
      <div className="flex flex-col items-start justify-center w-full">
        <p>{children}</p>
        <StarRatingDisplay rating={5} size={18} />
      </div>
    </div>
  );
}
