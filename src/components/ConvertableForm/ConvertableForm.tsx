import cn from 'classnames';
import { Calendar } from '../../calendar/Calendar';

export const ConvertableForm = ({ view }: { view: string }) => {

  const formClass = cn('convertable-form', {
    'initial-view': view === 'initial-view',
    'main-view': view === 'main-view',
  })

  const wrapperClass = cn('convertable-form__input-wrapper', {
    'initial-view': view === 'initial-view',
    'main-view': view === 'main-view',
  })

  const buttonClass = cn({
    'initial-view': view === 'initial-view',
    'main-view': view === 'main-view',
  })


  return (
    <form className={formClass}>

      <div className={wrapperClass}>
        <div className='convertable-form__input-wrapper_helper'>
          <label htmlFor="destination-from">Направление</label>
          <div className='convertable-form__input-wrapper_geo'>
            <input id='destination-from' name="destination-from" placeholder='Откуда' type="text" required />
          </div>
          <div className="convertable-form__input-wrapper_helper_roll">
            <span>sdklfjkldfs</span>
          </div>
        </div>
        <div>
          <div className='convertable-form__input-wrapper_geo'>
            <input name="destination-to" placeholder='Куда' type="text" required />
          </div>
          <div className="convertable-form__input-wrapper_helper_roll">
            <span>sdklfjkldfs</span>
            <span>sdklfjkldfs</span>
            <span>sdklfjkldfs</span>
          </div>
        </div>
      </div>

      <div className={wrapperClass}>
        <div>
          <label>Дата</label>
          <div className='convertable-form__input-wrapper_calendar'>
            <input name="date-from" placeholder='ДД/ММ/ГГ' readOnly required />
          </div>
          <div className='convertable-form__input-wrapper_triangle'>
            <Calendar />
          </div>
        </div>
        <div>
          <div className='convertable-form__input-wrapper_calendar'>
            <input name="date-to" placeholder='ДД/ММ/ГГ' readOnly />
          </div>
        </div>
      </div>

      <button
        className={buttonClass}
        type="submit">Найти билеты
      </button>
    </form>
  )
}
