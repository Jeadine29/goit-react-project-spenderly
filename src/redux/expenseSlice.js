import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push({ ...action.payload, id: Date.now() });
    }
  }
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
