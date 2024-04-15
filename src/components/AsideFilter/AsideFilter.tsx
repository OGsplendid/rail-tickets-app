import class1 from '../../assets/wagon-1class.svg';
import class2 from '../../assets/wagon-2class.svg';
import class3 from '../../assets/wagon-3class.svg';
import class4 from '../../assets/wagon-4class.svg';
import wifi from '../../assets/wifi-icon.svg';
import rocket from '../../assets/rocket-icon.svg';
import arrowRightYellowBg from '../../assets/arrow-right-yellow-bg.svg';
import arrowLeftYellowBg from '../../assets/arrow-left-yellow-bg.svg';
import { AntdSlider } from '../../antd/AntdSlider/AntdSlider';
import { Switch } from '../Switch/Switch';
import { useEffect, useRef, useState } from 'react';
import { SVGminusIcon, SVGplusIcon } from '../../SVG/SVGIcons/SVGIcons';
import { useAppSelector } from '../../hooks/redux';
import { Calendar } from '../Calendar/Calendar';
import { add, compareAsc, format } from 'date-fns';
import { useActions } from '../../hooks/actions';

interface ITogglersState {
  [key: string]: boolean,
  have_first_class: boolean,
  have_second_class: boolean,
  have_third_class: boolean,
  have_fourth_class: boolean,
  have_wifi: boolean,
  have_express: boolean,
}

export const AsideFilter = () => {
  const { destinationsQuery: { date_start, date_end } } = useAppSelector(state => state.railTickets);
  const { setDestinationQuery } = useActions();
  const ref = useRef<HTMLDivElement>(null);

  const [oneWayOpen, setOneWayOpen] = useState(false);
  const [twoWaysOpen, setTwoWaysOpen] = useState(false);

  const [form, setForm] = useState({ dateFrom: date_start, dateTo: date_end, });
  const [calendarOpen, setCalendarOpen] = useState('');
  const [selectedDate, setSelectedDay] = useState<Date>(new Date());

  const [togglersValue, setTogglersValue] = useState<ITogglersState>({
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_express: false,
  })

  const handleCalendarOpen = (inputName: string) => {
    if (calendarOpen == inputName) {
      setCalendarOpen('');
      return;
    }
    setCalendarOpen(inputName);
  }

  const handleTogglersChange = (name: string) => {
    setTogglersValue((prev) => ({
      ...prev,
      [name]: !togglersValue[name],
    }))
  }

  useEffect(() => {
    const actualSelectedDate = add(selectedDate, {
      hours: 23,
      minutes: 59,
      seconds: 59,
    });
    if (compareAsc(actualSelectedDate, new Date()) < 0) return;
    if (calendarOpen === 'dateFrom'
      && form.dateTo
      && compareAsc(actualSelectedDate, form.dateTo) > 0) return;
    if (calendarOpen === 'dateTo'
      && form.dateFrom
      && compareAsc(actualSelectedDate, form.dateFrom) < 0) return;

    setForm((prev) => ({
      ...prev,
      [calendarOpen]: format(selectedDate, 'yyyy.MM.dd'),
    }));
  }, [calendarOpen, form.dateFrom, form.dateTo, selectedDate])

  useEffect(() => {
    const calendar = ref.current;
    const handler = (e: MouseEvent) => {
      if (calendar && !calendar.contains(e.target as Node)) {
        setCalendarOpen('');
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler)
  })

  // useEffect(() => {

  // })

  return (
    <div className="aside-filter">

      <form className="aside-filter__form">
        <div className="aside-filter__form_wrapper">
          <label className="aside-filter__form_wrapper_label" htmlFor="filter-from">Дата поездки</label>
          <input
            onClick={() => handleCalendarOpen('dateFrom')}
            className="aside-filter__form_wrapper_input"
            name="filter-from"
            readOnly
            value={form.dateFrom}
          >
          </input>
          {calendarOpen === 'dateFrom' &&
          <div ref={ref} className='aside-filter__form_wrapper_calendar'>
            <Calendar selectedDate={selectedDate} selectDate={(date: Date) => setSelectedDay(date)} />
          </div>}
        </div>
        <div className="aside-filter__form_wrapper">
          <label className="aside-filter__form_wrapper_label" htmlFor="filter-to">Дата возвращения</label>
          <input
            onClick={() => handleCalendarOpen('dateTo')}
            className="aside-filter__form_wrapper_input"
            name="filter-to"
            readOnly
            value={form.dateTo}
          >
          </input>
          {calendarOpen === 'dateTo' &&
          <div ref={ref} className='aside-filter__form_wrapper_calendar'>
            <Calendar selectedDate={selectedDate} selectDate={(date: Date) => setSelectedDay(date)} />
          </div>}
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
          <Switch 
            onChange={handleTogglersChange}
            name='have_second_class'
            value={togglersValue.have_second_class} />
        </div>
        <div className="aside-filter__options_wrapper">
          <div>
            <div>
              <img src={class3} alt="" />
            </div>
            <p>Плацкарт</p>
          </div>
          <Switch
            onChange={handleTogglersChange}
            name='have_third_class'
            value={togglersValue.have_third_class} />
        </div>
        <div className="aside-filter__options_wrapper">
          <div>
            <div>
              <img src={class4} alt="" />
            </div>
            <p>Сидячий</p>
          </div>
          <Switch
            onChange={handleTogglersChange}
            name='have_fourth_class'
            value={togglersValue.have_fourth_class} />
        </div>
        <div className="aside-filter__options_wrapper">
          <div>
            <div>
              <img src={class1} alt="" />
            </div>
            <p>Люкс</p>
          </div>
          <Switch
            onChange={handleTogglersChange}
            name='have_first_class'
            value={togglersValue.have_first_class} />
        </div>
        <div className="aside-filter__options_wrapper">
          <div>
            <div>
              <img src={wifi} alt="" />
            </div>
            <p>Wi-Fi</p>
          </div>
          <Switch
            onChange={handleTogglersChange}
            name='have_wifi'
            value={togglersValue.have_wifi} />
        </div>
        <div className="aside-filter__options_wrapper">
          <div>
            <div>
              <img src={rocket} alt="" />
            </div>
            <p>Экспресс</p>
          </div>
          <Switch
            onChange={handleTogglersChange}
            name='have_express'
            value={togglersValue.have_express} />
        </div>
      </div>

      <div className='aside-filter__price'>
        <h4>Стоимость</h4>
        <div className='aside-filter__price_slider-wrapper'>
          <span className='aside-filter__price_slider-wrapper_from'>от</span>
          <span className='aside-filter__price_slider-wrapper_to'>до</span>
          <AntdSlider
            railSize={19}
            handleSize={24}
            handleSizeHover={24}
            min={0}
            max={10000}
            defaultValue={[1000, 4000]}
          />
          <span className='aside-filter__price_slider-wrapper_min'>0</span>
          <span className='aside-filter__price_slider-wrapper_max'>10000</span>
        </div>
      </div>
      
      <div className='aside-filter__date-to'>
        <div>
          <img src={arrowLeftYellowBg} alt="" />
          <h4>Туда</h4>
        </div>
        <span className="aside-filter__date-from_sign" onClick={() => setOneWayOpen((prev) => !prev)}>
            {oneWayOpen ? <SVGminusIcon /> : <SVGplusIcon />}
        </span>
      </div>
      
      {oneWayOpen && <div className='aside-filter__time-options'>
        <div className='aside-filter__time-options_option'>
          <h5>Время отбытия</h5>
          <div className='aside-filter__time-options_slider-wrapper'>
            <AntdSlider
              railSize={10}
              handleSize={18}
              handleSizeHover={18}
              min={0}
              max={24}
              defaultValue={[0, 24]}
            />
            <span className='aside-filter__time-options_slider-wrapper_min'>00:00</span>
            <span className='aside-filter__time-options_slider-wrapper_max'>24:00</span>
          </div>
        </div>
        <div className='aside-filter__time-options_option'>
          <h5>Время прибытия</h5>
          <div className='aside-filter__time-options_slider-wrapper'>
            <AntdSlider
              railSize={10}
              handleSize={18}
              handleSizeHover={18}
              min={0}
              max={24}
              defaultValue={[0, 24]}
            />
            <span className='aside-filter__time-options_slider-wrapper_min'>00:00</span>
            <span className='aside-filter__time-options_slider-wrapper_max'>24:00</span>
          </div>
        </div>
      </div>}

      <div className='aside-filter__date-from'>
        <div>
          <img src={arrowRightYellowBg} alt="" />
          <h4>Обратно</h4>
        </div>
        <span className="aside-filter__date-from_sign" onClick={() => setTwoWaysOpen((prev) => !prev)}>
            {twoWaysOpen ? <SVGminusIcon /> : <SVGplusIcon />}
        </span>
      </div>

      {twoWaysOpen && <div className='aside-filter__time-options'>
        <div className='aside-filter__time-options_option'>
          <h5>Время отбытия</h5>
          <div className='aside-filter__time-options_slider-wrapper'>
            <AntdSlider
              railSize={10}
              handleSize={18}
              handleSizeHover={18}
              min={0}
              max={24}
              defaultValue={[0, 24]}
            />
            <span className='aside-filter__time-options_slider-wrapper_min'>00:00</span>
            <span className='aside-filter__time-options_slider-wrapper_max'>24:00</span>
          </div>
        </div>
        <div className='aside-filter__time-options_option'>
          <h5>Время прибытия</h5>
          <div className='aside-filter__time-options_slider-wrapper'>
            <AntdSlider
              railSize={10}
              handleSize={18}
              handleSizeHover={18}
              min={0}
              max={24}
              defaultValue={[0, 24]}
            />
            <span className='aside-filter__time-options_slider-wrapper_min'>00:00</span>
            <span className='aside-filter__time-options_slider-wrapper_max'>24:00</span>
          </div>
        </div>
      </div>}
      
    </div>
  )
}
