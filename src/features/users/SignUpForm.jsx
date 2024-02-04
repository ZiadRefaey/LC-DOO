import "../../App.css";

import { Link, useNavigate } from "react-router-dom";
import Form from "../../ui/Form";
import PrimaryButton from "../../ui/PrimaryButton";
import { useForm } from "react-hook-form";
import { useAuth } from "../../services/apiAuth";
import { ClipLoader } from "react-spinners";
import { emailRegex } from "../../utils/Regex";
import useCreateUser from "./useCreateUser";
// import { createUser } from "../../services/apiUsers";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";
import FormValidationAlert from "../../ui/FormValidationAlert";

export default function SignUpForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onBlur",
    // defaultValues: {
    //   fullName: "Ziad Refaey",
    //   email: "test@example.com",
    //   password: "123123",
    //   confirmPassword: "123123",
    //   phoneNumber: "01010923960",
    // },
  });
  const { signup, isLoading: isAuthenticating } = useAuth();
  const { createUser, isCreating } = useCreateUser();

  const password = watch("password", "123123"); // Watch the 'password' field

  //function to ensure the firestore only executes when the user updates
  const waitForUserUpdate = () => {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (updatedUser) => {
        // Check if the updatedUser is not null
        if (updatedUser) {
          resolve(updatedUser);
          unsubscribe(); // Unsubscribe to avoid memory leaks
        }
      });
    });
  };
  return (
    <>
      <Form
        onSubmit={handleSubmit(async (userCreds) => {
          //create and authenticate the user with email and password
          await signup(userCreds.email, userCreds.password);
          const updatedUser = await waitForUserUpdate();
          //Create a new user in the firestore
          const userInfo = {
            fullName: userCreds.fullName,
            email: userCreds.email,
            phoneNumber: userCreds.phoneNumber,
            address: userCreds.address,
            gender: userCreds.gender,
          };
          createUser({ id: updatedUser.uid, newUserData: userInfo });

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
        {errors.address?.message && (
          <FormValidationAlert className="" role="alert">
            {errors.address.message}
          </FormValidationAlert>
        )}
        <input
          placeholder="Address"
          type="text"
          id="address"
          {...register("address", {
            required: "This field is required",
            minLength: {
              value: 10,
              message: "Should atleast be 10 characters",
            },
          })}
          className="form-input"
        />

        <select id="gender" {...register("gender")} className="form-input">
          <option>Female</option>
          <option>Male</option>
        </select>
        <PrimaryButton
          type={"submit"}
          className={"w-full flex items-center justify-center"}
          padding={"0.65rem 0rem"}
        >
          {isAuthenticating || isCreating ? (
            <ClipLoader color="white" size={28} />
          ) : (
            "Sign Up"
          )}
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
