export default function FormInput({ type, placeholder, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-black rounded-lg text-lg py-2 px-4 w-full"
      name={name}
      id={name}
    ></input>
  );
}
