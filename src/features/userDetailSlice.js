import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    setUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
  },
});

export const { setUserDetail } = userDetailSlice.actions;
export default userDetailSlice.reducer;
