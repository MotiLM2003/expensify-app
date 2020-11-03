import React from 'react';
const EditExpensePage = (props) => {
  console.log(props);
  return <p>Editing the expense with id of {props.match.params.id}</p>;
};

export default EditExpensePage;
