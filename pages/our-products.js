import Link from "next/link";
// import { useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import AllProduct from "../component/our-product/products";


function OurProducts() {
  //   const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr2.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Our Product</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Our Product
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Product --> */}
        <AllProduct />

      </div>
      <Footer />
    </>
  );
}

export default OurProducts;
