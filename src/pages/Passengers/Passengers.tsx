import { AsideDetails } from "../../components/AsideDetails/AsideDetails"
import { NextButton } from "../../components/NextButton/NextButton"
import { PassengerInfo } from "../../components/PassengerInfo/PassengerInfo"
import { Footer } from "../../layout/footer/Footer"
import { MainHeader } from "../../layout/headers/MainHeader/MainHeader"
import { MainContainer } from "../../layout/main-container/MainContainer"

export const Passengers = () => {
  return (
    <>
      <MainHeader />
      <MainContainer>
        <aside>
          <AsideDetails />
        </aside>
        <main className="passengers-wrapper">
          <PassengerInfo />
          <NextButton width="222px" height="60px" title="Далее" disabled />
        </main>
      </MainContainer>
      <Footer />
    </>
  )
}
