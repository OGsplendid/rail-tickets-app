import { useEffect, useState } from "react";
import { ISeatsArr, IWagonProps, TSeatNumber } from "../WagonClassFourth/WagonClassFourth";
import { useAppSelector } from "../../../hooks/redux";
import { useActions } from "../../../hooks/actions";

export const WagonClassFirst = ({ from, wagon }: IWagonProps) => {
  const [chosen, setChosen] = useState<TSeatNumber[] | []>([]);
  const [sum, setSum] = useState(0);

  const { seats } = wagon;
  const wagonNumber = wagon.coach.name.slice(-2);
  const id = wagon.coach._id;

  const { passengersQuantity, seatsQuantity, stage } = useAppSelector(state => state.railTickets);
  const { setSeatsQuantity, setSeats, setTotalSum } = useActions();

  const list = [...Array(18)].map((_, i) => i + 1);
  list.splice(16, 1);
  list.splice(1, 1);

  const arr = seats.reduce((acc, s) => {
    return {
      ...acc,
      [s.index]: s.available,
    };
  }, {} as ISeatsArr)

  const handleClick = (index: number) => {
    const seatPrice = wagon.coach.bottom_price;
    if (chosen.some((w) => w.seat_number === index)) {
      const result = chosen.filter((w) => w.seat_number !== index);
      setChosen(result);
      setSeatsQuantity(from ?
        { departure: false, number: seatsQuantity.arrival - 1, }
        :
        { departure: true, number: seatsQuantity.departure - 1, });
      setSum((prev) => prev - seatPrice);
    } else {
      if (from && passengersQuantity === seatsQuantity.arrival
        || !from && passengersQuantity === seatsQuantity.departure) return;
        
      setChosen((prev) => [...prev, {
        coach_id: id,
        seat_number: index,
      }])
      setSeatsQuantity(from ?
        { departure: false, number: seatsQuantity.arrival + 1, }
        :
        { departure: true, number: seatsQuantity.departure + 1, });
      setSum((prev) => prev + seatPrice);
    }
  }

  useEffect(() => {
    if (stage !== 3) return;
    setSeats({
      from,
      chosen,
    });
    setTotalSum(sum);
  }, [stage])

  return (
    <section className="wagon-class-first">
      <div className="wagon-class-first__wagon-number">{wagonNumber}</div>
      <div className="wagon-class-first__wrapper">
        <ul>
          {list.map((n) => (
            <li
              className={`wagon-class-first__seat ${!arr[n]
                ? 'wagon-class-first__seat_unavailable' 
                : chosen.some((w) => w.seat_number === n) 
                ? 'wagon-class-first__seat_chosen' 
                : ''}`}
              key={n}
              onClick={() => handleClick(n)}
            >
              {n}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
