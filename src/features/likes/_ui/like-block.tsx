import styled from "styled-components";
import LikeSvgComponent from "./like-svg-component";
import Flex from "../../../shared/flex";
const Count = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const LikeBlock = ({ count }: { count: number }) => {
  return (
    <Flex align="center" gap="5px">
      <LikeSvgComponent />
      <Count>{count}</Count>
    </Flex>
  );
};

export default LikeBlock;
