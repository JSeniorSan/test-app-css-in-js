import { useLocation } from "react-router-dom";
import Head from "../shared/card-title/h2";
import Flex from "../shared/flex";
import DetailPageTop from "../widgets/detail-page-content/pub/detail-page-top";
import { useEffect, useState } from "react";
import { PostsData } from "../widgets/cards/model/types";
import { useAppSelector } from "../entities/store/hooks";
import { selectPic } from "../widgets/detail-page-content/model/selectors";

const DetailPage = () => {
  const [currentPost, setCurrentPost] = useState<PostsData>();
  const { pathname } = useLocation();
  const postId = pathname.split("/")[1];
  const pic = useAppSelector(selectPic);

  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const data = await res.json();
      setCurrentPost(data);
    };
    getPost();
  }, []);
  return (
    <Flex
      direction="column"
      gap="48px"
      width="full"
      height="100%"
      justify="center"
      align="center"
      padding="64px 130px">
      <DetailPageTop />
      <Head $size={40} $weight={700} style={{ alignSelf: "center" }}>
        {currentPost?.title}
      </Head>
      <Flex direction="column" align="center" padding="0px 146px" gap="48px">
        <img src={pic} alt="pic" width={848} height={477} />
        <Head $size={18} $weight={400} $width={848}>
          {currentPost?.body}
        </Head>
      </Flex>
    </Flex>
  );
};

export default DetailPage;
