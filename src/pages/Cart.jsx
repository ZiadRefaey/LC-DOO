import Section from "../ui/Section";
import CartTable from "../features/Cart/CartTable";
import CartSummary from "../features/Cart/CartSummary";

export default function Cart() {
  return (
    <Section
      className={"flex flex-col lg:flex-row items-center justify-center gap-5"}
    >
      <CartTable />
      <CartSummary />
    </Section>
  );
}
