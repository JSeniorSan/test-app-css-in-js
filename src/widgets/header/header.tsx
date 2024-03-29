import styled from "styled-components";

const Head = styled.header`
  font-size: 60px;
  display: inline;
  font-weight: 600;
  text-align: center;
`;

const Header = ({ children }: { children: string }) => {
  return <Head>{children}</Head>;
};

export default Header;
