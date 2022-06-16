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
  // const [submit,setSubmit] =useState(false)

  // useEffect(()=>{

  // },[submit])

  const handleSubmit = () => {
    const data = {
      u: userName,
      p: password,
    };
    console.log(data);

    async function Get() {
      const response = await axios.post(
        "http://localhost:3000/api/v1/login",
        data
      );
      const json = await response.data;
      console.log(json);

      localStorage.setItem("userInfo", JSON.stringify(json));
      navigate("/");
    }
    Get();
  };
  return (
    <div>
      <Header />
      {/* End Navbar Area  */}

      {/* Start Page Banner  */}
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
                      type="text"
                      class="form-control"
                      placeholder="Password"
                      onChange={(e) => SetPassword(e.target.value)}
                    />
                  </div>
                  {/*         
                                <div class="row align-items-center">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="checkme"/>
                                            <label class="form-check-label" for="checkme">Remember me</label>
                                        </div>
                                    </div>
        
                                    <div class="col-lg-6 col-md-6 col-sm-6 lost-your-password">
                                        <Link to="/#" class="lost-your-password">Forgot your password?</Link>
                                    </div>
                                </div> */}

                  <Button onClick={handleSubmit}>Login</Button>
                </form>
              </div>
            </div>

            {/* <div class="col-lg-6 col-md-12">
                        <div class="register-form">
                            <h2>Register</h2>
        
                            <form>
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" placeholder="Name"/>
                                </div>
        
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" placeholder="Email"/>
                                </div>
        
                                <div class="form-group">
                                    <label>Phone</label>
                                    <input type="text" class="form-control" placeholder="Phone"/>
                                </div>
        
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="text" class="form-control" placeholder="Password"/>
                                </div>
        
                                <button type="submit">Register Now</button>
                            </form>
                        </div>
                    </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyAccount;
