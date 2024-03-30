import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "./types";
import { dislikeStoreStateCount, likeStoreStateCount } from "./helpers";

const initialState: CounterState = {
  dislike: {
    count: 0,
    isClicked: false,
  },
  like: {
    count: 0,
    isClicked: false,
  },
};

export const counterSlice = createSlice({
  name: "likeCounter",
  initialState,
  reducers: {
    incrementLike: (state) => {
      likeStoreStateCount(state);
    },
    incrementDislike: (state) => {
      dislikeStoreStateCount(state);
    },

    setCounts: (state, action: PayloadAction<CounterState>) => {
      state.dislike.count += action.payload.dislike.count;
      state.like.count += action.payload.like.count;
      state.dislike.isClicked = action.payload.dislike.isClicked;
      state.like.isClicked = action.payload.like.isClicked;
    },

    reset: () => initialState,
  },
});

export const { incrementLike, incrementDislike, setCounts, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
