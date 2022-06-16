import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Snackbar } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Header from "./header";
import Ratting from "./rating";
import handleCart from "./service/getCartByIdUser";

const ButtonSize = styled(Button)({
  marginLeft: "5px",
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

function ProductDetail() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [productByID, setProductByID] = useState([]);
  const [size, setSize] = useState("S");
  const [resultData, setResultData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [rateProduct, setRateProduct] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const tempSnackbar = {
    vertical: "top",
    horizontal: "right",
  };
  useEffect(() => {
    if (productByID.stock) {
      const result = productByID?.stock.filter((value) => {
        return value.size === size;
      });
      setResultData(result);
    }
  }, [size]);
  useEffect(() => {
    if (productByID.review) {
      let temp = productByID.review.length;
      const result = productByID?.review.reduce(
        (cur, arr) => cur + arr.rate * 1,
        0
      );
      setRateProduct(result / temp);
    }
  }, [productByID]);
  useEffect(() => {
    const id = search.split("=")[1];
    async function getProductDetail() {
      const res = await axios.get(
        `http://localhost:3000/api/v1/products/${id}`
      );
      setProductByID(res.data[0]);
      if (res.status === 200) {
        const result = res.data[0].stock.filter((value) => {
          return value.size === size;
        });
        setResultData(result);
      }
    }
    getProductDetail();
  }, []);

  const handleSetSize = (value) => {
    console.log(value);
    setSize(value);
  };

  const handleAddToCart = () => {
    const itemInCart = {
      idProduct: productByID.id,
      size: size,
      quantity: quantity,
    };
    async function addToCart() {
      const res = await handleCart.addProductToCart(itemInCart);

      if (res.status === 200) {
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    }

    addToCart();
  };
  return (
    <>
      <Header />
      <div class="page-banner-area item-bg3">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-banner-content">
                <h2>Products Details</h2>
                <ul>
                  <li>
                    <Link to="/index">Home </Link>
                  </li>
                  <li>Products Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="products-details-area ptb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <div class="products-details-desc">
                <div class="row align-items-center">
                  <div class="col-lg-7 col-md-6">
                    <div class="main-products-image">
                      <img
                        src="assets/img/products/products-8.jpg"
                        alt="image"
                      />
                    </div>
                  </div>

                  <div class="col-lg-5 col-md-6">
                    {productByID.id && (
                      <div class="product-content">
                        <h3>{productByID.name}</h3>

                        <div class="product-review">
                          <div class="rating">
                            <Ratting rattingProduct={rateProduct} />
                          </div>
                        </div>
                        {productByID.discount > 0 ? (
                          <div class="price">
                            <span
                              style={{ paddingRight: "5px" }}
                              class="old-price"
                            >
                              {productByID.price}
                            </span>
                            <span class="new-price">
                              {productByID.price *
                                (1 - productByID.discount / 100)}
                            </span>
                          </div>
                        ) : (
                          <>
                            <span class="new-price">{productByID.price}</span>
                          </>
                        )}

                        <p>{productByID.description}</p>
                        {size && (
                          <>
                            <ul class="products-info">
                              <li>
                                <span>Stock:</span> {resultData[0]?.available}
                              </li>
                              <li>
                                <span>Size select :</span> {resultData[0]?.size}
                              </li>
                            </ul>
                          </>
                        )}

                        <div
                          class="products-color-switch"
                          style={{ alignItems: "center" }}
                        >
                          <p class="available-color">
                            <span>size</span> :
                            <ButtonGroup
                              variant="contained"
                              aria-label="outlined primary button group"
                            >
                              {productByID.stock.map((value, index) => (
                                <ButtonSize
                                  onClick={() => handleSetSize(value.size)}
                                  style={{
                                    paddingRight: "10px",
                                    cursor: "pointer",
                                  }}
                                >
                                  {value.size}
                                </ButtonSize>
                              ))}
                            </ButtonGroup>
                          </p>
                        </div>

                        <div class="product-quantities">
                          <span>Quantities:</span>

                          <div class="input-counter">
                            <span class="minus-btn">
                              <i
                                class="bx bx-minus"
                                onClick={() => setQuantity((pre) => pre - 1)}
                              ></i>
                            </span>
                            <input type="text" value={quantity} />
                            <span class="plus-btn">
                              <i
                                class="bx bx-plus"
                                onClick={() => setQuantity((pre) => pre + 1)}
                              ></i>
                            </span>
                          </div>
                        </div>

                        <div class="product-add-to-cart">
                          <button
                            type="submit"
                            class="default-btn"
                            onClick={handleAddToCart}
                          >
                            <i class="flaticon-shopping-cart"></i>
                            Add to cart
                            <span></span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div class="products-details-tabs">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="description-tab"
                      data-toggle="tab"
                      href="#description"
                      role="tab"
                      aria-controls="description"
                    >
                      Description{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="reviews-tab"
                      data-toggle="tab"
                      href="#reviews"
                      role="tab"
                      aria-controls="reviews"
                    >
                      Reviews{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="information-tab"
                      data-toggle="tab"
                      href="#information"
                      role="tab"
                      aria-controls="information"
                    >
                      Shipping Information{" "}
                    </a>
                  </li>
                </ul>

                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                  >
                    <h2>Overview</h2>

                    <p>{productByID.description}</p>
                  </div>

                  <div class="tab-pane fade" id="reviews" role="tabpanel">
                    <div class="products-reviews">
                      <h3>Reviews</h3>

                      <div class="row">
                        <div class="side">
                          <div>5 star</div>
                        </div>
                        <div class="middle">
                          <div class="bar-container">
                            <div class="bar-5"></div>
                          </div>
                        </div>
                        <div class="side right">
                          <div>70%</div>
                        </div>
                        <div class="side">
                          <div>4 star</div>
                        </div>
                        <div class="middle">
                          <div class="bar-container">
                            <div class="bar-4"></div>
                          </div>
                        </div>
                        <div class="side right">
                          <div>20%</div>
                        </div>
                        <div class="side">
                          <div>3 star</div>
                        </div>
                        <div class="middle">
                          <div class="bar-container">
                            <div class="bar-3"></div>
                          </div>
                        </div>
                        <div class="side right">
                          <div>5%</div>
                        </div>
                        <div class="side">
                          <div>2 star</div>
                        </div>
                        <div class="middle">
                          <div class="bar-container">
                            <div class="bar-2"></div>
                          </div>
                        </div>
                        <div class="side right">
                          <div>3%</div>
                        </div>
                        <div class="side">
                          <div>1 star</div>
                        </div>
                        <div class="middle">
                          <div class="bar-container">
                            <div class="bar-1"></div>
                          </div>
                        </div>
                        <div class="side right">
                          <div>2%</div>
                        </div>
                      </div>
                    </div>

                    <div class="products-review-form">
                      <h3>Customer Reviews</h3>

                      <div class="review-title">
                        <div class="rating">
                          <i class="bx bxs-star"></i>
                          <i class="bx bxs-star"></i>
                          <i class="bx bxs-star"></i>
                          <i class="bx bxs-star"></i>
                          <i class="bx bxs-star"></i>
                        </div>

                        <Link to="/#" class="default-btn">
                          Write a Review
                          <span></span>
                        </Link>
                      </div>

                      <div class="review-comments">
                        <div class="review-item">
                          <div class="rating">
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                          </div>
                          <h3>Good</h3>
                          <span>
                            <strong>Admin</strong> on{" "}
                            <strong>Sep 21, 2019</strong>
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>

                        <div class="review-item">
                          <div class="rating">
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                          </div>
                          <h3>Good</h3>
                          <span>
                            <strong>Admin</strong> on{" "}
                            <strong>Sep 21, 2019</strong>
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>

                        <div class="review-item">
                          <div class="rating">
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                          </div>
                          <h3>Good</h3>
                          <span>
                            <strong>Admin</strong> on{" "}
                            <strong>Sep 21, 2019</strong>
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                      </div>

                      <div class="review-form">
                        <h3>Write a Review</h3>

                        <form>
                          <div class="row">
                            <div class="col-lg-6 col-md-6">
                              <div class="form-group">
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Enter your name"
                                  class="form-control"
                                />
                              </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                              <div class="form-group">
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  placeholder="Enter your email"
                                  class="form-control"
                                />
                              </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                              <div class="form-group">
                                <input
                                  type="text"
                                  id="review-title"
                                  name="review-title"
                                  placeholder="Enter your review a title"
                                  class="form-control"
                                />
                              </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                              <div class="form-group">
                                <textarea
                                  name="review-body"
                                  id="review-body"
                                  cols="30"
                                  rows="6"
                                  placeholder="Write your comments here"
                                  class="form-control"
                                ></textarea>
                              </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                              <button type="submit" class="default-btn">
                                Submit Review
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade show"
                    id="information"
                    role="tabpanel"
                  >
                    <ul class="information-list">
                      <li>
                        Address:{" "}
                        <span>
                          4848 Hershell Hollow Road, Bothell, WA 89076
                        </span>
                      </li>
                      <li>
                        Phone:{" "}
                        <Link to="/tel:+15143214567">+1 (514) 321-4567 </Link>
                      </li>
                      <li>
                        Email:{" "}
                        <Link to="/mailto:hello@maxon.com">
                          hello@maxon.com{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-12">
              <aside class="widget-area">
                <section class="widget widget_search">
                  <h3 class="widget-title">Search</h3>

                  <form class="search-form">
                    <label>
                      <span class="screen-reader-text">Search for:</span>
                      <input
                        type="search"
                        class="search-field"
                        placeholder="Search..."
                      />
                    </label>
                    <button type="submit">
                      <i class="bx bx-search-alt"></i>
                    </button>
                  </form>
                </section>

                <section class="widget widget_categories">
                  <h3 class="widget-title">Categories</h3>

                  <ul>
                    <li>
                      <Link to="/#">
                        Wheels and Tires <i class="bx bx-chevron-right"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        Repair Parts <i class="bx bx-chevron-right"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        Diversion <i class="bx bx-chevron-right"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        Electronics <i class="bx bx-chevron-right"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        Accessories <i class="bx bx-chevron-right"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        Brake Rotors <i class="bx bx-chevron-right"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        Pistons Liners <i class="bx bx-chevron-right"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        Door Handles <i class="bx bx-chevron-right"></i>{" "}
                      </Link>
                    </li>
                  </ul>
                </section>

                <section class="widget widget_maxon_posts_thumb">
                  <h3 class="widget-title">Popular Posts</h3>

                  <article class="item">
                    <Link to="/#" class="thumb">
                      <span class="fullimage cover bg1" role="img"></span>
                    </Link>
                    <div class="info">
                      <span>June 10, 2020</span>
                      <h4 class="title usmall">
                        <Link to="/#">
                          The Electric Car isn't Pollution-free they have to get
                          there{" "}
                        </Link>
                      </h4>
                    </div>
                  </article>

                  <article class="item">
                    <Link to="/#" class="thumb">
                      <span class="fullimage cover bg2" role="img"></span>
                    </Link>
                    <div class="info">
                      <span>June 21, 2020</span>
                      <h4 class="title usmall">
                        <Link to="/#">
                          You Can Know That How a Car Runs a Still, Enjoy Trip{" "}
                        </Link>
                      </h4>
                    </div>
                  </article>

                  <article class="item">
                    <Link to="/#" class="thumb">
                      <span class="fullimage cover bg3" role="img"></span>
                    </Link>
                    <div class="info">
                      <span>June 30, 2020</span>
                      <h4 class="title usmall">
                        <Link to="/#">
                          What Is The Cost Of Repairing a Scratch On a Car?{" "}
                        </Link>
                      </h4>
                    </div>
                  </article>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* End Products Details Area  */}

      {/* Start Top Products Area  */}
      <section class="top-products-area bg-color pt-100 pb-70">
        <div class="container">
          <div class="section-title">
            <h2>Top Products</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="single-top-products-box">
                <div class="top-products-image">
                  <Link to="/products-details">
                    <img
                      src="assets/img/top-products/top-products-1.jpg"
                      alt="image"
                    />{" "}
                  </Link>

                  <ul class="top-products-action">
                    <li>
                      <Link to="/cart">
                        <i class="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">
                        <i class="flaticon-heart"></i>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div class="top-products-content">
                  <h3>
                    <Link to="/products-details">17 Inch Rim </Link>
                  </h3>
                  <ul class="rating">
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bx-star"></i>
                    </li>
                  </ul>
                  <span>$89.00</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="single-top-products-box">
                <div class="top-products-image">
                  <Link to="/products-details">
                    <img
                      src="assets/img/top-products/top-products-2.jpg"
                      alt="image"
                    />{" "}
                  </Link>

                  <ul class="top-products-action">
                    <li>
                      <Link to="/cart">
                        <i class="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">
                        <i class="flaticon-heart"></i>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div class="top-products-content">
                  <h3>
                    <Link to="/products-details">Motor Oil </Link>
                  </h3>
                  <ul class="rating">
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bx-star"></i>
                    </li>
                  </ul>
                  <span>$99.00</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="single-top-products-box">
                <div class="top-products-image">
                  <Link to="/products-details">
                    <img
                      src="assets/img/top-products/top-products-3.jpg"
                      alt="image"
                    />{" "}
                  </Link>

                  <ul class="top-products-action">
                    <li>
                      <Link to="/cart">
                        <i class="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">
                        <i class="flaticon-heart"></i>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div class="top-products-content">
                  <h3>
                    <Link to="/products-details">Wheel </Link>
                  </h3>
                  <ul class="rating">
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bx-star"></i>
                    </li>
                  </ul>
                  <span>$55.00</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="single-top-products-box">
                <div class="top-products-image">
                  <Link to="/products-details">
                    <img
                      src="assets/img/top-products/top-products-4.jpg"
                      alt="image"
                    />{" "}
                  </Link>

                  <ul class="top-products-action">
                    <li>
                      <Link to="/cart">
                        <i class="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">
                        <i class="flaticon-heart"></i>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div class="top-products-content">
                  <h3>
                    <Link to="/products-details">Motor </Link>
                  </h3>
                  <ul class="rating">
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bx-star"></i>
                    </li>
                  </ul>
                  <span>$79.00</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="single-top-products-box">
                <div class="top-products-image">
                  <Link to="/products-details">
                    <img
                      src="assets/img/top-products/top-products-5.jpg"
                      alt="image"
                    />{" "}
                  </Link>

                  <ul class="top-products-action">
                    <li>
                      <Link to="/cart">
                        <i class="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">
                        <i class="flaticon-heart"></i>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div class="top-products-content">
                  <h3>
                    <Link to="/products-details">Camera </Link>
                  </h3>
                  <ul class="rating">
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bx-star"></i>
                    </li>
                  </ul>
                  <span>$59.00</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="single-top-products-box">
                <div class="top-products-image">
                  <Link to="/products-details">
                    <img
                      src="assets/img/top-products/top-products-6.jpg"
                      alt="image"
                    />{" "}
                  </Link>

                  <ul class="top-products-action">
                    <li>
                      <Link to="/cart">
                        <i class="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">
                        <i class="flaticon-heart"></i>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div class="top-products-content">
                  <h3>
                    <Link to="/products-details">Car Engine </Link>
                  </h3>
                  <ul class="rating">
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bx-star"></i>
                    </li>
                  </ul>
                  <span>$99.00</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="single-top-products-box">
                <div class="top-products-image">
                  <Link to="/products-details">
                    <img
                      src="assets/img/top-products/top-products-7.jpg"
                      alt="image"
                    />{" "}
                  </Link>

                  <ul class="top-products-action">
                    <li>
                      <Link to="/cart">
                        <i class="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">
                        <i class="flaticon-heart"></i>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div class="top-products-content">
                  <h3>
                    <Link to="/products-details">Ispat Rim </Link>
                  </h3>
                  <ul class="rating">
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bx-star"></i>
                    </li>
                  </ul>
                  <span>$49.00</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="single-top-products-box">
                <div class="top-products-image">
                  <Link to="/products-details">
                    <img
                      src="assets/img/top-products/top-products-8.jpg"
                      alt="image"
                    />{" "}
                  </Link>

                  <ul class="top-products-action">
                    <li>
                      <Link to="/cart">
                        <i class="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">
                        <i class="flaticon-heart"></i>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div class="top-products-content">
                  <h3>
                    <Link to="/products-details">HD Camera </Link>
                  </h3>
                  <ul class="rating">
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bx-star"></i>
                    </li>
                  </ul>
                  <span>$39.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Top Products Area  */}

      {/* Start Footer Area  */}
      <section class="footer-area pt-100 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="single-footer-widget">
                <Link to="/index">
                  <img src="assets/img/logo-2.png" alt="image" />
                </Link>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <ul class="footer-social">
                  <li>
                    <Link to="/#" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#" target="_blank">
                      <i class="bx bxl-pinterest-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#" target="_blank">
                      <i class="bx bxl-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="single-footer-widget">
                <h2>Recent Post</h2>

                <div class="footer-post">
                  <article class="item">
                    <Link to="/#" class="thumb">
                      <span class="fullimage cover bg1" role="img"></span>
                    </Link>
                    <div class="info">
                      <h4 class="title usmall">
                        <Link to="/#">
                          Electronic Car Protect Air Pollution{" "}
                        </Link>
                      </h4>
                      <span>24 Dec 2020</span>
                    </div>
                  </article>

                  <article class="item">
                    <Link to="/#" class="thumb">
                      <span class="fullimage cover bg2" role="img"></span>
                    </Link>
                    <div class="info">
                      <h4 class="title usmall">
                        <Link to="/#">
                          Automotive Advancements to Look Forward{" "}
                        </Link>
                      </h4>
                      <span>25 Dec 2020</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="single-footer-widget pl-5">
                <h2>Quick Links</h2>

                <ul class="quick-links">
                  <li>
                    <i class="bx bxs-chevrons-right"></i>
                    <Link to="/#">About Company </Link>
                  </li>
                  <li>
                    <i class="bx bxs-chevrons-right"></i>
                    <Link to="/#">Services </Link>
                  </li>
                  <li>
                    <i class="bx bxs-chevrons-right"></i>
                    <Link to="/#">Shop </Link>
                  </li>
                  <li>
                    <i class="bx bxs-chevrons-right"></i>
                    <Link to="/#">FAQ </Link>
                  </li>
                  <li>
                    <i class="bx bxs-chevrons-right"></i>
                    <Link to="/#">Blog </Link>
                  </li>
                  <li>
                    <i class="bx bxs-chevrons-right"></i>
                    <Link to="/#">Gallery </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="single-footer-widget">
                <h2>Information</h2>

                <ul class="footer-contact-info">
                  <li>
                    <i class="bx bxs-phone"></i>
                    <span>Phone</span>
                    <Link to="/tel:882569756">882-569-756 </Link>
                  </li>
                  <li>
                    <i class="bx bx-envelope"></i>
                    <span>Email</span>
                    <Link to="/mailto:hello@maxon.com">hello@maxon.com </Link>
                  </li>
                  <li>
                    <i class="bx bx-map"></i>
                    <span>Address</span>
                    175 5th Ave Premium Area, New York
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Footer Area  */}

      {/* Start Copy Right Area  */}
      <div class="copyright-area">
        <div class="container">
          <div class="copyright-area-content">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6">
                <p>
                  Copyright @2020 Maxon. All Rights Reserved by
                  <Link to="/https://hibootstrap.com/" target="_blank">
                    HiBootstrap
                  </Link>
                </p>
              </div>

              <div class="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <Link to="/terms-of-service">Terms & Conditions </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Copy Right Area  */}

      {/* Start Go Top Area  */}
      <div class="go-top">
        <i class="bx bx-up-arrow-alt"></i>
      </div>
      <Snackbar
        // anchorOrigin={(tempSnackbar.vertical, tempSnackbar.horizontal)}
        open={openSnackbar}
        // onClose={handleClose}
        message="Thêm sản phẩm vào giỏ hàng thành công"
      />
    </>
  );
}

export default ProductDetail;
