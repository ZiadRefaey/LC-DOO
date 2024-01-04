export default function PageNumber({
  children,
  rounded = "rounded-md",
  color = "text-secondary hover:text-primary hover:bg-tertiary",
}) {
  return (
    <li
      className={`min-w-[40px] h-[40px] ${color} ${rounded} transition-all duration-200  cursor-pointer flex items-center justify-center`}
    >
      {children}
    </li>
  );
}
