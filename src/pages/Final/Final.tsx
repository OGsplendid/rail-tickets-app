import { Logo } from "../../components/Logo/Logo"
import { NavMenu } from "../../components/NavMenu/NavMenu"
import { Footer } from "../../layout/footer/Footer"
import ruble from "../../assets/ruble-sign.svg";
import monitor from "../../assets/monitor-image-circled.svg";
import tickets from "../../assets/tickets-image-circled.svg";
import cashier from "../../assets/cashier-image-circled.svg";
import { RatingStars } from "../../components/RatingStars/RatingStars";
import { useActions } from "../../hooks/actions";
import { useAppSelector } from "../../hooks/redux";
import { useLocation, useNavigate } from "react-router-dom";

export const Final = () => {
  const { setStage } = useActions();
  const { passengersTypes: passTypes, totalSum, finalRequest } = useAppSelector(state => state.railTickets);

  const navigate = useNavigate();
  const location = useLocation();

  const part = passTypes.children && passTypes.kids
  ? Math.floor(totalSum / (passTypes.children + passTypes.adults + passTypes.kids))
  : passTypes.children && !passTypes.kids
  ? Math.floor(totalSum / (passTypes.children + passTypes.adults))
  : passTypes.kids && !passTypes.children
  ? Math.floor(totalSum / (passTypes.kids + passTypes.adults))
  : Math.floor(totalSum / passTypes.adults);
  const adultsPrice = Math.round(part * passTypes.adults);
  const childrenPrice = Math.round(part / 2 * (passTypes.children || 0));

  const handleClick = () => {
    setStage(0);
    setTimeout(() => navigate('/'), 0);
  }

  return (
    <>
      <header>
        <div className="final-header">
          <div className="final-header__logo-wrapper">
            <Logo />
          </div>
          <NavMenu />
        </div>
      </header>
      <main className="final-main-blank">
        <div className="final-main">
          <h1>Благодарим вас за заказ!</h1>
          <div className="final-main__wrapper">
            <section className="final-main__part1">
              <span className="final-main__part1_order-number">{`№Заказа ${location.state.id}`}</span>
              <div>
                <span className="final-main__part1_sum-tex">сумма</span>
                <span className="final-main__part1_sum">{adultsPrice + childrenPrice}</span>
                <img src={ruble} alt="P" />
              </div>
            </section>
            <section className="final-main__part2">
              <div>
                <img src={monitor} alt="" />
                <span>билеты будут отправлены на ваш e-mail</span>
              </div>
              <div>
                <img src={tickets} alt="" />
                <span>распечатайте и сохраняйте билеты до даты поездки</span>
              </div>
              <div>
                <img src={cashier} alt="" />
                <span>предьявите распечатанные билеты при посадке</span>
              </div>
            </section>
            <section className="final-main__part3">
              <h3>{`${finalRequest.user?.first_name} ${finalRequest.user?.patronymic}!`}</h3>
              <p>
                Ваш заказ успешно оформлен.<br /> В ближайшее время с вами свяжется наш оператор для подтверждения.
              </p>
              <span>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</span>
            </section>
            <section className="final-main__part4">
              <div>
                <span>Оценить сервис</span>
                <RatingStars />
              </div>
              <button onClick={handleClick}>вернуться на главную</button>
            </section>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
