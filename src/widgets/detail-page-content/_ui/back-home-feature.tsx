import { Link } from "react-router-dom";
import Head2 from "../../../shared/card-title/h2";
import Flex from "../../../shared/flex";

const BackHomeFeature = () => {
  return (
    <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
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
