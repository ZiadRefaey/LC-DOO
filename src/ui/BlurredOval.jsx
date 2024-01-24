export default function BlurredOval({
  width,
  height,
  color,
  top,
  left,
  className,
}) {
  return (
    <div
      id="oval-blur"
      className={`absolute ${width} ${height} bg-${color}  ${top} ${left} rounded-full -z-10${className} blur-2xl `}
    ></div>
  );
}
