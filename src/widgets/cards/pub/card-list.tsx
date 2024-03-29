import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../_ui/card";
import { PostsData } from "../model/types";

const CardListLayout = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
`;

const CardList = () => {
  const [posts, setPosts] = useState<PostsData[]>([]);
  //   обработать ошибки

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data1: PostsData[] = await res1.json();
        setPosts(data1);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <CardListLayout>
      {posts.map((post, i) => {
        return (
          <Card
            countDislikes={Math.round(Math.random() * 50)}
            countLikes={Math.round(Math.random() * 50)}
            image={
              i === 0
                ? "https://placehold.co/1358x435/png"
                : "https://placehold.co/558x273/png"
            }
            text={post.body}
            title={post.title}
            type={i === 0 ? true : false}
            key={post.id}
          />
        );
      })}
    </CardListLayout>
  );
};

export default CardList;
