import ReactStars from "react-rating-stars-component";
import PrimaryButton from "../../ui/PrimaryButton";
import SecondaryButton from "../../ui/SecondaryButton";

export default function ProductRating({ onCloseModal }) {
  return (
    <form
      className={`w-full rounded-lg bg-primary my-4 overflow-hidden  transition-all duration-500`}
    >
      <div className="w-full flex items-center justify-between">
        <h4 className="text-xl font-medium">Your rating</h4>
      </div>
      <ReactStars isHalf={true} size={32} act />
      <h5 className="text-xl font-medium mt-10 mb-4">Your review</h5>
      <textarea className="w-full rounded-lg border-2 max-w-[500px] min-h-[150px]" />
      <div className="flex items-center justify-end gap-10">
        <SecondaryButton onClick={onCloseModal}>Clear</SecondaryButton>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </form>
  );
}
