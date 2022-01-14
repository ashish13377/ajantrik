import Link from "next/link";
import Head from "next/head";
// import { useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";


function Blog() {
  //   const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Blog | Ajantrik </title>
      </Head>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Blogs</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About --> */}

        {/* <!-- Testimonials --> */}

        {/*  */}

        {/* <!-- Blog --> */}

        {/* <!-- Clients Logo --> */}

      </div>
      <Footer />
    </>
  );
}

export default Blog;
