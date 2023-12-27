import FooterCol from "./FooterCol";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import SocialWrapper from "./SocialWrapper";
import logo from "../assets/Logo.png";
export default function Footer() {
  return (
    <footer className="w-full bg-gray-800">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-[1280px] m-auto py-10 border-b-[0.5px] border-lightGray">
        <div>
          <Link
            to="/"
            className="inria-font text-5xl font-thin text-white cursor-pointer mr-6 "
          >
            <img src={logo} alt="logo" className="max-w-[250px] -mb-5" />
          </Link>
          <p className="text-primary inria-font ">Homemade & Fashion Company</p>
        </div>
        <FooterCol title={"Quick Links"}>
          <Link className="text-body-sm hover:underline text-lightGray">
            Homepage
          </Link>
          <Link className="text-body-sm hover:underline text-lightGray">
            Products
          </Link>
          <Link className="text-body-sm hover:underline text-lightGray">
            Blog
          </Link>
          <Link className="text-body-sm hover:underline text-lightGray">
            Contact Us
          </Link>
        </FooterCol>
        <FooterCol title={"Quick Links"}>
          <Link className="text-body-sm hover:underline text-lightGray">
            Homepage
          </Link>
          <Link className="text-body-sm hover:underline text-lightGray">
            Products
          </Link>
          <Link className="text-body-sm hover:underline text-lightGray">
            Blog
          </Link>
          <Link className="text-body-sm hover:underline text-lightGray">
            Contact Us
          </Link>
        </FooterCol>
        <FooterCol title={"Quick Links"}>
          <Link className="text-body-sm hover:underline text-lightGray">
            Homepage
          </Link>
          <Link className="text-body-sm hover:underline text-lightGray">
            Products
          </Link>
          <Link className="text-body-sm hover:underline text-lightGray">
            Blog
          </Link>
          <Link className="text-body-sm hover:underline text-lightGray">
            Contact Us
          </Link>
        </FooterCol>
      </div>
      <div className="w-full flex-col gap-4 flex items-center justify-center py-10">
        <div className="flex items-center justify-center gap-2">
          <SocialWrapper>
            <FaFacebookF className="text-primary" />
          </SocialWrapper>
          <SocialWrapper>
            <FaWhatsapp className="text-primary" />
          </SocialWrapper>
          <SocialWrapper>
            <FaInstagram className="text-primary" />
          </SocialWrapper>
        </div>
        <p className="flex items-center justify-center text-primary">
          <FaRegCopyright className="mr-3 text-primary" />
          All copy rights belong to L&C DOO | 2023
        </p>
      </div>
    </footer>
  );
}
