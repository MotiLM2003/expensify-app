import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense', () => {
  const action = removeExpense('1234');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234',
  });
});
