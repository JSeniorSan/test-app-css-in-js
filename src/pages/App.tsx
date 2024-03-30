import styled from "styled-components";
import Header from "../widgets/header/header";
import Search from "../features/search/search";
import CardList from "../widgets/cards/pub/card-list";
import Head from "../shared/card-title/h2";
import { useEffect, useMemo, useState } from "react";
import { PostsData } from "../widgets/cards/model/types";

const AppWrapper = styled.div`
  min-height: 100vh;
  padding: 64px 130px;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

function App() {
  const [value, setValue] = useState<string>("");
  const [posts, setPosts] = useState<PostsData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data1: PostsData[] = await res1.json();
        setPosts(data1);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    };
    fetchData();
  }, []);

  const filteredValue = useMemo(() => {
    if (value === "") return posts;

    return posts.filter((post: PostsData) => {
      return post.title.toLowerCase().includes(value.toLowerCase());
    });
  }, [posts, value]);

  return (
    <AppWrapper>
      <Header>Блог</Header>
      <Head $size={24} $weight={400}>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </Head>
      <Search setValue={setValue} value={value} />
      <CardList posts={filteredValue} />
    </AppWrapper>
  );
}

export default App;
