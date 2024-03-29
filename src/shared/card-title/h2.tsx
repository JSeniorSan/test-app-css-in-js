import styled from "styled-components";

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
`;
const H2 = ({ children }: { children: string }) => {
  return <Title>{children}</Title>;
};

export default H2;
