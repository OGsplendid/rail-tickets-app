import { useState } from "react";
import { fillSeatsArray } from "../../../utils/fillSeatsArray";

export const WagonClassThird = () => {
  const [chosen, setChosen] = useState<number[] | []>([]);

  const list = fillSeatsArray(33);
  const asideList = [...Array(49)].map((_, i) => i + 1).slice(32, 48);

  const handleClick = (index: number) => {
    if (chosen.length <= 6) setChosen((prev) => [...prev, index]);
  }

  return (
    <div className="wagon-class-third">
      <div className="wagon-class-third__wagon-number">02</div>
      <div className="wagon-class-third__wrapper">
        <ul>
          {list.map((n) => (
            <li onClick={() => handleClick(n)} className="wagon-class-third__seat" key={n}>{n}</li>
          ))}
        </ul>
        <ul>
          {asideList.map((n) => (
            <li onClick={() => handleClick(n)} className="wagon-class-third__seat aside-seat" key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
