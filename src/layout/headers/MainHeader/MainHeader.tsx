import { ConvertableForm } from "../../../components/ConvertableForm/ConvertableForm"
import { Logo } from "../../../components/Logo/Logo"
import { NavMenu } from "../../../components/NavMenu/NavMenu"
import { Status } from "../../../components/Status/Status"
import '../../../styles/App.css'

export const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="main-header__wrapper">
        <div>
          <div className="main-header__wrapper_logo-wrapper">
            <Logo />
          </div>
          <NavMenu />
        </div>
        <div className="main-header__wrapper_form-wrapper">
        <ConvertableForm view='main-view' />
        </div>
      </div>
      <Status />
    </header>
  )
}
