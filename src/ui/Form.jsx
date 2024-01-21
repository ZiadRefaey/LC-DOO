export default function Form({ children, className, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className={`flex items-start flex-col justify-center ${className}`}
    >
      {children}
    </form>
  );
}
