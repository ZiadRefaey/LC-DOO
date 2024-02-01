import Avatar from "../assets/default avatar.jpg";

export default function AdminAvatar({ onMouseEnter, profilePic }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className="w-[50px] h-[50px] cursor-pointer"
    >
      <img
        src={profilePic ? profilePic : Avatar}
        className="w-full h-full object-contain rounded-full"
        alt="avatar image"
      />
    </div>
  );
}
