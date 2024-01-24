import Form from "../../ui/Form";
import PrimaryButton from "../../ui/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../services/apiAuth";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { emailRegex } from "../../utils/Regex";

export default function SignInForm() {
  const navigate = useNavigate();
  const { login, logout, user, isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "ziad182000@gmail.com",
      password: "123123",
    },
  });
  return (
    <>
      <Form
        onSubmit={handleSubmit((userCreds) => {
          login(userCreds.email, userCreds.password);
          navigate("/");
          console.log(user);
        })}
        className={
          "m-auto gap-5 w-[70%] max-w-[500px] border border-gray-200 p-4 rounded-lg my-2"
        }
      >
        <h1 className="text-xl w-full font-semibold">Sign In</h1>

        <p className=" text-danger -mb-4">{errors.email?.message}</p>
        <input
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: emailRegex,
              message: "Invalid email address.",
            },
          })}
          className="form-input"
          type={"email"}
          placeholder={"Email"}
        ></input>

        <p className=" text-danger -mb-4">{errors.password?.message}</p>
        <input
          {...register("password", {
            required: "This field is required.",
            minLength: { value: 6, message: "Must be atleast 6 characters" },
          })}
          className="form-input"
          type={"password"}
          placeholder={"Password"}
        ></input>

        <a onClick={() => logout()}>log out</a>

        <PrimaryButton className={"w-full"} padding={"0.65rem 0rem"}>
          {isLoading ? <ClipLoader color="white" size={28} /> : "Log In"}
        </PrimaryButton>
      </Form>

      <p className="text-center w-full">
        Don&#39;t have an account&nbsp;
        <Link to={"/signup"} className="text-tertiary hover:underline">
          Sign up now
        </Link>
      </p>
    </>
  );
}
