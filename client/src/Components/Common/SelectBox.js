import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/**
 * SelectBox
 * A reusable component for displaying Dropdown
 * 
 * Props
 * @param {Array} list - Drop down list
 * @param {Number} customClass - custom class for dropdown
 * @param {Function} onChange - callback function called on changing the page
 * 
 * Examples
 * <SelectBox list={[{id:"beverages", name: "Beverages"}]} customClass={'filter-option'} onChange={onChange} />
 */
const SelectBox = ({ list, onChange, customClass = '' }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const onClick = (e) => {
    setSelectedFilter(e.target.value)
    let value = '';
    if (e.target.value != 'all') {
      value = e.target.value;
    }
    onChange(value);
  }

  let selectBoxList = [...list];
  selectBoxList.unshift({ name: 'All', id: 'all' });

  return (
    <Select
      labelId='label'
      onChange={onClick}
      id='category'
      value={selectedFilter}
      className={customClass}
      IconComponent={KeyboardArrowDownIcon}
    >
      {
        selectBoxList.map(menuItem => <MenuItem key={menuItem.id} value={menuItem.id}>{menuItem.name}</MenuItem>)
      }
    </Select>
  );
}

export default SelectBox;