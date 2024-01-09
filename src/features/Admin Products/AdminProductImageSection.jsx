export default function AdminProductImageSection({ productImg }) {
  return (
    <div className=" flex items-center justify-start flex-col p-10">
      <img src={productImg} className="w-[50%] mb-10" alt="" />
      <div className="flex items-center justify-center gap-2">
        <img
          src={productImg}
          className="w-[75px] border rounded-xl p-3 cursor-pointer hover:border-adminTertiaryLight transition-all duration-200"
          alt=""
        />
        <img
          src={productImg}
          className="w-[75px] border rounded-xl p-3 cursor-pointer hover:border-adminTertiaryLight transition-all duration-200"
          alt=""
        />
        <img
          src={productImg}
          className="w-[75px] border rounded-xl p-3 cursor-pointer hover:border-adminTertiaryLight transition-all duration-200"
          alt=""
        />
      </div>
    </div>
  );
}
