import { useState } from "react"
import { AsideDetails } from "../../components/AsideDetails/AsideDetails"
import { NextButton } from "../../components/NextButton/NextButton"
import { PersonalData } from "../../components/PersonalData/PersonalData"
import { Footer } from "../../layout/footer/Footer"
import { MainHeader } from "../../layout/headers/MainHeader/MainHeader"
import { MainContainer } from "../../layout/main-container/MainContainer"
import { useActions } from "../../hooks/actions"
import { useNavigate } from "react-router-dom"

export const Payment = () => {
  const [disabled, setDisabled] = useState(true);
  const { setStage } = useActions();

  const navigate = useNavigate();

  const handleSuccess = (correct: boolean) => {
    if (correct) setDisabled(false);
    if (!correct) setDisabled(true);
  }

  const handleNextBtnClick = () => {
    if (disabled) return;
    setStage(5);
    setTimeout(() => navigate('/confirmation'), 0);
  }

    return (
      <>
        <MainHeader />
        <MainContainer>
          <aside>
            <AsideDetails />
          </aside>
          <main className="payment-wrapper">
            <PersonalData onSuccess={handleSuccess} />
            <div onClick={handleNextBtnClick}>
              <NextButton width="323px" height="60px" title="Купить билеты" disabled={disabled} />
            </div>
          </main>
        </MainContainer>
        <Footer />
      </>
  )
}
