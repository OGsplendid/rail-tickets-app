import { MainHeader } from "../../layout/headers/MainHeader/MainHeader"
import { Footer } from "../../layout/footer/Footer"
import { MainContainer } from "../../layout/main-container/MainContainer"
import { AsideFilter } from "../../components/AsideFilter/AsideFilter"
import { LastTickets } from "../../components/LastTickets/LastTickets"
import { WagonCard } from "../../components/WagonCard/WagonCard"
import { NextButton } from "../../components/NextButton/NextButton"
// import { useState } from "react"

export const Seats = () => {
  // const [sdf] = useState('');

  return (
    <>
      <MainHeader />
      <MainContainer>
        <aside>
          <AsideFilter />
          <LastTickets />
        </aside>
        <main className="seats-page">
          <h2>выбор мест</h2>
          <div className="seats-page__main">
            <WagonCard />
            <NextButton width="222px" height="60px" title="Далее" disabled={true} />
          </div>
        </main>
      </MainContainer>
      <Footer />
    </>
  )
}
