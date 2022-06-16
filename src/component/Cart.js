import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import handleCart from "./service/getCartByIdUser";
import axios from "axios";

function Cart() {
  const [productInCart, setProductInCart] = useState([]);
  //   console.log(productInCart);
  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("userInfo"));

    async function getProductById(value, arrTemp) {
      const resProduct = await axios.get(
        `http://localhost:3000/api/v1/products/${value.id}`
      );
      if (resProduct.status === 200) {
        const itemProduct = {
          id: resProduct.data[0].id,
          size: value.size,
          image: resProduct.data[0].link_image,
          name: resProduct.data[0].name,
          total:
            resProduct.data[0].price *
            (1 - resProduct.data[0].discount * 0.01) *
            value.quantity,
          quantity: value.quantity,
          price:
            resProduct.data[0].price * (1 - resProduct.data[0].discount * 0.01),
        };

        const tempProductInCart = JSON.parse(
          localStorage.getItem("productInCart")
        );

        if (tempProductInCart) {
          const arrTemp = [...tempProductInCart, itemProduct];
          localStorage.setItem("productInCart", JSON.stringify(arrTemp));
        } else {
          const arrTemp = [itemProduct];
          localStorage.setItem("productInCart", JSON.stringify(arrTemp));
        }
      }
    }

    async function getCartById() {
      const res = await handleCart.GetCartByIdUser(temp.id);
      const tempProductInCart1 = JSON.parse(
        localStorage.getItem("productInCart")
      );
      console.log(tempProductInCart1);
      if (res.status === 200) {
        if (tempProductInCart1) {
            
        } else {
          res.data[0].cart.forEach((value, index) => {
            getProductById(value);
          });
        }
      }
    }
    if (temp) {
      getCartById();
    }
  }, []);

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
                    {productInCart && (
                      <tbody>
                        <tr class="top-class">
                          <td class="product-thumbnail">
                            <Link to="/#" class="remove">
                              <i class="bx bx-x"></i>
                            </Link>

                            <Link to="/#">
                              <img
                                src="assets/img/products/products-1.jpg"
                                alt="item"
                              />
                            </Link>
                          </td>

                          <td class="product-name">
                            <Link to="/products-details">17 Inch Rim</Link>
                          </td>

                          <td class="product-price">
                            <span class="unit-amount">$250.00</span>
                          </td>

                          <td class="product-quantity">
                            <div class="input-counter">
                              <span class="minus-btn">
                                <i class="bx bx-minus"></i>
                              </span>
                              <input type="text" value="1" />
                              <span class="plus-btn">
                                <i class="bx bx-plus"></i>
                              </span>
                            </div>
                          </td>

                          <td class="product-subtotal">
                            <span class="subtotal-amount">$250.00</span>
                          </td>
                        </tr>
                      </tbody>
                    )}
                    <tbody>
                      <tr class="top-class">
                        <td class="product-thumbnail">
                          <Link to="/#" class="remove">
                            <i class="bx bx-x"></i>
                          </Link>

                          <Link to="/#">
                            <img
                              src="assets/img/products/products-1.jpg"
                              alt="item"
                            />
                          </Link>
                        </td>

                        <td class="product-name">
                          <Link to="/products-details">17 Inch Rim</Link>
                        </td>

                        <td class="product-price">
                          <span class="unit-amount">$250.00</span>
                        </td>

                        <td class="product-quantity">
                          <div class="input-counter">
                            <span class="minus-btn">
                              <i class="bx bx-minus"></i>
                            </span>
                            <input type="text" value="1" />
                            <span class="plus-btn">
                              <i class="bx bx-plus"></i>
                            </span>
                          </div>
                        </td>

                        <td class="product-subtotal">
                          <span class="subtotal-amount">$250.00</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>

            <div class="col-lg-4 col-md-12">
              <div class="cart-totals">
                <h3>Cart Totals</h3>

                <ul>
                  <li>
                    Subtotal <span>$599.00</span>
                  </li>
                  <li>
                    Shipping <span>$30.00</span>
                  </li>
                  <li>
                    Total <span>$599.00</span>
                  </li>
                  <li>
                    Payable Total <span>$599.00</span>
                  </li>
                </ul>

                <Link to="/#" class="default-btn">
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
