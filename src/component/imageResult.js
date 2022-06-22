import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getImage from "./service/getImageProduct";

function Image({ id }) {
  const [linkImage, setLinkImage] = useState("");
  useEffect(() => {
    async function getImageProduct(id) {
      const res = await getImage.getImageByID(id);

      setLinkImage(res.data.image);
    }
    getImageProduct(id);
  }, []);

  return (
    <>
      <img src={linkImage} />
    </>
  );
}

export default Image;
