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
});

const jsx = (
  <Provider store={store}>
    <AppRouter />;
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
