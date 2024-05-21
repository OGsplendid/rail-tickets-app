import { useEffect, useState } from "react";
import { fillSeatsArray } from "../../../utils/fillSeatsArray";
import { IWagon } from "../../../models/models";
import { useAppSelector } from "../../../hooks/redux";
import { useActions } from "../../../hooks/actions";

export interface IWagonProps {
  from: boolean,
  wagon: IWagon,
}

export interface ISeatsArr {
  [key: number]: boolean,
}

export type TSeatNumber = {
  coach_id: string,
  seat_number: number,
}

export const WagonClassFourth = ({ from, wagon }: IWagonProps) => {
  const [chosen, setChosen] = useState<TSeatNumber[] | []>([]);
  const [sum, setSum] = useState(0);

  const { seats } = wagon;
  const wagonNumber = wagon.coach.name.slice(-2);
  const id = wagon.coach._id;

  const { passengersQuantity, seatsQuantity, stage } = useAppSelector(state => state.railTickets);
  const { setSeatsQuantity, setSeats, setTotalSum } = useActions();

  const list = fillSeatsArray(33);
  const arr1 = fillSeatsArray(65).slice(15, 31);
  const arr2 = fillSeatsArray(65).slice(48, 63);
  const list2 = [...arr1, ...arr2];

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
    <div className="wagon-class-fourth">
      <div className="wagon-class-fourth__wagon-number">{wagonNumber}</div>
      <div className="wagon-class-fourth__wrapper">
        <ul>
          {list.map((n: number) => (
            <li
              className={`wagon-class-fourth__seat ${!arr[n]
                ? 'wagon-class-fourth__seat_unavailable' 
                : chosen.some((w) => w.seat_number === n) 
                ? 'wagon-class-fourth__seat_chosen' 
                : ''}`}
              key={n}
              onClick={() => handleClick(n)}
            >
              {n}
            </li>
          ))}
        </ul>
        <ul className="wagon-class-fourth__second-row">
          {list2.map((n) => (
            <li
              className={`wagon-class-fourth__seat ${!arr[n]
                ? 'wagon-class-fourth__seat_unavailable' 
                : chosen.some((w) => w.seat_number === n) 
                ? 'wagon-class-fourth__seat_chosen' 
                : ''}`}
              key={n}
              onClick={() => handleClick(n)}
            >
              {n}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
