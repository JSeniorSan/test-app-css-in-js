import styled from "styled-components";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface CountInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {}

const Count = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const CountElement = (props: CountInterface) => {
  return <Count>{props.children}</Count>;
};

export default CountElement;
