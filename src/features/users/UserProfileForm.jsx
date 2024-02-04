import Form from "../../ui/Form";
import Label from "../../ui/Label";
import LabelInputContainer from "../../ui/LabelInputContainer";
import Tab from "../../ui/Tab";
import PrimaryButton from "../../ui/PrimaryButton";
import { useForm } from "react-hook-form";
import FormValidationAlert from "../../ui/FormValidationAlert";
import useUpdateUser from "./useUpdateUser";
import { ClipLoader } from "react-spinners";

export default function UserProfileForm({ user }) {
  const { updateUser, isUpdating } = useUpdateUser();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: user?.fullName,
      address: user?.address,
      phoneNumber: user?.phoneNumber,
      gender: user?.gender,
      dob: user?.dob,
    },
  });
  function onSubmit(userInfo) {
    updateUser(user.uid, userInfo);
  }
  return (
    <>
      <div className="w-full my-10">
        <div className="w-full grid grid-cols-2 items-start mb-4">
          <Tab title={"Profile Information"} />
          <Tab title={"Orders"} />
        </div>
        <Form className={"w-full gap-3 "} onSubmit={handleSubmit(onSubmit)}>
          <LabelInputContainer>
            <Label htmlFor={"fullname"}>Full Name</Label>
            <input
              type="text"
              id="fullname"
              {...register("fullName", {
                required: "This field is required.",
                minLength: {
                  value: 6,
                  message: "Should atleast be 6 characters",
                },
              })}
              className="form-input"
            />
            {errors.fullName?.message && (
              <FormValidationAlert className="" role="alert">
                {errors.fullName.message}
              </FormValidationAlert>
            )}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor={"address"}>Address</Label>
            <input
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
            {errors.address?.message && (
              <FormValidationAlert className="" role="alert">
                {errors.address.message}
              </FormValidationAlert>
            )}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor={"phoneNumber"}>Phone Number</Label>
            <input
              type="text"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "This field is required",
                minLength: {
                  value: 11,
                  message: "Please enter 11 numbers.",
                },
                maxLength: {
                  value: 11,
                  message: "Please enter 11 numbers.",
                },
              })}
              className="form-input"
            />
            {errors.phoneNumber?.message && (
              <FormValidationAlert className="" role="alert">
                {errors.phoneNumber.message}
              </FormValidationAlert>
            )}
          </LabelInputContainer>
          <div className="flex flex-col xl:flex-row xl:gap-[30px] w-full">
            <LabelInputContainer>
              <Label htmlFor={"gender"}>Gender</Label>
              <select
                id="gender"
                {...register("gender")}
                className="form-input"
              >
                <option></option>
                <option>Female</option>
                <option>Male</option>
              </select>
            </LabelInputContainer>{" "}
            <LabelInputContainer>
              <Label htmlFor={"dob"}>Date of birth</Label>
              <input
                type="date"
                id="dob"
                {...register("dob", {})}
                className="form-input"
              />
            </LabelInputContainer>
          </div>
          <PrimaryButton
            type={"submit"}
            className={"self-end"}
            disabled={isUpdating}
          >
            {isUpdating ? <ClipLoader color="#36d7b7" /> : "Save changes"}
          </PrimaryButton>
        </Form>
      </div>
    </>
  );
}
