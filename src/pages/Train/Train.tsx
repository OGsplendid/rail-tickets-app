import { AsideFilter } from "../../components/AsideFilter/AsideFilter"
import { LastTickets } from "../../components/LastTickets/LastTickets"
import { TrainCard } from "../../components/TrainCard/TrainCard"
import { Footer } from "../../layout/footer/Footer"
import { MainHeader } from "../../layout/headers/MainHeader/MainHeader"
import { Sorter } from "../../components/Sorter/Sorter"
import { MainContainer } from "../../layout/main-container/MainContainer"
import { useFetchDestinationsQuery } from "../../store/students.netoservices.api"
import { useQueryAssembler } from "../../hooks/useQueryAssembler"
import { useEffect } from "react"
import { Pagination } from "../../components/Pagination/Pagination";
import { useAppSelector } from "../../hooks/redux"
import { useNavigate } from "react-router-dom"
import { useActions } from "../../hooks/actions"
import { Loader } from "../../components/Loader/Loader"

export const Train = () => {
  const query = useQueryAssembler();
  const { data, isLoading } = useFetchDestinationsQuery(query);
  // console.log(query)

  const { stage } = useAppSelector(state => state.railTickets);
  const { setDirection, resetFinalDestinationData, resetPassengersTypes, resetSeatsQuantity } = useActions();
  const navigate = useNavigate();

  useEffect(() => {
    if (stage !== 2) {
      resetFinalDestinationData();
      resetPassengersTypes();
      resetSeatsQuantity();
      return;
    }
    setDirection();
    navigate('/seats');
  }, [stage])

  return (
    <>
      <MainHeader />
      {isLoading && <Loader />}
      {!isLoading &&
      <MainContainer>
        <aside>
          <AsideFilter />
          <LastTickets />
        </aside>
        <main className="train-page">
          <Sorter count={data?.total_count} />
          <div className="train-page__cards">
            {data?.items && data?.items.map((item) => (
              <TrainCard key={item.departure._id} buttonType="primary" item={item} />
            ))}
          <div className="train-page__pagination">
            <Pagination itemsLength={data?.total_count || 0} />
          </div>
          </div>
        </main>
      </MainContainer>}
      <Footer />
    </>
  )
}
