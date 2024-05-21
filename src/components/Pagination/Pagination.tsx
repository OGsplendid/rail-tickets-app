import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';

export function Pagination({ itemsLength }: { itemsLength: number }) {
  const [itemOffset, setItemOffset] = useState(0);

  const { destinationsQuery: { limit } } = useAppSelector(state => state.railTickets);
  const { setDestinationQuery } = useActions();

  const itemsPerPage = Number(limit) || 0;

  const pageCount = Math.ceil(itemsLength / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % itemsLength;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setDestinationQuery({
      offset: itemOffset.toString(),
    });
  }, [itemOffset])

  return (
    <>
      <ReactPaginate
        containerClassName={'pagination'}
        activeClassName={'pagination-button-active'}
        pageRangeDisplayed={5}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
