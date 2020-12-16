import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { wrap } from 'regenerator-runtime';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render expense list filter component', () => {
  expect(wrapper).toMatchSnapshot();
});

test('shgould render expense list filters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters,
  });

  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const tempText = 'test filter';
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: {
        value: tempText,
      },
    });
  expect(setTextFilter).toHaveBeenCalledWith(tempText);
});

test('should sort by date', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: 'date',
    },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const temp;
  wrapper.find('select').simulate('change', {
    target: {
      value: 'amount',
    },
  });
  expect(sortByAmount).toHaveBeenCalled();
});
