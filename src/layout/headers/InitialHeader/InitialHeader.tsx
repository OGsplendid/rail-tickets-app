import { Progress } from 'antd';
import { ConvertableForm } from '../../../components/ConvertableForm/ConvertableForm';
import { Logo } from '../../../components/Logo/Logo';
import { MainTitle } from '../../../components/MainTitle/MainTitle';
import { NavMenu } from '../../../components/NavMenu/NavMenu';
import '../../../styles/App.css';
import { useAppSelector } from '../../../hooks/redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const InitialHeader = () => {
  const { stage } = useAppSelector(state => state.railTickets);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();  

  useEffect(() => {
    if (stage !== 1) return;
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 10);
    if (count > 100) navigate('/train');
    return () => {
      clearInterval(interval);
    }
  }, [stage, count, navigate])

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
        <Progress percent={count} strokeColor='#FFA800' strokeLinecap='square' showInfo={false} />
      </div>
    </header>
  )
}
