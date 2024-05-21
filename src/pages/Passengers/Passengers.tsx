import { useEffect, useState } from "react"
import { AsideDetails } from "../../components/AsideDetails/AsideDetails"
import { NextButton } from "../../components/NextButton/NextButton"
import { PassengerInfo } from "../../components/PassengerInfo/PassengerInfo"
import { useAppSelector } from "../../hooks/redux"
import { Footer } from "../../layout/footer/Footer"
import { MainHeader } from "../../layout/headers/MainHeader/MainHeader"
import { MainContainer } from "../../layout/main-container/MainContainer"
import { useNavigate } from "react-router-dom"
import { useActions } from "../../hooks/actions"

export const Passengers = () => {
  const [active] = useState(1);
  const [disabled, setDisabled] = useState(true);
  const [successful, setSuccessful] = useState<number[] | []>([]);

  const { stage, passengersTypes } = useAppSelector(state => state.railTickets);
  const { setStage } = useActions();

  const arr = Array(passengersTypes.adults + (passengersTypes.children || 0)).fill(0).map((_, i) => i + 1);
  const navigate = useNavigate();

  const addSuccess = (n: number) => {
    if (!successful.length) {
      setSuccessful([n]);
      return;
    }
    setSuccessful((prev) => [...prev, n]);
  }

  const removeSuccess = (n: number) => {
    if (!successful.length) return;
    const filtered = successful.filter((num) => num !== n);
    setSuccessful(filtered);
  }

  const handleNextBtnClick = () => {
    if (disabled) return;
    setStage(4);
  }

  useEffect(() => {
    const sorted = successful.sort();
    if (arr.length === successful.length
      && arr.every((el, index) => el === sorted[index])) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [successful]);
  
  useEffect(() => {
    if (stage !== 4) return;
    setTimeout(() => navigate('/payment'), 0);
  }, [stage])

  return (
    <>
      <MainHeader />
      <MainContainer>
        <aside>
          <AsideDetails />
        </aside>
        <main className="passengers-wrapper">
          {arr.map((n) => (
            <div key={n}>
              <PassengerInfo number={n} active={active} addSuccess={addSuccess} removeSuccess={removeSuccess} />
            </div>
          ))}
          <div onClick={handleNextBtnClick}>
            <NextButton width="222px" height="60px" title="Далее" disabled={disabled} />
          </div>
        </main>
      </MainContainer>
      <Footer />
    </>
  )
}
