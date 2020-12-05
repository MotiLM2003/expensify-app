import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = (props) => {
  const { id, description, amount, createdAt } = props;
  return (
    <div>
      <h1>{description}</h1>
      <p>
        {amount} - create at: {createdAt}
        <button
          onClick={() => {
            props.dispatch(removeExpense({ id }));
          }}
        >
          Remove
        </button>
      </p>
    </div>
  );
};

export default connect()(ExpenseListItem);
