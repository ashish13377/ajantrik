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
                <p>We believe that agriculture is the core competency of our country. Though we have grown up hearing the slogan “ Jai jawaan,jai kisaan”, it’s an indisputable fact that the farmers of our countries are suffering. The motivation behind making our products Is to reduce the problems faced by the agro sector and digitalize it with our start of the art technology. </p>
                <p className="m-b30">Our warehouse solution aims at solving some of the major problems faced by the agricultural sector i.e storage, data discrepancy and meddling of middlemen. It also aims at reducing labour costs and carrying out functions without labour with the help of robots. We offer all this at a very reasonable price.</p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-arrow primary">
                      <li>Reduced stock out events.</li>
                      <li>Greater inventory control.</li>
                      <li>Fewer shipping errors.</li>
                      <li>Enhanced material handling co-ordination.</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-arrow primary">
                      <li>Improved workplace safety.</li>
                      <li>Reduced inventory loss.</li>
                      <li>Improved order fulfillment accuracy.</li>
                      <li>Increased productivity and efficiency.</li>
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
