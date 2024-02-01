import Form from "../../ui/Form";
import Label from "../../ui/Label";
import LabelInputContainer from "../../ui/LabelInputContainer";
import Tab from "../../ui/Tab";
import PrimaryButton from "../../ui/PrimaryButton";
export default function UserProfileForn() {
  return (
    <>
      <div className="w-full my-10">
        <div className="w-full grid grid-cols-2 items-start">
          <Tab title={"Profile Information"} />
          <Tab title={"Orders"} />
        </div>
        <Form className={"w-full gap-3 "}>
          <LabelInputContainer>
            <Label htmlFor={"fullname"}>Full Name</Label>
            <input
              type="text"
              id="fullname"
              name="full name"
              className="form-input"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor={"address"}>Address</Label>
            <input
              type="text"
              id="address"
              name="Address"
              className="form-input"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor={"phoneNumber"}>Phone Number</Label>
            <input
              type="text"
              id="phoneNumber"
              name="Phone number"
              className="form-input"
            />
          </LabelInputContainer>
          <div className="flex flex-col xl:flex-row xl:gap-[30px] w-full">
            {" "}
            <LabelInputContainer>
              <Label htmlFor={"gender"}>Date of birth</Label>
              <select id="gender" name="gender" className="form-input">
                <option>Female</option>
                <option>Male</option>
              </select>
            </LabelInputContainer>{" "}
            <LabelInputContainer>
              <Label htmlFor={"dob"}>Date of birth</Label>
              <input
                type="date"
                id="dob"
                name="date of birth"
                className="form-input"
              />
            </LabelInputContainer>
          </div>
          <PrimaryButton className={"self-end"}>Save Changes</PrimaryButton>
        </Form>
      </div>
    </>
  );
}
