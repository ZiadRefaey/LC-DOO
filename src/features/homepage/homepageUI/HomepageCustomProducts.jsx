import PrimaryButton from "../../../ui/PrimaryButton";
import Section from "../../../ui/Section";
export default function HomepageCustomProducts() {
  return (
    <Section
      maxWidth={"w-[100vw]"}
      className={`py-10 bg-custom-products bg-cover `}
    >
      <div
        style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        className="max-w-[900px] m-auto px-10 py-7 backdrop:blur-md flex items-center justify-center flex-col backdrop-blur-lg"
      >
        <h5 className="text-sm-h4 md:text-md-h4 lg:text-lg-h4 text-center">
          Have any product in mind?
        </h5>
        <p className="text-body-sm md:text-body-md lg:text-body-lg text-center mb-5">
          Create and order your customized product now!
        </p>
        <PrimaryButton size={"medium"} to={"/products"} className={"m-auto "}>
          Order Now
        </PrimaryButton>
      </div>
    </Section>
  );
}
