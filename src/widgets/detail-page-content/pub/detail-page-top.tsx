import BackHomeFeature from "../_ui/back-home-feature";
import LikesFeature from "../../../features/likes/likes-feature";
import Flex from "../../../shared/flex";
import useDetailData from "../model/hooks";

const DetailPageTop = () => {
  const { dislikes, dislikeIsClicked, likeIsClicked, likes } = useDetailData();

  return (
    <Flex justify="space-between" width="full">
      <BackHomeFeature />
      <LikesFeature
        likes={{
          dislike: {
            count: dislikes,
            isClicked: dislikeIsClicked,
          },
          like: {
            count: likes,
            isClicked: likeIsClicked,
          },
        }}
        typeFeature="inStore"
      />
    </Flex>
  );
};

export default DetailPageTop;
