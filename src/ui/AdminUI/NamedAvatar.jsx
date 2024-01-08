import ziad from "../../assets/avatar.jpg";
export default function NamedAvatar({ children }) {
  return (
    <div className="flex items-center justify-start gap-3">
      <div className="w-[35px] h-[35px] object-contain">
        <img src={ziad} className="w-full h-full rounded-full" alt="" />
      </div>
      <p className="">{children}</p>
    </div>
  );
}
