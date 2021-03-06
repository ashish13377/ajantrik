import Head from "next/head";
import Link from "next/link";
import Header from "../layout/header";
import Footer from "../layout/footer";


function TermsConditions() {
  return (
    <>
    <Head>
        <title>Terms & Conditions | Ajantrik </title>
        
      </Head>
      <Header />
      <div className="page-content bg-white"> 
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr3.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Terms & Conditions</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Terms & Conditions
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}
        </div>
   
      <Footer />
    </>
  );
}

export default TermsConditions;