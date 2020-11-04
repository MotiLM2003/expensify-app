import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/appRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { getVisibleExpenses } from './selectors/expenses';
import { setTextFilter } from './actions/filters';

const store = configureStore();

store.subscribe(() => {
  const { expenses, filters } = store.getState();

  console.log(filters);
});

store.dispatch(
  addExpense({
    description: 'Water Bill',
    amount: 4500,
    createdAt: 1,
  })
);

store.dispatch(
  addExpense({
    createdAt: 1000,
    description: 'Gas Bill',
    amount: 3500,
  })
);

store.dispatch(
  addExpense({
    description: 'Rent',
    note: 'had to replace the old one',
    amount: 1,
    createdAt: 0,
  })
);
setTimeout(() => {
  //  store.dispatch(setTextFilter('new'));

  console.log('sadsa');
}, 2000);
const jsx = (
  <Provider store={store}>
    <AppRouter />;
  </Provider>
);

//console.log(store.getState());
ReactDOM.render(jsx, document.getElementById('root'));
