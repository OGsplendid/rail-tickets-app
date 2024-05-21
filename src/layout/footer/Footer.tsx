import { Contacts } from "../../components/Contacts/Contacts"
import { Logo } from "../../components/Logo/Logo"
import { Subscription } from "../../components/Subscription/Subscription"
import upBtn from '../../assets/arrowup-icon.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Contacts />
        <Subscription />
      </div>
      <div className="footer__basement">
        <Logo />
        <a href="/#main-page__about-us"><img src={upBtn} alt="" className="footer__button-up" /></a>
        <span className="footer__copyright">2018 WEB</span>
      </div>
    </footer>
  )
}
