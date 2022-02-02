import OurGallery from "../component/gallery/our-gallery"
import Head from "next/head";
import Link from "next/link";
import Header from "../layout/header";
import Footer from "../layout/footer";

function Gallery() {
    return (
      <>
       <Head>
        <title>Our Gallery | Ajantrik </title>
        
      </Head>
      <Header />
      {/* <!-- Banner  --> */}
      <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr11.png)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Our Gallery</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Our Gallery
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}
        {/* <!-- Projects --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg17.png)","backgroundSize":"cover","backgroundPosition":"top center","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="section-head style-3 text-center">
					<h6 className="sub-title text-primary bgl-primary m-b15">OUR GALLERY</h6> 
					<h2 className="title">Take A Look At Our Latest Photo Album</h2>
				</div>
				<OurGallery/>
			</div>
		</section>

        <Footer />
      </>
      
    )
  }
  
  export default Gallery;