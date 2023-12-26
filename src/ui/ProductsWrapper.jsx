export default function ProductsWrapper({ children }) {
  return (
    <div className="flex items-center justify-center flex-col gap-4 md:justify-evenly md:flex-row flex-wrap xl:gap-10">
      {children}
    </div>
  );
}
