import { ConvertableForm } from "../../../components/ConvertableForm/ConvertableForm"
import { NavMenu } from "../../../components/NavMenu/NavMenu"
import { Status } from "../../../components/Status/Status"
import '../../../styles/App.css'

export const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="main-header__wrapper">
        <div>
          <NavMenu />
        </div>
        <div className="main-header__form-wrapper">
        <ConvertableForm view='main-view' />
        </div>
      </div>
      <Status />
    </header>
  )
}
