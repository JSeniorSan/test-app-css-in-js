import { useLocation } from "react-router-dom";
import Head from "../shared/card-title/h2";
import Flex from "../shared/flex";
import DetailPageTop from "../widgets/detail-page-content/pub/detail-page-top";
import { useEffect, useState } from "react";
import { PostsData } from "../widgets/cards/model/types";

const DetailPage = () => {
  const [currentPost, setCurrentPost] = useState<PostsData>();
  const { pathname } = useLocation();
  const postId = pathname.split("/")[1];

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
      align="start"
      padding="64px 130px">
      <DetailPageTop />
      <Head $size={40} $weight={700}>
        {currentPost?.title}
      </Head>
      <img
        src="https://placehold.co/848x477"
        alt="pic"
        width={848}
        height={477}
      />
      <Head $size={18} $weight={400}>
        {currentPost?.body}
      </Head>
    </Flex>
  );
};

export default DetailPage;
