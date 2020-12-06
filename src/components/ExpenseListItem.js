import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => {
  const { id, description, amount, createdAt } = props;
  return (
    <div>
      <h1>{description}</h1>
      <p>
        id = {id}
        {amount} - create at: {createdAt}
        <Link to={`/edit/${id}`}>Edit</Link>
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
