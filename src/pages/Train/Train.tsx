import { AsideFilter } from "../../components/AsideFilter/AsideFilter"
import { LastTickets } from "../../components/LastTickets/LastTickets"
import { TrainCard } from "../../components/TrainCard/TrainCard"
import { Footer } from "../../layout/footer/Footer"
import { MainHeader } from "../../layout/headers/MainHeader/MainHeader"
import { AntdPagination } from "../../antd/AntdPagination/AntdPagination"
import { Sorter } from "../../components/Sorter/Sorter"
import { MainContainer } from "../../layout/main-container/MainContainer"

export const Train = () => {
  return (
    <>
      <MainHeader />
      <MainContainer>
        <aside>
          <AsideFilter />
          <LastTickets />
        </aside>
        <main className="train-page">
          <Sorter />
          <div className="train-page__cards">
            <TrainCard buttonType="primary" />
          <div className="train-page__pagination">
            <AntdPagination />
          </div>
          </div>
        </main>
      </MainContainer>
      <Footer />
    </>
  )
}
