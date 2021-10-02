import React from 'react'
import s from './Filter.module.css'
import PropTypes from 'prop-types';

const Filter = ({value, onFilter}) => {
    return(
    <label className={s.filterLabel}>
        Search by name
            <input type="text" className={s.filter} value={value} onChange={onFilter}/>
        </label>
        )
}
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func,
};
