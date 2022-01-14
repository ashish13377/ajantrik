import Link from "next/link";
// import { useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Quote2 from "../element/contact-from";


function Team() {
  //   const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr8.png)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Team Members</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Team Members
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Team --> */}
        <section
          className="content-inner"
          style={{
            backgroundImage: "url(images/background/bg18.png)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/team/pic1.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/suvro-datta-51543a28/" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a>Dr. Suvro Datta</a>
                      </h4>
                      <span className="dlab-position">Director</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a >
                      <img src="images/team/pic2.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/sayan-sen-68545915" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a >Sayan Sen</a>
                      </h4>
                      <span className="dlab-position">Director</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a >
                      <img src="images/team/pic3.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="#" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a >Santanu Dasgupta</a>
                      </h4>
                      <span className="dlab-position">Director</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/team/pic4.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/james-sarkodie-addo-mbcs-37b3997/?originalSubdomain=gh" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a >James Sarkodie Addoe</a>
                      </h4>
                      <span className="dlab-position">Director</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/team/pic5.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/ayan-sen-159bb629/" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a>Ayan Sen</a>
                      </h4>
                      <span className="dlab-position">Consultant</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/team/pic6.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/rc05/" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a >Raja choudhary</a>
                      </h4>
                      <span className="dlab-position">Consultant</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/team/pic7.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/soumik-roy-choudhury-770a901b4/" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a >Soumik Roy Choudhury</a>
                      </h4>
                      <span className="dlab-position">Technical Associate</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/team/pic8.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/tuhin-roychowdhury-9b604a21a/" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a >Tuhin Roy Chowdhury</a>
                      </h4>
                      <span className="dlab-position">Technical Associate</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/team/pic10.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/souradeep-roy-34105118b/" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a >Souradeep Roy</a>
                      </h4>
                      <span className="dlab-position">Technical Associate</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/team/pic12.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/souhardya-ganguly-a2a5ba1a9/" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a >Souhardya Ganguly</a>
                      </h4>
                      <span className="dlab-position">Technical Associate</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/team/pic9.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/srinjoy-bhuiya" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a >Srinjoy Bhuiya</a>
                      </h4>
                      <span className="dlab-position">Technical Associate</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/team/pic14.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/abhishek-biswas2002/" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a>Abhishek Biswas</a>
                      </h4>
                      <span className="dlab-position">Technical Associate</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/team/pic13.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/videh-jain-13412321b" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a>Videh Jain</a>
                      </h4>
                      <span className="dlab-position">Technical Associate</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/team/pic11.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="http://www.linkedin.com/in/shayan-talukdar-0283b8208" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a>Shayan Talukdar</a>
                      </h4>
                      <span className="dlab-position">Technical Associate</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/team/pic15.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/raunak-madhogaria-03b866204" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a>Raunak Madhgoria</a>
                      </h4>
                      <span className="dlab-position">Technical Associate</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/team/pic16.png" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/tanisha-dutta-2147ab229/" target="_blank"
                            className="fa fa-linkedin"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a>Tanisha Dutta</a>
                      </h4>
                      <span className="dlab-position">HR And Public Relations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Team;
