export const WayOfPayment = () => {
  return (
    <section className="payment-way">
      <h3>Способ оплаты</h3>
      <div className="payment-way__online">
        <label className="payment-way__online_checkbox">
          <input type="checkbox" />
          <span className="payment-way__online_checkbox_styled"></span>
          <span className="payment-way__online_checkbox_label">Онлайн</span>
        </label>
        <div className="payment-way__online_options">
          <p>Банковской <br />картой</p>
          <p>PayPal</p>
          <p>Visa QIWI Wallet</p>
        </div>
      </div>
      <div className="payment-way__cash">
        <label className="payment-way__cash_checkbox">
          <input type="checkbox" />
          <span className="payment-way__cash_checkbox_styled"></span>
          <span className="payment-way__cash_checkbox_label">Наличными</span>
        </label>
      </div>
    </section>
  )
}
