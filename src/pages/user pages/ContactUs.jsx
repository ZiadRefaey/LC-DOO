import ContactForm from "../../features/contactus/ContactForm";
import Section from "../../ui/Section";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

export default function ContactUs() {
  return (
    <>
      <Section className={"grid grid-cols-1 md:grid-cols-2 gap-10"}>
        <ContactForm />
        <div className="h-full w-full relative">
          <div className="absolute -top-10 -right-20 h-[80%] w-[45%] bg-tertiary -z-10"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.108913052405!2d30.994195198191203!3d30.808425098806776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c9843ccb08d3%3A0x60cc40685af0164f!2sUmm%20al-Qura%20Hospital!5e0!3m2!1sen!2seg!4v1703703593786!5m2!1sen!2seg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </Section>
      <Section className={"flex items-center justify-around w-full mt-10"}>
        <div className="flex items-center justify-center flex-col gap-4">
          <FaMapLocationDot className="text-5xl text-tertiary" />
          <p className="text-xl hover:underline text-blue-500 cursor-pointer hover:text-tertiary">
            Tanta - Elstad - Umm al Qura hospital
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-4">
          <FaPhoneAlt className="text-5xl text-tertiary" />
          <p className="text-xl hover:underline text-blue-500 cursor-pointer hover:text-tertiary">
            +20 1010 923 960
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-4">
          <MdMarkEmailRead className="text-5xl text-tertiary" />
          <p className="text-xl hover:underline text-blue-500 cursor-pointer hover:text-tertiary">
            ziad.refaey1@gmail.com
          </p>
        </div>
      </Section>
    </>
  );
}
