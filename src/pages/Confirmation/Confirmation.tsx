import { AsideDetails } from "../../components/AsideDetails/AsideDetails"
import { NextButton } from "../../components/NextButton/NextButton"
import { SummaryPassengers } from "../../components/SummaryPassengers/SummaryPassengers"
import { SummaryPayment } from "../../components/SummaryPayment/SummaryPayment"
import { TrainCard } from "../../components/TrainCard/TrainCard"
import { Footer } from "../../layout/footer/Footer"
import { MainHeader } from "../../layout/headers/MainHeader/MainHeader"
import { MainContainer } from "../../layout/main-container/MainContainer"
import { useAppSelector } from "../../hooks/redux"
import { useNavigate } from "react-router-dom"
import { useSendDataMutation } from "../../store/students.netoservices.api"
import { useEffect } from "react"
import { Loader } from "../../components/Loader/Loader"

export const Confirmation = () => {
  const [sendData, result] = useSendDataMutation();
  const { chosenDestination, finalRequest } = useAppSelector(state => state.railTickets);
  console.log(result)

  const navigate = useNavigate();

  useEffect(() => {
    if (!result.isSuccess) return;
    navigate('/final', { state: { id: result.requestId } });
  }, [result])

  if (!chosenDestination) return '';

  const handleNextBntClick = () => {
    sendData(finalRequest);
  }

  return (
    <>
      <MainHeader />
      {result.isLoading && <Loader />}
      {!result.isLoading && <MainContainer>
        <aside>
          <AsideDetails />
        </aside>
        <main className="confirmation-wrapper">
          <TrainCard item={chosenDestination} buttonType="summary" />
          <SummaryPassengers />
          <SummaryPayment />
          <div onClick={handleNextBntClick}>
            <NextButton width="323px" height="60px" title="Подтвердить" disabled={false} />
          </div>
        </main>
      </MainContainer>}
      <Footer />
    </>
)
}
