export const MainForm = () => {
  return (
    <form className='main-form'>

      <div className='main-form__input-wrapper '>
        <div className='main-form__input-wrapper_helper'>
          <label htmlFor="destination-from">Направление</label>
          <span className='main-form__input-wrapper_geo'>
            <input id='destination-from' name="destination-from" placeholder='Откуда' type="text" required />
          </span>
        </div>
        <div>
          <span className='main-form__input-wrapper_geo'>
            <input name="destination-to" placeholder='Куда' type="text" required />
          </span>
        </div>
      </div>

      <div className='main-form__input-wrapper'>
        <div>
          <label>Дата</label>
          <span className='main-form__input-wrapper_calendar'>
            <input name="date-from" placeholder='ДД/ММ/ГГ' readOnly required />
          </span>
        </div>
        <div>
          <span className='main-form__input-wrapper_calendar'>
            <input name="date-to" placeholder='ДД/ММ/ГГ' readOnly />
          </span>
        </div>
      </div>

      <button type="submit">Найти билеты</button>
    </form>
  )
}
