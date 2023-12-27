export default function CartSummaryRow({ children, className }) {
  return (
    <div className={`${className} w-full flex items-center justify-between`}>
      {children}
    </div>
  );
}
