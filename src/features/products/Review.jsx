import StarRatingDisplay from "../../ui/StarRatingDisplay";

export default function Review() {
  return (
    <div className="flex items-center justify-start flex-col">
      <div className="flex items-center justify-start w-full">
        <StarRatingDisplay rating={4.5} className={" mr-3"} />
        <p className="font-medium text-lg">by Ziad Refaey</p>
      </div>
      <p className="text-lightGray font-md text-start mt-2 mb-1 w-full">
        21st of Augest 08:07 PM
      </p>
      <p className="font-lg text-start w-full  ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae
        labore doloribus officia atque error laudantium aut in eos explicabo!
      </p>
    </div>
  );
}
