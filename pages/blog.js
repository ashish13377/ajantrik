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

        {/* <!-- Blog Large --> */}
        <section className="content-inner" style={{ "backgroundImage": "url(images/background/bg2.png)" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="dlab-blog style-1 m-b50 bg-white">
                  <div className="dlab-info">
                    <div className="dlab-meta">
                      <ul style={{ justifyContent: "space-between" }}>
                        <li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
                        <li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
                      </ul>
                    </div>
                    <div className="dlab-media dlab-img-effect zoom">
                      <img src="images/blog/blog-grid/pic2.jpg" alt="" />
                    </div>
                    <br />
                    <h4 className="dlab-title">
                      <a href="/blog-details-2">Donec feugiat mollis nisi in dignissim. Morbi sollicitudin quis lectus vel euismod.</a>
                    </h4>
                    <p className="m-b0">Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies. Fusce ac ligula vel enim fermentum blandit. </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                <div className="dlab-blog style-1 m-b50 bg-white">
                  <div className="dlab-info">
                    <div className="dlab-meta">
                      <ul style={{ justifyContent: "space-between" }}>
                        <li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
                        <li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
                      </ul>
                    </div>
                    <div className="dlab-media dlab-img-effect zoom">
                      <img src="images/blog/blog-grid/pic2.jpg" alt="" />
                    </div>
                    <br />
                    <h4 className="dlab-title">
                      <a href="/blog-details-2">Quisque egestas iaculis felis eget placerat ut pulvinar mi elitauctor nec.</a>
                    </h4>
                    <p className="m-b0">Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies. Fusce ac ligula vel enim fermentum blandit. </p>
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

export default Blog;
