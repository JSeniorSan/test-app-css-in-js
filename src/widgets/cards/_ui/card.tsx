import styled, { css } from "styled-components";
import LikesFeature from "../../../features/likes/likes-feature";
import Flex from "../../../shared/flex";
import { CardProps } from "../model/types";
import Button from "../../../shared/button/button";
import Head from "../../../shared/card-title/h2";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../entities/store/hooks";
import { useEffect, useState } from "react";
import { reset, setCounts } from "../../../features/likes/model/likes-slice";
import { CounterState } from "../../../features/likes/model/types";
import { setPic } from "../../detail-page-content/model/detail-page-slice";

const CardWrapper = styled(Flex)<{ $large?: boolean }>`
  height: fit-content;
  width: 100%;
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

const Card = ({ image, title, text, type, id }: CardProps) => {
  const dispatch = useAppDispatch();
  const [likes, setLikes] = useState<CounterState>({
    dislike: {
      count: 0,
      isClicked: false,
    },
    like: {
      count: 0,
      isClicked: false,
    },
  });

  function randomNumber() {
    return Math.round(Math.random() * 50);
  }

  useEffect(() => {
    setLikes({
      dislike: {
        count: randomNumber(),
        isClicked: false,
      },
      like: {
        count: randomNumber(),
        isClicked: false,
      },
    });
  }, []);

  return (
    <CardWrapper $large={type} direction="column" gap="24px" width="full">
      <img src={image} alt="content" width="100%" height="50%" />
      <Flex direction="column" gap="32px">
        <Flex justify="space-between" width="full">
          <Head $size={28} $weight={700}>
            {title}
          </Head>
          {type && (
            <LikesFeature
              likes={likes}
              setLikes={setLikes}
              typeFeature="onMainPage"
            />
          )}
        </Flex>
        {type && (
          <Head $size={24} $weight={400}>
            {text}
          </Head>
        )}
      </Flex>
      {!type && (
        <Flex justify="space-between" width="full" align="center">
          <LikesFeature
            likes={likes}
            setLikes={setLikes}
            typeFeature="onMainPage"
          />
          <Link to={`/${id}`} style={{ alignSelf: "end", cursor: "pointer" }}>
            <Button
              type="link"
              onClick={() => {
                dispatch(reset());
                dispatch(setCounts(likes));
                dispatch(setPic({ pic: image }));
              }}>
              Читать дальше
            </Button>
          </Link>
        </Flex>
      )}
      {type && (
        <Link
          to={`/${id}`}
          style={{
            alignSelf: "end",
            cursor: "pointer",
          }}>
          <Button
            type="link"
            onClick={() => {
              dispatch(reset());
              dispatch(setCounts(likes));
              dispatch(setPic({ pic: image }));
            }}>
            Читать дальше
          </Button>
        </Link>
      )}
    </CardWrapper>
  );
};

export default Card;
