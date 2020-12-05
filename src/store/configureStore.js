import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expensesReducer';
import filterReucer from '../reducers/filtersReducers';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReucer,
    })
  );

  return store;
};
