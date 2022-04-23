import { configureStore } from "@reduxjs/toolkit";

import { modalReducer as modal } from "@store/slice/modal.slice";
import { templateReducer as template } from "@store/slice/template.slice";

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
    template,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem(
    LSStatesName,
    JSON.stringify({
      template: state.template,
    })
  );
});
