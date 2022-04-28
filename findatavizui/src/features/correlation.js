import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { beta: 0, pe: 0, atr: 0 };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    corrData: (state, action) => {
      state.value = action.payload;
    },

    clear: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { corrData, clear } = userSlice.actions;

export default userSlice.reducer;
