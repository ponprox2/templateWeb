import { Link, useNavigate } from 'react-router-dom';

function Footer(){
    return(
        <>
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
        {/* End Copy Right Area  */}

        {/* Start Go Top Area  */}
        <div class="go-top">
            <i class='bx bx-up-arrow-alt'></i>
        </div>
        </>
    )
}

export default Footer