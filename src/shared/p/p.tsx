import styled from "styled-components";

const Page = styled.p`
  font-weight: 400;
`;

const P = ({ children, ...props }: { children: string }) => {
  return <Page {...props}>{children}</Page>;
};

export default P;
