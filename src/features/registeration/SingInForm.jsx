import Form from "../../ui/Form";
import FormInput from "../../ui/FormInput";
import PrimaryButton from "../../ui/PrimaryButton";
import { Link } from "react-router-dom";

export default function SingInForm() {
  return (
    <Form className={"m-auto gap-5 w-[70%] max-w-[500px] "}>
      <h1 className="text-xl w-full font-semibold">Signup to start buying</h1>

      <FormInput type={"email"} placeholder={"Email"}></FormInput>
      <FormInput type={"password"} placeholder={"Password"}></FormInput>

      <PrimaryButton className={"w-full"} padding={"1rem 0rem"}>
        Sign In
      </PrimaryButton>

      <div className="w-full h-[1px] bg-lightGray"></div>
      <p className="text-center w-full">
        Don&#39;t have an account&nbsp;
        <Link to={"/signup"} className="text-tertiary hover:underline">
          Sign up now
        </Link>
      </p>
    </Form>
  );
}
