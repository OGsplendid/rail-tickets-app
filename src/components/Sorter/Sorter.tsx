import { useEffect, useState } from "react";
import { useActions } from "../../hooks/actions";

const sortOptions: string[] = [
  'времени',
  'стоимости',
  'длительности',
]

const offsetOptions: number[] = [
  5, 10, 20,
]

export const Sorter = ({ count }: { count: number | undefined }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sort, setSort] = useState('времени');
  const [limit, setLimit] = useState(5);

  const { setDestinationQuery } = useActions();

  const handleSorting = (value: string) => {
    setSort(value);
    setMenuOpen(false);
  }

  useEffect(() => {
    setDestinationQuery({
      sort: sort === 'времени' ? 'time' : sort === 'стоимости' ? 'price' : 'duration',
      limit: limit.toString(),
    });
  }, [sort, limit, setDestinationQuery])

  return (
    <div className="sorter">
      <span className="sorter__results-amount">
        найдено <span>{count ? count : 0}</span>
      </span>
      <div className="sorter__wrapper">
        <div className="sorter__sort-time">
          сортировать по: 
          <span 
            className="sorter__sort-time_chosen"
            onClick={() => setMenuOpen(true)}
          >{sort}
          </span>
          {menuOpen && <div className="sorter__sort-time_menu">
            {sortOptions.map((o) => (
              <span key={o} onClick={() => handleSorting(o)}>{o}</span>
            ))}
          </div>}
        </div>
        <div className="sorter__offset">
          показывать по:
          {offsetOptions.map((o) => (
            <span key={o}
              className={o === limit ? "sorter__offset_chosen" : ''}
              onClick={() => setLimit(+o)}
            >{o}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
