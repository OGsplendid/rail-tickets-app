import crossClose from '../../assets/cross-close-icon.svg';
import triangleDown from '../../assets/triangle-down-icon.svg';
import closeIconCircled from '../../assets/close-icon-circled.svg';
import successIcon from '../../assets/success-icon-circled.svg';
import { useState } from 'react';
import { SVGminusCircled, SVGplusCircled } from '../../SVG/SVGIcons/SVGIcons';

const ages = [
  'Взрослый',
  'Детский',
];

const types = [
  'Паспорт РФ',
  'Свидетельство о рождении',
]

export const PassengerInfo = () => {
  const [optionAgeOpen, setOptionAgeOpen] = useState(false);
  const [ageValue, setAgeValue] = useState('Взрослый');
  const [optionTypeOpen, setOptionTypeOpen] = useState(false);
  const [typeValue, setTypeValue] = useState('Паспорт РФ');
  const [sex, setSex] = useState('M');
  const [formOpen, setFormOpen] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAgeClick = (a: string) => {
    setAgeValue(a);
    setOptionAgeOpen(false);
  }

  const handleTypeClick = (a: string) => {
    setTypeValue(a);
    setOptionTypeOpen(false);
  }

  return (
    <div className="passenger-info">
      <div className="passenger-info__head">
        <div className="passenger-info__head_wrapper">
          <span onClick={() => setFormOpen((prev) => !prev)}>
            {formOpen ? <SVGminusCircled /> : <SVGplusCircled />}
          </span>
          <h3>Пассажир 1</h3>
        </div>
        <img
          onClick={() => setFormOpen(false)}
          src={crossClose}
          alt="x"
          className="passenger-info__head_close" />
      </div>

      {formOpen && 
      <>
        <div className='passenger-info__main'>
        <div className='passenger-info__main_select-age'>
          <img src={triangleDown} alt="🔻" />
          <input onClick={() => setOptionAgeOpen(true)} readOnly value={ageValue} />
          {optionAgeOpen && <div className='passenger-info__main_select-age_roll'>
            {ages.map((a) => (
              <span onClick={() => handleAgeClick(a)}>{a}</span>
            ))}
          </div>}
        </div>

        <div className='passenger-info__main_name'>
          <div className='passenger-info__main_name_wrapper'>
            <label htmlFor='surname'>Фамилия</label>
            <input name='surname' id='surname' type='text'></input>
          </div>
          <div className='passenger-info__main_name_wrapper'>
            <label htmlFor='name'>Имя</label>
            <input name='name' id='name' type='text'></input>
          </div>
          <div className='passenger-info__main_name_wrapper'>
            <label htmlFor='second-name'>Отчество</label>
            <input name='second-name' id='second-name' type='text'></input>
          </div>
        </div>

        <div className='passenger-info__main_sex-date'>
          <div className='passenger-info__main_sex-date_wrapper-sex'>
              <label>Пол</label>
              <div onClick={() => setSex('М')} className={sex === 'М' ? 'active' : ''}>М</div>
              <div onClick={() => setSex('Ж')} className={sex === 'Ж' ? 'active' : ''}>Ж</div>
          </div> 
          <div className='passenger-info__main_sex-date_wrapper-date'>
            <label htmlFor='date-birth'>Дата рождения</label>
            <input id='date-birth' readOnly placeholder='ДД/ММ/ГГ'></input>
          </div> 
        </div>

        <div className='passenger-info__main_checkbox'>
          <input id='checkbox' type='checkbox' />
          <label htmlFor='checkbox'>Ограниченная подвижность</label>
        </div>

        {typeValue === 'Паспорт РФ' && <div className='passenger-info__main_select-type'>
          <div className='passenger-info__main_select-type_wrapper'>
            <label htmlFor='document-type'>Тип документа</label>
            <img src={triangleDown} alt="🔻" />
            <input
              className='passenger-info__main_select-type_passport'
              id='document-type'
              onClick={() => setOptionTypeOpen(true)}
              readOnly
              value={typeValue} />
            {optionTypeOpen && <div className='passenger-info__main_select-type_roll'>
            {types.map((a) => (
              <span onClick={() => handleTypeClick(a)}>{a}</span>
            ))}
            </div>}
          </div>

          <div className='passenger-info__main_select-type_wrapper'>
            <label htmlFor='passport-series'>Серия</label>
            <input
              className='passenger-info__main_select-type_passport'
              id='passport-series'
              placeholder='_ _ _ _' />
          </div>

          <div className='passenger-info__main_select-type_wrapper'>
            <label htmlFor='passport-number'>Номер</label>
            <input
              className='passenger-info__main_select-type_passport'
              id='passport-number'
              placeholder='_ _ _ _ _ _' />
          </div>
        </div>}

        {typeValue === 'Свидетельство о рождении' && <div className='passenger-info__main_select-type'>
          <div className='passenger-info__main_select-type_wrapper wrapper-kid'>
            <label htmlFor='document-type'>Тип документа</label>
            <img src={triangleDown} alt="🔻" />
            <input
               className='passenger-info__main_select-type_kid'
               id='document-type'
               onClick={() => setOptionTypeOpen(true)}
               readOnly
               value={typeValue} />
            {optionTypeOpen && <div className='passenger-info__main_select-type_roll'>
            {types.map((a) => (
              <span onClick={() => handleTypeClick(a)}>{a}</span>
            ))}
          </div>}
          </div>

          <div className='passenger-info__main_select-type_wrapper'>
            <label htmlFor='passport-series'>Номер</label>
            <input
              className='passenger-info__main_select-type_passport'
              id='passport-series'
              placeholder='12 символов' />
          </div>
        </div>}
      </div>

      <div className={`passenger-info__alert ${error ? 'pink-background' : success ? 'green-background' : ''}`}>
        <img src={error ? closeIconCircled : successIcon} alt={error ? 'x' : 'v'} />
        <div className='passenger-info__alert_message'>
          {
            error && typeValue === 'Паспорт РФ'
            ? <p>Неверно указаны данные паспорта. Пример: <span>1234 567890</span></p>
            : error && typeValue === 'Свидетельство о рождении'
            ? <p>Данные свидетельства о рождении указаны некорректно. Пример: <span>VIII-ЫП-123456</span></p>
            : success ? <p className='success-text'>Готово</p>
            : ''
          }
        </div>
        {!error && <button>Следующий пассажир</button>}
      </div>

      {/* {!error && !success && <div className='passenger-info__main_next-button'>
        <button>Следующий пассажир</button>
      </div>} */}
      </>}
    </div>
  )
}
