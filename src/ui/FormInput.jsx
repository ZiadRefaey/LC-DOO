export default function FormInput({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-black rounded-lg text-lg p-4 w-full"
    ></input>
  );
}
