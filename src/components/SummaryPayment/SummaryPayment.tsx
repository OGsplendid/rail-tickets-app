import { ChangeButton } from "../ChangeButton/ChangeButton"

export const SummaryPayment = () => {
  return (
    <div className="summary-payment">
      <h3>Способ оплаты</h3>
      <div className="summary-payment__wrapper">
        <span>Наличными</span>
      </div>
      <div className="summary-payment__button-wrapper">
        <ChangeButton />
      </div>
    </div>
  )
}
