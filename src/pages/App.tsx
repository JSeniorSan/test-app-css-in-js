import styled from "styled-components";
import Header from "../widgets/header/header";
import P from "../shared/p/p";
import Search from "../features/search/search";
import Card from "../widgets/cards/_ui/card";
import CardList from "../widgets/cards/pub/card-list";

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
      <P>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </P>
      <Search />
      <CardList />
    </AppWrapper>
  );
}

export default App;
