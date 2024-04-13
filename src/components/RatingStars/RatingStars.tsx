import { useState } from "react";
import { SVGstar } from "../../SVG/SVGstar"

export const RatingStars = () => {
  const [empty, setEmpty] = useState(5);
  const [filled, setFilled] = useState(0);

  const emptyArr = Array(empty).fill(<SVGstar fill="none" />);
  const filledArr = Array(filled).fill(<SVGstar fill="white" />);
  const finalArr = [...filledArr, ...emptyArr];

  const handleClick = (index: number) => {
    setFilled(index + 1);
    setEmpty(4 - index);
  }

  return (
    <ul className="rating-stars">
      {finalArr.map((star, index) => (
        <li key={index} onClick={() => handleClick(index)}>{star}</li>
      ))}
    </ul>
  )
}
