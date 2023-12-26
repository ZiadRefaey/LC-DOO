import StarRatingDisplay from "./StarRatingDisplay";

export default function RatingRadioButton({ rating }) {
  return (
    <div className="flex items-center justify-start gap-2">
      <input type="radio" id={`${rating}`} name={`rating`} value={rating} />
      <label htmlFor={`${rating}`}>
        <StarRatingDisplay rating={rating} />
      </label>
    </div>
  );
}
