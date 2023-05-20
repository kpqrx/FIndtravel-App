import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState = {
  value: {},
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;
export const selectSearchValue = (state: RootState) => state.search.value;

export default searchSlice.reducer;
