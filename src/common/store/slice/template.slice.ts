import * as i from "@interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: i.template = {};

const templateSlice = createSlice({
  name: "templateSlice",
  initialState,
  reducers: {
    initCommittee(
      state: i.template,
      { payload }: PayloadAction<i.template[]>
    ) {},
  },
});

const templateReducer = templateSlice.reducer;
const templateActions = templateSlice.actions;

export { templateReducer, templateActions };
