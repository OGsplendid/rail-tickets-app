import ruble from '../../assets/ruble-sign.svg';
import { WagonClassFirst } from '../WagonClasses/WagonClassFirst/WagonClassFirst';
import { WagonClassFourth } from '../WagonClasses/WagonClassFourth/WagonClassFourth';
import { WagonClassSecond } from '../WagonClasses/WagonClassSecond/WagonClassSecond';
import { WagonClassThird } from '../WagonClasses/WagonClassThird/WagonClassThird';
import { WagonService } from '../WagonService/WagonService';

interface IWagonTypeProps {
  wagonClass: number | null,
}

export const WagonType = ({ wagonClass }: IWagonTypeProps) => {
  return (
    <div className="wagon-type">

      <div className="wagon-type__numbers">
        <div className="wagon-type__numbers_wagons">
          <h6>Вагоны</h6>
          <span>10</span>
          <span>12</span>
        </div>
        <p className="wagon-type__numbers_info">Нумерация вагонов начинается с головы поезда</p>
      </div>

      <div className="wagon-type__options">
        <div className="wagon-type__options_number">
          <h5>12</h5>
          <span>вагон</span>
        </div>

        <div className="wagon-type__options_list">
          <div className="wagon-type__options_list_seats">
            <div>
              <h6>Места</h6>
              <span className="wagon-type__options_list_seats_total">21</span>
            </div>
            <div className="wagon-type__options_list_wrapper">
              <p>Верхние</p>
              <span>10</span>
            </div>
            <div className="wagon-type__options_list_wrapper">
              <p>Нижние</p>
              <span>11</span>
            </div>
          </div>

          <div className="wagon-type__options_list_price">
            <h6>Стоимость</h6>
            <div className="wagon-type__options_list_wrapper">
              <span>2 020</span>
              <img src={ruble} alt="ruble" />
            </div>
            <div className="wagon-type__options_list_wrapper">
              <span>3 030</span>
              <img src={ruble} alt="ruble" />
            </div>
          </div>

          <div className="wagon-type__options_list_extra">
            <h6>Обслуживание<span>ФПК</span></h6>
            <WagonService />
            <p>13 человек выбирают <br /> места в этом поезде</p>
          </div>
        </div>
      </div>
      {wagonClass === 1 && <WagonClassFirst />}
      {wagonClass === 2 && <WagonClassSecond />}
      {wagonClass === 3 && <WagonClassThird />}
      {wagonClass === 4 && <WagonClassFourth />}
    </div>
  )
}
