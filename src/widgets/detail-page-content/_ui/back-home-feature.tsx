import { Link } from "react-router-dom";
import Head2 from "../../../shared/card-title/h2";
import Flex from "../../../shared/flex";
import { useAppDispatch } from "../../../entities/store/hooks";
import { reset } from "../../../features/likes/model/likes-slice";
import { resetPic } from "../../../widgets/detail-page-content/model/detail-page-slice";

const BackHomeFeature = () => {
  const dispatch = useAppDispatch();
  const handleBackClick = () => {
    dispatch(reset());
    dispatch(resetPic());
  };

  return (
    <Link
      to={"/"}
      style={{ color: "black", textDecoration: "none" }}
      onClick={handleBackClick}>
      <Flex gap="5px" height="50px" align="center">
        <img src="/keyboard_backspace.png" alt="back" />
        <Head2 $size={24} $weight={400}>
          Вернуться к статьям
        </Head2>
      </Flex>
    </Link>
  );
};

export default BackHomeFeature;
