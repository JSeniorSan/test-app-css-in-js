import { DetailedHTMLProps, HTMLAttributes } from "react";
import styled from "styled-components";

interface InputPropsInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value?: string;
}

const InputElement = styled.input`
  width: 100%;
  border: none;
  background: transparent;
`;

const Input = (props: InputPropsInterface) => {
  return (
    <InputElement
      type="search"
      placeholder="Поиск по названию статьи"
      {...props}
    />
  );
};

export default Input;
