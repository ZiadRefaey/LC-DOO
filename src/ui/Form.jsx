export default function Form({ children, className }) {
  return (
    <form className={`flex items-start flex-col justify-center ${className}`}>
      {children}
    </form>
  );
}
