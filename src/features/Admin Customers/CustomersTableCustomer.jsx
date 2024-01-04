import ziad from "../../assets/avatar.jpg";
export default function CustomersTableCustomer() {
  return (
    <div className="flex items-center justify-start gap-4">
      <div className="w-[25px] h-[25px] object-contain">
        <img
          src={ziad}
          className="w-full h-full  rounded-full"
          alt="ziad img"
        />
      </div>
      <p>Ziad Refaey</p>
    </div>
  );
}
