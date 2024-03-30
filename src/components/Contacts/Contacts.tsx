import phone from '../../assets/telephone-icon.svg';
import envelope from '../../assets/envelope-icon.svg';
import skype from '../../assets/skype-icon.svg';
import geo from '../../assets/geolocation-icon2.svg';

export const Contacts = () => {
  return (
    <address className="contacts">
      <h3>Свяжитесь с нами</h3>
      <div className="contacts__piece-wrapper">
        <img src={phone} alt="" />
        <span>8 (800) 000 00 00</span>
      </div>
      <div className="contacts__piece-wrapper">
        <img src={envelope} alt="" />
        <span>inbox@mail.ru</span>
      </div>
      <div className="contacts__piece-wrapper">
        <img src={skype} alt="" />
        <span>tu.train.tickets</span>
      </div>
      <div className="contacts__piece-wrapper contacts__tel">
        <img src={geo} alt="" />
        <div><span>г. Москва ул. Московская 27-35 555 555</span></div>
      </div>
    </address>
  )
}
