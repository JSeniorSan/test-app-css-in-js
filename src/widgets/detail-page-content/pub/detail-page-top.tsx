import BackHomeFeature from "../_ui/back-home-feature";
import LikesFeature from "../../../features/likes/likes-feature";
import Flex from "../../../shared/flex";
import { useAppSelector } from "../../../entities/store/hooks";
import {
  selectDislikesCount,
  selectLikesCount,
} from "../../../features/likes/model/selectors";

const DetailPageTop = () => {
  const likes = useAppSelector(selectLikesCount);
  const dislikes = useAppSelector(selectDislikesCount);
  return (
    <Flex justify="space-between" width="full">
      <BackHomeFeature />
      <LikesFeature
        likeCount={{
          dislikeCount: dislikes,
          likeCount: likes,
        }}
      />
    </Flex>
  );
};

export default DetailPageTop;
