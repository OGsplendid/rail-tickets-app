import { AsideFilter } from "../../components/AsideFilter/AsideFilter"
import { LastTickets } from "../../components/LastTickets/LastTickets"
import { TrainCard } from "../../components/TrainCard/TrainCard"
import { Footer } from "../../layout/footer/Footer"
import { MainHeader } from "../../layout/headers/MainHeader/MainHeader"
import { AntdPagination } from "../../antd/AntdPagination/AntdPagination"

export const Train = () => {
  return (
    <main className="train-page">
      <MainHeader />
      <div className="train-page__wrapper">
        <aside>
          <AsideFilter />
          <LastTickets />
        </aside>
        <main className="train-page__main">
          <div>
            <TrainCard />
            <TrainCard />
            <TrainCard />
            <TrainCard />
            <TrainCard />
            <TrainCard />
          {/* <div className="train-page__main_titles-wrapper">
            <span className="train-page__main_titles-wrapper_results-amount">
              найдено 20 
            </span>
            <span className="train-page__main_titles-wrapper_sort">
              сортировать по:  времени
            </span>
            <span className="train-page__main_titles-wrapper_offset">
              показывать по: 
              <span>5</span>
              <span>10</span>
              <span>20</span>
            </span>
          </div> */}
          <div className="train-page__main_pagination">
            <AntdPagination />
          </div>
          </div>
        </main>
      </div>
      <Footer />
    </main>
  )
}
