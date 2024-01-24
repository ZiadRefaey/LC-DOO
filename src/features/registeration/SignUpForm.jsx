import "../../App.css";

import { Link, useNavigate } from "react-router-dom";
import Form from "../../ui/Form";
import PrimaryButton from "../../ui/PrimaryButton";
import { useForm } from "react-hook-form";
import { useAuth } from "../../services/apiAuth";
import { ClipLoader } from "react-spinners";
const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/; // Email Regex

export default function SignUpForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "Ziad Refaey",
      email: "test@example.com",
      password: "123123",
      confirmPassword: "123123",
      phoneNumber: "01010923960",
    },
  });
  const { signup, isLoading, error: AuthError } = useAuth();
  const password = watch("password", "123123"); // Watch the 'password' field

  return (
    <>
      <Form
        onSubmit={handleSubmit((userCreds) => {
          signup(userCreds.email, userCreds.password);
          console.log(AuthError);
          console.log(userCreds);
          navigate("/products");
        })}
        className={
          "m-auto gap-5 w-[70%] max-w-[500px] border border-gray-200 p-4 rounded-lg my-2"
        }
      >
        <h1 className="text-xl w-full font-semibold">Signup to start buying</h1>
        <p className=" text-danger -mb-4">{errors.fullName?.message}</p>
        <input
          placeholder="Full Name"
          type="text"
          className="form-input"
          {...register("fullName", {
            required: "This field is Required.",
            minLength: {
              value: 6,
              message: "Name should be atleast 6 characters.",
            },
          })}
        />

        <p className=" text-danger -mb-4">{errors.email?.message}</p>
        <input
          placeholder="Email"
          type="email"
          className="form-input"
          {...register("email", {
            required: "This field is Required.",
            pattern: {
              value: emailRegex,
              message: "Invalid email address.",
            },
          })}
        />

        <p className=" text-danger -mb-4">{errors.password?.message}</p>
        <input
          placeholder="Password"
          type="password"
          className="form-input"
          {...register("password", {
            required: "This field is Required.",
            minLength: {
              value: 6,
              message: "Name should be atleast 6 characters.",
            },
          })}
        />

        <p className=" text-danger -mb-4">{errors.confirmPassword?.message}</p>
        <input
          placeholder="Confirm Password"
          type="password"
          className="form-input"
          {...register("confirmPassword", {
            required: "This field is Required.",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />

        <p className=" text-danger -mb-4">{errors.phoneNumber?.message}</p>
        <input
          placeholder="Phone Number"
          type="tel"
          className="form-input"
          {...register("phoneNumber", {
            required: "This field is Required.",
            minLength: {
              value: 11,
              message: "Please enter 11 numbers.",
            },
            maxLength: {
              value: 11,
              message: "Please enter 11 numbers.",
            },
          })}
        />

        <PrimaryButton
          type={"submit"}
          className={"w-full flex items-center justify-center"}
          padding={"0.65rem 0rem"}
        >
          {isLoading ? <ClipLoader color="white" size={28} /> : "Sign Up"}
        </PrimaryButton>
      </Form>
      <p className="text-center w-full">
        Already a memeber?
        <Link to={"/signin"} className="text-tertiary hover:underline">
          &nbsp;Sign in now
        </Link>
      </p>
    </>
  );
}
