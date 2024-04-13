import { AsideDetails } from "../../components/AsideDetails/AsideDetails"
import { NextButton } from "../../components/NextButton/NextButton"
import { SummaryPassengers } from "../../components/SummaryPassengers/SummaryPassengers"
import { SummaryPayment } from "../../components/SummaryPayment/SummaryPayment"
import { TrainCard } from "../../components/TrainCard/TrainCard"
import { Footer } from "../../layout/footer/Footer"
import { MainHeader } from "../../layout/headers/MainHeader/MainHeader"
import { MainContainer } from "../../layout/main-container/MainContainer"

export const Confirmation = () => {
  return (
    <>
      <MainHeader />
      <MainContainer>
        <aside>
          <AsideDetails />
        </aside>
        <main className="confirmation-wrapper">
          <TrainCard buttonType="summary" />
          <SummaryPassengers />
          <SummaryPayment />
          <NextButton width="323px" height="60px" title="Подтвердить" disabled={false} />
        </main>
      </MainContainer>
      <Footer />
    </>
)
}
