import BannerImg from "../assets/Banner.jpg";
export default function Banner({ banner }) {
  return (
    <div className="w-full object-contain md:h-[200px] xl:h-auto max-h-[300px] h-[140px]">
      <img
        className="w-full h-full max-h-[300px]"
        src={banner ? banner : BannerImg}
        alt="Banner"
      />
    </div>
  );
}
