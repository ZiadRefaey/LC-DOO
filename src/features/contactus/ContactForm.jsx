import Form from "../../ui/Form";
import FormInput from "../../ui/FormInput";
import PrimaryButton from "../../ui/PrimaryButton";
export default function ContactForm() {
  return (
    <Form className={"w-full "}>
      <h1 className="text-2xl font-medium">Contact us</h1>
      <div className="mt-1 mb-3 w-14 h-[4px] rounded-full bg-tertiary"></div>
      <p className="text-lg mb-10">Reach us with your inquiry</p>
      <div className="flex flex-col items-center justify-start w-full gap-4">
        <FormInput type={"text"} placeholder={"Full name"} />
        <FormInput type={"email"} placeholder={"email"} />
        <textarea
          className="w-full h-[150px] border border-black rounded-lg p-4"
          placeholder="Your message..."
        />
        <PrimaryButton className={"w-full"} padding={"1rem 0rem"}>
          Send email
        </PrimaryButton>
      </div>
    </Form>
  );
}
