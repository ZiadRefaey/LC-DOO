import { Link } from "react-router-dom";

export default function PrimaryButton({
  children,
  className,
  isLink,
  onCLick,
}) {
  if (isLink)
    return (
      <Link to={isLink}>
        <button
          className={`${className} py-2 px-5 text-sm rounded-lg md:text-md lg:text-lg md:rounded-xl bg-tertiary hover:opacity-75 text-white transition-all duration-150`}
        >
          {children}
        </button>
      </Link>
    );
  return (
    <button
      onClick={onCLick}
      className={` py-2 px-5 text-sm rounded-lg md:text-md lg:text-lg md:rounded-xl ${className} bg-tertiary hover:opacity-75 text-white transition-all duration-150`}
    >
      {children}
    </button>
  );
}
