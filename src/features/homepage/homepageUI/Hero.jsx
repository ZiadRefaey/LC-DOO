// import { useContext } from "react";
// import BlurredOval from "../../../ui/BlurredOval";
import HeroImagePanel from "./HeroImagePanel";
import HeroTextPanel from "./HeroTextPanel";
import Section from "../../../ui/Section";
// import { ScreenContext } from "../../../App";

export default function Hero() {
  // const screenWidth = useContext(ScreenContext);
  return (
    <Section
      className={
        "grid grid-cols-1 xl:grid-cols-2 py-10 relative gap-10 max-w-[1280px]"
      }
    >
      {/* <BlurredOval
        width={
          screenWidth.currentWidth < screenWidth.small
            ? "w-[240px]"
            : "w-[320px]"
        }
        height={
          screenWidth.currentWidth < screenWidth.small
            ? "h-[170px]"
            : "h-[220px]"
        }
        color={"tertiary"}
        top={
          screenWidth.currentWidth < screenWidth.small
            ? "top-[30px]"
            : screenWidth.currentWidth < screenWidth.medium
            ? "top-[22px]"
            : "top-[50%]"
        }
        left={
          screenWidth.currentWidth < screenWidth.small
            ? "left-[-75px]"
            : screenWidth.currentWidth < screenWidth.medium
            ? "left-[-205px]"
            : "left-[50%] "
        }
        className={
          screenWidth.currentWidth > screenWidth.large
            ? "-translate-x-[50%] -translate-y-[50%]"
            : ""
        }
      /> */}

      <HeroTextPanel />
      <HeroImagePanel />
    </Section>
  );
}
