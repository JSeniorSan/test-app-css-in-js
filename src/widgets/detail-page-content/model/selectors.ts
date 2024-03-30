import { RootState } from "../../../entities/store/store";

export const selectPic = (state: RootState) => state.pic.pic;
