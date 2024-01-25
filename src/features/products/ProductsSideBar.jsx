import RadioGroup from "../../ui/RadioGroup";
import MultiRangeSlider from "multi-range-slider-react";
import RatingRadioButton from "../../components/RatingRadioButton";
const radioFilters = [
  {
    title: "Category",
    groups: ["bags", "wallets", "jackets", "belts", "clothes"],
  },
  {
    title: "Material",
    groups: ["leather", "cotton", "fabric"],
  },

  {
    title: "Bags",
    groups: ["cross", "backpack", "travel", "women purses"],
  },
  {
    title: "Clothes",
    groups: [
      "hoodies",
      "t-shirts",
      "shirts",
      "skirts",
      "jackets",
      "dresses",
      "pants",
      "basic",
    ],
  },

  {
    title: "Color Family",
    groups: [
      "black",
      "blue",
      "yellow",
      "red",
      "orange",
      "green",
      "brown",
      "gray",
    ],
  },

  {
    title: "Sizes",
    groups: ["S", "M", "L", "XL", "XXL", "XXL"],
  },
];
export default function ProductsSideBar() {
  return (
    <aside className="h-[100vh] px-5 py-5 bg-primary overflow-y-scroll sticky top-[82px] font-bold">
      <h2 className=" text-md-h3 mb-4">Filters</h2>
      <RadioGroup groups={radioFilters} />
      <div className="mb-5">
        <p className="text-body-lg font-semibold mb-2">Price</p>
        <div className="w-full  flex items-center justify-center">
          <input
            type="number"
            placeholder="Min"
            className="border-2 border-gray-400 rounded-l-lg w-20 p-1 inline"
          />
          <input
            type="number"
            placeholder="Max"
            className="border-2 border-l-0 border-gray-400 rounded-r-lg w-20 p-1 inline outline-[0.5px] outline-gray-500"
          />
        </div>
        <MultiRangeSlider
          style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
          label={false}
          ruler={false}
          barLeftColor="lightGray"
          barInnerColor="#597ace"
          barRightColor="lightGray"
          thumbLeftColor="#597ace"
          thumbRightColor="#597ace"
        />
      </div>
      <div className="mb-5">
        <p className="text-body-lg font-semibold mb-2">Rating</p>
        <RatingRadioButton rating={5} />
        <RatingRadioButton rating={4} />
        <RatingRadioButton rating={3} />
        <RatingRadioButton rating={2} />
        <RatingRadioButton rating={1} />
      </div>
    </aside>
  );
}
