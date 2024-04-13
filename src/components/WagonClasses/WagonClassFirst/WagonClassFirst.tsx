import { useState } from "react";

export const WagonClassFirst = () => {
  const [chosen, setChosen] = useState<number[] | []>([]);

  const list = [...Array(18)].map((_, i) => i + 1);
  list.splice(16, 1);
  list.splice(1, 1);

  const handleClick = (index: number) => {
    if (chosen.length <= 6) setChosen((prev) => [...prev, index]);
  }

  return (
    <section className="wagon-class-first">
      <div className="wagon-class-first__wagon-number">02</div>
      <div className="wagon-class-first__wrapper">
        <ul>
          {list.map((n) => (
            <li onClick={() => handleClick(n)} className="wagon-class-first__seat" key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
