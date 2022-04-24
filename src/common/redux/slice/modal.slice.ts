import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as i from '@interfaces';

const initialState: i.Modal = {
  key: undefined,
  props: undefined
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    openModal(
      state: i.Modal,
      { payload }: PayloadAction<i.ModalOnOpen>
    ) {
      state.key = payload.key;
      state.props = payload.props;
    },
    closeModal(state: any) {
      state.key = null;
      state.props = null;
    }
  },
});

const modalReducer = modalSlice.reducer;
const modalActions = modalSlice.actions;

export { modalReducer, modalActions };
