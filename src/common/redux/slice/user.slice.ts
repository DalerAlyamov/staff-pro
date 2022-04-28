import * as i from "@interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: i.User = {
  id: undefined,
  name: undefined,
  email: undefined,
  rank: undefined,
  type: undefined,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    initUser(state: i.User, { payload }: PayloadAction<i.User>) {
      state.id = payload.id;
      state.name = payload.name;
      state.email = payload.email;
      state.rank = payload.rank;
      state.type = payload.type;
    },
    deInitUser(state: i.User) {
      state.id = undefined;
      state.name = undefined;
      state.email = undefined;
      state.rank = undefined;
      state.type = undefined;
    },
  },
});

const userReducer = userSlice.reducer;
const userActions = userSlice.actions;

export { userReducer, userActions };
