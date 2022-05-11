import { Link, useNavigate } from 'react-router-dom';


function Shop(){
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
                                    <Link to="/shop" class="nav-link active">
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
                            <li><Link to="/#">Oil & Lubricants</Link></li>
                            <li><Link to="/#">Batteries</Link></li>
                            <li><Link to="/#">Door Handles</Link></li>
                        </ul>
                    </div>
                </div>

                <div class="shop-sidebar">
                    <div class="brand-sidebar-item">
                        <h3>Brand</h3>

                        <ul class="brand-input-checkbox">
                            <li class="checkbox">
                                <input type="checkbox" class="input"/>
                                <label class="label">Brandix</label>
                            </li>

                            <li class="checkbox">
                                <input type="checkbox" class="input"/>
                                <label class="label">Red Gate</label>
                            </li>

                            <li class="checkbox">
                                <input type="checkbox" class="input"/>
                                <label class="label">Sunset</label>
                            </li>

                            <li class="checkbox">
                                <input type="checkbox" class="input"/>
                                <label class="label">Spector</label>
                            </li>

                            <li class="checkbox">
                                <input type="checkbox" class="input"/>
                                <label class="label">TransTech</label>
                            </li>

                            <li class="checkbox">
                                <input type="checkbox" class="input"/>
                                <label class="label">Turbo Electric</label>
                            </li>
                        </ul>
                    </div>

                    <div class="discount-sidebar-item">
                        <h3>With Discount</h3>

                        <ul class="discount-input-checkbox">
                            <li class="checkbox">
                                <input type="checkbox" class="input"/>
                                <label class="label">Any</label>
                            </li>

                            <li class="checkbox">
                                <input type="checkbox" class="input"/>
                                <label class="label">No</label>
                            </li>

                            <li class="checkbox">
                                <input type="checkbox" class="input"/>
                                <label class="label">Yes</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-lg-9 col-md-12">
                <div class="shop-item-box">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-sm-3">
                            <div class="shop-image">
                                <Link to="/products-details">
                                    <img src="assets/img/shop/shop-1.png" alt="image"/>
                                </Link>
                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-6">
                            <div class="shop-content">
                                <h3>
                                    <Link to="/products-details">Brandix Rim 17 Inci</Link>
                                </h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <Link to="/#" class="rating-count">3 reviews</Link>
                                </div>

                                <ul class="shop-list">
                                    <li>Speed: 750 RPM</li>
                                    <li>Power Source: Electrical</li>
                                    <li>Battery Cell Type: Aluminium</li>
                                    <li>Voltage: 20 Volts</li>
                                    <li>Battery Capacity: 2 Ah</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-3">
                            <ul class="shop-btn-list">
                                <li>
                                    <span>$189.00</span>
                                </li>
                                <li>
                                    <Link to="/cart">Add To Cart</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Add To Wishlist</Link>
                                </li>
                                <li>
                                    <Link to="/compare">Add To Compare</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="shop-item-box">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-sm-3">
                            <div class="shop-image">
                                <Link to="/products-details">
                                    <img src="assets/img/shop/shop-2.png" alt="image"/>
                                </Link>
                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-6">
                            <div class="shop-content">
                                <h3>
                                    <Link to="/products-details">Brandix Wheel</Link>
                                </h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <Link to="/#" class="rating-count">3 reviews</Link>
                                </div>

                                <ul class="shop-list">
                                    <li>Speed: 750 RPM</li>
                                    <li>Power Source: Non-Electric</li>
                                    <li>Auto Accessory: Toyota Honda Nissan Shock Absobe Damper</li>
                                    <li>Product Type: Hot selling</li>
                                    <li>Spring Material: Steel</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-3">
                            <ul class="shop-btn-list">
                                <li>
                                    <span>$289.00</span>
                                </li>
                                <li>
                                    <Link to="/cart">Add To Cart</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Add To Wishlist</Link>
                                </li>
                                <li>
                                    <Link to="/compare">Add To Compare</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="shop-item-box">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-sm-3">
                            <div class="shop-image">
                                <Link to="/products-details">
                                    <img src="assets/img/shop/shop-3.png" alt="image"/>
                                </Link>
                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-6">
                            <div class="shop-content">
                                <h3>
                                    <Link to="/products-details">Automotive Motor Filter</Link>
                                </h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <Link to="/#" class="rating-count">3 reviews</Link>
                                </div>

                                <ul class="shop-list">
                                    <li>Type: Coil Spring</li>
                                    <li>Power Source: Electrical</li>
                                    <li>Auto Accessory: machining/turning/Stamping</li>
                                    <li>Production Capacity: 10000 Pieces</li>
                                    <li>Spring Material: Stainless Steel</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-3">
                            <ul class="shop-btn-list">
                                <li>
                                    <span>$55.00</span>
                                </li>
                                <li>
                                    <Link to="/cart">Add To Cart</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Add To Wishlist</Link>
                                </li>
                                <li>
                                    <Link to="/compare">Add To Compare</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="shop-item-box">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-sm-3">
                            <div class="shop-image">
                                <Link to="/products-details">
                                    <img src="assets/img/shop/shop-4.png" alt="image"/>
                                </Link>
                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-6">
                            <div class="shop-content">
                                <h3>
                                    <Link to="/products-details">Auto Parts Accessories</Link>
                                </h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <Link to="/#" class="rating-count">3 reviews</Link>
                                </div>

                                <ul class="shop-list">
                                    <li>Condition: New</li>
                                    <li>Certification: RoHS, ISO9001</li>
                                    <li>Standard: ASTM, GB</li>
                                    <li>Customized:	Customized</li>
                                    <li>Material: Steel</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-3">
                            <ul class="shop-btn-list">
                                <li>
                                    <span>$45.00</span>
                                </li>
                                <li>
                                    <Link to="/cart">Add To Cart</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Add To Wishlist</Link>
                                </li>
                                <li>
                                    <Link to="/compare">Add To Compare</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="shop-item-box">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-sm-3">
                            <div class="shop-image">
                                <Link to="/products-details">
                                    <img src="assets/img/shop/shop-5.png" alt="image"/>
                                </Link>
                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-6">
                            <div class="shop-content">
                                <h3>
                                    <Link to="/products-details">Aluminum Wheels Concave Rim</Link>
                                </h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <Link to="/#" class="rating-count">3 reviews</Link>
                                </div>

                                <ul class="shop-list">
                                    <li>Material: Alloy</li>
                                    <li>Type: Rim</li>
                                    <li>Drive Wheel: FWD</li>
                                    <li>Wheel Hub Diameter: 12-24" Customizable</li>
                                    <li>Wheel Accessories: Wheel Cover</li>
                                    <li>Spoke Type: Equal Diameter Spok</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-3">
                            <ul class="shop-btn-list">
                                <li>
                                    <span>$25.00</span>
                                </li>
                                <li>
                                    <Link to="/cart">Add To Cart</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Add To Wishlist</Link>
                                </li>
                                <li>
                                    <Link to="/compare">Add To Compare</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="shop-item-box">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-sm-3">
                            <div class="shop-image">
                                <Link to="/products-details">
                                    <img src="assets/img/shop/shop-6.png" alt="image"/>
                                </Link>
                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-6">
                            <div class="shop-content">
                                <h3>
                                    <Link to="/products-details">Car Seat</Link>
                                </h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <Link to="/#" class="rating-count">3 reviews</Link>
                                </div>

                                <ul class="shop-list">
                                    <li>Cushion Type: Seat Cushion</li>
                                    <li>Technics: Handmade</li>
                                    <li>Shape: Square</li>
                                    <li>Car Seat Cover Material: Peach Skin</li>
                                    <li>Material: Rubber</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-3">
                            <ul class="shop-btn-list">
                                <li>
                                    <span>$85.00</span>
                                </li>
                                <li>
                                    <Link to="/cart">Add To Cart</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Add To Wishlist</Link>
                                </li>
                                <li>
                                    <Link to="/compare">Add To Compare</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="shop-item-box">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-sm-3">
                            <div class="shop-image">
                                <Link to="/products-details">
                                    <img src="assets/img/shop/shop-7.png" alt="image"/>
                                </Link>
                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-6">
                            <div class="shop-content">
                                <h3>
                                    <Link to="/products-details">Lubricant Oil</Link>
                                </h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <Link to="/#" class="rating-count">3 reviews</Link>
                                </div>

                                <ul class="shop-list">
                                    <li>Type: Compressor Oil</li>
                                    <li>Certification: Daimler, ISO, Psa, Volkswagen</li>
                                    <li>Shape: Liquid</li>
                                    <li>Transport Package: 200L, 18L, 4L</li>
                                    <li>Specification: API SAE</li>
                                    <li>Trademark: SINOPEC</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-3">
                            <ul class="shop-btn-list">
                                <li>
                                    <span>$95.00</span>
                                </li>
                                <li>
                                    <Link to="/cart">Add To Cart</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Add To Wishlist</Link>
                                </li>
                                <li>
                                    <Link to="/compare">Add To Compare</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="shop-item-box">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-sm-3">
                            <div class="shop-image">
                                <Link to="/products-details">
                                    <img src="assets/img/shop/shop-8.png" alt="image"/>
                                </Link>
                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-6">
                            <div class="shop-content">
                                <h3>
                                    <Link to="/products-details">Auto Parts Body Accessories</Link>
                                </h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <Link to="/#" class="rating-count">3 reviews</Link>
                                </div>

                                <ul class="shop-list">
                                    <li>Application: Car</li>
                                    <li>Certification: TS16949</li>
                                    <li>Warranty: 12 Months</li>
                                    <li>Engine Type: Gasoline</li>
                                    <li>Material: Cast Iron</li>
                                    <li>Model: Fw9</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-3">
                            <ul class="shop-btn-list">
                                <li>
                                    <span>$195.00</span>
                                </li>
                                <li>
                                    <Link to="/cart">Add To Cart</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Add To Wishlist</Link>
                                </li>
                                <li>
                                    <Link to="/compare">Add To Compare</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="shop-item-box">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-sm-3">
                            <div class="shop-image">
                                <Link to="/products-details">
                                    <img src="assets/img/shop/shop-9.png" alt="image"/>
                                </Link>
                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-6">
                            <div class="shop-content">
                                <h3>
                                    <Link to="/products-details">Auto Parts Steering Wheel</Link>
                                </h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <Link to="/#" class="rating-count">3 reviews</Link>
                                </div>

                                <ul class="shop-list">
                                    <li>Type: Chassis Parts</li>
                                    <li>Material: Steel</li>
                                    <li>Automatic: Automatic</li>
                                    <li>Standard: Standard</li>
                                    <li>Condition: New</li>
                                    <li>Model: Om1108</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-3">
                            <ul class="shop-btn-list">
                                <li>
                                    <span>$165.00</span>
                                </li>
                                <li>
                                    <Link to="/cart">Add To Cart</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Add To Wishlist</Link>
                                </li>
                                <li>
                                    <Link to="/compare">Add To Compare</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <Link to="/#" class="prev page-numbers">
                            <i class='bx bxs-chevron-left'></i>
                        </Link>
                        <Link to="/#" class="page-numbers">1</Link>
                        <span class="page-numbers current" aria-current="page">2</span>
                        <Link to="/#" class="page-numbers">3</Link>
                        <Link to="/#" class="page-numbers">4</Link>
                        <Link to="/#" class="next page-numbers">
                            <i class='bx bxs-chevron-right'></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* End Shop Area */}

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

export default Shop