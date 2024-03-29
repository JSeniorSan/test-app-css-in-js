import LikeBlock from "./_ui/like-block";
import DislikeBlock from "./_ui/dislike-block";
import Flex from "../../shared/flex";

const LikesFeature = ({
  likes,
  dislikes,
}: {
  likes: number;
  dislikes: number;
}) => {
  return (
    <Flex gap="10px" align="baseline">
      <LikeBlock count={likes} />
      <DislikeBlock count={dislikes} />
    </Flex>
  );
};

export default LikesFeature;
