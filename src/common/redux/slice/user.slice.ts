import * as i from "@interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: i.User = {
  id: undefined,
  name: undefined,
  email: undefined,
  rank: undefined,
};

const userSlice = createSlice({
  name: "templateSlice",
  initialState,
  reducers: {
    initUser(state: i.User, { payload }: PayloadAction<i.User>) {
      state.id = payload.id;
      state.name = payload.name;
      state.email = payload.email;
      state.rank = payload.rank;
    },
    deInitUser(state: i.User) {
      state.id = undefined;
      state.name = undefined;
      state.email = undefined;
      state.rank = undefined;
    },
  },
});

const userReducer = userSlice.reducer;
const userActions = userSlice.actions;

export { userReducer, userActions };
