export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': {
      console.log('add expense', action.expense);
      return [...state, action.expense];
    }
    case 'REMOVE_EXPENSE': {
      return state.filter(({ id }) => id !== action.id);
    }
    case 'EDIT_EXPENSE': {
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, ...action.expense };
        } else {
          return item;
        }
      });
    }

    default: {
      return state;
    }
  }
};
