import alertSign from '../../assets/alert-sign.svg';

interface IAlertProps {
  type: 'danger' | 'warning',
  title: string,
  message: string,
}

export const Alert = ({ type, title = '', message }: IAlertProps) => {

  if (!alert) return;

  return (
    <div className="alert">
      <div className="alert__wrapper">
        <header className={`alert__header alert-${type}`}>
          <img src={alertSign} alt='!' />
        </header>
        <div className='alert__body'>
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
        <footer className='alert__footer'>
          <button>Понятно</button>
        </footer>
      </div>
      <div className="alert__overlay"></div>
    </div>
  )
}
