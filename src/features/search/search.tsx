import styled from "styled-components";
import Input from "../../shared/input/input";

const SearchComponent = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  border-radius: 6px;
  height: 48px;
  border: 1px solid #919eab;
  align-items: center;
  justify-content: start;
  padding: 12px 14px;
`;

const Search = () => {
  return (
    <SearchComponent>
      <img src="/ic_search.png" alt="glass" width={24} height={24} />
      <Input />
    </SearchComponent>
  );
};

export default Search;
