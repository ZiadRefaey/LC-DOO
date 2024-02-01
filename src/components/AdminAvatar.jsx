import Avatar from "../assets/ProfilePicture.jpg";

export default function AdminAvatar({ onMouseEnter, profilePic }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className="w-[50px] h-[50px] cursor-pointer"
    >
      <img
        src={profilePic ? profilePic : Avatar}
        className="w-full h-full object-cover rounded-full"
        alt="avatar image"
      />
    </div>
  );
}
