import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        setClient: (state, action) => {
            state.client = action.payload;
        },
    },
});

export const { setClient } = clientSlice.actions;
export default clientSlice.reducer;
