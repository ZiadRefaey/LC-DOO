import Hero from "../../features/homepage/homepageUI/Hero";
// import HomepageBlog from "../ui/HomepageBlog";
import HomepageCustomProducts from "../../features/homepage/homepageUI/HomepageCustomProducts";
import HomepageNewProducts from "../../features/homepage/homepageUI/HomepageNewProducts";
import HomepageOurProducts from "../../features/homepage/homepageUI/HomepageOurProducts";
import Modal from "../../ui/Modal";

export default function Homepage() {
  return (
    <>
      <Modal />
      <Hero />
      <HomepageNewProducts />
      <HomepageOurProducts />
      <HomepageCustomProducts />
      {/* <HomepageBlog /> */}
    </>
  );
}
