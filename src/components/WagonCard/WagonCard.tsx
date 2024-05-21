import arrowRight from '../../assets/arrow-right-yellow-bg.svg';
import train from '../../assets/train-yellow-icon.svg';
import rightArrow from '../../assets/arrow-yellow-right.svg';
import clock from '../../assets/clock-yellow.svg';
import { useAppSelector } from '../../hooks/redux';
import { capitalize } from '../../utils/capitalize';
import { format, fromUnixTime, intervalToDuration } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/actions';
import { WagonChoice } from '../WagonChoice/WagonChoice';
import React, { useEffect, useState } from 'react';

interface IPassengers {
  [key: string]: number,
  adults: number,
  children: number,
  kids: number,
}

interface IWagonCardProps {
  from: boolean,
  id: string,
  onLoad: (loading: boolean) => void
}

export const WagonCard = ({ from, id, onLoad }: IWagonCardProps) => {
  const { chosenDestination, stage } = useAppSelector(state => state.railTickets);
  const { setStage, setPassengersQuantity, setPassengersTypes } = useActions();

  const [fromDuration, setFromDuration] = useState({
    hours: 0,
    minutes: 0,
  });

  const [passengers, setPassengers] = useState<IPassengers>({
    adults: 0,
    children: 0,
    kids: 0,
  });

  const navigate = useNavigate();

  const toDuration = intervalToDuration({
    start: fromUnixTime(chosenDestination?.departure.from.datetime || 0),
    end: fromUnixTime(chosenDestination?.departure.to.datetime || 0),
  })

  const handleChangeTrain = () => {
    setStage(1);
    navigate('/train');
  }

  const handlePassengersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let nValue = Number(value);
    if (name === 'kids' && nValue > passengers.adults) nValue = passengers.adults;
    if (name === 'adults' && nValue < passengers.kids) passengers.kids = nValue;
    if (name === 'children' && !passengers.adults) return;
    setPassengers((prev) => ({
      ...prev,
      [name]: !value ? 0 : nValue <= 3 ? nValue : 3,
    }))
  }

  const handleLoad = (loading: boolean) => onLoad(loading);

  useEffect(() => {
    if (!chosenDestination?.arrival) return;
    const fromDuration = intervalToDuration({
      start: fromUnixTime(chosenDestination.arrival.from.datetime) || 0,
      end: fromUnixTime(chosenDestination.arrival.to.datetime) || 0,
    })
    setFromDuration({
      hours: fromDuration.hours || 0,
      minutes: fromDuration.minutes || 0,
    })
  }, [chosenDestination])

  useEffect(() => {
    if (!passengers.adults) {
      passengers.children = 0;
      passengers.kids = 0;
    }
    const number = Object.values(passengers).reduce((acc, n) => acc + n) - passengers.kids;
    setPassengersQuantity(number);
  }, [passengers])

  useEffect(() => {
    if (stage !== 3) return;
    setPassengersTypes(passengers);
  }, [stage])

  return (
    <div className="wagon-card">
      <div className={from ? 'wagon-card__choose-another wagon-card__choose-another_from' : 'wagon-card__choose-another'}>
        <img src={arrowRight} alt="" />
        <button className='wagon-card__button' onClick={handleChangeTrain}>Выбрать другой поезд</button>
      </div>
      <div className='wagon-card__train-details'>
        <div className='wagon-card__left'>
          <img src={train} alt="" />
          <div>
            <span className="wagon-card__train-number">
              {from ? chosenDestination?.arrival.train.name : chosenDestination?.departure.train.name}
            </span>
            <div className="wagon-card__route">
              <p>
                {from ? capitalize(chosenDestination?.arrival.from.city.name) : capitalize(chosenDestination?.departure.from.city.name)}
              </p>
              {chosenDestination?.arrival &&
              <p>
                {from ? capitalize(chosenDestination?.departure.from.city.name) : capitalize(chosenDestination?.arrival.from.city.name)}
              </p>}
            </div>
          </div>
        </div>
        <div className='wagon-card__center'>
          <div className='wagon-card__part'>
            <span className='wagon-card__time'>
              {from 
              ? format(fromUnixTime(chosenDestination?.arrival.to.datetime || 0), 'HH:mm')
              : format(fromUnixTime(chosenDestination?.departure.from.datetime || 0), 'HH:mm')}
            </span>
            <span className='wagon-card__city'>{capitalize(chosenDestination?.departure.from.city.name)}</span>
            <div className='wagon-card__station'>{chosenDestination?.departure.from.railway_station_name}</div>
          </div>
          <img src={rightArrow} className={from ? 'wagon-card__arrow-left' : 'wagon-card__arrow-right'} alt="" />
          <div className='wagon-card__part'>
            <span className='wagon-card__time'>
              {from
              ? format(fromUnixTime(chosenDestination?.arrival.from.datetime || 0), 'HH:mm')
              : format(fromUnixTime(chosenDestination?.departure.to.datetime || 0), 'HH:mm')}
            </span>
            {chosenDestination?.arrival && 
            <span className='wagon-card__city'>{capitalize(chosenDestination?.arrival.from.city.name)}</span>}
            {chosenDestination?.arrival &&
            <div className='wagon-card__station'>{chosenDestination?.arrival.from.railway_station_name}</div>}
          </div>
        </div>
        <div className='wagon-card__right'>
          <img src={clock} alt="" />
          <div>
            <span>{from ? `${fromDuration.hours} часов` : `${toDuration.hours} часов`}</span>
            <span>{from ? `${fromDuration.minutes} минут` : `${toDuration.minutes} минут`}</span>
          </div>
        </div>
      </div>

      {!from &&
      <div className='wagon-card__quantity'>
        <h3>Количество билетов</h3>
        <div className='wagon-card__quantity-wrapper'>
          <div className='wagon-card__quantity-part'>
            <input
              value={passengers.adults || ''}
              onChange={handlePassengersChange}
              name='adults'
              type='number'
              max={3}
              min={0}
              placeholder='Взрослых'
            />
            <span>Можно добавить 3 взрослых пассажиров </span>
          </div>
          <div className='wagon-card__quantity-part'>
            <input
              value={passengers.children || ''}
              onChange={handlePassengersChange}
              name='children'
              type='number'
              max={3}
              min={0}
              placeholder='Детских'
            />
            <span>
              Можно добавить 3 детей до 10 лет. 
              Свое место в вагоне, как у взрослых, но дешевле на 50%
            </span>
          </div>
          <div className='wagon-card__quantity-part'>
            <input
              value={passengers.kids || ''}
              onChange={handlePassengersChange}
              name='kids'
              type='number'
              max={3}
              min={0}
              placeholder='Детских «без места»'
            />
            <span>
              Можно добавить 3 детей до 3 лет без оплаты и занимаемого места
            </span>
          </div>
        </div>
      </div>}
      <WagonChoice id={id} from={from} onLoad={handleLoad} />
    </div>
  )
}
