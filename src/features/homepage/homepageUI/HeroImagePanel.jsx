import heroImg from "/hero-img.png";

export default function HeroImagePanel() {
  return (
    <div className="w-full h-full bg-contain  flex justify-center items-center relative -z-1">
      <img
        src={heroImg}
        alt="hero goods image"
        className="w-full max-w-[335px] md:max-w-[526px] xl:max-w-[900px] h-full"
      />
    </div>
  );
}
