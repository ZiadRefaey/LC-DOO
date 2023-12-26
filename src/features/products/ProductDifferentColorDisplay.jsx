import Bag from "../../assets/Beige.png";

export default function ProductDifferentColorDisplay({
  img = Bag,
  alt = "Different color display",
}) {
  return (
    <div className="w-[50px] rounded-md border-translucent border cursor-pointer p-2 hover:border-blue-500 transition-all duration-100">
      <img src={img} alt={alt} />
    </div>
  );
}
