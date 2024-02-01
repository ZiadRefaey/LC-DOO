export default function Label({ htmlFor, children }) {
  return (
    <label className="text-xl mb-2 font-bold" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
