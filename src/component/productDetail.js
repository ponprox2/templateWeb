import { Link, useNavigate } from 'react-router-dom';

function ProductDetail(){
    return(
      
        <>
            {/* <div class="preloader">
            <div class="loader">
                <div class="sbl-half-circle-spin">
                    <div></div>
                </div>
            </div>
        </div> */}
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
                                <Link to="/wishlist"><i class="flaticon-heart"><span>0</span></i> Wishlist </Link>
                            </li>
                            <li>
                                <Link to="/cart"><i class="flaticon-shopping-cart"><span>2</span></i> Add to Cart </Link>
                            </li>
                            <li>
                                <Link to="/my-account" class="user-btn"><i class='flaticon-enter'></i>Login / Register </Link>
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
                                            <Link to="/checkout" class="nav-link">
                                                Checkout
                                            </Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link to="/products-details" class="nav-link active">
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
                                        <Link to="/tel:882563789966">(+882) 563 789 966 </Link>
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
                                        <Link to="/tel:882563789966">(+882) 563 789 966 </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 {/* End Navbar Area  */}

 {/* Start Page Banner  */}
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
 {/* End Page Banner  */}

 {/* Start Products Details Area  */}
        <section class="products-details-area ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <div class="products-details-desc">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-6">
                                    <div class="main-products-image">
                                        <img src="assets/img/products/products-8.jpg" alt="image"/>
                                    </div>
                                </div>
        
                                <div class="col-lg-5 col-md-6">
                                    <div class="product-content">
                                        <h3>Wheel</h3>
        
                                        <div class="product-review">
                                            <div class="rating">
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                            </div>
                                        </div>
        
                                        <div class="price">
                                            <span class="old-price">$150.00</span>
                                            <span class="new-price">$75.00</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
        
                                        <ul class="products-info">
                                            <li><span>Availability:</span> <Link to="/#">In stock </Link></li>
                                            <li><span>SKU:</span> <Link to="/#">L458-25 </Link></li>
                                        </ul>
        
                                        <div class="products-color-switch">
                                            <p class="available-color"><span>Color</span> : 
                                                <Link to="/#" style={{background: '#a53c43'}}> </Link>
                                                <Link to="/#"  style={{background: '#192861'}}> </Link>
                                                <Link to="/#"  style={{background: '#c58a84'}}> </Link>
                                                <Link to="/#"  style={{background: '#a53c43'}}> </Link>
                                                <Link to="/#"  style={{background: '#ecc305'}}> </Link>
                                                <Link to="/#"  style={{background: '#808080'}}> </Link>
                                            </p>
                                        </div>
        
                                        <div class="product-quantities">
                                            <span>Quantities:</span>
        
                                            <div class="input-counter">
                                                <span class="minus-btn">
                                                    <i class='bx bx-minus'></i>
                                                </span>
                                                <input type="text" value="1"/>
                                                <span class="plus-btn">
                                                    <i class='bx bx-plus'></i>
                                                </span>
                                            </div>
                                        </div>
        
                                        <div class="product-add-to-cart">
                                            <button type="submit" class="default-btn">
                                                <i class="flaticon-shopping-cart"></i>
                                                Add to cart
                                                <span></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div class="products-details-tabs">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item"><a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description">Description </a></li>
                                <li class="nav-item"><a class="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews">Reviews </a></li>
                                <li class="nav-item"><a class="nav-link" id="information-tab" data-toggle="tab" href="#information" role="tab" aria-controls="information">Shipping Information </a></li>
                            </ul>
        
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="description" role="tabpanel">
                                    <h2>Overview</h2>
                                    
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
        
                                    <ul>
                                        <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                                        <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                                        <li>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</li>
                                        <li>Various versions have evolved over the years, sometimes by accident sometimes on purpose.</li>
                                        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur.</li>
                                    </ul>
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
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                            </div>
        
                                            <Link to="/#" class="default-btn">
                                                Write a Review
                                                <span></span>
                                            </Link>
                                        </div>
        
                                        <div class="review-comments">
                                            <div class="review-item">
                                                <div class="rating">
                                                    <i class='bx bxs-star'></i>
                                                    <i class='bx bxs-star'></i>
                                                    <i class='bx bxs-star'></i>
                                                    <i class='bx bxs-star'></i>
                                                    <i class='bx bxs-star'></i>
                                                </div>
                                                <h3>Good</h3>
                                                <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                            </div>
        
                                            <div class="review-item">
                                                <div class="rating">
                                                    <i class='bx bxs-star'></i>
                                                    <i class='bx bxs-star'></i>
                                                    <i class='bx bxs-star'></i>
                                                    <i class='bx bxs-star'></i>
                                                    <i class='bx bxs-star'></i>
                                                </div>
                                                <h3>Good</h3>
                                                <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                            </div>
        
                                            <div class="review-item">
                                                <div class="rating">
                                                    <i class='bx bxs-star'></i>
                                                    <i class='bx bxs-star'></i>
                                                    <i class='bx bxs-star'></i>
                                                    <i class='bx bxs-star'></i>
                                                    <i class='bx bxs-star'></i>
                                                </div>
                                                <h3>Good</h3>
                                                <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                            </div>
                                        </div>
        
                                        <div class="review-form">
                                            <h3>Write a Review</h3>
        
                                            <form>
                                                <div class="row">
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="form-group">
                                                            <input type="text" id="name" name="name" placeholder="Enter your name" class="form-control"/>
                                                        </div>
                                                    </div>
        
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="form-group">
                                                            <input type="email" id="email" name="email" placeholder="Enter your email" class="form-control"/>
                                                        </div>
                                                    </div>
        
                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="form-group">
                                                            <input type="text" id="review-title" name="review-title" placeholder="Enter your review a title" class="form-control"/>
                                                        </div>
                                                    </div>
        
                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="form-group">
                                                            <textarea name="review-body" id="review-body" cols="30" rows="6" placeholder="Write your comments here" class="form-control"></textarea>
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
        
                                <div class="tab-pane fade show" id="information" role="tabpanel">
                                    <ul class="information-list">
                                        <li>Address: <span>4848 Hershell Hollow Road, Bothell, WA 89076</span></li>
                                        <li>Phone: <Link to="/tel:+15143214567">+1 (514) 321-4567 </Link></li>
                                        <li>Email: <Link to="/mailto:hello@maxon.com">hello@maxon.com </Link></li>
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
                                        <input type="search" class="search-field" placeholder="Search..."/>
                                    </label>
                                    <button type="submit">
                                        <i class='bx bx-search-alt'></i>
                                    </button>
                                </form>
                            </section>

                            <section class="widget widget_categories">
                                <h3 class="widget-title">Categories</h3>

                                <ul>
                                    <li>
                                        <Link to="/#">Wheels and Tires <i class='bx bx-chevron-right'></i> </Link>
                                    </li>
                                    <li>
                                        <Link to="/#">Repair Parts <i class='bx bx-chevron-right'></i> </Link>
                                    </li>
                                    <li>
                                        <Link to="/#">Diversion <i class='bx bx-chevron-right'></i> </Link>
                                    </li>
                                    <li>
                                        <Link to="/#">Electronics <i class='bx bx-chevron-right'></i> </Link>
                                    </li>
                                    <li>
                                        <Link to="/#">Accessories <i class='bx bx-chevron-right'></i> </Link>
                                    </li>
                                    <li>
                                        <Link to="/#">Brake Rotors <i class='bx bx-chevron-right'></i> </Link>
                                    </li>
                                    <li>
                                        <Link to="/#">Pistons Liners <i class='bx bx-chevron-right'></i> </Link>
                                    </li>
                                    <li>
                                        <Link to="/#">Door Handles <i class='bx bx-chevron-right'></i> </Link>
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
                                        <h4 class="title usmall"><Link to="/#">The Electric Car isn't Pollution-free they have to get there </Link></h4>
                                    </div>
                                </article>

                                <article class="item">
                                    <Link to="/#" class="thumb">
                                        <span class="fullimage cover bg2" role="img"></span>
                                    </Link>
                                    <div class="info">
                                        <span>June 21, 2020</span>
                                        <h4 class="title usmall"><Link to="/#">You Can Know That How a Car Runs a Still, Enjoy Trip </Link></h4>
                                    </div>
                                </article>

                                <article class="item">
                                    <Link to="/#" class="thumb">
                                        <span class="fullimage cover bg3" role="img"></span>
                                    </Link>
                                    <div class="info">
                                        <span>June 30, 2020</span>
                                        <h4 class="title usmall"><Link to="/#">What Is The Cost Of Repairing a Scratch On a Car? </Link></h4>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-top-products-box">
                            <div class="top-products-image">
                                <Link to="/products-details"><img src="assets/img/top-products/top-products-1.jpg" alt="image"/> </Link>
                                
                                <ul class="top-products-action">
                                    <li>
                                        <Link to="/cart">
                                            <i class="flaticon-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wishlist"><i class="flaticon-heart"></i> </Link>
                                    </li>
                                </ul>
                            </div>

                            <div class="top-products-content">
                                <h3>
                                    <Link to="/products-details">17 Inch Rim </Link>
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
                        <div class="single-top-products-box">
                            <div class="top-products-image">
                                <Link to="/products-details"><img src="assets/img/top-products/top-products-2.jpg" alt="image"/> </Link>
                                
                                <ul class="top-products-action">
                                    <li>
                                        <Link to="/cart">
                                            <i class="flaticon-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wishlist"><i class="flaticon-heart"></i> </Link>
                                    </li>
                                </ul>
                            </div>

                            <div class="top-products-content">
                                <h3>
                                    <Link to="/products-details">Motor Oil </Link>
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
                        <div class="single-top-products-box">
                            <div class="top-products-image">
                                <Link to="/products-details"><img src="assets/img/top-products/top-products-3.jpg" alt="image"/> </Link>
                                
                                <ul class="top-products-action">
                                    <li>
                                        <Link to="/cart">
                                            <i class="flaticon-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wishlist"><i class="flaticon-heart"></i> </Link>
                                    </li>
                                </ul>
                            </div>

                            <div class="top-products-content">
                                <h3>
                                    <Link to="/products-details">Wheel </Link>
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
                        <div class="single-top-products-box">
                            <div class="top-products-image">
                                <Link to="/products-details"><img src="assets/img/top-products/top-products-4.jpg" alt="image"/> </Link>
                                
                                <ul class="top-products-action">
                                    <li>
                                        <Link to="/cart">
                                            <i class="flaticon-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wishlist"><i class="flaticon-heart"></i> </Link>
                                    </li>
                                </ul>
                            </div>

                            <div class="top-products-content">
                                <h3>
                                    <Link to="/products-details">Motor </Link>
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

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-top-products-box">
                            <div class="top-products-image">
                                <Link to="/products-details"><img src="assets/img/top-products/top-products-5.jpg" alt="image"/> </Link>
                                
                                <ul class="top-products-action">
                                    <li>
                                        <Link to="/cart">
                                            <i class="flaticon-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wishlist"><i class="flaticon-heart"></i> </Link>
                                    </li>
                                </ul>
                            </div>

                            <div class="top-products-content">
                                <h3>
                                    <Link to="/products-details">Camera </Link>
                                </h3>
                                <ul class="rating">
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bx-star'></i></li>
                                </ul>
                                <span>$59.00</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-top-products-box">
                            <div class="top-products-image">
                                <Link to="/products-details"><img src="assets/img/top-products/top-products-6.jpg" alt="image"/> </Link>
                                
                                <ul class="top-products-action">
                                    <li>
                                        <Link to="/cart">
                                            <i class="flaticon-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wishlist"><i class="flaticon-heart"></i> </Link>
                                    </li>
                                </ul>
                            </div>

                            <div class="top-products-content">
                                <h3>
                                    <Link to="/products-details">Car Engine </Link>
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
                        <div class="single-top-products-box">
                            <div class="top-products-image">
                                <Link to="/products-details"><img src="assets/img/top-products/top-products-7.jpg" alt="image"/> </Link>
                                
                                <ul class="top-products-action">
                                    <li>
                                        <Link to="/cart">
                                            <i class="flaticon-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wishlist"><i class="flaticon-heart"></i> </Link>
                                    </li>
                                </ul>
                            </div>

                            <div class="top-products-content">
                                <h3>
                                    <Link to="/products-details">Ispat Rim </Link>
                                </h3>
                                <ul class="rating">
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bx-star'></i></li>
                                </ul>
                                <span>$49.00</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-top-products-box">
                            <div class="top-products-image">
                                <Link to="/products-details"><img src="assets/img/top-products/top-products-8.jpg" alt="image"/> </Link>
                                
                                <ul class="top-products-action">
                                    <li>
                                        <Link to="/cart">
                                            <i class="flaticon-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wishlist"><i class="flaticon-heart"></i> </Link>
                                    </li>
                                </ul>
                            </div>

                            <div class="top-products-content">
                                <h3>
                                    <Link to="/products-details">HD Camera </Link>
                                </h3>
                                <ul class="rating">
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bxs-star'></i></li>
                                    <li><i class='bx bx-star'></i></li>
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
                                            <Link to="/#">Electronic Car Protect Air Pollution </Link>
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
                                            <Link to="/#">Automotive Advancements to Look Forward </Link>
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
                                    <Link to="/#">About Company </Link>
                                </li>
                                <li>
                                    <i class='bx bxs-chevrons-right'></i>
                                    <Link to="/#">Services </Link>
                                </li>
                                <li>
                                    <i class='bx bxs-chevrons-right'></i>
                                    <Link to="/#">Shop </Link>
                                </li>
                                <li>
                                    <i class='bx bxs-chevrons-right'></i>
                                    <Link to="/#">FAQ </Link>
                                </li>
                                <li>
                                    <i class='bx bxs-chevrons-right'></i>
                                    <Link to="/#">Blog </Link>
                                </li>
                                <li>
                                    <i class='bx bxs-chevrons-right'></i>
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
                                    <i class='bx bxs-phone'></i>
                                    <span>Phone</span>
                                    <Link to="/tel:882569756">882-569-756 </Link>
                                </li>
                                <li>
                                    <i class='bx bx-envelope'></i>
                                    <span>Email</span>
                                    <Link to="/mailto:hello@maxon.com">hello@maxon.com </Link>
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
            <i class='bx bx-up-arrow-alt'></i>
        </div>
        </>
    )
}

export default ProductDetail