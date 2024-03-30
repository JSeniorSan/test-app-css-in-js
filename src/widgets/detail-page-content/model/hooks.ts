import {
  selectDislikeIsClicked,
  selectDislikesCount,
  selectLikeIsClicked,
  selectLikesCount,
} from "../../../features/likes/model/selectors";
import { useAppSelector } from "../../../entities/store/hooks";

const useDetailData = () => {
  const likes = useAppSelector(selectLikesCount);
  const likeIsClicked = useAppSelector(selectLikeIsClicked);
  const dislikeIsClicked = useAppSelector(selectDislikeIsClicked);
  const dislikes = useAppSelector(selectDislikesCount);

  return { likes, likeIsClicked, dislikeIsClicked, dislikes };
};

export default useDetailData;
