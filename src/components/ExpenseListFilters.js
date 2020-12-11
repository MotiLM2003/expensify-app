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

const ExpenseListFilters = (props) => {
  const [cleandarFocused, setCleandarFocused] = useState(null);

  const onDateChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate));
  };
  const onFocusChange = (x) => {
    setCleandarFocused(x);
  };
  return (
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
export default connect(mapState)(ExpenseListFilters);
