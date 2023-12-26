export default function Section({
  children,
  className,
  maxWidth = "max-w-[1280px]",
}) {
  return (
    <div className={`my-8 ${maxWidth} m-auto ${className}`}>{children}</div>
  );
}
