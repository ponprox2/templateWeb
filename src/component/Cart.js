import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import handleCart from "./service/getCartByIdUser";
import axios from "axios";
import { Box, Button } from "@mui/material";

function Cart() {
  const [productInCart, setProductInCart] = useState([]);
  const [quantityUpdateRerender, setQuantityUpdateRerender] = useState("");
  const [totalAmoutCart, setTotalAmoutCart] = useState("");

  const temp = JSON.parse(localStorage.getItem("userInfo"));

  async function getCartById() {
    const res = await handleCart.GetCartByIdUser(temp.id);
    setProductInCart(res.data[0].cart);
    console.log(res.data[0].cart);
  }
  async function UpdateQuality(index, quantity) {
    const res = await handleCart.updateQuality(temp.id, index, quantity);
    setProductInCart(res.data[0].cart);
  }
  function totalAmout() {
    if (productInCart) {
      const TotalAmout = productInCart.reduce((cur, acc) => {
        {
          const tempAmout =
            acc.price * (1 - acc.discount * 0.01) * acc.quantity;

          return cur + tempAmout;
        }
      }, 0);
      setTotalAmoutCart(TotalAmout);
      const tempCart = [{ idUSer: temp.id, TotalAmout: TotalAmout }, []];
      productInCart.forEach((value, index) => {
        value[index] = {
          product: value.id,
          quantity: value.quantity,
          size: value.size,
          discount: value.discount,
        };
        tempCart[1].push(value[index]);
        localStorage.setItem("cart", JSON.stringify(tempCart));
      });
    }
  }

  useEffect(() => {
    if (temp) {
      getCartById();
    }
  }, [quantityUpdateRerender]);

  useEffect(() => {
    totalAmout();
  }, [productInCart]);
  const increaseQuantity = (quantity, index) => {
    const quantityUpdate = quantity + 1;

    UpdateQuality(index, quantityUpdate);
    setQuantityUpdateRerender(quantityUpdate);
  };
  const decreaseQuantity = (quantity, index) => {
    const quantityUpdate = quantity - 1;
    UpdateQuality(index, quantityUpdate);
    setQuantityUpdateRerender(quantityUpdate);
  };

  const handleCheckOut = () => {};
  const handleRemove = (index) => {
    async function getProductDetail(id) {
      await axios.delete(
        `http://localhost:3000/api/v1/users/${temp.id}/cart/${id}`
      );
    }

    getProductDetail(index);
  };
  return (
    <>
      <Header />

      <div class="page-banner-area">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-banner-content">
                <h2>Cart</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Cart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="cart-area ptb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <form>
                <div class="cart-table table-responsive">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>

                    {productInCart.map((value, index) => (
                      <tbody>
                        <tr class="top-class">
                          <td class="product-thumbnail">
                            <Button
                              onClick={() => handleRemove(index)}
                              class="remove"
                            >
                              <i class="bx bx-x"></i>
                            </Button>

                            <Link to="/#">
                              <img
                                src="assets/img/products/products-1.jpg"
                                alt="item"
                              />
                            </Link>
                          </td>

                          <td class="product-name">
                            <Link to="/products-details">{value.name}</Link>
                          </td>

                          <td class="product-price">
                            <span class="unit-amount">
                              {value.price * (1 - value.discount * 0.01)}
                            </span>
                          </td>

                          <td class="product-quantity">
                            <div class="input-counter">
                              <span class="minus-btn">
                                <i
                                  class="bx bx-minus"
                                  onClick={() => {
                                    decreaseQuantity(value.quantity, index);
                                  }}
                                ></i>
                              </span>
                              <input type="text" value={value.quantity} />
                              <span
                                class="plus-btn"
                                onClick={() =>
                                  increaseQuantity(value.quantity, index)
                                }
                              >
                                <i class="bx bx-plus"></i>
                              </span>
                            </div>
                          </td>

                          <td class="product-subtotal">
                            <span class="subtotal-amount">
                              {value.price *
                                (1 - value.discount * 0.01) *
                                value.quantity}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </form>
            </div>

            <div class="col-lg-4 col-md-12">
              <div class="cart-totals">
                <h3>Cart Totals</h3>

                <ul>
                  {productInCart.map((value, index) => (
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>{index + 1 * 1} : </p>
                      <p> {value.price * (1 - value.discount * 0.01)} </p>
                      <p>X</p>
                      <p>{value.quantity} </p>
                      <p>= </p>
                      <p>
                        {value.price *
                          (1 - value.discount * 0.01) *
                          value.quantity}
                      </p>
                    </Box>
                  ))}

                  <li>
                    Payable Total <span>{totalAmoutCart}</span>
                  </li>
                </ul>

                <Link to="/cart/checkout" class="default-btn">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Cart Area */}

      {/* Start Footer Area */}
      <Footer />
      <div class="go-top">
        <i class="bx bx-up-arrow-alt"></i>
      </div>
    </>
  );
}

export default Cart;
