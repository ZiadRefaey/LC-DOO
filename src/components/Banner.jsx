import BannerImg from "../assets/Banner.jpg";
export default function Banner() {
  return (
    <div className="w-full object-contain md:h-[200px] xl:h-auto max-h-[300px] h-[140px]">
      <img
        className="w-full h-full max-h-[300px]"
        src={BannerImg}
        alt="Banner"
      />
    </div>
  );
}
