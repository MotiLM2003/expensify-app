export const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  const result = expenses
    .filter((expense) => {
      const startDateMath =
        startDate === undefined || expense.createdAt >= startDate;
      const endDateMatch =
        endDate === undefined || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMath && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? -1 : 1;
      } else {
        return a.amount < b.amount ? 1 : -1;
      }
    });

  return result;
};
