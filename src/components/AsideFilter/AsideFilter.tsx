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
  is_express: boolean,
}

interface ISlidersState {
  [key: string]: string,
  price_from: string,
  price_to: string,
  start_departure_hour_from: string,
  start_departure_hour_to: string,
  start_arrival_hour_from: string,
  start_arrival_hour_to: string,
  end_departure_hour_from: string,
  end_departure_hour_to: string,
  end_arrival_hour_from: string,
  end_arrival_hour_to: string,
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
    is_express: false,
  })

  const [slidersValue, setSlidersValue] = useState<ISlidersState>({
    price_from: '',
    price_to: '',
    start_departure_hour_from: '',
    start_departure_hour_to: '',
    start_arrival_hour_from: '',
    start_arrival_hour_to: '',
    end_departure_hour_from: '',
    end_departure_hour_to: '',
    end_arrival_hour_from: '',
    end_arrival_hour_to: '',
  })

  const handlePriceChange = (value: number[]) => {
    const [price_from, price_to] = value;
    setSlidersValue((prev) => ({
      ...prev,
      price_from: price_from.toString(),
      price_to: price_to.toString(),
    }))
  }

  const handleDateToDepartureChange = (value: number[]) => {
    const [start_departure_hour_from, start_departure_hour_to] = value;
    setSlidersValue((prev) => ({
      ...prev,
      start_departure_hour_from: start_departure_hour_from.toString(),
      start_departure_hour_to: start_departure_hour_to.toString(),
    }))
  }

  const handleDateToArrivalChange = (value: number[]) => {
    const [start_arrival_hour_from, start_arrival_hour_to] = value;
    setSlidersValue((prev) => ({
      ...prev,
      start_arrival_hour_from: start_arrival_hour_from.toString(),
      start_arrival_hour_to: start_arrival_hour_to.toString(),
    }))
  }

  const handleDateFromDepartureChange = (value: number[]) => {
    const [end_departure_hour_from, end_departure_hour_to] = value;
    setSlidersValue((prev) => ({
      ...prev,
      end_departure_hour_from: end_departure_hour_from.toString(),
      end_departure_hour_to: end_departure_hour_to.toString(),
    }))
  }

  const handleDateFromArrivalChange = (value: number[]) => {
    const [end_arrival_hour_from, end_arrival_hour_to] = value;
    setSlidersValue((prev) => ({
      ...prev,
      end_arrival_hour_from: end_arrival_hour_from.toString(),
      end_arrival_hour_to: end_arrival_hour_to.toString(),
    }))
  }

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

  useEffect(() => {
    const obj = {
      date_start: form.dateFrom.toString(),
      date_end: form.dateTo.toString(),
    }
    setDestinationQuery(obj);
  }, [form])

  useEffect(() => {
    setDestinationQuery({
      have_first_class: togglersValue.have_first_class,
      have_second_class: togglersValue.have_second_class,
      have_third_class: togglersValue.have_third_class,
      have_fourth_class: togglersValue.have_fourth_class,
      have_wifi: togglersValue.have_wifi,
      is_express: togglersValue.is_express,
      price_from: slidersValue.price_from,
      price_to: slidersValue.price_to,
      start_departure_hour_from: slidersValue.start_departure_hour_from,
      start_departure_hour_to: slidersValue.start_departure_hour_to,
      start_arrival_hour_from: slidersValue.start_arrival_hour_from,
      start_arrival_hour_to: slidersValue.start_arrival_hour_to,
      end_departure_hour_from: slidersValue.end_departure_hour_from,
      end_departure_hour_to: slidersValue.end_departure_hour_to,
      end_arrival_hour_from: slidersValue.end_arrival_hour_from,
      end_arrival_hour_to: slidersValue.end_arrival_hour_to,
    })
  }, [togglersValue, slidersValue, setDestinationQuery])

  return (
    <div className="aside-filter">

      <form className="aside-filter__form">
        <div className="aside-filter__form-wrapper">
          <label className="aside-filter__label" htmlFor="filter-from">Дата поездки</label>
          <input
            onClick={() => handleCalendarOpen('dateFrom')}
            className="aside-filter__input"
            name="filter-from"
            readOnly
            value={form.dateFrom}
          >
          </input>
          {calendarOpen === 'dateFrom' &&
          <div ref={ref} className='aside-filter__calendar'>
            <Calendar selectedDate={selectedDate} selectDate={(date: Date) => setSelectedDay(date)} />
          </div>}
        </div>
        <div className="aside-filter__form-wrapper">
          <label className="aside-filter__label" htmlFor="filter-to">Дата возвращения</label>
          <input
            onClick={() => handleCalendarOpen('dateTo')}
            className="aside-filter__input"
            name="filter-to"
            readOnly
            value={form.dateTo}
          >
          </input>
          {calendarOpen === 'dateTo' &&
          <div ref={ref} className='aside-filter__calendar'>
            <Calendar selectedDate={selectedDate} selectDate={(date: Date) => setSelectedDay(date)} />
          </div>}
        </div>
      </form>

      <div className="aside-filter__options">
        <div className="aside-filter__options-wrapper active">
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
        <div className="aside-filter__options-wrapper">
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
        <div className="aside-filter__options-wrapper">
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
        <div className="aside-filter__options-wrapper">
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
        <div className="aside-filter__options-wrapper">
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
        <div className="aside-filter__options-wrapper">
          <div>
            <div>
              <img src={rocket} alt="" />
            </div>
            <p>Экспресс</p>
          </div>
          <Switch
            onChange={handleTogglersChange}
            name='is_express'
            value={togglersValue.is_express} />
        </div>
      </div>

      <div className='aside-filter__price'>
        <h4>Стоимость</h4>
        <div className='aside-filter__slider-wrapper'>
          <span className='aside-filter__price-from'>от</span>
          <span className='aside-filter__price-to'>до</span>
          <AntdSlider
            railSize={19}
            handleSize={24}
            handleSizeHover={24}
            min={0}
            max={35000}
            defaultValue={[1000, 12000]}
            time={false}
            onChange={handlePriceChange}
          />
          <span className='aside-filter__price-min'>0</span>
          <span className='aside-filter__price-max'>35000</span>
        </div>
      </div>
      
      <div className='aside-filter__date-to'>
        <div>
          <img src={arrowLeftYellowBg} alt="" />
          <h4>Туда</h4>
        </div>
        <span className="aside-filter__date-sign" onClick={() => setOneWayOpen((prev) => !prev)}>
            {oneWayOpen ? <SVGminusIcon /> : <SVGplusIcon />}
        </span>
      </div>
      
      {oneWayOpen && <div className='aside-filter__time-options'>
        <div className='aside-filter__time-option'>
          <h5>Время отбытия</h5>
          <div className='aside-filter__time-wrapper'>
            <AntdSlider
              railSize={10}
              handleSize={18}
              handleSizeHover={18}
              min={0}
              max={24}
              defaultValue={[0, 24]}
              time={true}
              onChange={handleDateToDepartureChange}
            />
            <span className='aside-filter__time-min'>00:00</span>
            <span className='aside-filter__time-max'>24:00</span>
          </div>
        </div>
        <div className='aside-filter__time-option'>
          <h5>Время прибытия</h5>
          <div className='aside-filter__time-wrapper'>
            <AntdSlider
              railSize={10}
              handleSize={18}
              handleSizeHover={18}
              min={0}
              max={24}
              defaultValue={[0, 24]}
              time={true}
              onChange={handleDateToArrivalChange}
            />
            <span className='aside-filter__time-min'>00:00</span>
            <span className='aside-filter__time-max'>24:00</span>
          </div>
        </div>
      </div>}

      <div className='aside-filter__date-from'>
        <div>
          <img src={arrowRightYellowBg} alt="" />
          <h4>Обратно</h4>
        </div>
        <span className="aside-filter__date-sign" onClick={() => setTwoWaysOpen((prev) => !prev)}>
            {twoWaysOpen ? <SVGminusIcon /> : <SVGplusIcon />}
        </span>
      </div>

      {twoWaysOpen && <div className='aside-filter__time-options'>
        <div className='aside-filter__time-option'>
          <h5>Время отбытия</h5>
          <div className='aside-filter__time-wrapper'>
            <AntdSlider
              railSize={10}
              handleSize={18}
              handleSizeHover={18}
              min={0}
              max={24}
              defaultValue={[0, 24]}
              time={true}
              onChange={handleDateFromDepartureChange}
            />
            <span className='aside-filter__time-min'>00:00</span>
            <span className='aside-filter__time-max'>24:00</span>
          </div>
        </div>
        <div className='aside-filter__time-option'>
          <h5>Время прибытия</h5>
          <div className='aside-filter__time-wrapper'>
            <AntdSlider
              railSize={10}
              handleSize={18}
              handleSizeHover={18}
              min={0}
              max={24}
              defaultValue={[0, 24]}
              time={true}
              onChange={handleDateFromArrivalChange}
            />
            <span className='aside-filter__time-min'>00:00</span>
            <span className='aside-filter__time-max'>24:00</span>
          </div>
        </div>
      </div>}
      
    </div>
  )
}
