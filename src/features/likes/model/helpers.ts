import { CounterState } from "./types";

export function likeStoreStateCount(state: CounterState) {
  if (state.like.isClicked) return;
  if (state.dislike.isClicked) {
    state.like.count += 1;
    state.dislike.count -= 1;
    state.dislike.isClicked = false;
  } else {
    state.like.count += 1;
  }
  state.like.isClicked = true;
}

export function dislikeStoreStateCount(state: CounterState) {
  if (state.dislike.isClicked) return;
  if (state.like.isClicked) {
    state.dislike.count += 1;
    state.like.count -= 1;
    state.like.isClicked = false;
  } else {
    state.dislike.count += 1;
  }
  state.dislike.isClicked = true;
}
