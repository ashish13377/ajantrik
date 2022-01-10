import Link from "next/link";
import AboutVideo from "../component/about-us/aboutvideo";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Team from "../component/about-us/team";


function AboutUs() {

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>About Us</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About --> */}
        <section className="content-inner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="dz-media">
                  <img src="images/about/img4.png" className="move-3" alt="" />
                </div>
              </div>
              <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                <div className="section-head style-1 mb-4">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6>
                  <h2 className="title">How We Can Help You Achieve Your Business Goal</h2>
                </div>
                <p>Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur ante eros id urna. Mauris luctus nulla ut pharetra tempor.</p>
                <p className="m-b30">Mauris egestas eleifend sapien eu malesuada. Phasellus at metus eget sapien tristique accumsan non sit amet augue.</p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam diam tempor.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutVideo/>

        

        {/* <!-- Team Member --> */}
        <Team />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
