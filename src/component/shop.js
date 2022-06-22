import { Link, useNavigate } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Snackbar } from "@mui/material";

function Shop() {
  const [category, setCategory] = useState([]);
  const [productItem, setProductItem] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const tempUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  async function getCategory() {
    const res = await axios.get(`http://localhost:3000/api/v1/categories`);
    setCategory(res.data);
  }
  async function getProducBYCategory(id) {
    const res = await axios.get(
      `http://localhost:3000/api/v1/products/category/${id}`
    );
    setProductItem(res.data);
  }

  useEffect(() => {
    async function getProductAll() {
      const res = await axios.get("http://localhost:3000/api/v1/products");
      setProductItem(res.data);
    }
    getProductAll();
  }, []);
  useEffect(() => {
    getCategory();
  }, []);
  const filProductByCategory = (id) => {
    getProducBYCategory(id);
  };
  const handleAddToWishlist = (id) => {
    async function addToWishList() {
      const res = await axios.patch(
        `http://localhost:3000/api/v1/users/${tempUserInfo.id}/wishlist?idProduct=${id}`
      );
    }
    addToWishList();
    setOpenSnackbar(true);
  };
  const handleClose = () => {
    setOpenSnackbar(false);
  };
  return (
    <>
      <Header />
      {/* End Navbar Area */}

      {/* Start Page Banner */}
      <div class="page-banner-area item-bg4">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-banner-content">
                <h2>Shop</h2>
                <ul>
                  <li>
                    <Link to="/index">Home</Link>
                  </li>
                  <li>Shop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Banner */}

      {/* Start Shop Area */}
      <section class="shop-area ptb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-12">
              <div class="shop-category">
                <div class="category-title">
                  <Link to="/#">Shop Department</Link>
                </div>

                <div class="shop-category-menu">
                  <ul class="category-list">
                    {category &&
                      category.map((value) => (
                        <li>
                          <Button
                            onClick={() => filProductByCategory(value.id)}
                          >
                            {value.name}
                          </Button>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              {/* <div class="shop-sidebar">
                <div class="brand-sidebar-item">
                  <h3>Brand</h3>

                  <ul class="brand-input-checkbox">
                    <li class="checkbox">
                      <input type="checkbox" class="input" />
                      <label class="label">Brandix</label>
                    </li>

                    <li class="checkbox">
                      <input type="checkbox" class="input" />
                      <label class="label">Red Gate</label>
                    </li>

                    <li class="checkbox">
                      <input type="checkbox" class="input" />
                      <label class="label">Sunset</label>
                    </li>

                    <li class="checkbox">
                      <input type="checkbox" class="input" />
                      <label class="label">Spector</label>
                    </li>

                    <li class="checkbox">
                      <input type="checkbox" class="input" />
                      <label class="label">TransTech</label>
                    </li>

                    <li class="checkbox">
                      <input type="checkbox" class="input" />
                      <label class="label">Turbo Electric</label>
                    </li>
                  </ul>
                </div>

                <div class="discount-sidebar-item">
                  <h3>With Discount</h3>

                  <ul class="discount-input-checkbox">
                    <li class="checkbox">
                      <input type="checkbox" class="input" />
                      <label class="label">Any</label>
                    </li>

                    <li class="checkbox">
                      <input type="checkbox" class="input" />
                      <label class="label">No</label>
                    </li>

                    <li class="checkbox">
                      <input type="checkbox" class="input" />
                      <label class="label">Yes</label>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>

            <div class="col-lg-9 col-md-12">
              {productItem &&
                productItem.map((value, index) => (
                  <div class="shop-item-box">
                    <div class="row align-items-center">
                      <div class="col-lg-3 col-sm-3">
                        <div class="shop-image">
                          <Link to="/products-details">
                            <img src="assets/img/shop/shop-9.png" alt="image" />
                          </Link>
                        </div>
                      </div>

                      <div class="col-lg-6 col-sm-6">
                        <div class="shop-content">
                          <h3>{value.name}</h3>
                          {/* <div class="rating">
                            <Ratting rattingProduct={value.rate} />
                          </div> */}

                          <ul class="shop-list">
                            <li>discount: {value.discount}</li>
                            <li>
                              {" "}
                              {value.discount > 0 ? (
                                <>
                                  <span
                                    style={{
                                      marginRight: "10px",
                                      color: "#d31531",
                                    }}
                                  >
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
                                <span style={{ color: "#d31531" }}>
                                  {value.price}
                                </span>
                              )}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="col-lg-3 col-sm-3">
                        <ul class="shop-btn-list">
                          {/* <li>
                            <span>$165.00</span>
                          </li> */}
                          <li>
                            <Link to={`/products-details?id=${value.id}`}>
                              Xem chi tiết sản phẩm
                            </Link>
                          </li>
                          <li>
                            <Button
                              style={{
                                background: "#d31531",
                                color: "white",
                                borderRadius: "40px ",
                              }}
                              onClick={() => handleAddToWishlist(value.id)}
                            >
                              Add To Wishlist
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

              {/* <div class="col-lg-12 col-md-12">
                <div class="pagination-area">
                  <Link to="/#" class="prev page-numbers">
                    <i class="bx bxs-chevron-left"></i>
                  </Link>
                  <Link to="/#" class="page-numbers">
                    1
                  </Link>
                  <span class="page-numbers current" aria-current="page">
                    2
                  </span>
                  <Link to="/#" class="page-numbers">
                    3
                  </Link>
                  <Link to="/#" class="page-numbers">
                    4
                  </Link>
                  <Link to="/#" class="next page-numbers">
                    <i class="bx bxs-chevron-right"></i>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>

      <div class="go-top">
        <i class="bx bx-up-arrow-alt"></i>
      </div>
      <Snackbar
        // anchorOrigin={(tempSnackbar.vertical, tempSnackbar.horizontal)}
        autoHideDuration={1500}
        open={openSnackbar}
        onClose={handleClose}
        message="Thêm sản phẩm vào danh sách yêu thích thành công"
      />
    </>
  );
}

export default Shop;
