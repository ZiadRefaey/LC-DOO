import { Link } from "react-router-dom";
import Form from "../../ui/Form";
import FormInput from "../../ui/FormInput";
import PrimaryButton from "../../ui/PrimaryButton";
export default function SignUpForm() {
  return (
    <Form className={"m-auto gap-5 w-[70%] max-w-[500px]"}>
      <h1 className="text-xl w-full font-semibold">Signup to start buying</h1>

      <FormInput type={"text"} placeholder={"Full Name"}></FormInput>
      <FormInput type={"email"} placeholder={"Email"}></FormInput>
      <FormInput type={"password"} placeholder={"Password"}></FormInput>
      <FormInput type={"password"} placeholder={"Confirm passowrd"}></FormInput>
      <FormInput type={"tel"} placeholder={"Phone number"}></FormInput>
      <PrimaryButton className={"w-full"} padding={"1rem 0rem"}>
        Sign Up
      </PrimaryButton>

      <div className="w-full h-[1px] bg-lightGray"></div>
      <p className="text-center w-full">
        Already a memeber?
        <Link to={"/signin"} className="text-tertiary hover:underline">
          Sign in now
        </Link>
      </p>
    </Form>
  );
}
