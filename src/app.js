import React from 'react';
import ReactDOM from 'react-dom';
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
  console.log(filterd);
});

store.dispatch(
  addExpense({
    description: 'B_Expense 1 description',
    note: 'some notes for expense 2',
    amount: 200,
    createdAt: 1,
  })
);

store.dispatch(
  addExpense({
    description: 'A_Expense 1 description',
    note: 'some notes for expense 2',
    amount: 200,
    createdAt: 0,
  })
);

store.dispatch(setTextFilter('A_'));
//console.log(store.getState());
ReactDOM.render(<AppRouter />, document.getElementById('root'));
