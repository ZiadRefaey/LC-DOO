import { Link } from "react-router-dom";

export default function PrimaryButton({
  children,
  className,
  isLink,
  onCLick,
  padding,
  rounded = "rounded-lg md:rounded-xl",
  color = "bg-tertiary",
}) {
  if (isLink)
    return (
      <Link to={isLink}>
        <button
          className={`${className} py-2 px-5 text-sm ${rounded} md:text-md lg:text-lg ${color} hover:opacity-75 text-white transition-all duration-150`}
          style={{ padding: padding }}
        >
          {children}
        </button>
      </Link>
    );
  return (
    <button
      onClick={onCLick}
      className={` py-2 px-5 text-sm ${rounded} md:text-md lg:text-lg ${className} ${color} hover:opacity-75 text-white transition-all duration-150`}
      style={{ padding: padding }}
    >
      {children}
    </button>
  );
}
