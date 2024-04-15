import { AsideFilter } from "../../components/AsideFilter/AsideFilter"
import { LastTickets } from "../../components/LastTickets/LastTickets"
import { TrainCard } from "../../components/TrainCard/TrainCard"
import { Footer } from "../../layout/footer/Footer"
import { MainHeader } from "../../layout/headers/MainHeader/MainHeader"
import { AntdPagination } from "../../antd/AntdPagination/AntdPagination"
import { Sorter } from "../../components/Sorter/Sorter"
import { MainContainer } from "../../layout/main-container/MainContainer"
import { useFetchDestinationsQuery } from "../../store/students.netoservices.api"
import { useQueryAssembler } from "../../hooks/useQueryAssembler"
import { useEffect, useState } from "react"

export const Train = () => {
  const query = useQueryAssembler();
  const { data } = useFetchDestinationsQuery(query);
  console.log(data)
  console.log(query)
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    if (!data || !data.items) return;
    const minPriceArr = data.items.map((item) => item.min_price);
    let minPrice = Infinity;
    for (let i = 0; i < minPriceArr.length; i += 1) {
      if (minPriceArr[i] < minPrice) minPrice = minPriceArr[i];
    }
    
    // const maxPriceFirstClassArr = data.items.map((item) => item.)
  }, [data])

  // const priceRange = useMemo(() => {
  //   const min = Math.min(data?.items.map((item) => item.min_price));
  // }, [data])

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
