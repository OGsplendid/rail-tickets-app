import { AsideDetails } from "../../components/AsideDetails/AsideDetails"
import { NextButton } from "../../components/NextButton/NextButton"
import { PersonalData } from "../../components/PersonalData/PersonalData"
import { WayOfPayment } from "../../components/WayOfPayment/WayOfPayment"
import { Footer } from "../../layout/footer/Footer"
import { MainHeader } from "../../layout/headers/MainHeader/MainHeader"
import { MainContainer } from "../../layout/main-container/MainContainer"

export const Payment = () => {
    return (
      <>
        <MainHeader />
        <MainContainer>
          <aside>
            <AsideDetails />
          </aside>
          <main className="payment-wrapper">
            <PersonalData />
            <WayOfPayment />
            <NextButton width="323px" height="60px" title="Купить билеты" disabled />
          </main>
        </MainContainer>
        <Footer />
      </>
  )
}
