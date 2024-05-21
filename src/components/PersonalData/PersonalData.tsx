import { useEffect, useState } from "react"
import { isValidEmail, isValidName, isValidPhone } from "../../utils/regexes/isValid";
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/actions";

export const PersonalData = ({ onSuccess }: { onSuccess: (correct: boolean) => void }) => {
  const { stage } = useAppSelector(state => state.railTickets);
  const { setUser } = useActions();
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    patronymic: '',
    phone: '', 
    email: '',
    payment_method: '',
  });
  const [errorCode, setErrorCode] = useState(0);
  const [card, setCard] = useState(true);

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorCode(0);
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      payment_method: card ? 'online' : 'cash',
    }))
  }, [card])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isValidName(data.first_name) || !isValidName(data.last_name)) {
        setErrorCode(1);
        onSuccess(false);
        return;
      }
      if (!isValidPhone(data.phone)) {
        setErrorCode(2);
        onSuccess(false);
        return;
      }
      if (!isValidEmail(data.email)) {
        setErrorCode(3);
        onSuccess(false);
        return;
      }
      setErrorCode(0);
      onSuccess(true);
    }, 1500)
    return () => clearTimeout(timeout)
  }, [data])

  useEffect(() => {
    if (stage !== 5) return;
    setUser(data);
  }, [stage])

  return (
    <>
    <section className="personal-data">
      <h3>Персональные данные</h3>
      <div className="personal-data__name-wrapper">
        <div className="personal-data__part">
          <label htmlFor="contacts-surname">Фамилия</label>
          <input
            onChange={handleDataChange}
            name="last_name" type="text"
            id="contacts-surname"
            placeholder="Фамилия"
          />
        </div>
        <div className="personal-data__part">
          <label htmlFor="contacts-name">Имя</label>
          <input
            onChange={handleDataChange}
            name="first_name"
            id="contacts-name"
            placeholder="Имя"
          />
        </div>
        <div className="personal-data__part">
          <label htmlFor="contacts-second-name">Отчество</label>
          <input
            onChange={handleDataChange}
            name="patronymic" type="text"
            id="contacts-second-name"
            placeholder="Отчество"
          />
        </div>
      </div>
      <div className="personal-data__contacts-wrapper">
        <div className="personal-data__part">
          <label htmlFor="contacts-phone">Контактный телефон</label>
          <input
            onChange={handleDataChange}
            name="phone"
            type="tel"
            id="contacts-phone"
            placeholder="+7 ___ __ __ __"
          />
        </div>
        <div className="personal-data__part">
          <label htmlFor="contacts-email">E-mail</label>
          <input
            onChange={handleDataChange}
            name="email"
            type="email"
            id="contacts-email"
            placeholder="inbox@gmail.ru"
          />
        </div>
      </div>
    </section>
    <section className="payment-way">
        <h3>Способ оплаты</h3>
        <div className="payment-way__online">
          <label className="payment-way__online_checkbox">
            <input onChange={() => setCard(true)} checked={card} name="payment_method" type="radio" />
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
            <input onChange={() => setCard(false)} checked={!card} name="payment_method" type="radio" />
            <span className="payment-way__cash_checkbox_styled"></span>
            <span className="payment-way__cash_checkbox_label">Наличными</span>
          </label>
        </div>
      </section>
      {errorCode ?
      <div className="personal-data__error">
        {errorCode === 1 ? 'Поля "Фамилия" и "Имя" должны быть заполнены'
          : errorCode === 2 ? 'Неверно заполнено поле "Контактный телефон"'
          : errorCode === 3 ? 'Неверно заполнено поле "E-mail"'
          : ''
        }
      </div> : ''}
      </>
  )
}
