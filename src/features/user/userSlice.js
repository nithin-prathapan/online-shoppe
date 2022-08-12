import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isLoggedIn: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.email = action.payload;
      state.isLoggedIn = action.payload;
    },
  },
  setSignOut: (state) => {
    state.email = null;
    state.isLoggedIn = false;
  },
});
export const { setUserLogin } = userSlice.actions;
export const { setSignOut } = userSlice;
export const selectUserEmail = (state) => state.user.email;
export const selectUserStatus = (state) => state.user.isLoggedIn;
export default userSlice;
