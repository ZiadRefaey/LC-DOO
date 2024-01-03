import Avatar from "../../assets/avatar.jpg";

export default function AdminAvatar() {
  return (
    <div className="w-[50px] h-[50px] cursor-pointer">
      <img
        src={Avatar}
        className="w-full h-full object-contain rounded-full"
        alt="avatar image"
      />
    </div>
  );
}
