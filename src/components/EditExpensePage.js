import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
const EditExpensePage = (props) => {
  const onUpdateExpense = (expense) => {
    console.log('updating', expense);
  };
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm expense={props.expense} onSubmit={onUpdateExpense} />
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
