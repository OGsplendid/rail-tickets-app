import passengerIcon from '../../assets/passenger-icon-circled.svg';
import ruble from '../../assets/ruble-sign.svg';
import { useAppSelector } from '../../hooks/redux';
import { ChangeButton } from '../ChangeButton/ChangeButton';

export const SummaryPassengers = () => {
  const { passengersTypes: passTypes, totalSum, finalRequest } = useAppSelector(state => state.railTickets);

  const part = passTypes.children && passTypes.kids
  ? Math.floor(totalSum / (passTypes.children + passTypes.adults + passTypes.kids))
  : passTypes.children && !passTypes.kids
  ? Math.floor(totalSum / (passTypes.children + passTypes.adults))
  : passTypes.kids && !passTypes.children
  ? Math.floor(totalSum / (passTypes.kids + passTypes.adults))
  : Math.floor(totalSum / passTypes.adults);
const adultsPrice = Math.round(part * passTypes.adults);
const childrenPrice = Math.round(part / 2 * (passTypes.children || 0));

  if (!finalRequest.departure?.seats) return '';

  return (
    <div className="summary-passengers">

      <h3>Пассажиры</h3>

      <div className="summary-passengers__passengers">

        {finalRequest.departure?.seats.map((s) => (
          <div key={s.seat_number} className='summary-passengers__passengers_wrapper'>
            <div className='summary-passengers__passengers_img-wrapper'>
              <img src={passengerIcon} />
              <p>{s.person_info?.is_adult ? 'Взрослый' : 'Детский'}</p>
            </div>
            <div className='summary-passengers__passengers_info-wrapper'>
              <h6>{`${s.person_info?.last_name} ${s.person_info?.first_name} ${s.person_info?.patronymic}`}</h6>
              <p>{`Пол ${s.person_info?.gender ? 'мужской' : 'женский'}`}</p>
              <p>{`Дата рождения ${s.person_info?.birthday}`}</p>
              <p>{`${s.person_info?.document_type === 'паспорт' ? 'Паспорт РФ' : 'Свидетельство о рождении'} ${s.person_info?.document_data}`}</p>
            </div>
          </div>
        ))}

        <div className='summary-passengers__sum'>
          <div className='summary-passengers__sum_wrapper'>
            <p>Всего</p>
            <div>
              <span>{adultsPrice + childrenPrice}</span>
              <img src={ruble} alt='P' />
            </div>
          </div>
          <ChangeButton type='passengers' />
        </div>

      </div>
    </div>
  )
}
