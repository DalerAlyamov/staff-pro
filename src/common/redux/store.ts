import { configureStore } from "@reduxjs/toolkit";

import { modalReducer as modal } from "@redux/slice/modal.slice";
import { userReducer as user } from "@redux/slice/user.slice";

import { LSStatesName } from "@utilities/locastorage.utility";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(LSStatesName);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const store = configureStore({
  devTools: true,
  reducer: {
    modal,
    user,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem(
    LSStatesName,
    JSON.stringify({
      user: state.user,
    })
  );
});
