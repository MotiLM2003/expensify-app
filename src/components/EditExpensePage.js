import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  const onUpdateExpense = (expense) => {
    props.dispatch(editExpense(expense));
    props.history.push('/');
  };

  const onRemoveExpense = () => {
    console.log(props.expense.id);
    props.dispatch(removeExpense(props.expense.id));
    props.history.push('/');
  };

  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm expense={props.expense} onSubmit={onUpdateExpense} />
      <button onClick={onRemoveExpense}>Remove expense</button>
    </div>
  );
};

const stateToProps = (state, props) => () => {
  return {
    expense: state.expenses.find(
      (x) => x.id === parseInt(props.match.params.id)
    ),
  };
};

export default connect(stateToProps)(EditExpensePage);
