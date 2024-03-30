import class1 from '../../assets/wagon-1class.svg';
import class2 from '../../assets/wagon-2class.svg';
import class3 from '../../assets/wagon-3class.svg';
import class4 from '../../assets/wagon-4class.svg';
import wifi from '../../assets/wifi-icon.svg';
import rocket from '../../assets/rocket-icon.svg';
import arrowRightYellowBg from '../../assets/arrow-right-yellow-bg.svg';
import arrowLeftYellowBg from '../../assets/arrow-left-yellow-bg.svg';
import plusIcon from '../../assets/plus-bordered-icon.svg';
import minusIcon from '../../assets/minus-bordered-icon.svg';
import { AntdSlider } from '../../antd/AntdSlider/AntdSlider';
import { Switch } from '../Switch/Switch';

export const AsideFilter = () => {
  return (
    <div className="aside-filter">

      <form className="aside-filter__form">
        <div className="aside-filter__form_wrapper">
          <label className="aside-filter__form_wrapper_label" htmlFor="filter-from">Дата поездки</label>
          <input className="aside-filter__form_wrapper_input" name="filter-from"></input>
        </div>
        <div className="aside-filter__form_wrapper">
          <label className="aside-filter__form_wrapper_label" htmlFor="filter-to">Дата возвращения</label>
          <input className="aside-filter__form_wrapper_input" name="filter-to"></input>
        </div>
      </form>

      <div className="aside-filter__options">
        <div className="aside-filter__options_wrapper active">
          <div>
            <div>
              <img src={class2} alt="" />
            </div>
            <p>Купе</p>
          </div>
          <Switch />
        </div>
        <div className="aside-filter__options_wrapper">
          <div>
            <div>
              <img src={class3} alt="" />
            </div>
            <p>Плацкарт</p>
          </div>
          <Switch />
        </div>
        <div className="aside-filter__options_wrapper">
          <div>
            <div>
              <img src={class4} alt="" />
            </div>
            <p>Сидячий</p>
          </div>
          <Switch />
        </div>
        <div className="aside-filter__options_wrapper">
          <div>
            <div>
              <img src={class1} alt="" />
            </div>
            <p>Люкс</p>
          </div>
          <Switch />
        </div>
        <div className="aside-filter__options_wrapper">
          <div>
            <div>
              <img src={wifi} alt="" />
            </div>
            <p>Wi-Fi</p>
          </div>
          <Switch />
        </div>
        <div className="aside-filter__options_wrapper">
          <div>
            <div>
              <img src={rocket} alt="" />
            </div>
            <p>Экспресс</p>
          </div>
          <Switch />
        </div>
      </div>

      <div className='aside-filter__price'>
        <h4>Стоимость</h4>
        <div className='aside-filter__price_slider-wrapper'>
          <span className='aside-filter__price_slider-wrapper_from'>от</span>
          <span className='aside-filter__price_slider-wrapper_to'>до</span>
          <AntdSlider railSize={19} handleSize={24} handleSizeHover={24} />
          <span className='aside-filter__price_slider-wrapper_min'>min</span>
          <span className='aside-filter__price_slider-wrapper_max'>max</span>
        </div>
      </div>
      
      <div className='aside-filter__date-to'>
        <div>
          <img src={arrowLeftYellowBg} alt="" />
          <h4>Туда</h4>
        </div>
        <img className="aside-filter__date-from_sign" src={plusIcon} alt="" />
      </div>
      
      <div className='aside-filter__time-options'>
        <div className='aside-filter__time-options_option'>
          <h5>Время отбытия</h5>
          <div className='aside-filter__time-options_slider-wrapper'>
            <AntdSlider railSize={10} handleSize={18} handleSizeHover={18} />
            <span className='aside-filter__time-options_slider-wrapper_min'>00:00</span>
            <span className='aside-filter__time-options_slider-wrapper_max'>24:00</span>
          </div>
        </div>
        <div className='aside-filter__time-options_option'>
          <h5>Время прибытия</h5>
          <div className='aside-filter__time-options_slider-wrapper'>
            <AntdSlider railSize={10} handleSize={18} handleSizeHover={18} />
            <span className='aside-filter__time-options_slider-wrapper_min'>00:00</span>
            <span className='aside-filter__time-options_slider-wrapper_max'>24:00</span>
          </div>
        </div>
      </div>

      <div className='aside-filter__date-from'>
        <div>
          <img src={arrowRightYellowBg} alt="" />
          <h4>Обратно</h4>
        </div>
        <img className="aside-filter__date-from_sign" src={minusIcon} alt="" />
      </div>
      
    </div>
  )
}
