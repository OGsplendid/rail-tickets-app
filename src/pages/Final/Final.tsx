import { Logo } from "../../components/Logo/Logo"
import { NavMenu } from "../../components/NavMenu/NavMenu"
import { Footer } from "../../layout/footer/Footer"
import ruble from "../../assets/ruble-sign.svg";
import monitor from "../../assets/monitor-image-circled.svg";
import tickets from "../../assets/tickets-image-circled.svg";
import cashier from "../../assets/cashier-image-circled.svg";
import { RatingStars } from "../../components/RatingStars/RatingStars";

export const Final = () => {
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
              <span className="final-main__part1_order-number">№Заказа 285АА</span>
              <div>
                <span className="final-main__part1_sum-tex">сумма</span>
                <span className="final-main__part1_sum">7760</span>
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
              <h3>Ирина Эдуардовна!</h3>
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
              <button>вернуться на главную</button>
            </section>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
