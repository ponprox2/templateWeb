import axios from "axios";

class GetImage {
  getImageByID = async (id) => {
    const res = await axios.get(
      `http://localhost:3000/api/v1/products/${id}/image`
    );
    return res;
  };
  deleteProduct = async (id) => {
    const res = await axios.delete(
      `http://localhost:3000/api/v1/products/${id}`
    );
    return res;
  };
}

const getImage = new GetImage();
export default getImage;
