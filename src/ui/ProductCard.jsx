import { Link } from "react-router-dom";
import bag from "/1x/Beige.png";
import { IoHeartCircle } from "react-icons/io5";
import StarRatingDisplay from "./StarRatingDisplay";

export default function ProductCard() {
  return (
    <Link
      to={"/products/1"}
      className="p-2 flex flex-col gap-1 cursor-pointer group  shadow-sm hover:shadow-lg transition-all duration-200"
    >
      <div className="w-[250px] h-[210px] bg-contain m-auto mb-4 border-[1px] rounded-lg p-10 relative">
        <IoHeartCircle className=" absolute top-2 right-2 w-8 h-8 text-white bg-lightGray rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200" />

        <img src={bag} alt={`%title% image`} className="h-full w-full" />
      </div>
      <div>
        <p className="text-body-sm  font-semibold group-hover:text-blue-500 group-hover:underline text-start">
          TITLE PRODUCT
        </p>
        <p className="text-body-md ">
          250 <span className="text-price">L.E</span>
        </p>
        <p className="text-price line-through text-lightGray">300 L.E</p>
        <div className="flex items-center justify-start gap-3">
          <StarRatingDisplay rating={3.3} />
          <p className="text-lightGray text-sm ">(12 people rated)</p>
        </div>
      </div>
    </Link>
  );
}
