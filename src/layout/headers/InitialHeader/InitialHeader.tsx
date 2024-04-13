import { Progress } from 'antd';
import { ConvertableForm } from '../../../components/ConvertableForm/ConvertableForm';
import { Logo } from '../../../components/Logo/Logo';
import { MainTitle } from '../../../components/MainTitle/MainTitle';
import { NavMenu } from '../../../components/NavMenu/NavMenu';
import '../../../styles/App.css';
// import cn from 'classnames';

export const InitialHeader = () => {
  return (
    <header className="initial-header">
      <div className="initial-header__logo-wrapper">
        <Logo />
      </div>
      <NavMenu />
      <div className="initial-header__wrapper">
        <MainTitle />
        <ConvertableForm view='initial-view' />
      </div>
      <div className='initial-header__progress'>
        <Progress percent={100} strokeColor='#FFA800' strokeLinecap='square' showInfo={false} />
      </div>
    </header>
  )
}
