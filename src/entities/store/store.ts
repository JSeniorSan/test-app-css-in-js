import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/likes/model/likes-slice";
import picReducer from "../../widgets/detail-page-content/model/detail-page-slice";

export const store = configureStore({
  reducer: {
    likes: counterReducer,
    pic: picReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
