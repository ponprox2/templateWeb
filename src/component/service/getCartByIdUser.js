import axios from "axios";

class HandleCart {
  GetCartByIdUser = async (id) => {
    const res = await axios.get(
      `http://localhost:3000/api/v1/users/${id}/cart`
    );
    return res;
  };
  addProductToCart = async (body, id) => {
    const res = await axios.patch(
      `http://localhost:3000/api/v1/users/${id}/cart`,
      body,
      { headers: { "content-type": "multipart/form-data" } }
    );
    return res;
  };
  updateQuality = async (id, index, quantity) => {
    const res = await axios.patch(
      `http://localhost:3000/api/v1/users/${id}/cart/${index}?quantity=${quantity}`
    );
    return res;
  };
}

const handleCart = new HandleCart();
export default handleCart;
