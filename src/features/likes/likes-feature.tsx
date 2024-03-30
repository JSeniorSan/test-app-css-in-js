import LikeBlock from "./_ui/like-block";
import Flex from "../../shared/flex";
import { LikesProps } from "./model/types";

const LikesFeature = (props: LikesProps) => {
  return (
    <>
      {props.typeFeature === "inStore" && (
        <Flex gap="10px" align="center" height="32px">
          <LikeBlock
            typeLike
            count={props.likes.like.count}
            typeFeature={props.typeFeature}
          />
          <LikeBlock
            count={props.likes.dislike.count}
            typeFeature={props.typeFeature}
          />
        </Flex>
      )}

      {props.typeFeature === "onMainPage" && (
        <Flex gap="10px" align="center" height="32px">
          <LikeBlock
            typeLike
            count={props.likes.like.count}
            typeFeature={props.typeFeature}
            setLikesCount={props.setLikes}
            isLikeClick={props.likes.like.isClicked}
          />
          <LikeBlock
            count={props.likes.dislike.count}
            typeFeature={props.typeFeature}
            setLikesCount={props.setLikes}
            isDislikeClick={props.likes.dislike.isClicked}
          />
        </Flex>
      )}
    </>
  );
};

export default LikesFeature;
