import { useAppSelector } from "../../hooks/redux"
import { ChangeButton } from "../ChangeButton/ChangeButton"

export const SummaryPayment = () => {
  const { finalRequest } = useAppSelector(state => state.railTickets);

  return (
    <div className="summary-payment">
      <h3>Способ оплаты</h3>
      <div className="summary-payment__wrapper">
        <span>{finalRequest.user?.payment_method === 'online' ? 'Онлайн' : 'Наличными'}</span>
      </div>
      <div className="summary-payment__button-wrapper">
        <ChangeButton type='payment' />
      </div>
    </div>
  )
}
