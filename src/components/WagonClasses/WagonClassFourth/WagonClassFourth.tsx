import { useState } from "react";
import { fillSeatsArray } from "../../../utils/fillSeatsArray";

export const WagonClassFourth = () => {
  const [chosen, setChosen] = useState<number[] | []>([]);

  const list = fillSeatsArray(33);
  const arr1 = fillSeatsArray(65).slice(15, 31);
  const arr2 = fillSeatsArray(65).slice(48, 63);
  const list2 = [...arr1, ...arr2];

  const handleClick = (index: number) => {
    if (chosen.length <= 6) setChosen((prev) => [...prev, index]);
  }

  return (
    <div className="wagon-class-fourth">
      <div className="wagon-class-fourth__wagon-number">02</div>
      <div className="wagon-class-fourth__wrapper">
        <ul>
          {list.map((n) => (
            <li onClick={() => handleClick(n)} className="wagon-class-fourth__seat" key={n}>{n}</li>
          ))}
        </ul>
        <ul className="wagon-class-fourth__second-row">
          {list2.map((n) => (
            <li onClick={() => handleClick(n)} className="wagon-class-fourth__seat" key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
