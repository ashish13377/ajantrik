import Link from 'next/link';
import { useState } from 'react';
function Header2() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
        <>
            <header className="site-header mo-left header-transparent">
                <div className="container">
                    <div className="top-bar">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="dlab-topbar-left">
                                <ul>
                                    <li>
                                        <i className="la la-envelope"></i>{" "}
                                        <a href="mailto:support@ajantrik.in" className="aimpot">support@ajantrik.in</a>
                                    </li>
                                    <li>
                                        <i className="la la-phone-volume"> </i>
                                        <a href=" tel:+91 98360 02487" className="aimpot">+91 98360 02487</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="dlab-topbar-right">
                                <ul className="dlab-social-icon">
                                    <li>
                                        <a
                                            className="fa fa-facebook"
                                            href="http://facebook.com/technologythatmakessense"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-instagram"
                                            href="http://instagram.com/ajantrik.in"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-twitter"
                                            href="http://twitter.com/ajantrikindia"
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header --> */}
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link href="/">
                                    <a>
                                        <img className="custom-logo-white" src="images/logo-white.png" alt="" />
                                        <img className="custom-logo" src="images/logo.png" alt="" />
                                    </a>
                                </Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                className={`navbar-toggler collapsed navicon justify-content-end ${
                                    show ? "open" : ""
                                }`}
                                onClick={() => setShow(!show)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                <Link href="create-quotation">
                                        <a className="btn btn-primary rounded-xl gradient shadow">Get A Quote</a>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={`header-nav navbar-collapse collapse justify-content-end ${
                                    show ? "show" : ""
                                }`}
                                id="navbarNavDropdown"
                            >
                                <div className="logo-header">
                                    <Link href="/">
                                        <a>
                                            <img src="images/logo-2.png" alt="" />
                                        </a>
                                    </Link>
                                </div>

                                <ul className="nav navbar-nav navbar">
                                   
									<li><Link href="/"><a>Home</a></Link></li>
                                    <li><Link href="/about-us"><a>About Us</a></Link></li>
                                    <li><Link href="/our-products"><a>Our Product</a></Link></li>
                                    <li><Link href="/blog"><a>Blog</a></Link></li>
									<li><Link href="/contact-us"><a>Contact Us</a></Link></li>
									
                                </ul>
                                <div className="dlab-social-icon">
                                    <ul>
                                        <Link href="http://facebook.com/technologythatmakessense">
                                            <a className="fa fa-facebook"></a>
                                        </Link>
                                        <Link href="http://twitter.com/ajantrikindia">
                                            <a className="fa fa-twitter"></a>
                                        </Link>

                                        <Link href="http://instagram.com/ajantrik.in">
                                            <a className="fa fa-instagram"></a>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
        </>
    );
}

export default Header2;
