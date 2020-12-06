import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => {
  const { id, description, amount, createdAt } = props;
  return (
    <div>
      <Link to={`/edit/${id}`}>
        {' '}
        <h1>{description}</h1>
      </Link>
      <p>
        id = {id}
        {amount} - create at: {createdAt}
      </p>
    </div>
  );
};

export default connect()(ExpenseListItem);
