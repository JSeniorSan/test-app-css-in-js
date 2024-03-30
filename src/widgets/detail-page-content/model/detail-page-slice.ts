import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitInterface {
  pic: string;
}

const initialState: InitInterface = {
  pic: "",
};

export const detailPageSlice = createSlice({
  name: "picStore",
  initialState,
  reducers: {
    setPic: (state, action: PayloadAction<InitInterface>) => {
      state.pic += action.payload.pic;
    },

    resetPic: () => initialState,
  },
});

export const { setPic, resetPic } = detailPageSlice.actions;

export default detailPageSlice.reducer;
