import { Link, useNavigate } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Snackbar } from "@mui/material";
function WishList() {
  const tempUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [wishlist, setWishlist] = useState([]);
  async function getProductAll() {
    const res = await axios.get(
      `http://localhost:3000/api/v1/users/${tempUserInfo.id}`
    );
    setWishlist(res.data[0].wishlist);
  }
  useEffect(() => {
    getProductAll();
  }, []);

  const handleRemoveWishList = (index) => {
    async function deleteWishlist() {
      const res = await axios.delete(
        `http://localhost:3000/api/v1/users/${tempUserInfo.id}/wishlist/${index}`
      );
      if (res.data.message === "Delete item wishlist successfully") {
        getProductAll();
      }
    }
    deleteWishlist();
  };
  return (
    <>
      <Header />

      <div class="page-banner-area">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-banner-content">
                <h2>Wishlist</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Wishlist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Banner  */}

      {/* Start Wishlist Area  */}
      <section class="wishlist-area ptb-100">
        <div class="container">
          <div class="wishlist-table table-responsive">
            <div class="wishlist-title">
              <h2>My Wishlist</h2>
            </div>

            <table class="table table-bordered">
              <tbody>
                {wishlist &&
                  wishlist.map((value, index) => (
                    <tr class="bottom-class">
                      <td class="product-remove">
                        <Button
                          onClick={() => handleRemoveWishList(index)}
                          class="remove"
                        >
                          <i class="bx bx-x"></i>
                        </Button>
                      </td>

                      <td class="product-thumbnail">
                        <Link to={`/products-details?id=${value.id}`}>
                          <img
                            src="assets/img/products/products-5.jpg"
                            alt="image"
                          />
                        </Link>
                      </td>

                      <td class="product-name">
                        <Link to={`/products-details?id=${value.id}`}>
                          {value.name}
                        </Link>
                      </td>

                      <td class="product-price">
                        <span class="unit-amount">{value.price}</span>
                      </td>

                      {/* <td class="product-stock">
                      <span class="stock">{value.discount}</span>
                    </td> */}

                      <td class="product-btn">
                        <Link
                          to={`/products-details?id=${value.id}`}
                          class="default-btn"
                        >
                          <i class="flaticon-shopping-cart"></i>
                          Add To Cart
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />

      <div class="go-top">
        <i class="bx bx-up-arrow-alt"></i>
      </div>
    </>
  );
}

export default WishList;
