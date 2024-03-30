import { Footer } from "../../layout/footer/Footer"
import { InitialHeader } from "../../layout/headers/InitialHeader/InitialHeader"
import monitor from "../../assets/monitor-icon.svg";
import buildings from "../../assets/buildings-icon.svg";
import globe from "../../assets/globe-icon.svg";
import image1 from "../../assets/feedback-profile-image1.svg";
import image2 from "../../assets/feedback-profile-image2.svg";

export const MainPage = () => {
  return (
    <>
      <InitialHeader />
        <main className="main-page">

          <section className="main-page__about-us" id="main-page__about-us">
            <h2>о нас</h2>
            <div className="main-page__about-us_paragraph">
              <p>
                Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем 
                все больше людей заказывают жд билеты через интернет.</p>

                <p>Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? 
                Мы расскажем о преимуществах заказа через интернет.</p>

                <p className="main-page__about-us_paragraph_strong">Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
                Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</p>
            </div>
          </section>

          <section className="main-page__info" id="main-page__info">
            <div className="main-page__info_how-it-works">
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
              <div className="main-page__feedback_item-wrapper">
                <img src={image1} alt="" />
                <div className="main-page__feedback_item-sub-wrapper">
                  <h6>екатерина вальнова</h6>
                  <p>Доброжелательные подсказки на всех этапах помогут правильно 
                    заполнить поля и без затруднений купить авиа или ж/д билет, 
                    даже если вы заказываете онлайн билет впервые.
                  </p>
                </div>
              </div>
              <div className="main-page__feedback_item-wrapper">
                <img src={image2} alt="" />
                <div className="main-page__feedback_item-sub-wrapper">
                  <h6>евгений стрыкало</h6>
                  <p>СМС-сопровождение до посадки Сразу после оплаты ж/д билетов 
                    и за 3 часа до отправления мы пришлем вам СМС-напоминание о 
                    поездке.
                  </p>
                </div>
              </div>
            </div>
            <div className="main-page__feedback_pagination"></div>
          </section>

        </main>
      <Footer />
      <div id="main-page__contacts"></div>
    </>
  )
}
