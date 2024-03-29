import { DetailedHTMLProps, HTMLAttributes } from "react";
import styled from "styled-components";

interface FlexProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  direction?: "column" | "row";
  justify?: "start" | "end" | "center" | "space-between";
  align?: "center" | "start" | "end" | "baseline";
  gap?: string;
  width?: "full" | string;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "start"};
  align-items: ${(props) => props.align || "start"};
  gap: ${(props) => props.gap || "0px"};
  width: ${(props) => (props.width && "100%") || "fit-content"};
`;
const Flex = (props: FlexProps) => {
  return <StyledFlex {...props}>{props.children}</StyledFlex>;
};

export default Flex;
