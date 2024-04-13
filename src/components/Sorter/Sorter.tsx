import { useState } from "react";

const sortOptions: string[] = [
  'времени',
  'стоимости',
  'длительности',
]

const offsetOptions: number[] = [
  5, 10, 20,
]

export const Sorter = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sortOption, setSortOption] = useState('времени');
  const [offsetOption, setOffsetOption] = useState(5);

  const handleSorting = (value: string) => {
    setSortOption(value);
    setMenuOpen(false);
  }

  return (
    <div className="sorter">
      <span className="sorter__results-amount">
        найдено <span>20</span>
      </span>
      <div className="sorter__wrapper">
        <div className="sorter__sort-time">
          сортировать по: 
          <span 
            className="sorter__sort-time_chosen"
            onClick={() => setMenuOpen(true)}
          >{sortOption}
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
              className={o === offsetOption ? "sorter__offset_chosen" : ''}
              onClick={() => setOffsetOption(+o)}
            >{o}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
