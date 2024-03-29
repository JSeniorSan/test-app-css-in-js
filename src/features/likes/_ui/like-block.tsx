import Flex from "../../../shared/flex";
import { useState } from "react";
import LikeSvgComponent from "./like-svg-component";
import DislikeSvgComponent from "./dislike-svg-component";
import CountElement from "./count-element";
import Button from "../../../shared/button/button";
import { useAppDispatch } from "../../../entities/store/hooks";
import { incrementDislike, incrementLike } from "../model/likes-slice";

const LikeBlock = ({
  typeLike,
  count,
}: {
  typeLike?: boolean;
  count: number;
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setIsClicked(true);
    typeLike ? dispatch(incrementLike()) : dispatch(incrementDislike());
  };

  return (
    <Flex align="center" gap="5px">
      {typeLike ? (
        <Button onClick={handleClick} type="transparent">
          <LikeSvgComponent
            colorsvg={isClicked ? "green" : "gray"}
            style={{
              cursor: "pointer",
            }}
          />
        </Button>
      ) : (
        <Button onClick={handleClick} type="transparent">
          <DislikeSvgComponent
            style={{
              cursor: "pointer",
            }}
            colorsvg={isClicked ? "red" : "gray"}
          />
        </Button>
      )}
      <CountElement>{count}</CountElement>
    </Flex>
  );
};

export default LikeBlock;
