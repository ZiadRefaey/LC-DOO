import bag from "../../assets/Beige.png";

export default function ProductOverviewImage() {
  return (
    <div className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-auto rounded-xl border p-6 md:p-10 lg:p-20 border-translucent">
      <img src={bag} alt="" className="w-full h-full" />
    </div>
  );
}
