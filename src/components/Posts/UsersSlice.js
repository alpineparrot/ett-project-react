import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Sofie Choi" },
  { id: "1", name: "Bryan Inglis" },
  { id: "2", name: "Corn Dog" },
];

const UsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default UsersSlice.reducer;