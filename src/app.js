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
  const filterd = getVisibleExpenses(expenses, filters);
  // console.log(filterd);
});

store.dispatch(
  addExpense({
    description: 'New House',
    note: 'took a lot of my savings.',
    amount: 450000,
    createdAt: 1,
  })
);

store.dispatch(
  addExpense({
    description: 'Brown Coach',
    note: 'had to replace the old one',
    amount: 3500,
    createdAt: 0,
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />;
  </Provider>
);
store.dispatch(setTextFilter('A_'));
//console.log(store.getState());
ReactDOM.render(jsx, document.getElementById('root'));
