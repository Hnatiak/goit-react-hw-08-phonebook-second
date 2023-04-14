import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filter-actions';
import css from './Filter.module.css';

function Filter() {
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const handleFilterContacts = e => {
    return dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <label className={css.label}>
       <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterContacts}
      />
    </label>
  );
}

export default Filter;