import arrowRight from '../../assets/arrow-right-yellow-bg.svg';
import train from '../../assets/train-yellow-icon.svg';
import rightArrow from '../../assets/arrow-yellow-right.svg';
import clock from '../../assets/clock-yellow.svg';
import { WagonType } from '../WagonType/WagonType';
import { WagonChoice } from '../WagonChoice/WagonChoice';
import { useState } from 'react';

export const WagonCard = () => {
  const [wagonClass, setWagonClass] = useState<number | null>(null);

  const handleClassChange = (wagonClass: number | null) => {
    setWagonClass(wagonClass);
  }

  return (
    <div className="wagon-card">
      <div className='wagon-card__choose-another'>
        <img src={arrowRight} alt="" />
        <button className='wagon-card__choose-another_button'>Выбрать другой поезд</button>
      </div>
      <div className='wagon-card__train-details'>
        <div className='wagon-card__train-details_left'>
          <img src={train} alt="" />
          <div>
            <span className="wagon-card__train-details_left_train-number">116C</span>
            <div className="wagon-card__train-details_left_route">
              <p>Адлер</p>
              <p>Москва</p>
              <p>Санкт-Петербург</p>
            </div>
          </div>
        </div>
        <div className='wagon-card__train-details_center'>
          <div className='wagon-card__train-details_part'>
            <span className='wagon-card__train-details_time'>00:10</span>
            <span className='wagon-card__train-details_city'>Москва</span>
            <div className='wagon-card__train-details_station'>Курский вокзал</div>
          </div>
          <img src={rightArrow} alt="" />
          <div className='wagon-card__train-details_part'>
            <span className='wagon-card__train-details_time'>09:52</span>
            <span className='wagon-card__train-details_city'>Санкт-Петербург</span>
            <div className='wagon-card__train-details_station'>Ладожский вокзал</div>
          </div>
        </div>
        <div className='wagon-card__train-details_right'>
          <img src={clock} alt="" />
          <div>
            <span>9 часов</span>
            <span>42 минуты</span>
          </div>
        </div>
      </div>

      <div className='wagon-card__quantity'>
        <h3>Количество билетов</h3>
        <div className='wagon-card__quantity_wrapper'>
          <div className='wagon-card__quantity_part'>
            <input type='number' max={3} min={0} placeholder='Взрослых — 2'></input>
            <span>Можно добавить еще 3 пассажиров </span>
          </div>
          <div className='wagon-card__quantity_part'>
            <input type='number' max={3} min={0} placeholder='Детских — 1'></input>
            <span>Можно добавить еще 3 детей до 10 лет. 
              Свое место в вагоне, как у взрослых, но дешевле
              в среднем на 50-65%
            </span>
          </div>
          <div className='wagon-card__quantity_part'>
            <input type='number' max={3} min={0} placeholder='Детских «без места» — 0'></input>
          </div>
        </div>
      </div>

      <div className='wagon-card__wagon-type'>
        <h3>Тип вагона</h3>
        <WagonChoice onChange={handleClassChange} />
      </div>
      <WagonType wagonClass={wagonClass} />
    </div>
  )
}
