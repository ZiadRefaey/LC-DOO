import { FaMinus, FaPlus } from "react-icons/fa6";
export default function IncrementDecrementControl({
  number,
  setNumber,
  buttonsClassName,
  iconSize = "text-lg",
}) {
  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={() => (number > 1 ? setNumber(number - 1) : null)}
        className={`group ${buttonsClassName}`}
      >
        <FaMinus
          className={`${iconSize}  text-lightGray group-hover:text-black duration-200 transition-all`}
        />
      </button>
      <p>{number}</p>
      <button
        onClick={() => setNumber(number + 1)}
        className={`group ${buttonsClassName}`}
      >
        <FaPlus
          className={`${iconSize} text-lightGray group-hover:text-black duration-200 transition-all`}
        />
      </button>
    </div>
  );
}
