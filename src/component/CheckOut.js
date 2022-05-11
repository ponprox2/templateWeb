
import { Link } from 'react-router-dom';

function CheckOut(){
    return(
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
                            <li>Currency: <b>USD</b></li>

                            <li>
                                <div class="dropdown language-switcher d-inline-block">
                                    <button class="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span>Language <i class='bx bx-chevron-down'></i></span>
                                    </button>

                                    <div class="dropdown-menu">
                                        <Link to="/#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/english.png" class="shadow-sm" alt="flag"/>
                                            <span>English</span>
                                       </Link>
                                        <Link to="/#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/arab.png" class="shadow-sm" alt="flag"/>
                                            <span>العربيّة</span>
                                       </Link>
                                        <Link to="/#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/germany.png" class="shadow-sm" alt="flag"/>
                                            <span>Deutsch</span>
                                       </Link>
                                        <Link to="/#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/portugal.png" class="shadow-sm" alt="flag"/>
                                            <span>Português</span>
                                       </Link>
                                        <Link to="/#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/china.png" class="shadow-sm" alt="flag"/>
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
        {/* End Top Header Area */}

        {/* Start Middle Header Area */}
        <div class="middle-header-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="middle-header-search">
                            <form class="search-form">
                                <label>
                                    <span class="screen-reader-text">Search for:</span>
                                    <input type="search" class="search-field" placeholder="Search the entire store here"/>
                                </label>

                                <button type="submit">
                                    <i class='bx bx-search-alt'></i>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <ul class="middle-header-optional">
                            <li>
                                <Link to="/wishlist"><i class="flaticon-heart"><span>0</span></i> Wishlist</Link>
                            </li>
                            <li>
                                <Link to="/cart"><i class="flaticon-shopping-cart"><span>2</span></i> Add to Cart</Link>
                            </li>
                            <li>
                                <Link to="/my-account" class="user-btn"><i class='flaticon-enter'></i>Login / Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* End Middle Header Area */}

        {/* Start Navbar Area */}
        <div class="navbar-area navbar-two">
            <div class="main-responsive-nav">
                <div class="container">
                    <div class="main-responsive-menu">
                        <div class="logo">
                            <Link to="/index">
                                <img src="assets/img/logo.png" alt="image"/>
                           </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-navbar">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <Link class="navbar-brand" to="/">
                            <img src="assets/img/logo.png" alt="image"/>
                        </Link>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item">
                                    <Link to="/#" class="nav-link">
                                        Home 
                                        <i class='bx bx-chevron-down'></i>
                                   </Link>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <Link to="/index" class="nav-link">
                                                Home One
                                           </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/index-2" class="nav-link">
                                                Home Two
                                           </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/index-3" class="nav-link">
                                                Home Three
                                           </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <Link to="/#" class="nav-link">
                                        Pages 
                                        <i class='bx bx-chevron-down'></i>
                                   </Link>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <Link to="/about" class="nav-link">
                                                About Us
                                           </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/team" class="nav-link">
                                                Our Team
                                           </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/gallery" class="nav-link">
                                                Gallery
                                           </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/compare" class="nav-link">
                                                Compare
                                           </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/order-tracking" class="nav-link">
                                                Order Tracking
                                           </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/my-account" class="nav-link">
                                                My Account
                                           </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/faq" class="nav-link">
                                                FAQ
                                           </Link>
                                        </li>
                                
                                        <li class="nav-item">
                                            <Link to="/terms-of-service" class="nav-link">
                                                Terms of Service
                                           </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/privacy-policy" class="nav-link">
                                                Privacy Policy
                                           </Link>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <Link to="/error-404" class="nav-link">
                                                Error Page
                                           </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/coming-soon" class="nav-link">
                                                Coming Soon
                                           </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <Link to="/#" class="nav-link active">
                                        Shop 
                                        <i class='bx bx-chevron-down'></i>
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
                                            <Link to="/checkout" class="nav-link active">
                                                Checkout
                                           </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/products-details" class="nav-link">
                                                Products Details
                                           </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <Link to="/#" class="nav-link">
                                        Blog 
                                        <i class='bx bx-chevron-down'></i>
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
                            <div class="user-actions">
                                <i class='bx bx-log-in'></i>
                                <span>Returning customer? <Link to="/#">Click here to login</Link></span>
                            </div>
                            
                            <div class="billing-details">
                                <h3 class="title">Billing Details</h3>

                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>First Name <span class="required">*</span></label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>Last Name <span class="required">*</span></label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>Company Name</label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>Email Address <span class="required">*</span></label>
                                            <input type="email" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>Phone <span class="required">*</span></label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
										    <label>Country <span class="required">*</span></label>
										
                                            <div class="select-box">
                                                <select>
                                                    <option>United Arab Emirates</option>
                                                    <option>China</option>
                                                    <option>United Kingdom</option>
                                                    <option>Germany</option>
                                                    <option>France</option>
                                                    <option>Japan</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>Address <span class="required">*</span></label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>Town / City <span class="required">*</span></label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>State / County <span class="required">*</span></label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>Postcode / Zip <span class="required">*</span></label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="create-an-account"/>
                                            <label class="form-check-label" for="create-an-account">Create an account?</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="ship-different-address"/>
                                            <label class="form-check-label" for="ship-different-address">Ship to a different address?</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea name="notes" id="notes" cols="30" rows="5" placeholder="Order Notes" class="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-12">
                            <div class="order-details">
                                <div class="cart-totals">
                                    <h3>Cart Totals</h3>
            
                                    <ul>
                                        <li>Subtotal <span>$599.00</span></li>
                                        <li>Shipping <span>$30.00</span></li>
                                        <li>Total <span>$599.00</span></li>
                                        <li>Payable Total <span>$599.00</span></li>
                                    </ul>
            
                                    <Link to="/#" class="default-btn">
                                        Proceed to Checkout
                                   </Link>
                                </div>

                                <div class="payment-box">
                                    <h3 class="title">Payment Method</h3>

                                    <div class="payment-method">
                                        <p>
                                            <input type="radio" id="direct-bank-transfer" name="radio-group" checked/>
                                            <label for="direct-bank-transfer">Direct Bank Transfer</label>
                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference.  
                                        </p>
                                        <p>
                                            <input type="radio" id="cash-on-delivery" name="radio-group"/>
                                            <label for="cash-on-delivery">Cash on Delivery</label>
                                        </p>
                                        <p>
                                            <input type="radio" id="check-payments" name="radio-group"/>
                                            <label for="check-payments">Check Payments</label>
                                        </p>
                                        <p>
                                            <input type="radio" id="paypal" name="radio-group"/>
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
        <section class="footer-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-footer-widget">
                            <Link to="/index">
                                <img src="assets/img/logo-2.png" alt="image"/>
                           </Link>

                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <ul class="footer-social">
                                <li>
                                    <Link to="/#" target="_blank">
                                        <i class='bx bxl-facebook'></i>
                                   </Link>
                                </li>
                                <li>
                                    <Link to="/#" target="_blank">
                                        <i class='bx bxl-twitter'></i>
                                   </Link>
                                </li>
                                <li>
                                    <Link to="/#" target="_blank">
                                        <i class='bx bxl-pinterest-alt'></i>
                                   </Link>
                                </li>
                                <li>
                                    <Link to="/#" target="_blank">
                                        <i class='bx bxl-linkedin'></i>
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
                                            <Link to="/#">Electronic Car Protect Air Pollution</Link>
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
                                            <Link to="/#">Automotive Advancements to Look Forward</Link>
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
                                    <i class='bx bxs-chevrons-right'></i>
                                    <Link to="/#">About Company</Link>
                                </li>
                                <li>
                                    <i class='bx bxs-chevrons-right'></i>
                                    <Link to="/#">Services</Link>
                                </li>
                                <li>
                                    <i class='bx bxs-chevrons-right'></i>
                                    <Link to="/#">Shop</Link>
                                </li>
                                <li>
                                    <i class='bx bxs-chevrons-right'></i>
                                    <Link to="/#">FAQ</Link>
                                </li>
                                <li>
                                    <i class='bx bxs-chevrons-right'></i>
                                    <Link to="/#">Blog</Link>
                                </li>
                                <li>
                                    <i class='bx bxs-chevrons-right'></i>
                                    <Link to="/#">Gallery</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-footer-widget">
                            <h2>Information</h2>

                            <ul class="footer-contact-info">
                                <li>
                                    <i class='bx bxs-phone'></i>
                                    <span>Phone</span>
                                    <Link to="/tel:882569756">882-569-756</Link>
                                </li>
                                <li>
                                    <i class='bx bx-envelope'></i>
                                    <span>Email</span>
                                    <Link to="/mailto:hello@maxon.com">hello@maxon.com</Link>
                                </li>
                                <li>
                                    <i class='bx bx-map'></i>
                                    <span>Address</span>
                                    175 5th Ave Premium Area, New York
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Footer Area */}

        {/* Start Copy Right Area */}
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
                                    <Link to="/terms-of-service">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Copy Right Area */}

        {/* Start Go Top Area */}
        <div class="go-top">
            <i class='bx bx-up-arrow-alt'></i>
        </div>
        </>
    )
}

export default CheckOut
