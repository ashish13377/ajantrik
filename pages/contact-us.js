import Link from "next/link";
// import { useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Quote2 from "../element/contact-from";


function OurProducts() {
//   const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr3.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Contact us</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Contact us
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Contact from --> */}
        <Quote2/>
        

      

       
       
      </div>
      <Footer />
    </>
  );
}

export default OurProducts;
