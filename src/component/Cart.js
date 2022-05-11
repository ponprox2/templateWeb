import { Link, useNavigate } from 'react-router-dom';

function Cart(){
    return(
        <>
         {/* <div class="preloader">
            <div class="loader">
                <div class="sbl-half-circle-spin">
                    <div></div>
                </div>
            </div>
        </div> */}
         {/* End Preloader Area */}

         {/* Start Top Header Area */}
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
                            <Link to="/">
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
                                            <Link to="/" class="nav-link">
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
                                            <Link to="/cart" class="nav-link active">
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
         {/* End Page Banner */}

         {/* Start Cart Area */}
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
        
                                    <tbody>
                                        <tr class="top-class">
                                            <td class="product-thumbnail">
                                                <Link to="/#" class="remove"><i class='bx bx-x'></i></Link>

                                                <Link to="/#">
                                                    <img src="assets/img/products/products-1.jpg" alt="item"/>
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
                                                    <span class="minus-btn"><i class='bx bx-minus'></i></span>
                                                    <input type="text" value="1"/>
                                                    <span class="plus-btn"><i class='bx bx-plus'></i></span>
                                                </div>
                                            </td>
        
                                            <td class="product-subtotal">
                                                <span class="subtotal-amount">$250.00</span>
                                            </td>
                                        </tr>
        
                                        <tr>
                                            <td class="product-thumbnail">
                                                <Link to="/#" class="remove"><i class='bx bx-x'></i></Link>

                                                <Link to="/#">
                                                    <img src="assets/img/products/products-2.jpg" alt="item"/>
                                                </Link>
                                            </td>
        
                                            <td class="product-name">
                                                <Link to="/products-details">Car Engine</Link>
                                            </td>
        
                                            <td class="product-price">
                                                <span class="unit-amount">$200.00</span>
                                            </td>
        
                                            <td class="product-quantity">
                                                <div class="input-counter">
                                                    <span class="minus-btn"><i class='bx bx-minus'></i></span>
                                                    <input type="text" value="1"/>
                                                    <span class="plus-btn"><i class='bx bx-plus'></i></span>
                                                </div>
                                            </td>
        
                                            <td class="product-subtotal">
                                                <span class="subtotal-amount">$200.00</span>
                                            </td>
                                        </tr>
        
                                        <tr>
                                            <td class="product-thumbnail">
                                                <Link to="/#" class="remove"><i class='bx bx-x'></i></Link>

                                                <Link to="/#">
                                                    <img src="assets/img/products/products-3.jpg" alt="item"/>
                                                </Link>
                                            </td>
        
                                            <td class="product-name">
                                                <Link to="/products-details">Ispat Rim</Link>
                                            </td>
        
                                            <td class="product-price">
                                                <span class="unit-amount">$200.00</span>
                                            </td>
        
                                            <td class="product-quantity">
                                                <div class="input-counter">
                                                    <span class="minus-btn"><i class='bx bx-minus'></i></span>
                                                    <input type="text" value="1"/>
                                                    <span class="plus-btn"><i class='bx bx-plus'></i></span>
                                                </div>
                                            </td>
        
                                            <td class="product-subtotal">
                                                <span class="subtotal-amount">$200.00</span>
                                            </td>
                                        </tr>
        
                                        <tr>
                                            <td class="product-thumbnail">
                                                <Link to="/#" class="remove"><i class='bx bx-x'></i></Link>

                                                <Link to="/#">
                                                    <img src="assets/img/products/products-4.jpg" alt="item"/>
                                                </Link>
                                            </td>
        
                                            <td class="product-name">
                                                <Link to="/products-details">Steering Wheel</Link>
                                            </td>
        
                                            <td class="product-price">
                                                <span class="unit-amount">$150.00</span>
                                            </td>
        
                                            <td class="product-quantity">
                                                <div class="input-counter">
                                                    <span class="minus-btn"><i class='bx bx-minus'></i></span>
                                                    <input type="text" value="1"/>
                                                    <span class="plus-btn"><i class='bx bx-plus'></i></span>
                                                </div>
                                            </td>
        
                                            <td class="product-subtotal">
                                                <span class="subtotal-amount">$150.00</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="product-thumbnail">
                                                <Link to="/#" class="remove"><i class='bx bx-x'></i></Link>

                                                <Link to="/#">
                                                    <img src="assets/img/products/products-5.jpg" alt="item"/>
                                                </Link>
                                            </td>
        
                                            <td class="product-name">
                                                <Link to="/#">Walnut Wall</Link>
                                            </td>
        
                                            <td class="product-price">
                                                <span class="unit-amount">$175.00</span>
                                            </td>
        
                                            <td class="product-quantity">
                                                <div class="input-counter">
                                                    <span class="minus-btn"><i class='bx bx-minus'></i></span>
                                                    <input type="text" value="1"/>
                                                    <span class="plus-btn"><i class='bx bx-plus'></i></span>
                                                </div>
                                            </td>
        
                                            <td class="product-subtotal">
                                                <span class="subtotal-amount">$179.00</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
        
                            <div class="cart-buttons">
                                <div class="row align-items-center">
                                    <div class="col-lg-7 col-sm-7 col-md-7">
                                        <div class="shopping-coupon-code">
                                            <input type="text" class="form-control" placeholder="Coupon code" name="coupon-code" id="coupon-code"/>
                                            <button type="submit">Apply Coupon</button>
                                        </div>
                                    </div>
        
                                    <div class="col-lg-5 col-sm-5 col-md-5 text-right">
                                        <Link to="/#" class="default-btn">
                                            Update Cart
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-lg-4 col-md-12">
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
                    </div>
                </div>
            </div>
        </section>
         {/* End Cart Area */}

         {/* Start Footer Area */}
        <section class="footer-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-footer-widget">
                            <Link to="/">
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

export default Cart