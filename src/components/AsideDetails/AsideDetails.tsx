import arrowRightYellowBg from '../../assets/arrow-right-yellow-bg.svg';
import arrowLeftYellowBg from '../../assets/arrow-left-yellow-bg.svg';
import arrowLeft from '../../assets/arrow-yellow-left.svg';
import arrowRight from '../../assets/arrow-yellow-right.svg';
import passengerIconYellow from '../../assets/passengerIconYellow.svg';
import ruble from '../../assets/ruble-sign.svg';
import { useState } from 'react';
import { SVGplusIcon, SVGminusIcon } from '../../SVG/SVGIcons/SVGIcons';

export const AsideDetails = () => {
  const [oneWayOpen, setOneWayOpen] = useState(false);
  const [twoWaysOpen, setTwoWaysOpen] = useState(false);
  const [passengersOpen, setPassengersOpen] = useState(false);

  return (
    <div className="aside-details">
      <h3>детали поездки</h3>
      <section className="aside-details__part">
          <div>
            <img src={arrowRightYellowBg} alt="" />
            <h4>Туда</h4>
          </div>
          <span className='aside-details__part_date'>30.08.2018</span>
          <span className="aside-details__part_sign" onClick={() => setOneWayOpen((prev) => !prev)}>
            {oneWayOpen ? <SVGminusIcon /> : <SVGplusIcon />}
          </span>
      </section>

      {oneWayOpen && <section className='aside-details__info'>
        <div className='aside-details__info_wrapper'>
          <h6>№ Поезда</h6>
          <span className='aside-details__info_wrapper_train-number'>116C</span>
        </div>
        <div className='aside-details__info_wrapper'>
          <h6>Название</h6>
          <div className='aside-details__info_wrapper_route'>
            <span className='aside-details__info_wrapper_name'>Адлер</span>
            <span className='aside-details__info_wrapper_name'>Санкт-Петербург</span>
          </div>
        </div>

        <div className='aside-details__info_wrapper'>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_time'>00:10</span>
            <span className='aside-details__info_wrapper_part_date'>30.08.2018</span>
          </div>
          <div className='aside-details__info_wrapper_middle'>
            <span  className='aside-details__info_wrapper_middle_duration'>9:42</span>
            <img src={arrowRight} alt="" />
          </div>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_time'>09:52</span>
            <span className='aside-details__info_wrapper_part_date'>31.08.2018</span>
          </div>
        </div>
        <div className='aside-details__info_wrapper'>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_city'>Москва</span>
            <span className='aside-details__info_wrapper_part_station'>Курский вокзал</span>
          </div>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_city'>Санкт-Петербург</span>
            <div className='aside-details__info_wrapper_part_station'>Ладожский вокзал</div>
          </div>
        </div>
      </section>}

      <section className="aside-details__part">
          <div>
            <img src={arrowLeftYellowBg} alt="" />
            <h4>Обратно</h4>
          </div>
          <span className='aside-details__part_date'>30.08.2018</span>
          <span className="aside-details__part_sign" onClick={() => setTwoWaysOpen((prev) => !prev)}>
            {twoWaysOpen ? <SVGminusIcon /> : <SVGplusIcon />}
          </span>
      </section>

      {twoWaysOpen && <section className='aside-details__info'>
        <div className='aside-details__info_wrapper'>
          <h6>№ Поезда</h6>
          <span className='aside-details__info_wrapper_train-number'>116C</span>
        </div>
        <div className='aside-details__info_wrapper'>
          <h6>Название</h6>
          <div className='aside-details__info_wrapper_route'>
            <span className='aside-details__info_wrapper_name'>Адлер</span>
            <span className='aside-details__info_wrapper_name'>Санкт-Петербург</span>
          </div>
        </div>

        <div className='aside-details__info_wrapper'>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_time'>00:10</span>
            <span className='aside-details__info_wrapper_part_date'>30.08.2018</span>
          </div>
          <div className='aside-details__info_wrapper_middle'>
            <span  className='aside-details__info_wrapper_middle_duration'>9:42</span>
            <img src={arrowLeft} alt="" />
          </div>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_time'>09:52</span>
            <span className='aside-details__info_wrapper_part_date'>31.08.2018</span>
          </div>
        </div>
        <div className='aside-details__info_wrapper'>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_city'>Москва</span>
            <span className='aside-details__info_wrapper_part_station'>Курский вокзал</span>
          </div>
          <div className='aside-details__info_wrapper_part'>
            <span className='aside-details__info_wrapper_part_city'>Санкт-Петербург</span>
            <div className='aside-details__info_wrapper_part_station'>Ладожский вокзал</div>
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
          <h6>2 взрослых</h6>
          <span className='aside-details__info_wrapper_train-number'>5840</span>
        </div>
        <div className='aside-details__info_wrapper'>
          <h6>1 ребёнок</h6>
          <span className='aside-details__info_wrapper_train-number'>1920</span>
        </div>
      </section>}

      <section className="aside-details__part">
          <h4>Итог</h4>
          <div>
            <span className='aside-details__part_total-sum'>7760</span>
            <img className="aside-details__part_ruble-sign" src={ruble} alt="" />
          </div>
      </section>
    </div>
  )
}
