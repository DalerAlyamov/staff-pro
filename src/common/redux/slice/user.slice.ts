import * as i from "@interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: i.UserSlice = {
  data: undefined
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    initUser(state: i.UserSlice, { payload }: PayloadAction<i.UserData>) {
      state.data = payload;
    },
    deInitUser(state: i.UserSlice) {
      state.data = undefined;
    },
  },
});

const userReducer = userSlice.reducer;
const userActions = userSlice.actions;

export { userReducer, userActions };
