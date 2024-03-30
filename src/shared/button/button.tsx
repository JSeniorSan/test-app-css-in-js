import { DetailedHTMLProps, HTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface buttonInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type: "transparent" | "link";
}

const StyledButton = styled.button<buttonInterface>`
  ${(props) =>
    props.type === "link" &&
    css`
      padding: 14px 24px 12px 24px;
      border: 2px solid black;
      border-radius: 60px;
      font-size: 16px;
      font-weight: 400;
      align-self: end;
      cursor: pointer;
    `}
  ${(props) =>
    props.type === "transparent" &&
    css`
      background: transparent;
      border: none;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
    `}
`;

const Button = (props: buttonInterface) => {
  return <StyledButton {...props}></StyledButton>;
};

export default Button;
