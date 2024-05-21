import train from '../../assets/train-gray-icon.svg';
import rightArrow from '../../assets/arrow-yellow-right.svg';
import ruble from '../../assets/ruble-sign.svg';
import { ChangeButton } from '../ChangeButton/ChangeButton';
import { TrainOptionsSVG } from '../TrainOptionsSVG/TrainOptionsSVG';
import { ITrainInfo } from '../../models/models';
import { format, fromUnixTime, intervalToDuration } from "date-fns";
import { capitalize } from '../../utils/capitalize';
import { SeatsDetails } from '../SeatsDetails/SeatsDetails';
import { useActions } from '../../hooks/actions';
import { useEffect, useState } from 'react';

export const TrainCard = ({ buttonType, item }: { buttonType: string, item: ITrainInfo }) => {
  const { departure, arrival } = item;
  const { setStage, setChosenDestination } = useActions();
  
  const [fromDuration, setFromDuration] = useState({
    hours: 0,
    minutes: 0,
  });

  const handleChooseTrainClick = () => {
    setChosenDestination(item);
    setStage(2);
  }

  const toDuration = intervalToDuration({
    start: fromUnixTime(departure.from?.datetime) || 0,
    end: fromUnixTime(departure.to.datetime) || 0,
  })

  useEffect(() => {
    if (!item.arrival) return;
    const fromDuration = intervalToDuration({
      start: fromUnixTime(arrival?.from?.datetime) || 0,
      end: fromUnixTime(arrival?.to.datetime) || 0,
    })
    setFromDuration({
      hours: fromDuration.hours || 0,
      minutes: fromDuration.minutes || 0,
    })
  }, [item])

  return (
    <article className="train-card">
      <div className="train-card__wrapper-left">
        <img src={train} alt="" />
        <span className="train-card__train-number">{departure.train.name}</span>
        <div>
          <p>{departure.from.city.name}</p>
          <p>{departure.to.city.name}</p>
        </div>
      </div>

      <div className="train-card__wrapper-middle">
        <div className="train-card__container">
          <div className="train-card__section">
            <div className='train-card__part'>
              <span className='train-card__time'>{format(fromUnixTime(departure.from.datetime), 'HH:mm')}</span>
              <span className='train-card__city'>{capitalize(departure.from.city.name)}</span>
              <div className='train-card__station'>{departure.from.railway_station_name}</div>
            </div>
            <div className='train-card__part'>
              <span className='train-card__duration'>{`${toDuration.hours}:${toDuration.minutes}`}</span>
              <img src={rightArrow} alt="" />
            </div>
            <div className='train-card__part'>
              <span className='train-card__time'>{format(fromUnixTime(departure.to.datetime), 'HH:mm')}</span>
              <span className='train-card__city'>{capitalize(departure.to.city.name)}</span>
              <div className='train-card__station'>{departure.to.railway_station_name}</div>
            </div>
          </div>

          {item.arrival &&
          <div className="train-card__section">
            <div className='train-card__part'>
              <span className='train-card__time'>{format(fromUnixTime(arrival.to.datetime), 'HH:mm')}</span>
              <span className='train-card__city'>{capitalize(arrival.to.city.name)}</span>
              <div className='train-card__station'>{arrival.to.railway_station_name}</div>
            </div>
            <div className='train-card__part'>
              <span className='train-card__duration'>{`${fromDuration.hours}:${fromDuration.minutes}`}</span>
              <img style={{ transform: 'rotate(180deg)' }} src={rightArrow} alt="" />
            </div>
            <div className='train-card__part'>
              <span className='train-card__time'>{format(fromUnixTime(arrival.from.datetime), 'HH:mm')}</span>
              <span className='train-card__city'>{capitalize(arrival.from.city.name)}</span>
              <div className='train-card__station'>{arrival.from.railway_station_name}</div>
            </div>
          </div>}

        </div>
      </div>

      <div className="train-card__wrapper-right">
        <div className="train-card__seats">
          {departure.available_seats_info.first &&
          <div className="train-card__seat">
            <div className="train-card__seat-type">Люкс</div>
            <div className="train-card__seat-amount">{departure.available_seats_info.first}</div>
            <div>от <span>{departure.price_info.first?.bottom_price}</span> <img src={ruble} alt="" /> </div>
            <div className='train-card__seat-details'>
              <SeatsDetails prices={departure.price_info.first} type='first' />
            </div>
          </div>}

          {departure.available_seats_info.second &&
          <div className="train-card__seat">
            <div className="train-card__seat-type">Купе</div>
            <div className="train-card__seat-amount">{departure.available_seats_info.second}</div>
            <div>от <span>{departure.price_info.second?.bottom_price}</span> <img src={ruble} alt="" /> </div>
            <div className='train-card__seat-details'>
              <SeatsDetails prices={departure.price_info.second} type='second' />
            </div>
          </div>}

          {departure.available_seats_info.third &&
          <div className="train-card__seat">
            <div className="train-card__seat-type">Плацкарт</div>
            <div className="train-card__seat-amount">{departure.available_seats_info.third}</div>
            <div>от <span>{departure.price_info.third?.bottom_price}</span> <img src={ruble} alt="" /> </div>
            <div className='train-card__seat-details'>
              <SeatsDetails prices={departure.price_info.third} type='third' />
            </div>
          </div>}

          {departure.available_seats_info.fourth &&
          <div className="train-card__seat">
            <div className="train-card__seat-type">Сидячий</div>
            <div className="train-card__seat-amount">{departure.available_seats_info.fourth}</div>
            <div>от <span>{departure.price_info.fourth?.bottom_price}</span> <img src={ruble} alt="" /> </div>
            <div className='train-card__seat-details'>
              <SeatsDetails prices={departure.price_info.fourth} type='fourth' />
            </div>
          </div>}
        </div>
        
        <div className='train-card__extra'>
          <TrainOptionsSVG wifi={departure.have_wifi} express={departure.is_express} />
          {buttonType === 'primary'
            ? <button onClick={handleChooseTrainClick} className='train-card-button'>Выбрать места</button>
            : <ChangeButton type='card' />
          }
        </div>
      </div>
      

    </article>
  )
}
