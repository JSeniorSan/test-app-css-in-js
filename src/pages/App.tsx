import styled from "styled-components";
import Header from "../widgets/header/header";
import Search from "../features/search/search";
import CardList from "../widgets/cards/pub/card-list";
import Head from "../shared/card-title/h2";

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
  return (
    <AppWrapper>
      <Header>Блог</Header>
      <Head $size={24} $weight={400}>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </Head>
      <Search />
      <CardList />
    </AppWrapper>
  );
}

export default App;
