import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import { styled } from "@mui/material/styles";
import { Stack, TextField, Button, Box } from "@mui/material";
import axios from "axios";
import Footer from "./footer";
import Header from "./header";

function CheckOut() {
  const navigate = useNavigate();

  const tempUserInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [bodyUser, setBodyUser] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    note: "",
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    // validationSchema: LoginSchema,
    onSubmit: () => {
      navigate("/dashboard", { replace: true });
    },
  });
  useEffect(() => {
    async function getUserInfo() {
      const res = await axios.get(
        `http://localhost:3000/api/v1/users/${tempUserInfo.id}`
      );

      setBodyUser({
        name: res.data[0].name,
        phone: res.data[0].phone,
        address: res.data[0].address,
        email: res.data[0].email,
      });
    }
    getUserInfo();
  }, []);

  const handleBuyItem = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    let product = "";
    let size = "";
    let quantity = "";
    let discount = "5";
    cart[1].forEach((value, index) => {
      if (index === 0) {
        product += value.product;
        size += value.size;
        quantity += value.quantity;
      } else {
        product += `,${value.product}`;
        size += `,${value.size}`;
        quantity += `,${value.quantity}`;
      }
    });

    const cartByOrder = {
      rn: bodyUser.name,
      rp: bodyUser.phone,
      re: bodyUser.email,
      ra: bodyUser.address,
      note: bodyUser.note,
      idUser: `${cart[0].idUSer}`,
      tp: cart[0].TotalAmout,
      products: product,
      sl: size,
      qt: quantity,
      d: discount,
    };
    async function BuyItem() {
      const res = await axios.post(
        `http://localhost:3000/api/v1/ordereds`,
        cartByOrder
      );
      if (res.data.status === "success") {
        localStorage.removeItem("cart");
        await axios.delete(
          `http://localhost:3000/api/v1/users/${tempUserInfo.id}/cart/`
        );
        navigate("/");
      }
    }
    if (cart) {
      BuyItem();
    }
  };
  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setBodyUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Header></Header>
      {/* End Navbar Area */}

      {/* Start Page Banner */}
      <div class="page-banner-area">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-banner-content">
                <h2>Checkout</h2>
                <ul>
                  <li>
                    <Link to="/index">Home</Link>
                  </li>
                  <li>Checkout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Banner */}

      {/* Start Checkout Area */}
      <section class="checkout-area ptb-100">
        <div class="container">
          <form>
            <div class="row">
              <div class="col-lg-8 col-md-12">
                <Box
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-evenly",
                    margin: "10px 0",
                  }}
                >
                  <Box>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginBottom: "50px",
                      }}
                    ></Box>

                    <FormikProvider value={formik} style={{ width: "70%" }}>
                      <Form autoComplete="off" noValidate>
                        <Stack spacing={4}>
                          <TextField
                            fullWidth
                            value={bodyUser.name}
                            name="name"
                            onChange={handleChangeData}
                            label="tên"
                          >
                            {" "}
                          </TextField>

                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <TextField
                              fullWidth
                              onChange={handleChangeData}
                              style={{ marginRight: "20px" }}
                              value={bodyUser.address}
                              name="address"
                              label="dịa chỉ"
                            />

                            <TextField
                              value={bodyUser.phone}
                              onChange={handleChangeData}
                              name="phone"
                              label="số điện thoại"
                            />
                          </Box>

                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <TextField
                              fullWidth
                              value={bodyUser.email}
                              name="email"
                              label="địa chỉ email"
                              onChange={handleChangeData}
                            />
                          </Box>
                          <TextField
                            fullWidth
                            // value={bodyUser.email}
                            name="note"
                            label="ghi chú"
                            onChange={handleChangeData}
                          />
                        </Stack>

                        <Button
                          style={{ marginTop: "20px" }}
                          size="large"
                          //   type="submit"
                          variant="contained"
                          onClick={handleBuyItem}
                        >
                          Mua hàng
                        </Button>
                      </Form>
                    </FormikProvider>
                  </Box>
                </Box>
              </div>

              <div class="col-lg-4 col-md-12">
                <div class="order-details">
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

                  <div class="payment-box">
                    <h3 class="title">Payment Method</h3>

                    <div class="payment-method">
                      <p>
                        <input
                          type="radio"
                          id="direct-bank-transfer"
                          name="radio-group"
                          checked
                        />
                        <label for="direct-bank-transfer">
                          Direct Bank Transfer
                        </label>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference.
                      </p>
                      <p>
                        <input
                          type="radio"
                          id="cash-on-delivery"
                          name="radio-group"
                        />
                        <label for="cash-on-delivery">Cash on Delivery</label>
                      </p>
                      <p>
                        <input
                          type="radio"
                          id="check-payments"
                          name="radio-group"
                        />
                        <label for="check-payments">Check Payments</label>
                      </p>
                      <p>
                        <input type="radio" id="paypal" name="radio-group" />
                        <label for="paypal">PayPal</label>
                      </p>
                    </div>
                    <Link to="/#" class="default-btn">
                      Place Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* End Checkout Area */}

      {/* Start Footer Area */}

      {/* End Footer Area */}

      {/* Start Copy Right Area */}
      <Footer></Footer>
      {/* End Copy Right Area */}

      {/* Start Go Top Area */}
      <div class="go-top">
        <i class="bx bx-up-arrow-alt"></i>
      </div>
    </>
  );
}

export default CheckOut;
