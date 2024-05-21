import { useEffect, useState } from 'react';
import ruble from '../../assets/ruble-sign.svg';
import { TrainOptionsSVG } from '../TrainOptionsSVG/TrainOptionsSVG';
import { ITrainInfo } from '../../models/models';
import { capitalize } from '../../utils/capitalize';

export const LastTickets = () => {
  const [lastTickets, setLastTickets] = useState<ITrainInfo[]>();

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch( 'https://students.netoservices.ru/fe-diplom/routes/last');
      const data = await response.json();
      setLastTickets(data);
    }
    fetchTickets();
  }, [])

  return (
    <section className="last-tickets">
      <h3 className="last-tickets__title">последние билеты</h3>

      {lastTickets && lastTickets.map((t) => (
        <article className="last-tickets__card" key={t.departure._id}>
          <div className="last-tickets__wrapper">
            <div>
              <h5 className="last-tickets__city">{capitalize(t.departure.from.city.name)}</h5>
              <div className="last-tickets__station">{t.departure.from.railway_station_name}</div>
            </div>
            <div className='last-tickets__wrapper_to'>
              <h5 className="last-tickets__city">{capitalize(t.departure.to.city.name)}</h5>
              <div className="last-tickets__station">{t.departure.to.railway_station_name}</div>
            </div>
          </div>
          <div className='last-tickets__price'>
            <TrainOptionsSVG wifi={t.departure.have_wifi} express={t.departure.is_express} />
            <div>
              от <span>{t.min_price}</span> <img src={ruble} alt="рублей" />
            </div>
          </div>
        </article>
      ))}

    </section>
  )
}