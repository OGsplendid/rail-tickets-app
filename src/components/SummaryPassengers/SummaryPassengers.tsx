import passengerIcon from '../../assets/passenger-icon-circled.svg';
import ruble from '../../assets/ruble-sign.svg';
import { ChangeButton } from '../ChangeButton/ChangeButton';

export const SummaryPassengers = () => {
  return (
    <div className="summary-passengers">

      <h3>Пассажиры</h3>

      <div className="summary-passengers__passengers">

        <div className='summary-passengers__passengers_wrapper'>
          <div className='summary-passengers__passengers_img-wrapper'>
            <img src={passengerIcon} />
            <p>Взрослый</p>
          </div>
          <div className='summary-passengers__passengers_info-wrapper'>
            <h6>Мартынюк Ирина Эдуардовна</h6>
            <p>Пол женский</p>
            <p>Дата рождения 17.02.1985</p>
            <p>Паспорт РФ 4204 380694</p>
          </div>
        </div>

        <div className='summary-passengers__passengers_wrapper'>
          <div className='summary-passengers__passengers_img-wrapper'>
            <img src={passengerIcon} />
            <p>Взрослый</p>
          </div>
          <div className='summary-passengers__passengers_info-wrapper'>
            <h6>Мартынюк Ирина Эдуардовна</h6>
            <p>Пол женский</p>
            <p>Дата рождения 17.02.1985</p>
            <p>Паспорт РФ 4204 380694</p>
          </div>
        </div>

        <div className='summary-passengers__sum'>
          <div className='summary-passengers__sum_wrapper'>
            <p>Всего</p>
            <div>
              <span>7760</span>
              <img src={ruble} alt='P' />
            </div>
          </div>
          <ChangeButton />
        </div>

      </div>
    </div>
  )
}
