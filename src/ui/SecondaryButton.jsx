import { Link } from "react-router-dom";

export default function SecondaryButton({
  children,

  isLink,
  onClick,
}) {
  if (isLink)
    return (
      <Link
        className={`text-body-sm xl:text-body-lg md:text-body-md hover:text-tertiary transition-all duration-200`}
        to={isLink}
      >
        {children}
      </Link>
    );
  return (
    <button
      onClick={onClick}
      className="text-body-sm xl:text-body-lg md:text-body-md hover:text-tertiary transition-all duration-200"
    >
      {children}
    </button>
  );
}
