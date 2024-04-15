import ruble from '../../assets/ruble-sign.svg';
import { TrainOptionsSVG } from '../TrainOptionsSVG/TrainOptionsSVG';

export const LastTickets = () => {
  return (
    <section className="last-tickets">
      <h3 className="last-tickets__title">последние билеты</h3>

      <article className="last-tickets__card">
        <div className="last-tickets__card_wrapper">
          <div>
            <h5 className="last-tickets__card_city">Санкт-Петербург</h5>
            <div className="last-tickets__card_station">Курский вокзал</div>
          </div>
          <div className='last-tickets__card_wrapper_to'>
            <h5 className="last-tickets__card_city">Самара</h5>
            <div className="last-tickets__card_station">Московский вокзал</div>
          </div>
        </div>
        <div className='last-tickets__card_price'>
          <TrainOptionsSVG />
          <div>
            от <span>2 500</span> <img src={ruble} alt="рублей" />
          </div>
        </div>
      </article>
    </section>
  )
}