import { RootState } from "../../../entities/store/store";

export const selectDislikesCount = (state: RootState) =>
  state.likes.dislike.count;
export const selectLikesCount = (state: RootState) => state.likes.like.count;
export const selectLikeIsClicked = (state: RootState) =>
  state.likes.like.isClicked;
export const selectDislikeIsClicked = (state: RootState) =>
  state.likes.dislike.isClicked;
