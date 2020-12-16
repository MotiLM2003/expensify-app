import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export const ExpenseListFilters = (props) => {
  const [cleandarFocused, setCleandarFocused] = useState(null);

  const onDateChange = ({ startDate, endDate }) => {
    props.setStartDate(startDate);
    props.setEndDate(endDate);
  };
  const onFocusChange = (x) => {
    setCleandarFocused(x);
  };

  const onSortChange = (e) => {
    const func =
      e.target.value === 'date' ? props.sortByDate : props.sortByAmount;
    func();
  };

  const onTextChange = (e) => {
    props.setTextFilter(e.target.value);
  };

  return (
    <div>
      <input type='Text' value={props.filters.text} onChange={onTextChange} />
      <select value={props.filters.sortBy} onChange={onSortChange}>
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>
      <DateRangePicker
        startDate={props.filters.startDate}
        endDate={props.filters.endDate}
        onDatesChange={onDateChange}
        focusedInput={cleandarFocused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
    </div>
  );
};
const mapState = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate()),
  };
};

export default connect(mapState, mapDispatchToProps)(ExpenseListFilters);
