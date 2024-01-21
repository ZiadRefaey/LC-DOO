import { useController } from "react-hook-form";
export default function FormInput({
  type,
  placeholder,
  name,
  register,
  errors,
  ...rest
}) {
  console.log(errors);
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-black rounded-lg text-lg py-2 px-4 w-full"
        name={name}
        id={name}
        {...register(name, {})}
      />
    </>
  );
}
