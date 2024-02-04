import WisshlistTable from "../../features/wishlist/wishlistTable";
import Section from "../../ui/Section";

export default function Wishlist() {
  return (
    <Section>
      <h1 className="text-3xl font-bold">
        Wishlist <span className="font-regular">(10)</span>
      </h1>
      <WisshlistTable />
    </Section>
  );
}
