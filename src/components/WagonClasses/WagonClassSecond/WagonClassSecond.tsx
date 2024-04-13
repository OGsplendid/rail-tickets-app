import { useState } from "react";
import { fillSeatsArray } from "../../../utils/fillSeatsArray";

export const WagonClassSecond = () => {
  const [chosen, setChosen] = useState<number[] | []>([]);

  const list = fillSeatsArray(33);

  const handleClick = (index: number) => {
    if (chosen.length <= 6) setChosen((prev) => [...prev, index]);
  }

  return (
    <div className="wagon-class-second">
      <div className="wagon-class-second__wagon-number">02</div>
      <div className="wagon-class-second__wrapper">
        <ul>
          {list.map((n) => (
            <li onClick={() => handleClick(n)} className="wagon-class-second__seat" key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
