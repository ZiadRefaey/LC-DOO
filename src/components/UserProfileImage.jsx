import { useState } from "react";
import profilePic from "../assets/ProfilePicture.jpg";
import { IoCameraOutline } from "react-icons/io5";

export default function UserProfileImage() {
  const [pictureIsHovered, setPictureIsHovered] = useState(false);
  return (
    <div
      className="w-[240px] md:w-[300px] xl:w-[400px]  border-white border-[7px] -translate-y-[50%] xl:-translate-y-[70%] m-auto -mb-[68px] md:-mb-[88px] xl:-mb-[180px] xl:mx-0 relative transition-all duration-300"
      onMouseEnter={() => setPictureIsHovered(true)}
      onMouseLeave={() => setPictureIsHovered(false)}
    >
      <button
        className={`absolute top-0 left-0 h-full w-full bg-white bg-opacity-30 items-center justify-center cursor-pointer ${
          pictureIsHovered ? "flex" : "hidden"
        }`}
      >
        <IoCameraOutline className="text-4xl text-gray-800" />
      </button>
      <img src={profilePic} alt="Profile picture" />
    </div>
  );
}
