import { Link, useNavigate } from 'react-router-dom';


function Index(){
    const navigate =useNavigate();
    return(
       <div>
              {/* <div class="preloader">
            <div class="loader">
                <div class="sbl-half-circle-spin">
                   
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
                    <div class="col-lg-2">
                        <div class="middle-header-logo">
                            <Link to="/"><img src="assets/img/logo.png" alt="logo"/></Link>
                        </div>
                    </div>

                    <div class="col-lg-5">
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

                    <div class="col-lg-5">
                        <ul class="middle-header-optional">
                            <li>
                                <Link to="/wishlist"><i class="flaticon-heart"><span>0</span></i> Wishlist</Link>
                            </li>
                            <li>
                                <Link to="/cart"><i class="flaticon-shopping-cart"><span>2</span></i> Add to Cart</Link>
                            </li>
                            <li>
                                <Link  to="/my-account" class="user-btn"><i class='flaticon-enter'></i>Login / Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* End Middle Header Area */}

        {/* Start Navbar Area */}
        <div class="navbar-area">
            <div class="main-responsive-nav">
                <div class="container">
                    <div class="main-responsive-menu">
                        <div class="logo">
                            <Link to="//">
                                <img src="assets/img/logo.png" alt="image"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-navbar">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <div class="navbar-category">
                            <div class="category-title">
                                <Link to="/#">Shop Department</Link>
                            </div>

                            <div class="navbar-category-dropdown">
                                <ul class="category-list">
                                    <li><Link to="/#">Batteries</Link></li>
                                    <li><Link to="/#">Tires Collection</Link></li>
                                    <li><Link to="/#">Wheels</Link></li>
                                    <li><Link to="/#">Oil & Lubricants</Link></li>
                                    <li><Link to="/#">Interior Parts</Link></li>
                                    <li><Link to="/#">Diversion</Link></li>
                                    <li><Link to="/#">Electronics</Link></li>
                                    <li><Link to="/#">Accessories</Link></li>
                                    <li><Link to="/#">Brake Rotors</Link></li>
                                    <li><Link to="/#">Pistons Liners</Link></li>
                                    <li><Link to="/#">Diversion</Link></li>
                                    <li><Link to="/#">Accessories</Link></li>
                                    <li><Link to="/#">Door Handles</Link></li>
                                </ul>
                            </div>
                        </div>

                        <Link class="navbar-brand" to="//">
                            <img src="assets/img/logo-2.png" alt="image"/>
                        </Link>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item">
                                    <Link to="/#" class="nav-link active">
                                        Home 
                                        <i class='bx bx-chevron-down'></i>
                                    </Link>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <Link to="//" class="nav-link active">
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
                                    <Link to="/#" class="nav-link">
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

        <div class="main-slides">
            <div class="container">
               
                <div class="row" >
                    123
                    <div class="col-lg-3 col-md-12"></div>
                    <div class="col-lg-9 col-md-12">
                        <div class="home-slides owl-carousel owl-theme">
                            234
                            <div class="main-slides-item item-one">
                                345
                                <div class="main-slides-content">
                                    456
                                    <span>Get 30% Off</span>
                                    <h1>Automobile Trends Collections</h1>
                
                                    <div class="slides-btn">
                                        <Link to="/#" class="default-btn">Shop Now</Link>
                                        <Link to="/#" class="optional-btn">Contact Us</Link>
                                    </div>
                                </div>
                            </div>

                            <div class="main-slides-item item-two">
                                <div class="main-slides-content">
                                    <span>Get 30% Off</span>
                                    <h1>Modern Top Classic Auto Parts Shop</h1>
                
                                    <div class="slides-btn">
                                        <Link to="/#" class="default-btn">Shop Now</Link>
                                        <Link to="/#" class="optional-btn">Contact Us</Link>
                                    </div>
                                </div>
                            </div>

                            <div class="main-slides-item item-three">
                                <div class="main-slides-content">
                                    <span>Get 30% Off</span>
                                    <h1>Mega Sale Body Parts Shop For Any Vehicle</h1>
                
                                    <div class="slides-btn">
                                        <Link to="/#" class="default-btn">Shop Now</Link>
                                        <Link to="/#" class="optional-btn">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Main Slides Area */}

        {/* Start Support Area */}
        <section class="support-area">
            <div class="container">
                <div class="custom-row">
                    <div class="custom-item">
                        <div class="single-support">
                            <div class="icon">
                                <i class="flaticon-free-delivery"></i>
                            </div>

                            <div class="support-content">
                                <h3>Free Delivery</h3>
                                <span>World Wide</span>
                            </div>
                        </div>
                    </div>

                    <div class="custom-item">
                        <div class="single-support">
                            <div class="icon">
                                <i class="flaticon-return-of-investment"></i>
                            </div>

                            <div class="support-content">
                                <h3>Easy Returns</h3>
                                <span>World Wide</span>
                            </div>
                        </div>
                    </div>

                    <div class="custom-item">
                        <div class="single-support">
                            <div class="icon">
                                <i class="flaticon-online-payment"></i>
                            </div>

                            <div class="support-content">
                                <h3>Payment Comfort</h3>
                                <span>World Wide</span>
                            </div>
                        </div>
                    </div>

                    <div class="custom-item">
                        <div class="single-support">
                            <div class="icon">
                                <i class="flaticon-online-support"></i>
                            </div>

                            <div class="support-content">
                                <h3>Online Support</h3>
                                <span>World Wide</span>
                            </div>
                        </div>
                    </div>

                    <div class="custom-item">
                        <div class="single-support">
                            <div class="icon">
                                <i class="flaticon-award"></i>
                            </div>

                            <div class="support-content">
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
        <section class="products-area pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <h2>Best Selling Products</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="tab products-list-tab">
                    <ul class="tabs">
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

                    <div class="tab_content">
                        <div class="tabs_item">
                            <div class="row">
                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-1.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">17 Inch Rim</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$89.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-2.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Car Engine</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$99.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-3.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Ispat Rim</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$55.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-4.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Steering Wheel</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$189.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-5.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Walnut Wall</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$45.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-6.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Tires Collection</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$98.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-7.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Wheel</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$77.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-8.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Repair Parts</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$175.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tabs_item">
                            <div class="row">
                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-1.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">17 Inch Rim</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$89.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-2.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Car Engine</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$99.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-3.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Ispat Rim</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$55.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-4.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Steering Wheel</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$189.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-5.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Walnut Wall</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$45.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-6.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Tires Collection</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$98.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-7.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Wheel</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$77.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-8.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Repair Parts</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$175.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tabs_item">
                            <div class="row">
                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-1.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">17 Inch Rim</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$89.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-2.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Car Engine</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$99.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-3.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Ispat Rim</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$55.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-4.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Steering Wheel</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$189.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-5.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Walnut Wall</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$45.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-6.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Tires Collection</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$98.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-7.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Wheel</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
                                            </ul>
                                            <span>$77.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="single-products">
                                        <div class="products-image">
                                            <Link to="/products-details"><img src="assets/img/products/products-8.jpg" alt="image"/></Link>
                                            <div class="tag">Sale!</div>
                                            <ul class="products-action">
                                                <li>
                                                    <Link to="/cart">
                                                        <i class="flaticon-shopping-cart"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
            
                                        <div class="products-content">
                                            <h3>
                                                <Link to="/products-details">Repair Parts</Link>
                                            </h3>
                                            <ul class="rating">
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bxs-star'></i></li>
                                                <li><i class='bx bx-star'></i></li>
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
        <section class="coming-soon-area ptb-100">
            <div class="container">
                <div class="coming-soon-title">
                    {/* <h3>Flash Deals</h3>
                    <h4>Hurry Up and Get 30% Discount</h4>

                    <div class="coming-soon-btn">
                        <Link to="/cart" class="default-btn">Add To Cart</Link>
                    </div>

                    <div class="coming-soon-content">
                        <div id="timer" class="flex-wrap d-flex justify-content-center">
                            <div id="days" class="align-items-center flex-column d-flex"></div>
                            <div id="hours" class="align-items-center flex-column d-flex"></div>
                            <div id="minutes" class="align-items-center flex-column d-flex"></div>
                            <div id="seconds" class="align-items-center flex-column d-flex"></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        {/* End Coming Soon Area */}

        {/* Start Top Products Area */}
        <section class="top-products-area pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <h2>Top Products</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-top-products">
                            <div class="top-products-image">
                                <Link to="/products-details"><img src="assets/img/top-products/top-products-1.jpg" alt="image"/></Link>
                                
                                <ul class="top-products-action">
                                    <li>
                                        <Link to="/cart">
                                            <i class="flaticon-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                    </li>
                                </ul>
                            </div>

                            <div class="top-products-content">
                                <h3>
                                    <Link to="/products-details">17 Inch Rim</Link>
                                </h3>
                                <ul class="rating">
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bx-star'></i></li>
                                </ul>
                                <span>$89.00</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-top-products">
                            <div class="top-products-image">
                                <Link to="/products-details"><img src="assets/img/top-products/top-products-2.jpg" alt="image"/></Link>
                                
                                <ul class="top-products-action">
                                    <li>
                                        <Link to="/cart">
                                            <i class="flaticon-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                    </li>
                                </ul>
                            </div>

                            <div class="top-products-content">
                                <h3>
                                    <Link to="/products-details">Car Engine</Link>
                                </h3>
                                <ul class="rating">
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bx-star'></i></li>
                                </ul>
                                <span>$99.00</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-top-products">
                            <div class="top-products-image">
                                <Link to="/products-details"><img src="assets/img/top-products/top-products-3.jpg" alt="image"/></Link>
                                
                                <ul class="top-products-action">
                                    <li>
                                        <Link to="/cart">
                                            <i class="flaticon-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                    </li>
                                </ul>
                            </div>

                            <div class="top-products-content">
                                <h3>
                                    <Link to="/products-details">Isphat Rim</Link>
                                </h3>
                                <ul class="rating">
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bx-star'></i></li>
                                </ul>
                                <span>$55.00</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-top-products">
                            <div class="top-products-image">
                                <Link to="/products-details"><img src="assets/img/top-products/top-products-4.jpg" alt="image"/></Link>
                                
                                <ul class="top-products-action">
                                    <li>
                                        <Link to="/cart">
                                            <i class="flaticon-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wishlist"><i class="flaticon-heart"></i></Link>
                                    </li>
                                </ul>
                            </div>

                            <div class="top-products-content">
                                <h3>
                                    <Link to="/products-details">HD Camera</Link>
                                </h3>
                                <ul class="rating">
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bx-star'></i></li>
                                </ul>
                                <span>$79.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overview-item">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-6">
                            <div class="overview-image">
                                <img src="assets/img/top-product-1.jpg" alt="image"/>
                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-6">
                            <div class="overview-image">
                                <img src="assets/img/top-product-2.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Top Products Area */}

        {/* Start Categories Area */}
        <section class="categories-area pb-100">
            <div class="container">
                <div class="categories-box">
                    <div class="categories-title">
                        <h2>Popular Categories</h2>
                    </div>

                    <div class="categories-row">
                        <div class="categories-item">
                            <div class="single-categories">
                                <div class="categories-image">
                                    <Link to="/products-details">
                                        <img src="assets/img/categories/categories-1.jpg" alt="image"/>
                                    </Link>
                                </div>

                                <div class="categories-content">
                                    <h3>
                                        <Link to="/products-details">17 Inch Rim</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div class="categories-item">
                            <div class="single-categories">
                                <div class="categories-image">
                                    <Link to="/products-details">
                                        <img src="assets/img/categories/categories-2.jpg" alt="image"/>
                                    </Link>
                                </div>

                                <div class="categories-content">
                                    <h3>
                                        <Link to="/products-details">Piston Ring</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div class="categories-item">
                            <div class="single-categories">
                                <div class="categories-image">
                                    <Link to="/products-details">
                                        <img src="assets/img/categories/categories-3.jpg" alt="image"/>
                                    </Link>
                                </div>

                                <div class="categories-content">
                                    <h3>
                                        <Link to="/products-details">Wheel</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div class="categories-item">
                            <div class="single-categories">
                                <div class="categories-image">
                                    <Link to="/products-details">
                                        <img src="assets/img/categories/categories-4.jpg" alt="image"/>
                                    </Link>
                                </div>

                                <div class="categories-content">
                                    <h3>
                                        <Link to="/products-details">HD Camera</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div class="categories-item">
                            <div class="single-categories">
                                <div class="categories-image">
                                    <Link to="/products-details">
                                        <img src="assets/img/categories/categories-5.jpg" alt="image"/>
                                    </Link>
                                </div>

                                <div class="categories-content">
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
        <div class="newsletter-area ptb-100">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="newsletter-content">
                            <span>Special Offer For Subscription</span>
                            <h3>Get Instant Discount For Membership</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <form class="newsletter-form">
                                <input type="email" class="input-newsletter" placeholder="Enter Email Address" name="EMAIL" required autocomplete="off" />
    
                                <button type="submit">Subscribe Now</button>
                                
                                <div id="validator-newsletter" class="form-result"></div>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="newsletter-image wow fadeInRight" data-wow-delay=".3s">
                            <img src="assets/img/newsletter/newsletter.png" alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Newsletter Area */}

        {/* Start Trending Products Area */}
        <section class="trending-products-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-12">
                        <div class="trending-products-box">
                            <div class="products-box-title">
                                <span>For Any Vehicles</span>
                                <h2>Body Parts Collection</h2>

                                <div class="box-btn">
                                    <Link to="/shop">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-9 col-md-12">
                        <div class="trending-products-title">
                            <h3>Top Trending Products</h3>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-sm-6">
                                <div class="single-trending-products">
                                    <div class="trending-products-image">
                                        <Link to="/products-details">
                                            <img src="assets/img/trending-products/trending-products-2.jpg" alt="image"/>
                                        </Link>
                                    </div>

                                    <div class="trending-products-content">
                                        <h3>
                                            <Link to="/products-details">Filter</Link>
                                        </h3>
                                        <ul class="rating">
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bx-star'></i></li>
                                        </ul>
                                        <span>$65.00</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-sm-6">
                                <div class="single-trending-products">
                                    <div class="trending-products-image">
                                        <Link to="/products-details">
                                            <img src="assets/img/trending-products/trending-products-3.jpg" alt="image"/>
                                        </Link>
                                    </div>

                                    <div class="trending-products-content">
                                        <h3>
                                            <Link to="/products-details">Lubricant Oil</Link>
                                        </h3>
                                        <ul class="rating">
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bx-star'></i></li>
                                        </ul>
                                        <span>$55.00</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-sm-6">
                                <div class="single-trending-products">
                                    <div class="trending-products-image">
                                        <Link to="/products-details">
                                            <img src="assets/img/trending-products/trending-products-4.jpg" alt="image"/>
                                        </Link>
                                    </div>

                                    <div class="trending-products-content">
                                        <h3>
                                            <Link to="/products-details">Piston Ring</Link>
                                        </h3>
                                        <ul class="rating">
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bx-star'></i></li>
                                        </ul>
                                        <span>$75.00</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-sm-6">
                                <div class="single-trending-products">
                                    <div class="trending-products-image">
                                        <Link to="/products-details">
                                            <img src="assets/img/trending-products/trending-products-5.jpg" alt="image"/>
                                        </Link>
                                    </div>

                                    <div class="trending-products-content">
                                        <h3>
                                            <Link to="/products-details">Walnut Wall</Link>
                                        </h3>
                                        <ul class="rating">
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bxs-star'></i></li>
                                            <li><i class='bx bx-star'></i></li>
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


        <section class="blog-area pb-70">
            <div class="container">
                <div class="section-title">
                    <h2>Latest News</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog">
                            <div class="blog-image">
                                <Link to="/blog-details">
                                    <img src="assets/img/blog/blog-1.jpg" alt="image"/>
                                </Link>
                                
                                <div class="tag">22, Dec 2020</div>
                            </div>
                            <div class="blog-content">
                                <span>By <Link to="/#">Admin</Link></span>
                                <h3>
                                    <Link to="/blog-details">The Electric Car isn't Pollution-free they have to get there</Link>
                                </h3>
                                <Link to="/blog-details" class="blog-btn">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog">
                            <div class="blog-image">
                                <Link to="/blog-details">
                                    <img src="assets/img/blog/blog-2.jpg" alt="image"/>
                                </Link>
                                
                                <div class="tag">22, Dec 2020</div>
                            </div>
                            <div class="blog-content">
                                <span>By <Link to="/#">Admin</Link></span>
                                <h3>
                                    <Link to="/blog-details">You Can Know That How a Car Runs a Still, Enjoy Trip</Link>
                                </h3>
                                <Link to="/blog-details" class="blog-btn">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div class="single-blog">
                            <div class="blog-image">
                                <Link to="/blog-details">
                                    <img src="assets/img/blog/blog-3.jpg" alt="image"/>
                                </Link>
                                
                                <div class="tag">22, Dec 2020</div>
                            </div>
                            <div class="blog-content">
                                <span>By <Link to="/#">Admin</Link></span>
                                <h3>
                                    <Link to="/blog-details">Top 10 Automotive Advancements to Look Forward</Link>
                                </h3>
                                <Link to="/blog-details" class="blog-btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="footer-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-footer-widget">
                            <Link to="//">
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
   
        <div class="go-top">
            <i class='bx bx-up-arrow-alt'></i>
        </div>
       </div>
    )
}

export default Index