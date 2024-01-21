import { Link } from "react-router-dom";
import Form from "../../ui/Form";
import PrimaryButton from "../../ui/PrimaryButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useForm } from "react-hook-form";
async function createUser(email, password) {
  const user = await createUserWithEmailAndPassword(auth, email, password);
}
import "../../App.css";
import { useState } from "react";

const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onBlur" });
  const password = watch("password", ""); // Watch the 'password' field

  return (
    <Form
      onSubmit={handleSubmit((userCreds) => {
        console.log(userCreds);
      })}
      className={"m-auto gap-5 w-[70%] max-w-[500px]"}
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

      <PrimaryButton type={"submit"} className={"w-full"} padding={"1rem 0rem"}>
        Sign Up
      </PrimaryButton>

      <div className="w-full h-[1px] bg-lightGray"></div>
      <p className="text-center w-full">
        Already a memeber?
        <Link to={"/signin"} className="text-tertiary hover:underline">
          &nbsp;Sign in now
        </Link>
      </p>
    </Form>
  );
}
