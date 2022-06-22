import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import Footer from "./footer";
import Header from "./header";

function MyAccount() {
  const [userName, SetUserName] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();
  localStorage.setItem("userInfo", JSON.stringify(""));
  const handleSubmit = () => {
    const data = {
      u: userName,
      p: password,
    };

    async function Get() {
      const response = await axios.post(
        "http://localhost:3000/api/v1/login",
        data
      );
      const json = await response.data;

      localStorage.setItem("userInfo", JSON.stringify(json));
      navigate("/");
    }
    Get();
  };
  return (
    <div>
      <Header />

      <div class="page-banner-area">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-banner-content">
                <h2>My Account</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>My Account</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="my-account-area ptb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="login-form mb-30">
                <h2>Login</h2>

                <form>
                  <div class="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      onChange={(e) => SetUserName(e.target.value)}
                    />
                  </div>

                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="Password"
                      class="form-control"
                      placeholder="Password"
                      onChange={(e) => SetPassword(e.target.value)}
                    />
                  </div>
                  <div onClick={() => navigate("/register")}>
                    {" "}
                    nếU chưa có tài khoản click vào đây{" "}
                  </div>
                  <Button onClick={handleSubmit}>Login</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyAccount;
