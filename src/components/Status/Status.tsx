import { useAppSelector } from "../../hooks/redux"

export const Status = () => {
  const { stage } = useAppSelector(state => state.railTickets);

  return (
    <div className="status">
      <div className="status__item active">
        <div>1</div>
        <p>Билеты</p>
      </div>
      <div className={`status__item ${stage > 2 && 'active'}`}>
        <div>2</div>
        <p>Пассажиры</p>
      </div>
      <div className={`status__item ${stage > 3 && 'active'}`}>
        <div>3</div>
        <p>Оплата</p>
      </div>
      <div className={`status__item ${stage > 4 && 'active'}`}>
        <div>4</div>
        <p>Проверка</p>
      </div>
    </div>
  )
}
