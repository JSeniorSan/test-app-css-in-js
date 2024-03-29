import LikeBlock from "./_ui/like-block";
import Flex from "../../shared/flex";
import { LikesCountInterface } from "../../widgets/cards/model/types";

const LikesFeature = ({ likeCount }: { likeCount: LikesCountInterface }) => {
  return (
    <Flex gap="10px" align="center" height="32px">
      <LikeBlock typeLike count={likeCount.likeCount} />
      <LikeBlock count={likeCount.dislikeCount} />
    </Flex>
  );
};

export default LikesFeature;
