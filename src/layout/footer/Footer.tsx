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
        <img src={upBtn} alt="" className="footer__basement_button-up" />
        <span className="footer__basement_copyright">2018 WEB</span>
      </div>
    </footer>
  )
}
