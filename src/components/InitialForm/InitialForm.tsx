import arrows from '../../assets/form-arrows-circled.svg';

export const InitialForm = () => {
  return (
    // <div className="form-container_brick">
    //   <form className="form-container_brick__form">

    //     <div className="form-container_brick__form_label-wrapper">
    //       <label htmlFor="destination-from">Направление</label>
    //       <input id='destination-from' name="destination-from" placeholder='Откуда' type="text" required />
    //       <img src={arrows} />
    //       <input name="destination-to" placeholder='Куда' type="text" required />
    //     </div>

    //     <div className="form-container_brick__form_label-wrapper">
    //       <label htmlFor="date-from">Дата</label>
    //       <input id='date-to' name="date-from" placeholder='ДД/ММ/ГГ' readOnly required />
    //       <input name="date-to" placeholder='ДД/ММ/ГГ' readOnly />
    //     </div>

    //     <button type="submit">Найти билеты</button>

    //   </form>
    // </div>


    <div className="form-container_snake">
      <form className="form-container_snake__form">

        <div className="form-container_snake__form_label-wrapper">
          <label htmlFor="destination-from">Направление</label>
          <input id='destination-from' name="destination-from" placeholder='Откуда' type="text" required />
          <img src={arrows} />
          <input name="destination-to" placeholder='Куда' type="text" required />
        </div>

        <div className="form-container_snake__form_label-wrapper">
          <label htmlFor="date-from">Дата</label>
          <input id='date-to' name="date-from" placeholder='ДД/ММ/ГГ' readOnly required />
          <input name="date-to" placeholder='ДД/ММ/ГГ' readOnly />
        </div>

        <button type="submit">Найти билеты</button>

      </form>
    </div>
  )
}
