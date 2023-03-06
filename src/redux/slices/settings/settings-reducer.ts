import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "redux/store";

const reducerName = "siteSettings";

const initialState = {
  isLoginOpen: false,
};

export const siteSettings = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    openLogin: (state, action) => {
      state.isLoginOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openLogin } = siteSettings.actions;

export default siteSettings.reducer;

export const selectIsLoginModal = (state: AppState) =>
  state.siteSettings.isLoginOpen;
