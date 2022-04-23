import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  modalKey: null,
  modalProps: null,
  isShowLoading: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    openModal(
      state: any,
      { payload }: PayloadAction<{ modal: string; props: any }>
    ) {
      state.modalKey = payload.modal;
      state.modalProps = payload.props;
    },
    closeModal(state: any) {
      state.modalKey = null;
      state.modalProps = null;
    },
    setIsShowLoading(state: any, { payload }: PayloadAction<boolean>) {
      state.isShowLoading = payload;
    },
  },
});

const modalReducer = modalSlice.reducer;
const modalActions = modalSlice.actions;

export { modalReducer, modalActions };
