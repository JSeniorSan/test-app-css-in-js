import styled, { css } from "styled-components";
import LikesFeature from "../../../features/likes/likes-feature";
import H2 from "../../../shared/card-title/h2";
import P from "../../../shared/p/p";
import Flex from "../../../shared/flex";
import { CardProps } from "../model/types";

const CardWrapper = styled(Flex)<{ $large?: boolean }>`
  height: fit-content;
  min-width: fit-content;
  max-width: 100%;
  border: 1px solid #f4f4f4;
  border-radius: 12px;
  box-shadow: 10px 10px 10px #00000018;
  padding: 24px 16px 32px 16px;
  ${(props) =>
    props.$large &&
    css`
      grid-column: 1/3;
    `}
`;

const Link = styled.button`
  padding: 14px 24px 12px 24px;
  border: 2px solid black;
  border-radius: 60px;
  font-size: 16px;
  font-weight: 400;
  align-self: end;
`;

const Card = ({
  image,
  title,
  text,
  countLikes,
  countDislikes,
  type,
}: CardProps) => {
  return (
    <CardWrapper $large={type} direction="column" gap="24px">
      <img src={image} alt="content" width="100%" height="50%" />
      <Flex direction="column" gap="32px">
        <Flex justify="space-between" width="full">
          <H2>{title}</H2>
          {type && <LikesFeature likes={countLikes} dislikes={countDislikes} />}
        </Flex>
        {type && <P>{text}</P>}
      </Flex>
      {!type && (
        <Flex justify="space-between" width="full" align="center">
          <LikesFeature likes={countLikes} dislikes={countDislikes} />
          <Link>Читать дальше</Link>
        </Flex>
      )}
      {type && <Link>Читать дальше</Link>}
    </CardWrapper>
  );
};

export default Card;
