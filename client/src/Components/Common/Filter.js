import { useState } from "react";

/**
 * Filter
 * A reusable component for filtering the product content
 * 
 * Props
 * @param {Array} list - list of filters
 * @param {Function} onFilterChange - callback function called on changing the Filter
 * 
 * Examples
 * <Filter list={[{id: "beverages", name: "Beverages"}]} onFilterChange={onFilterChange} />
 */
const Filter = ({ list, onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const onClick = (id) => {
    let currentFilter = ""
    if (selectedFilter !== id) {
      currentFilter = id;
    }
    onFilterChange(currentFilter);
    setSelectedFilter(currentFilter)
  }

  return (
    <ul className='filter-nav'>
      {
        list.map((listEntry) => {
          let classname = ""
          if (selectedFilter == listEntry.id) {
            classname = 'active-filter';
          }
          return (
            <li className={classname} key={listEntry.id} onClick={() => onClick(listEntry.id)}>
              <a href="#">{listEntry.name}</a>
            </li>
          )
        })
      }
    </ul>
  );
}

export default Filter;