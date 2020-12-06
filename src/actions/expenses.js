import { v4 as uuidv4 } from 'uuid';

// ADD EXPENSE
export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense: expense,
  };
};

// REMOVE EXPENSE
export const removeExpense = ({ id }) => {
  return {
    type: 'REMOVE_EXPENSE',
    id: id,
  };
};

// EDIT EXPENSE
export const editExpense = ({ id, expense }) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  expense: expense,
});
