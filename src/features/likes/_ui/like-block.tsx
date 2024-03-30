import Flex from "../../../shared/flex";
import LikeSvgComponent from "./like-svg-component";
import DislikeSvgComponent from "./dislike-svg-component";
import CountElement from "./count-element";
import Button from "../../../shared/button/button";
import { useAppDispatch, useAppSelector } from "../../../entities/store/hooks";
import { incrementDislike, incrementLike } from "../model/likes-slice";
import { switchLikeType } from "../model/types";
import {
  selectDislikeIsClicked,
  selectLikeIsClicked,
} from "../model/selectors";

const LikeBlock = (props: switchLikeType) => {
  const { count, typeFeature, typeLike, isDislikeClick, isLikeClick } = props;
  const dispatch = useAppDispatch();
  const storeLikeIsClicked = useAppSelector(selectLikeIsClicked);
  const storeDislikeIsClicked = useAppSelector(selectDislikeIsClicked);

  function dispatchInStore(type: "increment" | "decrement") {
    type === "increment"
      ? dispatch(incrementLike())
      : dispatch(incrementDislike());
  }

  const handleLikeClick = () => {
    if (typeFeature === "onMainPage") {
      props.setLikesCount((prev) => {
        if (prev.like.isClicked) return prev;
        if (prev.dislike.isClicked) {
          return {
            dislike: {
              count: prev.dislike.count - 1,
              isClicked: false,
            },
            like: {
              count: prev.like.count + 1,
              isClicked: true,
            },
          };
        } else {
          return {
            dislike: {
              count: prev.dislike.count,
              isClicked: false,
            },
            like: {
              count: prev.like.count + 1,
              isClicked: true,
            },
          };
        }
      });
    } else {
      dispatchInStore("increment");
    }
  };

  const handleDislikeClick = () => {
    if (typeFeature === "onMainPage") {
      props.setLikesCount((prev) => {
        if (prev.dislike.isClicked) return prev;
        if (prev.like.isClicked) {
          return {
            dislike: {
              count: prev.dislike.count + 1,
              isClicked: true,
            },
            like: {
              count: prev.like.count - 1,
              isClicked: false,
            },
          };
        } else {
          return {
            dislike: {
              count: prev.dislike.count + 1,
              isClicked: false,
            },
            like: {
              count: prev.like.count,
              isClicked: false,
            },
          };
        }
      });
    } else {
      dispatchInStore("decrement");
    }
  };

  return (
    <Flex align="center" gap="5px">
      {typeLike ? (
        <Button onClick={handleLikeClick} type="transparent">
          <LikeSvgComponent
            colorsvg={isLikeClick || storeLikeIsClicked ? "green" : "gray"}
            style={{
              cursor: "pointer",
            }}
          />
        </Button>
      ) : (
        <Button onClick={handleDislikeClick} type="transparent">
          <DislikeSvgComponent
            style={{
              cursor: "pointer",
            }}
            colorsvg={isDislikeClick || storeDislikeIsClicked ? "red" : "gray"}
          />
        </Button>
      )}
      <CountElement>{count}</CountElement>
    </Flex>
  );
};

export default LikeBlock;
