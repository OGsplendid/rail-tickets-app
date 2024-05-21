import { useEffect, useState } from 'react';
import ruble from '../../assets/ruble-sign.svg';
import { IWagon } from '../../models/models';
import { WagonClassFirst } from '../WagonClasses/WagonClassFirst/WagonClassFirst';
import { WagonClassFourth } from '../WagonClasses/WagonClassFourth/WagonClassFourth';
import { WagonClassSecond } from '../WagonClasses/WagonClassSecond/WagonClassSecond';
import { WagonClassThird } from '../WagonClasses/WagonClassThird/WagonClassThird';
import { WagonService } from '../WagonService/WagonService';

interface IWagonTypeProps {
  wagonClass: string | null,
  wagonData: IWagon[] | [],
  from: boolean,
}

export const WagonType = ({ wagonClass, wagonData, from }: IWagonTypeProps) => {
  const [activeWagons, setActiveWagons] = useState<IWagon[] | []>([]);

  useEffect(() => {
    setActiveWagons([]);
  }, [wagonClass])

  if (!wagonData.length || !wagonClass) return '';

  const handleWagonNumberClick = (wagon: IWagon) => {
    if (activeWagons.some((w) => w.coach._id === wagon.coach._id)) {
      const result = activeWagons.filter((w) => w.coach._id !== wagon.coach._id);
      setActiveWagons(result);
    } else {
      setActiveWagons([...activeWagons, wagon]);
    }
  }

  return (
    <div className="wagon-type">

      <div className="wagon-type__numbers">
        <div className="wagon-type__wagons">
          <h6>Вагоны</h6>
          {wagonData.map((d) => (
            <span
              key={d.coach._id}
              className={activeWagons.some((w) => w.coach._id === d.coach._id) ? 'wagonActive' : ''}
              onClick={() => handleWagonNumberClick(d)}
            >
              {d.coach.name[d.coach.name.length - 2] + d.coach.name[d.coach.name.length - 1]}
            </span>
          ))}
        </div>
        <p className="wagon-type__info">Нумерация вагонов начинается с головы поезда</p>
      </div>

      {activeWagons && activeWagons.map((w) => (
        <div key={w.coach._id}>
        <div className="wagon-type__options">
          <div className="wagon-type__number">
            <h5>{w.coach.name[w.coach.name.length - 2] + w.coach.name[w.coach.name.length - 1]}</h5>
            <span>вагон</span>
          </div>

          <div className="wagon-type__list">
            <div className="wagon-type__seats">
              <div>
                <h6>Места</h6>
                <span className="wagon-type__total">{w.coach.available_seats}</span>
              </div>
              {w.coach.top_price &&
                <div className="wagon-type__wrapper">
                  <p>Верхние</p>
                </div>}
              {w.coach.bottom_price &&
                <div className="wagon-type__wrapper">
                  <p>Нижние</p>
                </div>}
              {w.coach.side_price ?
                <div className="wagon-type__wrapper">
                  <p>Боковые</p>
                </div> : ''}
            </div>

            <div className="wagon-type__price">
              <h6>Стоимость</h6>
              {w.coach.top_price &&
                <div className="wagon-type__wrapper wagon-type__wrapper_price">
                  <span>{w.coach.top_price}</span>
                  <img src={ruble} alt="ruble" />
                </div>}
              {w.coach.bottom_price &&
                <div className="wagon-type__wrapper wagon-type__wrapper_price">
                  <span>{w.coach.bottom_price}</span>
                  <img src={ruble} alt="ruble" />
                </div>}
              {w.coach.side_price ?
              <div className="wagon-type__wrapper wagon-type__wrapper_price">
                <span>{w.coach.side_price}</span>
                <img src={ruble} alt="ruble" />
              </div> : ''}
            </div>

            <div className="wagon-type__extra">
              <h6>Обслуживание<span>ФПК</span></h6>
              <WagonService coach={w.coach} />
              <p>{Math.floor(Math.random() * 30)} человек выбирают <br /> места в этом поезде</p>
            </div>
          </div>
        </div>
        {wagonClass === 'first' && <WagonClassFirst wagon={w} from={from} />}
        {wagonClass === 'second' && <WagonClassSecond wagon={w} from={from} />}
        {wagonClass === 'third' && <WagonClassThird wagon={w} from={from} />}
        {wagonClass === 'fourth' && <WagonClassFourth wagon={w} from={from} />}
        </div>
      ))}
    </div>
  )
}
