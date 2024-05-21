import loader from '../../assets/анимация-загрузки.gif';

export const Loader = () => {
  return (
    <div className="loader">
        <img className="loader__img" src={loader} alt='...loading' />
    </div>
  )
}
