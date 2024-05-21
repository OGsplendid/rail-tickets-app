import cn from 'classnames';
import arrows from '../../assets/form-arrows-circled.svg';
import { compareAsc, format, add } from "date-fns";
import { Calendar } from '../Calendar/Calendar';
import React, { useEffect, useRef, useState } from 'react';
import { ICity } from '../../models/models';
import { useFetchCitiesQuery } from '../../store/students.netoservices.api';
import { useActions } from '../../hooks/actions';

export const ConvertableForm = ({ view }: { view: string }) => {
  const { setStage, setDestinationQuery } = useActions();
  const ref = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    destinationFrom: '',
    destinationTo: '',
    dateFrom: '',
    dateTo: '',
  });
  const [cityFromId, setCityFromId] = useState('');
  const [cityToId, setCityToId] = useState('');

  const [calendarOpen, setCalendarOpen] = useState('');
  const [selectedDate, setSelectedDay] = useState<Date>(new Date());

  const [inputActive, setInputActive] = useState('');
  const [query, setQuery] = useState('');
  const [options, setOptions] = useState<ICity[] | []>([]);

  const { data } = useFetchCitiesQuery(query);

  const formClass = cn('convertable-form', {
    'initial-view': view === 'initial-view',
    'main-view': view !== 'initial-view',
  })

  const wrapperClass = cn('convertable-form__input-wrapper', {
    'initial-view': view === 'initial-view',
    'main-view': view !== 'initial-view',
  })

  const buttonClass = cn({
    'initial-view': view === 'initial-view',
    'main-view': view !== 'initial-view',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setInputActive(name);
    setQuery(value);
  }

  const handleCityPick = (inputName: string, city: ICity) => {
    const stringified = city._id.toString();
    inputName === 'destinationFrom' ? setCityFromId(stringified) : setCityToId(stringified);
    setForm((prev) => ({
      ...prev,
      [inputName]: city.name,
    }))
    setInputActive('');
  }

  const swapCities = () => {
    const before = form.destinationFrom;
    const after = form.destinationTo;
    setForm((prev) => ({
      ...prev,
      destinationFrom: after,
      destinationTo: before,
    }));
  }

  const handleCalendarOpen = (inputName: string) => {
    if (calendarOpen == inputName) {
      setCalendarOpen('');
      return;
    }
    setCalendarOpen(inputName);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obj = {
      from_city_id: cityFromId,
      to_city_id: cityToId,
      date_start: form.dateFrom.toString(),
      date_end: form.dateTo.toString(),
    }
    setDestinationQuery(obj);
    setStage(1);
  }

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setOptions(data);
    }
  }, [data])

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

  return (
    <form className={formClass} onSubmit={handleSubmit}>

      <div className={wrapperClass}>
        <div className='convertable-form__holder'>
          <label htmlFor="destination-from">Направление</label>
          <div className='convertable-form__geo'>
            <input
              onChange={handleChange}
              value={form.destinationFrom.toUpperCase()}
              id='destination-from' 
              name="destinationFrom" 
              placeholder='Откуда' 
              type="text" 
              required
            />
          </div>
          {inputActive === 'destinationFrom' &&
          <div className="convertable-form__roll">
            {options.map((city) => (
              <span
                key={city._id}
                onClick={() => handleCityPick('destinationFrom', city)}
              >
                {city.name}
              </span>
            ))}
          </div>}
        </div>
        <img src={arrows} alt="⤵" onClick={swapCities} />
        <div>
          <div className='convertable-form__geo'>
            <input
              onChange={handleChange}
              value={form.destinationTo.toUpperCase()}
              name="destinationTo" 
              placeholder='Куда' 
              type="text" 
              required
            />
          </div>
          {inputActive === 'destinationTo' &&
          <div className="convertable-form__roll">
            {options.map((city) => (
              <span
                key={city._id}
                onClick={() => handleCityPick('destinationTo', city)}
              >
                {city.name}
              </span>
            ))}
          </div>}
        </div>
      </div>

      <div className={wrapperClass}>
        <div>
          <label>Дата</label>
          <div className='convertable-form__calendar'>
            <input
              onClick={() => handleCalendarOpen('dateFrom')}
              name="dateFrom" 
              placeholder='ДД/ММ/ГГ'
              value={form.dateFrom}
              readOnly
            />
          </div>
          {calendarOpen === 'dateFrom' &&
          <div ref={ref} className='convertable-form__calendar-holder'>
            <Calendar selectedDate={selectedDate} selectDate={(date: Date) => setSelectedDay(date)} />
          </div>}
        </div>
        <div>
          <div className='convertable-form__calendar'>
            <input
              onClick={() => handleCalendarOpen('dateTo')}
              name="dateTo" 
              placeholder='ДД/ММ/ГГ'
              value={form.dateTo}
              readOnly
            />
          </div>
          {calendarOpen === 'dateTo' &&
          <div ref={ref} className='convertable-form__calendar-holder'>
            <Calendar selectedDate={selectedDate} selectDate={(date: Date) => setSelectedDay(date)} />
          </div>}
        </div>
      </div>

      <button
        className={buttonClass}
        type="submit">Найти билеты
      </button>
    </form>
  )
}
