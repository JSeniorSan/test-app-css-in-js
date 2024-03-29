import styled from "styled-components";

const InputElement = styled.input`
  width: 100%;
  border: none;
  background: transparent;
`;

const Input = () => {
  return <InputElement type="search" placeholder="Поиск по названию статьи" />;
};

export default Input;
