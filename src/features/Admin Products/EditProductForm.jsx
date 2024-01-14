import FileDragDrop from "../../ui/FileDragDrop";
import FormInput from "../../ui/FormInput";
import PrimaryButton from "../../ui/PrimaryButton";
import SecondaryButton from "../../ui/SecondaryButton";

export default function EditProductForm() {
  return (
    <form className="flex items-start justify-center flex-col gap-3  ">
      <p className="text-2xl mb-4">Edit Product</p>
      <div className="w-full gap-1 flex flex-col ">
        <label className="text-lg" htmlFor="product-title">
          Product Title
        </label>
        <FormInput
          name={"product-title"}
          placeholder={"Product Title"}
          type={"text"}
        />
      </div>
      <div className="w-full gap-1 flex flex-col ">
        <label className="text-lg" htmlFor="price">
          Price
        </label>
        <FormInput name={"price"} placeholder={"Price"} type={"number"} />
      </div>
      <div className="w-full gap-1 flex flex-col ">
        <label className="text-lg" htmlFor="description">
          Product Description
        </label>
        <textarea
          placeholder={"Description..."}
          id="description"
          className="border rounded-lg border-black px-4 py-2 text-lg min-h-[8rem]"
        />
      </div>
      <p className="text-lg">Product Positions</p>
      <FileDragDrop />
      <p className="text-lg">Product Colors</p>
      <FileDragDrop />
      <div className="flex gap-4 self-end">
        <SecondaryButton>Clear</SecondaryButton>
        <PrimaryButton color="bg-adminTertiary" padding={"0.6rem 3.2rem"}>
          Edit
        </PrimaryButton>
      </div>
    </form>
  );
}
