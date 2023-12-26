import { useEffect, useState } from "react";
import {
  MdOutlineStar,
  MdOutlineStarBorder,
  MdOutlineStarHalf,
} from "react-icons/md";

export default function StarRatingDisplay({
  rating,
  size = 24,
  color = "#ffa534",
  className,
}) {
  const [starRatingArray, setStarRatingArray] = useState([]);
  useEffect(() => {
    const roundedToNearestHalfRating = Math.round(rating * 2) / 2; //4.5
    const roundedRating = Math.floor(rating); //4
    const stars = [];
    //add full stars to the array as based on the rounded rating
    for (let i = 0; i < roundedRating; i++) {
      stars.push(
        <MdOutlineStar
          style={{ width: `${size}`, height: `${size}`, color: `${color}` }}
          key={i}
        />
      );
    }
    //if the rounded rating isn't the same as rounded to nearest half that means there is an extra half
    if (roundedRating !== roundedToNearestHalfRating) {
      stars.push(
        <MdOutlineStarHalf
          style={{ width: `${size}`, height: `${size}`, color: `${color}` }}
          key={stars.length}
        />
      );
    }
    //determine how many stars are in the array after adding the full and half stars
    const currentStarsLength = stars.length;
    console.log(stars.length);
    //add the empty stars
    for (let i = 0; i < 5 - currentStarsLength; i++) {
      stars.push(
        <MdOutlineStarBorder
          style={{ width: `${size}`, height: `${size}`, color: `${color}` }}
          key={stars.length + i}
        />
      );
    }

    setStarRatingArray(stars);
  }, [rating, size, color]);

  return (
    <div>
      <div className={`flex items-center justify-start ${className}`}>
        {starRatingArray}
      </div>
    </div>
  );
}
