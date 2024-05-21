import { MainHeader } from "../../layout/headers/MainHeader/MainHeader"
import { Footer } from "../../layout/footer/Footer"
import { MainContainer } from "../../layout/main-container/MainContainer"
import { AsideFilter } from "../../components/AsideFilter/AsideFilter"
import { LastTickets } from "../../components/LastTickets/LastTickets"
import { WagonCard } from "../../components/WagonCard/WagonCard"
import { NextButton } from "../../components/NextButton/NextButton"
import { useAppSelector } from "../../hooks/redux"
import { useEffect, useState } from "react"
import { useActions } from "../../hooks/actions"
import { useNavigate } from "react-router-dom"
import { Loader } from "../../components/Loader/Loader"

export const Seats = () => {
  const [block, setBlock] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { chosenDestination, passengersQuantity, seatsQuantity } = useAppSelector(state => state.railTickets);
  const { setStage, resetPassengersTypes, resetSeatsQuantity } = useActions();

  const handleNextBtnClick = () => {
    if (block) return;
    setStage(3);
    setTimeout(() => { navigate('/passengers') }, 0);
  }

  const handleLoad = (loading: boolean) => {
    setLoading(loading);
  }

  useEffect(() => {
    resetPassengersTypes();
    resetSeatsQuantity();
  }, [])

  useEffect(() => {
    if (!chosenDestination?.arrival) {
      if (passengersQuantity === seatsQuantity.departure) {
        setBlock(false);
      } else {
        setBlock(true);
      }
    } else if (chosenDestination.arrival) {
      if (passengersQuantity === seatsQuantity.departure
        && passengersQuantity === seatsQuantity.arrival) {
          setBlock(false);
        } else {
          setBlock(true);
        }
    }
  }, [passengersQuantity, seatsQuantity])

  if (!chosenDestination) return '';

  return (
    <>
      <MainHeader />
      {loading && <Loader />}
      {!loading &&
      <MainContainer>
        <aside>
          <AsideFilter />
          <LastTickets />
        </aside>
        <main className="seats-page">
          <h2>выбор мест</h2>
          <div className="seats-page__main">
            <WagonCard from={false} id={chosenDestination?.departure._id} onLoad={handleLoad} />
            {chosenDestination.arrival && <WagonCard from={true} id={chosenDestination.arrival._id} onLoad={handleLoad} />}
            <div onClick={handleNextBtnClick}>
              <NextButton width="222px" height="60px" title="Далее" disabled={block} />
            </div>
          </div>
        </main>
      </MainContainer>}
      <Footer />
    </>
  )
}
