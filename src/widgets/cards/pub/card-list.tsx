import styled from "styled-components";
import Card from "../_ui/card";
import { PostsData } from "../model/types";

const CardListLayout = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
`;

const CardList = ({ posts }: { posts: PostsData[] }) => {
  return (
    <CardListLayout>
      {posts.map((post, i) => {
        return (
          <Card
            image={
              i === 0
                ? "https://placehold.co/1358x435/png"
                : "https://placehold.co/558x273/png"
            }
            text={post.body}
            title={post.title}
            type={i === 0 ? true : false}
            id={post.id}
            key={post.id}
          />
        );
      })}
    </CardListLayout>
  );
};

export default CardList;
