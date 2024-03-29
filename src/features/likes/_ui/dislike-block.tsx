import styled from "styled-components";
import DislikeSvgComponent from "./dislike-svg-component";
import Flex from "../../../shared/flex";
const Count = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const DislikeBlock = ({ count }: { count: number }) => {
  return (
    <div>
      <Flex align="center" gap="5px">
        <DislikeSvgComponent />
        <Count>{count}</Count>
      </Flex>
    </div>
  );
};

export default DislikeBlock;
