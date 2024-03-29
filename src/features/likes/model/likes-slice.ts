import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  dislikeCount: number;
  likeCount: number;
}

const initialState: CounterState = {
  dislikeCount: 0,
  likeCount: 0,
};

export const counterSlice = createSlice({
  name: "likeCounter",
  initialState,
  reducers: {
    incrementLike: (state) => {
      state.likeCount += 1;
    },
    incrementDislike: (state) => {
      state.dislikeCount += 1;
    },

    setCounts: (state, action: PayloadAction<CounterState>) => {
      state.dislikeCount += action.payload.dislikeCount;
      state.likeCount += action.payload.likeCount;
    },
    reset: () => initialState,
  },
});

export const { incrementLike, incrementDislike, setCounts, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
