import train from '../../assets/train-gray-icon.svg';
import rightArrow from '../../assets/arrow-yellow-right.svg';
import leftArrow from '../../assets/arrow-yellow-left.svg';
import ruble from '../../assets/ruble-sign.svg';
import options from '../../assets/3icons-in-a-row.svg';
import { ChangeButton } from '../ChangeButton/ChangeButton';

export const TrainCard = ({ buttonType }: { buttonType: string }) => {
  return (
    <article className="train-card">
      <div className="train-card__wrapper-left">
        <img src={train} alt="" />
        <span className="train-card__wrapper-left_train-number">116C</span>
        <div>
          <p>Адлер</p>
          <p>Москва</p>
          <p>Санкт-Петербург</p>
        </div>
      </div>

      <div className="train-card__wrapper-middle">
        <div className="train-card__wrapper-middle_wrapper">
          <div className="train-card__wrapper-middle_section">
            <div className='train-card__wrapper-middle_section_part'>
              <span className='train-card__wrapper-middle_section_time'>00:10</span>
              <span className='train-card__wrapper-middle_section_city'>Москва</span>
              <div className='train-card__wrapper-middle_section_station'>Курский вокзал</div>
            </div>
            <div className='train-card__wrapper-middle_section_part'>
              <span className='train-card__wrapper-middle_section_duration'>09:42</span>
              <img src={rightArrow} alt="" />
            </div>
            <div className='train-card__wrapper-middle_section_part'>
              <span className='train-card__wrapper-middle_section_time'>09:52</span>
              <span className='train-card__wrapper-middle_section_city'>Санкт-Петербург</span>
              <div className='train-card__wrapper-middle_section_station'>Ладожский вокзал</div>
            </div>
          </div>

          <div className="train-card__wrapper-middle_section">
            <div className='train-card__wrapper-middle_section_part'>
              <span className='train-card__wrapper-middle_section_time'>00:10</span>
              <span className='train-card__wrapper-middle_section_city'>Москва</span>
              <div className='train-card__wrapper-middle_section_station'>Курский вокзал</div>
            </div>
            <div className='train-card__wrapper-middle_section_part'>
              <span className='train-card__wrapper-middle_section_duration'>09:42</span>
              <img src={rightArrow} alt="" />
            </div>
            <div className='train-card__wrapper-middle_section_part'>
              <span className='train-card__wrapper-middle_section_time'>09:52</span>
              <span className='train-card__wrapper-middle_section_city'>Санкт-Петербург</span>
              <div className='train-card__wrapper-middle_section_station'>Ладожский вокзал</div>
            </div>
          </div>
        </div>
      </div>

      <div className="train-card__wrapper-right">
        <div className="train-card__wrapper-right_seats">
          <div className="train-card__wrapper-right_seat">
            <div className="train-card__wrapper-right_seat_type">Сидячий</div>
            <div className="train-card__wrapper-right_seat_amount">88</div>
            <div>от <span>1920</span> <img src={ruble} alt="" /> </div>
          </div>

          <div className="train-card__wrapper-right_seat">
            <div className="train-card__wrapper-right_seat_type">Плацкарт</div>
            <div className="train-card__wrapper-right_seat_amount">52</div>
            <div>от <span>2530</span> <img src={ruble} alt="" /> </div>
          </div>

          <div className="train-card__wrapper-right_seat">
            <div className="train-card__wrapper-right_seat_type">Купе</div>
            <div className="train-card__wrapper-right_seat_amount">24</div>
            <div>от <span>3820</span> <img src={ruble} alt="" /> </div>
          </div>

          {/* <div className='train-card__wrapper-right_options'>
            <div>
              <div className="train-card__wrapper-right_seat_type">верхние</div>
              <div className="train-card__wrapper-right_seat_amount">19</div>
              <div>от <span>2920</span> <img src={ruble} alt="" /> </div>
            </div>
            <div>
              <div className="train-card__wrapper-right_seat_type">верхние</div>
              <div className="train-card__wrapper-right_seat_amount">19</div>
              <div>от <span>2920</span> <img src={ruble} alt="" /> </div>
            </div>
          </div> */}
          
        </div>

        <img src={options} alt="" className="train-card__wrapper-right_image" />
        <div className='train-card-wrapper'>
          {buttonType === 'primary'
            ? <button className='train-card-button'>Выбрать места</button>
            : <ChangeButton />
          }
        </div>

      </div>

    </article>
  )
}
