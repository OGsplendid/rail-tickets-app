// import crossClose from '../../assets/cross-close-icon.svg';
// import triangleDown from '../../assets/triangle-down-icon.svg';
import closeIconCircled from '../../assets/close-icon-circled.svg';
import successIcon from '../../assets/success-icon-circled.svg';
import React, { useEffect, useState } from 'react';
import { SVGminusCircled, SVGplusCircled } from '../../SVG/SVGIcons/SVGIcons';
import { useAppSelector } from '../../hooks/redux';
import { isValidBirthCertificate, isValidBirthDate, isValidName, isValidPassport } from '../../utils/regexes/isValid';
import { useActions } from '../../hooks/actions';

interface IPassengerInfoProps {
  number: number,
  active: number,
  addSuccess: (n: number) => void,
  removeSuccess: (n: number) => void,
}

export const PassengerInfo = ({ number, active, addSuccess, removeSuccess }: IPassengerInfoProps) => {
  const { passengersTypes, stage } = useAppSelector(state => state.railTickets);
  const { setPersonInfo } = useActions();

  const [formOpen, setFormOpen] = useState(number === active ? true : false);
  // const [optionAgeOpen, setOptionAgeOpen] = useState(false);
  const [is_adult] = useState(number <= passengersTypes.adults ? true : false);

  const [gender, setGender] = useState(true);
  const [document_data, setDocument_data] = useState({
    passport_series: '',
    passport_number: '',
    birth_certificate: '',
  });

  const [error, setError] = useState(false);
  const [errorCode, setErrorCode] = useState(0);
  const [success, setSuccess] = useState(false);

  const [passportData, setPassportData] = useState({
    is_adult,
    first_name: '',
    last_name: '',
    patronymic: '',
    gender,
    birthday: '',
    document_type: is_adult ? 'паспорт' : 'свидетельство о рождении',
    document_data: is_adult ? `${document_data.passport_series} ${document_data.passport_number}` : document_data.birth_certificate,
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setSuccess(false);
    removeSuccess(number);
    const { name, value } = e.target;
    setPassportData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // const handleAgeClick = (a: string) => {
  //   a === 'Взрослый' ? setIs_Adult(true) : setIs_Adult(false);
  //   setOptionAgeOpen(false);
  // }

  const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setSuccess(false);
    removeSuccess(number);
    let { value } = e.target;
    if (value.length > 10) return;
    setPassportData((prev) => ({
      ...prev,
      birthday: value,
    }));
    if (value.length === 2 && value[value.length - 1] !== '.') value += '.';
    if (value.length === 5 && value[value.length - 1] !== '.') value += '.';
  }

  const handlePassportDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setSuccess(false);
    removeSuccess(number);
    const { name, value } = e.target;
    setDocument_data((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleNextPassengerClick = () => {
    if (!isValidName(passportData.first_name.trim())
      || !isValidName(passportData.last_name.trim())
      || !isValidBirthDate(passportData.birthday.trim())
      || is_adult && !isValidPassport(document_data.passport_series.trim() + document_data.passport_number.trim())
      || !is_adult && !isValidBirthCertificate(document_data.birth_certificate.trim())) {
      setError(true);
    }
    if (!isValidName(passportData.first_name.trim())
      || !isValidName(passportData.last_name.trim())) {
      setErrorCode(1)
    } else if (!isValidBirthDate(passportData.birthday.trim())) {
      setErrorCode(2)
    } else if (is_adult && !isValidPassport(document_data.passport_series.trim() + document_data.passport_number.trim())) {
      setErrorCode(3)
    } else if (!is_adult && !isValidBirthCertificate(document_data.birth_certificate.trim())) {
      setErrorCode(4)
    } else {
      setSuccess(true);
      addSuccess(number);
    }
  }

  useEffect(() => {
    setPassportData((prev) => ({
      ...prev,
      document_data: is_adult ? `${document_data.passport_series} ${document_data.passport_number}` : document_data.birth_certificate,
    }))
  }, [document_data])

  useEffect(() => {
    setPassportData((prev) => ({
      ...prev,
      gender,
    }))
  }, [gender])

  useEffect(() => {
    if (stage !== 4) return;
    setPersonInfo(passportData);
  }, [stage])

  return (
    <div className="passenger-info">
      <div className="passenger-info__head">
        <div className="passenger-info__head_wrapper">
          <span onClick={() => setFormOpen((prev) => !prev)}>
            {formOpen ? <SVGminusCircled /> : <SVGplusCircled />}
          </span>
          <h3>{`Пассажир ${number}`}</h3>
        </div>
        {/* <img
          onClick={() => setFormOpen(false)}
          src={crossClose}
          alt="x"
          className="passenger-info__head_close" /> */}
      </div>

      {formOpen && 
      <>
        <div className='passenger-info__main'>
        <div className='passenger-info__main_select-age'>
          {/* <img src={triangleDown} alt="🔻" /> */}
          <input readOnly value={is_adult ? 'Взрослый' : 'Детский'} />
          {/* {optionAgeOpen &&
          <div className='passenger-info__main_select-age_roll'>
            {ages.map((a) => (
              <span key={a} onClick={() => handleAgeClick(a)}>{a}</span>
            ))}
          </div>} */}
        </div>

        <div className='passenger-info__main_name'>
          <div className='passenger-info__main_name_wrapper'>
            <label htmlFor='surname'>Фамилия</label>
            <input 
              value={passportData.last_name}
              onChange={handleNameChange}
              name='last_name'
              id='surname'
              type='text'
              required
            />
          </div>
          <div className='passenger-info__main_name_wrapper'>
            <label htmlFor='name'>Имя</label>
            <input
              value={passportData.first_name}
              onChange={handleNameChange}
              name='first_name'
              id='name'
              type='text'
              required
            />
          </div>
          <div className='passenger-info__main_name_wrapper'>
            <label htmlFor='second-name'>Отчество</label>
            <input
              value={passportData.patronymic}
              onChange={handleNameChange}
              name='patronymic'
              id='second-name'
              type='text'
              placeholder='Если нет отчества, оставить пустым'
            />
          </div>
        </div>

        <div className='passenger-info__main_gender-date'>
          <div className='passenger-info__main_gender-date_wrapper'>
            <label>
              <input onChange={() => setGender(true)} type='radio' checked={gender} />
              <span>М</span>
            </label>
            <label>
              <input onChange={() => setGender(false)} type='radio' checked={!gender} />
              <span>Ж</span>
            </label>
          </div>
          <div className='passenger-info__main_gender-date_wrapper-date'>
            <label htmlFor='date-birth'>Дата рождения</label>
            <input value={passportData.birthday} onChange={handleBirthdayChange} id='date-birth' placeholder='ДД.ММ.ГГ' required />
          </div> 
        </div>

        <label className='passenger-info__main_checkbox'>
          <input id='checkbox' type='checkbox' />
          <span className='passenger-info__main_checkbox_styled'></span>
          <span className='passenger-info__main_checkbox_label'>Ограниченная подвижность</span>
        </label>

        <div className='passenger-info__main_select-type'>
          <div className='passenger-info__main_select-type_wrapper'>
            <label htmlFor='document-type'>Тип документа</label>
            {/* <img src={triangleDown} alt="🔻" /> */}
            <input
              className='passenger-info__main_select-type_passport'
              id='document-type'
              readOnly
              value={is_adult ? 'Паспорт РФ' : 'Свидетельство о рождении'}
            />
          </div>

          {is_adult &&
          <>
            <div className='passenger-info__main_select-type_wrapper'>
              <label htmlFor='passport-series'>Серия</label>
              <input
                className='passenger-info__main_select-type_passport'
                onChange={handlePassportDataChange}
                name='passport_series'
                id='passport-series'
                placeholder='_ _ _ _'
                required
              />
            </div>
            <div className='passenger-info__main_select-type_wrapper'>
              <label htmlFor='passport-number'>Номер</label>
              <input
                className='passenger-info__main_select-type_passport'
                onChange={handlePassportDataChange}
                name='passport_number'
                id='passport-number'
                placeholder='_ _ _ _ _ _'
                required
              />
            </div>
          </>}

          {!is_adult &&
          <div className='passenger-info__main_select-type_wrapper'>
            <label htmlFor='passport-series'>Номер</label>
            <input
              className='passenger-info__main_select-type_passport'
              onChange={handlePassportDataChange}
              name='birth_certificate'
              id='passport-series'
              placeholder='12 символов'
              required
            />
          </div>}
        </div>
      </div>

      <div className={`passenger-info__alert ${error ? 'pink-background' : success ? 'green-background' : ''}`}>
        <img src={error ? closeIconCircled : successIcon} alt={error ? 'x' : 'v'} />
        <div className='passenger-info__alert_message'>
          {
            error && errorCode === 1
            ? <p>Поля Фамилия и Имя должны быть заполнены</p>
            : error && errorCode === 2
            ? <p>Неверный формат даты рождения. Пример: <span>10.05.1900</span></p>
            : error && errorCode === 3
            ? <p>Неверно указаны данные паспорта. Пример: <span>1234 567890</span></p>
            : error && errorCode === 4
            ? <p>Данные свидетельства о рождении указаны некорректно. Пример: <span>VII-ЫП-123456</span></p>
            : success ? <p className='success-text'>Готово</p>
            : ''
          }
        </div>
        {!error && <button onClick={handleNextPassengerClick}>Подтвердить данные</button>}
      </div>

      {/* {!error && !success && <div className='passenger-info__main_next-button'>
        <button>Следующий пассажир</button>
      </div>} */}
      </>}
    </div>
  )
}
