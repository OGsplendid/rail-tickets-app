import youtube from '../../assets/youtube-icon.svg';
import google from '../../assets/google+-icon.svg';
import twitter from '../../assets/twitter-icon.svg';

export const Subscription = () => {
  return (
    <div className="subscription">
      <h3>Подписка</h3>
      <form className="subscription__form">
        <label htmlFor="subscription">Будьте в курсе событий</label>
        <input type='email' id="subscription" placeholder="e-mail" />
        <button type="submit">Отправить</button>
      </form>

      <h3>Подписывайтесь на нас</h3>
      <div className="subscription__social-links">
        <img src={youtube} alt="" />
        <img src={google} alt="" />
        <img src={twitter} alt="" />
      </div>
    </div>
  )
}
