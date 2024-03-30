import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CounterState {
  dislike: StateInfo;
  like: StateInfo;
}

export interface svgInterface
  extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
  colorsvg: "red" | "green" | "gray";
}
export type fnStateType = (value: CounterState) => CounterState;

export type fnPropsStateType = (val: fnStateType) => void;

export interface LikesStorePropsTypes {
  likes: CounterState;
  typeFeature: "inStore";
}

export interface LikesMainPagePropsTypes {
  typeFeature: "onMainPage";
  likes: CounterState;
  setLikes: fnPropsStateType;
}

export type LikesProps = LikesMainPagePropsTypes | LikesStorePropsTypes;

export interface StateInfo {
  count: number;
  isClicked: boolean;
}

export interface MainPageLikeInterface {
  typeLike?: boolean;
  count: number;
  typeFeature: "onMainPage";
  setLikesCount: fnPropsStateType;
  isLikeClick?: boolean;
  isDislikeClick?: boolean;
}
export interface StoreLikeInterface {
  typeLike?: boolean;
  count: number;
  typeFeature: "inStore";
  isLikeClick?: boolean;
  isDislikeClick?: boolean;
}

export type switchLikeType = MainPageLikeInterface | StoreLikeInterface;
