export const Status = () => {
  return (
    <div className="status">
      <div className="status__item active">
        <h4>1</h4>
        <h5>Билеты</h5>
        <div className="status__item_triangle active"></div>
      </div>
      <div className="status__item">
        <h4>2</h4>
        <h5>Пассажиры</h5>
        <div className="status__item_triangle"></div>
      </div>
      <div className="status__item">
        <h4>3</h4>
        <h5>Оплата</h5>
        <div className="status__item_triangle"></div>
      </div>
      <div className="status__item">
        <h4>4</h4>
        <h5>Проверка</h5>
      </div>
    </div>
  )
}
