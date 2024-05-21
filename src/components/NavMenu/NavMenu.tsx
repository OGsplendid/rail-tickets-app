import { Link } from "react-router-dom"
import { Logo } from "../Logo/Logo"

export const NavMenu = () => {
  return (
    <nav className="navmenu">
      <div className="navmenu__logo-wrapper">
        <Link to='/'><Logo /></Link>
      </div>
      <ul className="navmenu__nav-wrapper">
        <li className="navmenu__item"><a href="/#main-page__about-us">О нас</a></li>
        <li className="navmenu__item"><a href="/#main-page__info">Как это работает</a></li>
        <li className="navmenu__item"><a href="/#main-page__feedback">Отзывы</a></li>
        <li className="navmenu__item"><a href="/#main-page__contacts">Контакты</a></li>
      </ul>
    </nav>
  )
}
