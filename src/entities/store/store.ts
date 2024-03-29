import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/likes/model/likes-slice";

export const store = configureStore({
  reducer: {
    likes: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
