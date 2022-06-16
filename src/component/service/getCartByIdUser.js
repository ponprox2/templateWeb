import axios from "axios";

class HandleCart {
  GetCartByIdUser = async (id) => {
    const res = await axios.get(
      `http://localhost:3000/api/v1/users/${id}/cart`
    );
    return res;
  };
  addProductToCart = async (body) => {
   const res = await axios.patch(`http://localhost:3000/api/v1/users/1/cart`, body);
   return res
  };

 s
}

const handleCart = new HandleCart();
export default handleCart;
