import bag from "../../assets/Beige.png";
import AngleImageWrapper from "../../ui/AngleImageWrapper";

export default function ProductDifferentAngels() {
  return (
    <div className="flex items-center justify-start gap-2 md:flex-col">
      {/* displaying different angles of product*/}
      <AngleImageWrapper>
        <img src={bag} alt="Angle img" className="w-full h-full" />
      </AngleImageWrapper>
      <AngleImageWrapper>
        <img src={bag} alt="Angle img" className="w-full h-full" />
      </AngleImageWrapper>
      <AngleImageWrapper>
        <img src={bag} alt="Angle img" className="w-full h-full" />
      </AngleImageWrapper>
    </div>
  );
}
