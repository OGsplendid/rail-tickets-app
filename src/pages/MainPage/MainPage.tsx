import { Footer } from "../../layout/footer/Footer"
import { InitialHeader } from "../../layout/headers/InitialHeader/InitialHeader"
import monitor from "../../assets/monitor-icon.svg";
import buildings from "../../assets/buildings-icon.svg";
import globe from "../../assets/globe-icon.svg";
import image1 from "../../assets/feedback-profile-image1.svg";
import image2 from "../../assets/feedback-profile-image2.svg";
import { useEffect } from "react";
import { useActions } from "../../hooks/actions";

export const MainPage = () => {
  const {
    resetDestinationQuery,
    resetFinalDestinationData,
    resetPassengersTypes,
    resetSeatsQuantity,
  } = useActions();

  useEffect(() => {
    resetDestinationQuery();
    resetFinalDestinationData();
    resetPassengersTypes();
    resetSeatsQuantity();
  }, [])

  return (
    <>
      <InitialHeader />
        <main className="main-page">

          <section className="main-page__about-us" id="main-page__about-us">
            <h2>о нас</h2>
            <div className="main-page__intro">
              <p>
                Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем 
                все больше людей заказывают жд билеты через интернет.
              </p>

              <p>
                Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? 
                Мы расскажем о преимуществах заказа через интернет.
              </p>

              <b className="main-page__about-us_paragraph_strong">
                Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
                Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
              </b>
            </div>
          </section>

          <section className="main-page__info" id="main-page__info">
            <h2 className="visually-hidden">преимущества</h2>
            <div className="main-page__how-it-works">
              <h2>как это работает</h2>
              <button>Узнать больше</button>
            </div>
            <div className="main-page__info-wrapper">
              <div className="main-page__info_item-wrapper">
                <img src={monitor} alt="" />
                <h6>Удобный заказ на сайте</h6>
              </div>
              <div className="main-page__info_item-wrapper">
                <img src={buildings} alt="" />
                <h6>Нет необходимости ехать в офис</h6>
              </div>
              <div className="main-page__info_item-wrapper">
                <img src={globe} alt="" />
                <h6>Огромный выбор направлений</h6>
              </div>
            </div>
          </section>

          <section className="main-page__feedback" id="main-page__feedback">
            <h2>отзывы</h2>
            <div className="main-page__feedback-wrapper">
              <blockquote className="main-page__item-wrapper">
                <img src={image1} alt="" />
                <div className="main-page__item-sub-wrapper">
                  <cite>екатерина вальнова</cite>
                  <p>Доброжелательные подсказки на всех этапах помогут правильно 
                    заполнить поля и без затруднений купить авиа или ж/д билет, 
                    даже если вы заказываете онлайн билет впервые.
                  </p>
                </div>
              </blockquote>
              <blockquote className="main-page__item-wrapper">
                <img src={image2} alt="" />
                <div className="main-page__item-sub-wrapper">
                  <cite>евгений стрыкало</cite>
                  <p>СМС-сопровождение до посадки Сразу после оплаты ж/д билетов 
                    и за 3 часа до отправления мы пришлем вам СМС-напоминание о 
                    поездке.
                  </p>
                </div>
              </blockquote>
            </div>
            <div className="main-page__pagination"></div>
          </section>

        </main>
      <Footer />
      <div id="main-page__contacts"></div>
    </>
  )
}
