export const PersonalData = () => {
  return (
    <section className="personal-data">
      <h3>Персональные данные</h3>
      <div className="personal-data__name-wrapper">
        <div className="personal-data__part">
          <label htmlFor="contacts-surname">Фамилия</label>
          <input type="text" id="contacts-surname" placeholder="Фамилия" />
        </div>
        <div className="personal-data__part">
          <label htmlFor="contacts-name">Имя</label>
          <input type="text" id="contacts-name" placeholder="Имя" />
        </div>
        <div className="personal-data__part">
          <label htmlFor="contacts-second-name">Отчество</label>
          <input type="text" id="contacts-second-name" placeholder="Отчество" />
        </div>
      </div>
      <div className="personal-data__contacts-wrapper">
        <div className="personal-data__part">
          <label htmlFor="contacts-phone">Контактный телефон</label>
          <input type="tel" id="contacts-phone" placeholder="+7 ___ __ __ __" />
        </div>
        <div className="personal-data__part">
          <label htmlFor="contacts-email">E-mail</label>
          <input type="email" id="contacts-email" placeholder="inbox@gmail.ru" />
        </div>
      </div>
    </section>
  )
}
