import styled from "styled-components";

interface h2Interface
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  $size: number;
  $weight: number;
  $width?: number;
}

const Title = styled.h2<h2Interface>`
  font-size: ${(props) => props.$size + "px"};
  font-weight: ${(props) => props.$weight};
  width: ${(props) => props.$width + "px"};
`;
const Head = (props: h2Interface) => {
  return <Title {...props}>{props.children}</Title>;
};

export default Head;
