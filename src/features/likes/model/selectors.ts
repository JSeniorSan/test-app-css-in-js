import { RootState } from "../../../entities/store/store";

export const selectDislikesCount = (state: RootState) =>
  state.likes.dislikeCount;
export const selectLikesCount = (state: RootState) => state.likes.likeCount;
