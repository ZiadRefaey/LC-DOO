import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

export default function AuthButtons() {
  return (
    <>
      <PrimaryButton size="small" isLink={"/signup"} className={"min-w-max"}>
        Sign Up
      </PrimaryButton>
      <SecondaryButton isLink={"/signin"} className={"text-sm"}>
        Sign in
      </SecondaryButton>
    </>
  );
}
