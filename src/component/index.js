import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import Footer from "./footer";
import { Button, Snackbar } from "@mui/material";
import getImage from "./service/getImageProduct";
// import HandleCart from "./service/handle-cart";
import handleCart from "./service/getCartByIdUser";
function Index() {
  // const navigate = useNavigate();
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    async function getProductAll() {
      const res = await axios.get("http://localhost:3000/api/v1/products/");
      setListProduct(res.data);
    }
    getProductAll();
  }, []);
  const handleWishList = (id) =>{
    // async function addToWishList() {
    //   const res = await axios.get("http://localhost:3000/api/v1/products/");
    //   setListProduct(res.data);
    // }
    // addToWishList();
  }
  return (
    <div>
      <Header />

      <section className="support-area">
        <div className="container">
          <div className="custom-row">
            <div className="custom-item">
              <div className="single-support">
                <div className="icon">
                  <i className="flaticon-free-delivery"></i>
                </div>

                <div className="support-content">
                  <h3>Free Delivery</h3>
                  <span>World Wide</span>
                </div>
              </div>
            </div>

            <div className="custom-item">
              <div className="single-support">
                <div className="icon">
                  <i className="flaticon-return-of-investment"></i>
                </div>

                <div className="support-content">
                  <h3>Easy Returns</h3>
                  <span>World Wide</span>
                </div>
              </div>
            </div>

            <div className="custom-item">
              <div className="single-support">
                <div className="icon">
                  <i className="flaticon-online-payment"></i>
                </div>

                <div className="support-content">
                  <h3>Payment Comfort</h3>
                  <span>World Wide</span>
                </div>
              </div>
            </div>

            <div className="custom-item">
              <div className="single-support">
                <div className="icon">
                  <i className="flaticon-online-support"></i>
                </div>

                <div className="support-content">
                  <h3>Online Support</h3>
                  <span>World Wide</span>
                </div>
              </div>
            </div>

            <div className="custom-item">
              <div className="single-support">
                <div className="icon">
                  <i className="flaticon-award"></i>
                </div>

                <div className="support-content">
                  <h3>Quality Product</h3>
                  <span>World Wide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Support Area */}

      {/* Start Products Area */}
      <section className="products-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Best Selling Products</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="tab products-list-tab">
            <ul className="tabs">
              <li>
                <Link to="/#">On Sale</Link>
              </li>
              <li>
                <Link to="/#">Trending</Link>
              </li>
              <li>
                <Link to="/#">Reset</Link>
              </li>
            </ul>

            <div className="tab_content">
              <div className="tabs_item">
                <div className="row">
                  {listProduct.map((value, index) => (
                    <div className="col-lg-3 col-sm-6" key={index}>
                      <div className="single-products">
                        <div className="products-image">
                          <Link to={`/products-details?id=${value.id}`}>
                            <img
                              src="assets/img/products/products-1.jpg"
                              alt="image"
                            />
                          </Link>
                          {value.discount > 0 ? (
                            <div className="tag">Sale! {value.discount}%</div>
                          ) : (
                            ""
                          )}
                          <ul className="products-action">
                            <li>
                              <Link to={`/products-details?id=${value.id}`}>
                                <i className="flaticon-shopping-cart"></i>
                              </Link>
                            </li>
                            <li>
                              <Button onClick={()=>handleWishList(value.id)}>
                                <i className="flaticon-heart"></i>
                              </Button>
                            </li>
                          </ul>
                        </div>

                        <div className="products-content">
                          <h3>
                            <Link to="/products-details">{value.name}</Link>
                          </h3>
                          <ul className="rating">
                            <li>
                              <i className="bx bxs-star"></i>
                            </li>
                            <li>
                              <i className="bx bxs-star"></i>
                            </li>
                            <li>
                              <i className="bx bxs-star"></i>
                            </li>
                            <li>
                              <i className="bx bxs-star"></i>
                            </li>
                            <li>
                              <i className="bx bx-star"></i>
                            </li>
                          </ul>
                          {value.discount > 0 ? (
                            <>
                              <span style={{ marginRight: "10px" }}>
                                {value.price * (1 - value.discount / 100)}
                              </span>
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  color: "#828893",
                                }}
                              >
                                {value.price}
                              </span>
                            </>
                          ) : (
                            <span>{value.price}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tabs_item">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-1.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">17 Inch Rim</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$89.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-2.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">Car Engine</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$99.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-3.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">Ispat Rim</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$55.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-4.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">Steering Wheel</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$189.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-5.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">Walnut Wall</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$45.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-6.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">Tires Collection</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$98.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-7.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">Wheel</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$77.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-8.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">Repair Parts</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$175.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tabs_item">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-1.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">17 Inch Rim</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$89.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-2.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">Car Engine</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$99.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-3.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">Ispat Rim</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$55.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-4.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">Steering Wheel</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$189.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-5.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">Walnut Wall</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$45.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-6.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">Tires Collection</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$98.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-7.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">Wheel</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$77.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="single-products">
                      <div className="products-image">
                        <Link to="/products-details">
                          <img
                            src="assets/img/products/products-8.jpg"
                            alt="image"
                          />
                        </Link>
                        <div className="tag">Sale!</div>
                        <ul className="products-action">
                          <li>
                            <Link to="/cart">
                              <i className="flaticon-shopping-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="flaticon-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="products-content">
                        <h3>
                          <Link to="/products-details">Repair Parts</Link>
                        </h3>
                        <ul className="rating">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                        </ul>
                        <span>$175.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Products Area */}

      {/* Start Coming Soon Area */}
      <section className="coming-soon-area ptb-100">
        <div className="container">
          <div className="coming-soon-title">
            {/* <h3>Flash Deals</h3>
                    <h4>Hurry Up and Get 30% Discount</h4>

                    <div className="coming-soon-btn">
                        <Link to="/cart" className="default-btn">Add To Cart</Link>
                    </div>

                    <div className="coming-soon-content">
                        <div id="timer" className="flex-wrap d-flex justify-content-center">
                            <div id="days" className="align-items-center flex-column d-flex"></div>
                            <div id="hours" className="align-items-center flex-column d-flex"></div>
                            <div id="minutes" className="align-items-center flex-column d-flex"></div>
                            <div id="seconds" className="align-items-center flex-column d-flex"></div>
                        </div>
                    </div> */}
          </div>
        </div>
      </section>
      {/* End Coming Soon Area */}

      {/* Start Top Products Area */}
      <section className="top-products-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Top Products</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-top-products">
                <div className="top-products-image">
                  <Link to="/products-details">
                    <img
                      src="assets/img/top-products/top-products-1.jpg"
                      alt="image"
                    />
                  </Link>

                  <ul className="top-products-action">
                    <li>
                      <Link to="/cart">
                        <i className="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">
                        <i className="flaticon-heart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="top-products-content">
                  <h3>
                    <Link to="/products-details">17 Inch Rim</Link>
                  </h3>
                  <ul className="rating">
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bx-star"></i>
                    </li>
                  </ul>
                  <span>$89.00</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-top-products">
                <div className="top-products-image">
                  <Link to="/products-details">
                    <img
                      src="assets/img/top-products/top-products-2.jpg"
                      alt="image"
                    />
                  </Link>

                  <ul className="top-products-action">
                    <li>
                      <Link to="/cart">
                        <i className="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">
                        <i className="flaticon-heart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="top-products-content">
                  <h3>
                    <Link to="/products-details">Car Engine</Link>
                  </h3>
                  <ul className="rating">
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bx-star"></i>
                    </li>
                  </ul>
                  <span>$99.00</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-top-products">
                <div className="top-products-image">
                  <Link to="/products-details">
                    <img
                      src="assets/img/top-products/top-products-3.jpg"
                      alt="image"
                    />
                  </Link>

                  <ul className="top-products-action">
                    <li>
                      <Link to="/cart">
                        <i className="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">
                        <i className="flaticon-heart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="top-products-content">
                  <h3>
                    <Link to="/products-details">Isphat Rim</Link>
                  </h3>
                  <ul className="rating">
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bx-star"></i>
                    </li>
                  </ul>
                  <span>$55.00</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-top-products">
                <div className="top-products-image">
                  <Link to="/products-details">
                    <img
                      src="assets/img/top-products/top-products-4.jpg"
                      alt="image"
                    />
                  </Link>

                  <ul className="top-products-action">
                    <li>
                      <Link to="/cart">
                        <i className="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">
                        <i className="flaticon-heart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="top-products-content">
                  <h3>
                    <Link to="/products-details">HD Camera</Link>
                  </h3>
                  <ul className="rating">
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bx-star"></i>
                    </li>
                  </ul>
                  <span>$79.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overview-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <div className="overview-image">
                  <img src="assets/img/top-product-1.jpg" alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <div className="overview-image">
                  <img src="assets/img/top-product-2.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Top Products Area */}

      {/* Start Categories Area */}
      <section className="categories-area pb-100">
        <div className="container">
          <div className="categories-box">
            <div className="categories-title">
              <h2>Popular Categories</h2>
            </div>

            <div className="categories-row">
              <div className="categories-item">
                <div className="single-categories">
                  <div className="categories-image">
                    <Link to="/products-details">
                      <img
                        src="assets/img/categories/categories-1.jpg"
                        alt="image"
                      />
                    </Link>
                  </div>

                  <div className="categories-content">
                    <h3>
                      <Link to="/products-details">17 Inch Rim</Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="categories-item">
                <div className="single-categories">
                  <div className="categories-image">
                    <Link to="/products-details">
                      <img
                        src="assets/img/categories/categories-2.jpg"
                        alt="image"
                      />
                    </Link>
                  </div>

                  <div className="categories-content">
                    <h3>
                      <Link to="/products-details">Piston Ring</Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="categories-item">
                <div className="single-categories">
                  <div className="categories-image">
                    <Link to="/products-details">
                      <img
                        src="assets/img/categories/categories-3.jpg"
                        alt="image"
                      />
                    </Link>
                  </div>

                  <div className="categories-content">
                    <h3>
                      <Link to="/products-details">Wheel</Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="categories-item">
                <div className="single-categories">
                  <div className="categories-image">
                    <Link to="/products-details">
                      <img
                        src="assets/img/categories/categories-4.jpg"
                        alt="image"
                      />
                    </Link>
                  </div>

                  <div className="categories-content">
                    <h3>
                      <Link to="/products-details">HD Camera</Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="categories-item">
                <div className="single-categories">
                  <div className="categories-image">
                    <Link to="/products-details">
                      <img
                        src="assets/img/categories/categories-5.jpg"
                        alt="image"
                      />
                    </Link>
                  </div>

                  <div className="categories-content">
                    <h3>
                      <Link to="/products-details">Rim</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Categories Area */}

      {/* Start Newsletter Area */}
      <div className="newsletter-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="newsletter-content">
                <span>Special Offer For Subscription</span>
                <h3>Get Instant Discount For Membership</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter Email Address"
                    name="EMAIL"
                    required
                    autoComplete="off"
                  />

                  <button type="submit">Subscribe Now</button>

                  <div id="validator-newsletter" className="form-result"></div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="newsletter-image wow fadeInRight"
                data-wow-delay=".3s"
              >
                <img src="assets/img/newsletter/newsletter.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Newsletter Area */}

      {/* Start Trending Products Area */}
      <section className="trending-products-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="trending-products-box">
                <div className="products-box-title">
                  <span>For Any Vehicles</span>
                  <h2>Body Parts Collection</h2>

                  <div className="box-btn">
                    <Link to="/shop">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-12">
              <div className="trending-products-title">
                <h3>Top Trending Products</h3>
              </div>

              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="single-trending-products">
                    <div className="trending-products-image">
                      <Link to="/products-details">
                        <img
                          src="assets/img/trending-products/trending-products-2.jpg"
                          alt="image"
                        />
                      </Link>
                    </div>

                    <div className="trending-products-content">
                      <h3>
                        <Link to="/products-details">Filter</Link>
                      </h3>
                      <ul className="rating">
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bx-star"></i>
                        </li>
                      </ul>
                      <span>$65.00</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="single-trending-products">
                    <div className="trending-products-image">
                      <Link to="/products-details">
                        <img
                          src="assets/img/trending-products/trending-products-3.jpg"
                          alt="image"
                        />
                      </Link>
                    </div>

                    <div className="trending-products-content">
                      <h3>
                        <Link to="/products-details">Lubricant Oil</Link>
                      </h3>
                      <ul className="rating">
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bx-star"></i>
                        </li>
                      </ul>
                      <span>$55.00</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="single-trending-products">
                    <div className="trending-products-image">
                      <Link to="/products-details">
                        <img
                          src="assets/img/trending-products/trending-products-4.jpg"
                          alt="image"
                        />
                      </Link>
                    </div>

                    <div className="trending-products-content">
                      <h3>
                        <Link to="/products-details">Piston Ring</Link>
                      </h3>
                      <ul className="rating">
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bx-star"></i>
                        </li>
                      </ul>
                      <span>$75.00</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="single-trending-products">
                    <div className="trending-products-image">
                      <Link to="/products-details">
                        <img
                          src="assets/img/trending-products/trending-products-5.jpg"
                          alt="image"
                        />
                      </Link>
                    </div>

                    <div className="trending-products-content">
                      <h3>
                        <Link to="/products-details">Walnut Wall</Link>
                      </h3>
                      <ul className="rating">
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bx-star"></i>
                        </li>
                      </ul>
                      <span>$95.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Trending Products Area */}

      <section className="blog-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img src="assets/img/blog/blog-1.jpg" alt="image" />
                  </Link>

                  <div className="tag">22, Dec 2020</div>
                </div>
                <div className="blog-content">
                  <span>
                    By <Link to="/#">Admin</Link>
                  </span>
                  <h3>
                    <Link to="/blog-details">
                      The Electric Car isn't Pollution-free they have to get
                      there
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="blog-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img src="assets/img/blog/blog-2.jpg" alt="image" />
                  </Link>

                  <div className="tag">22, Dec 2020</div>
                </div>
                <div className="blog-content">
                  <span>
                    By <Link to="/#">Admin</Link>
                  </span>
                  <h3>
                    <Link to="/blog-details">
                      You Can Know That How a Car Runs a Still, Enjoy Trip
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="blog-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-blog">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img src="assets/img/blog/blog-3.jpg" alt="image" />
                  </Link>

                  <div className="tag">22, Dec 2020</div>
                </div>
                <div className="blog-content">
                  <span>
                    By <Link to="/#">Admin</Link>
                  </span>
                  <h3>
                    <Link to="/blog-details">
                      Top 10 Automotive Advancements to Look Forward
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="blog-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Index;
