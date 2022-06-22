import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import DialogLogOut from "./dialog/dialogLogOut";

function Header() {
  const navigate = useNavigate();
  const [userInfo, setUSerInfo] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const tempUser = JSON.parse(localStorage.getItem("userInfo"));
   
    setUSerInfo(tempUser);
  }, []);

  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <>
      <div class="top-header-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12">
              <ul class="top-header-information">
                <li>
                  <i class="flaticon-pin"></i>
                  565, Nyman Tower Melbourne, Australia
                </li>
                <li>
                  <i class="flaticon-clock"></i>
                  Monday 8:00 AM - 12:00 PM
                </li>
              </ul>
            </div>

            <div class="col-lg-6 col-md-12">
              <ul class="top-header-optional">
                <li>
                  Currency: <b>USD</b>
                </li>

                <li>
                  <div class="dropdown language-switcher d-inline-block">
                    <button
                      class="dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span>
                        Language <i class="bx bx-chevron-down"></i>
                      </span>
                    </button>

                    <div class="dropdown-menu">
                      <Link
                        to="/#"
                        class="dropdown-item d-flex align-items-center"
                      >
                        <img
                          src="assets/img/english.png"
                          class="shadow-sm"
                          alt="flag"
                        />
                        <span>English</span>
                      </Link>
                      <Link
                        to="/#"
                        class="dropdown-item d-flex align-items-center"
                      >
                        <img
                          src="assets/img/arab.png"
                          class="shadow-sm"
                          alt="flag"
                        />
                        <span>العربيّة</span>
                      </Link>
                      <Link
                        to="/#"
                        class="dropdown-item d-flex align-items-center"
                      >
                        <img
                          src="assets/img/germany.png"
                          class="shadow-sm"
                          alt="flag"
                        />
                        <span>Deutsch</span>
                      </Link>
                      <Link
                        to="/#"
                        class="dropdown-item d-flex align-items-center"
                      >
                        <img
                          src="assets/img/portugal.png"
                          class="shadow-sm"
                          alt="flag"
                        />
                        <span>Português</span>
                      </Link>
                      <Link
                        to="/#"
                        class="dropdown-item d-flex align-items-center"
                      >
                        <img
                          src="assets/img/china.png"
                          class="shadow-sm"
                          alt="flag"
                        />
                        <span>简体中文</span>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Top Header Area  */}

      {/* Start Middle Header Area  */}
      <div class="middle-header-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="middle-header-search">
                <form class="search-form">
                  <label>
                    <span class="screen-reader-text">Search for:</span>
                    <input
                      type="search"
                      class="search-field"
                      placeholder="Search the entire store here"
                    />
                  </label>

                  <button type="submit">
                    <i class="bx bx-search-alt"></i>
                  </button>
                </form>
              </div>
            </div>

            <div class="col-lg-6">
              <ul class="middle-header-optional">
                <li>
                  <Link to="/wishlist">
                    <i class="flaticon-heart">
                      <span>0</span>
                    </i>{" "}
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <i class="flaticon-shopping-cart">
                      <span>2</span>
                    </i>{" "}
                    Add to Cart
                  </Link>
                </li>
                <li>
                  {!userInfo?.username ? (
                    <Link to="/my-account" class="user-btn">
                      <i class="flaticon-enter"></i>Login / Register
                    </Link>
                  ) : (
                    <div>
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        {userInfo.username}
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={() => navigate("/profile")}>
                          Profile
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/change-password")}>
                          change password
                        </MenuItem>
                        <MenuItem onClick={() => setOpenDialog(true)}>
                          Logout
                        </MenuItem>
                      </Menu>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Middle Header Area  */}

      {/* Start Navbar Area  */}
      <div class="navbar-area navbar-two">
        <div class="main-responsive-nav">
          <div class="container">
            <div class="main-responsive-menu">
              <div class="logo">
                <Link to="/">
                  <img src="assets/img/logo.png" alt="image" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="main-navbar">
          <div class="container">
            <nav class="navbar navbar-expand-md navbar-light">
              <Link class="navbar-brand" to="/">
                <img src="assets/img/logo.png" alt="image" />
              </Link>

              <div
                class="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav m-auto">
                  <li class="nav-item">
                    <Link to="/#" class="nav-link">
                      Shop
                      <i class="bx bx-chevron-down"></i>
                    </Link>

                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <Link to="/shop" class="nav-link">
                          Shop
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link to="/cart" class="nav-link">
                          Cart
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link to="/wishlist" class="nav-link">
                          Wishlist
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link to="/checkout" class="nav-link">
                          Checkout
                        </Link>
                      </li>

                      {/* <li class="nav-item">
                        <Link to="/products-details" class="nav-link">
                          Products Details
                        </Link>
                      </li> */}
                    </ul>
                  </li>

                  <li class="nav-item">
                    <Link to="/#" class="nav-link">
                      Blog
                      <i class="bx bx-chevron-down"></i>
                    </Link>

                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <Link to="/blog" class="nav-link">
                          Blog
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link to="/blog-right-sidebar" class="nav-link">
                          Blog Right Sidebar
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link to="/blog-details" class="nav-link">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <Link to="/contact" class="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>

                <div class="others-option d-flex align-items-center">
                  <div class="option-item">
                    <span>
                      Hotline:
                      <Link to="/tel:882563789966">(+882) 563 789 966</Link>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div class="others-option-for-responsive">
          <div class="container">
            <div class="dot-menu">
              <div class="inner">
                <div class="circle circle-one"></div>
                <div class="circle circle-two"></div>
                <div class="circle circle-three"></div>
              </div>
            </div>

            <div class="container">
              <div class="option-inner">
                <div class="others-option d-flex align-items-center">
                  <div class="option-item">
                    <span>
                      Hotline:
                      <Link to="/tel:882563789966">(+882) 563 789 966</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DialogLogOut setOpenDialog={setOpenDialog} openDialog={openDialog} />
    </>
  );
}

export default Header;
