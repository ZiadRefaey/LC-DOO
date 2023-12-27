import { useState } from "react";
import StarRatingDisplay from "../../ui/StarRatingDisplay";
import ProductDifferentColorDisplay from "./ProductDifferentColorDisplay";
import { FaShareAlt } from "react-icons/fa";
import IncrementDecrementControl from "../../ui/IncrementDecrementControl";

export default function ProductDescriptionSection() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="w-full flex flex-col justify-between h-full ">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-start gap-2 mb-2">
          <StarRatingDisplay rating={5} className={"inline"} />
          <p className="text-center">
            (<span className="font-bold">59</span> People have rated this)
          </p>
        </div>
        <h1 className="text-lg md:text-xl font-semibold ">
          Chic Elegance Collection - Designer Tote with Glamorous Embellishments
          - Luxe Edition - Rose Gold Accents
        </h1>
        <p className="text-3xl font-bold inline mr-3">249.99 L.E</p>
        <p className="inline text-xl font-semibold text-lightGray line-through">
          299.99 L.E
        </p>
        <p className=" text-red-600 font-medium">
          Special offer expires in 24:00:00 hours
        </p>
        <p className="text-lg font-medium">Color : Beige</p>
        <div className="flex gap-1">
          <ProductDifferentColorDisplay />
          <ProductDifferentColorDisplay />
          <ProductDifferentColorDisplay />
        </div>
      </div>
      <div className="flex gap-10">
        <div>
          <p className="text-xl mb-2">Size :</p>
          <select className=" border rounded-sm px-3 py-[6px] cursor-pointer  hover:border-black transition-all duration-200">
            <option className="cursor-pointer">XL</option>
            <option className="cursor-pointer">L</option>
            <option className="cursor-pointer">M</option>
          </select>
        </div>
        <div className="flex items-end justify-between w-full">
          <div className="">
            <p className="text-xl mb-2">Quantity :</p>
            <IncrementDecrementControl
              number={quantity}
              setNumber={setQuantity}
              buttonsClassName={
                "py-2 px-3 border border-translucent rounded-md hover:border-black transition-all duration-200"
              }
            />
          </div>
          <FaShareAlt className="text-lightGray text-3xl hover:text-tertiary duration-200 transition-all cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
