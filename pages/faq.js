import Link from "next/link";
import Header from "../layout/header";
import Footer from "../layout/footer";


function FAQ() {
  return (
    <>
      <Header />
      <div className="page-content bg-white"> 
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr10.png)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>FAQ</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  FAQ
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}
        </div>
    <div className="container" style ={{ marginTop: "40px", marginBottom: "40px" }}>
          <div className="row">
          <div
                className="col-lg-2 col-sm-3 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    
                  </div>
                </div>
              </div>
              <div
                className="col-lg-8 col-sm-3 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a>
                      <img src="images/banner/download.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-2 col-sm-3 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                   
                  </div>
                </div>
              </div>
          </div>
        </div>
      <Footer />
    </>
  );
}

export default FAQ;