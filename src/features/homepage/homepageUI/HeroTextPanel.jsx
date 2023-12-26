import { useContext } from "react";
import PrimaryButton from "../../../ui/PrimaryButton";
import { ScreenContext } from "../../../App";

export default function HeroTextPanel() {
  const screenWidth = useContext(ScreenContext);
  return (
    <div className="flex items-center justify-center xl:items-start flex-col gap-4 gap">
      <h1 className="font-bold text-4xl max-w-[240px] md:text-5xl md:max-w-[350px] xl:max-w-[500px] xl:text-start text-secondary m-auto xl:text-7xl text-center xl:mx-0">
        <span className="text-tertiary">Discover</span> Home Crafted Elegance.
      </h1>
      <p className="text-lg text-center">
        Explore a Wolrd of Magnificent Leather Goods.
      </p>
      <p className=""></p>
      <PrimaryButton
        isLink={"/products"}
        className={"w-[230px]"}
        size={screenWidth.currentWidth > screenWidth.xl ? "large" : "medium"}
      >
        Shop Now
      </PrimaryButton>
    </div>
  );
}
