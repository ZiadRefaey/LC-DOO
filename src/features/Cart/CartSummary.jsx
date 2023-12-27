import CartSummaryRow from "../../ui/CartSummaryRow";
import PrimaryButton from "../../ui/PrimaryButton";

export default function CartSummary() {
  return (
    <div className="border gap-3 border-translucent rounded-lg p-4 w-full lg:w-auto lg:min-w-[300px] bg-blue-50 flex items-center justify-start flex-col">
      <CartSummaryRow>
        <h1 className="font-semibold text-2xl">Summary</h1>
      </CartSummaryRow>
      <CartSummaryRow>
        <select className="w-full p-2 rounded-lg border border-translucent ">
          <option className="text-md">Pay on Delivery</option>
          <option className="text-md">Paypal</option>
        </select>
      </CartSummaryRow>
      <CartSummaryRow>
        <p className="text-lg font-medium"> Items subtotal:</p>
        <p className="text-lg">1000 L.E</p>
      </CartSummaryRow>
      <CartSummaryRow>
        <p className="text-lg font-medium"> Shipping Cost:</p>
        <p className="text-lg">15 L.E</p>
      </CartSummaryRow>
      <CartSummaryRow className={"border-y border-translucent py-3"}>
        <p className="text-2xl font-semibold"> Total:</p>
        <p className="text-xl font-semibold">1015 L.E</p>
      </CartSummaryRow>
      <PrimaryButton className={"w-full"}>Proceed to checkout</PrimaryButton>
    </div>
  );
}
