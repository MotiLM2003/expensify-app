import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input
      type='Text'
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        const func = e.target.value === 'date' ? sortByDate : sortByAmount;
        props.dispatch(func());
      }}
    >
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
    </select>
  </div>
);

const mapState = (state) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapState)(ExpenseListFilters);
