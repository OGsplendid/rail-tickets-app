import arrowRightYellowBg from '../../assets/arrow-right-yellow-bg.svg';
import arrowLeftYellowBg from '../../assets/arrow-left-yellow-bg.svg';
import arrowLeft from '../../assets/arrow-yellow-left.svg';
import arrowRight from '../../assets/arrow-yellow-right.svg';
import passengerIconYellow from '../../assets/passengerIconYellow.svg';
import ruble from '../../assets/ruble-sign.svg';
import { useEffect, useState } from 'react';
import { SVGplusIcon, SVGminusIcon } from '../../SVG/SVGIcons/SVGIcons';
import { useAppSelector } from '../../hooks/redux';
import { format, fromUnixTime, intervalToDuration } from 'date-fns';
import { capitalize } from '../../utils/capitalize';

export const AsideDetails = () => {
  const [oneWayOpen, setOneWayOpen] = useState(true);
  const [twoWaysOpen, setTwoWaysOpen] = useState(true);
  const [passengersOpen, setPassengersOpen] = useState(true);
  const [fromDuration, setFromDuration] = useState({
    hours: 0,
    minutes: 0,
  });

  const {
    chosenDestination: dest,
    passengersTypes: passTypes,
    totalSum,
  } = useAppSelector(state => state.railTickets);

  const toDuration = intervalToDuration({
    start: fromUnixTime(dest?.departure.from.datetime || 0),
    end: fromUnixTime(dest?.departure.to.datetime || 0),
  });

  const part = passTypes.children && passTypes.kids
    ? Math.floor(totalSum / (passTypes.children + passTypes.adults + passTypes.kids))
    : passTypes.children && !passTypes.kids
    ? Math.floor(totalSum / (passTypes.children + passTypes.adults))
    : passTypes.kids && !passTypes.children
    ? Math.floor(totalSum / (passTypes.kids + passTypes.adults))
    : Math.floor(totalSum / passTypes.adults);
  const adultsPrice = Math.round(part * passTypes.adults);
  const childrenPrice = Math.round(part / 2 * (passTypes.children || 0));

  useEffect(() => {
    if (!dest?.arrival) return;
    const fromDuration = intervalToDuration({
      start: fromUnixTime(dest.arrival?.from?.datetime) || 0,
      end: fromUnixTime(dest.arrival?.to.datetime) || 0,
    })
    setFromDuration({
      hours: fromDuration.hours || 0,
      minutes: fromDuration.minutes || 0,
    })
  }, [dest])

  return (
    <div className="aside-details">
      <h3>детали поездки</h3>
      <section className="aside-details__part">
          <div>
            <img src={arrowRightYellowBg} alt="" />
            <h4>Туда</h4>
          </div>
          <span className='aside-details__date'>{format(fromUnixTime(dest?.departure.from.datetime || 0), 'dd.MM.yyyy')}</span>
          <span className="aside-details__sign" onClick={() => setOneWayOpen((prev) => !prev)}>
            {oneWayOpen ? <SVGminusIcon /> : <SVGplusIcon />}
          </span>
      </section>

      {oneWayOpen && <section className='aside-details__info'>
        <div className='aside-details__info_wrapper'>
          <h6>Название поезда</h6>
          <span className='aside-details__info_wrapper_train-number'>{dest?.departure.train.name}</span>
        </div>
        <div className='aside-details__info_wrapper'>
          <h6>Маршрут</h6>
          <div className='aside-details__info_wrapper_route'>
            <span className='aside-details__info_wrapper_name'>{capitalize(dest?.departure.from.city.name)}</span>
            <span className='aside-details__info_wrapper_name'>{capitalize(dest?.departure.to.city.name)}</span>
          </div>
        </div>

        <div className='aside-details__info_wrapper'>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_time'>{format(fromUnixTime(dest?.departure.from.datetime || 0), 'HH:mm')}</span>
            <span className='aside-details__info_wrapper_part_date'>{format(fromUnixTime(dest?.departure.from.datetime || 0), 'dd.MM.yyyy')}</span>
          </div>
          <div className='aside-details__info_wrapper_middle'>
            <span  className='aside-details__info_wrapper_middle_duration'>{`${toDuration.hours}:${toDuration.minutes}`}</span>
            <img src={arrowRight} alt="" />
          </div>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_time'>{format(fromUnixTime(dest?.departure.to.datetime || 0), 'HH:mm')}</span>
            <span className='aside-details__info_wrapper_part_date'>{format(fromUnixTime(dest?.departure.to.datetime || 0), 'dd.MM.yyyy')}</span>
          </div>
        </div>
        <div className='aside-details__info_wrapper'>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_city'>{capitalize(dest?.departure.from.city.name)}</span>
            <span className='aside-details__info_wrapper_part_station'>{dest?.departure.from.railway_station_name}</span>
          </div>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_city'>{capitalize(dest?.departure.to.city.name)}</span>
            <div className='aside-details__info_wrapper_part_station'>{dest?.departure.to.railway_station_name}</div>
          </div>
        </div>
      </section>}

      {dest?.arrival &&
      <section className="aside-details__part">
          <div>
            <img src={arrowLeftYellowBg} alt="" />
            <h4>Обратно</h4>
          </div>
          <span className='aside-details__part_date'>{format(fromUnixTime(dest?.arrival.from.datetime || 0), 'dd.MM.yyyy')}</span>
          <span className="aside-details__part_sign" onClick={() => setTwoWaysOpen((prev) => !prev)}>
            {twoWaysOpen ? <SVGminusIcon /> : <SVGplusIcon />}
          </span>
      </section>}

      {twoWaysOpen && dest?.arrival &&
      <section className='aside-details__info'>
        <div className='aside-details__info_wrapper'>
          <h6>Название поезда</h6>
          <span className='aside-details__info_wrapper_train-number'>{dest?.arrival.train.name}</span>
        </div>
        <div className='aside-details__info_wrapper'>
          <h6>Маршрут</h6>
          <div className='aside-details__info_wrapper_route'>
            <span className='aside-details__info_wrapper_name'>{capitalize(dest?.arrival.from.city.name)}</span>
            <span className='aside-details__info_wrapper_name'>{capitalize(dest?.arrival.to.city.name)}</span>
          </div>
        </div>

        <div className='aside-details__info_wrapper'>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_time'>{format(fromUnixTime(dest?.arrival.to.datetime || 0), 'HH:mm')}</span>
            <span className='aside-details__info_wrapper_part_date'>{format(fromUnixTime(dest?.arrival.to.datetime || 0), 'dd.MM.yyyy')}</span>
          </div>
          <div className='aside-details__info_wrapper_middle'>
            <span  className='aside-details__info_wrapper_middle_duration'>{`${fromDuration.hours}:${fromDuration.minutes}`}</span>
            <img src={arrowLeft} alt="" />
          </div>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_time'>{format(fromUnixTime(dest?.arrival.from.datetime || 0), 'HH:mm')}</span>
            <span className='aside-details__info_wrapper_part_date'>{format(fromUnixTime(dest?.arrival.from.datetime || 0), 'dd.MM.yyyy')}</span>
          </div>
        </div>
        <div className='aside-details__info_wrapper'>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_city'>{capitalize(dest?.arrival.to.city.name)}</span>
            <span className='aside-details__info_wrapper_part_station'>{dest?.arrival.to.railway_station_name}</span>
          </div>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_city'>{capitalize(dest?.arrival.from.city.name)}</span>
            <div className='aside-details__info_wrapper_part_station'>{dest?.arrival.from.railway_station_name}</div>
          </div>
        </div>
      </section>}

      <section className="aside-details__part">
          <div>
            <img src={passengerIconYellow} alt="" />
            <h4>Пассажиры</h4>
          </div>
          <span className="aside-details__part_sign" onClick={() => setPassengersOpen((prev) => !prev)}>
            {passengersOpen ? <SVGminusIcon /> : <SVGplusIcon />}
          </span>
      </section>

      {passengersOpen && <section className='aside-details__info'>
        <div className='aside-details__info_wrapper'>
          <h6>{`${passTypes.adults} ${passTypes.adults > 1 ? 'взрослых' : 'взрослый'}`}</h6>
          <span className='aside-details__info_wrapper_train-number'>
            {adultsPrice}
          </span>
        </div>
        <div className='aside-details__info_wrapper'>
          <h6>
            {`${(passTypes.children || 0) + (passTypes.kids || 0)} ${passTypes.children && (passTypes.children + (passTypes.kids || 0)) > 1 ? 'ребёнка' : 'ребёнок'}`}
          </h6>
          <span className='aside-details__info_wrapper_train-number'>
            {childrenPrice}
          </span>
        </div>
      </section>}

      <section className="aside-details__part">
          <h4>Итог</h4>
          <div>
            <span className='aside-details__part_total-sum'>
              {adultsPrice + childrenPrice}
            </span>
            <img className="aside-details__part_ruble-sign" src={ruble} alt="" />
          </div>
      </section>
    </div>
  )
}
