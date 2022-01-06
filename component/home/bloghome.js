import BlogSlider from "../../element/blogslider";


function BlogHome() {
  return (
    <>
      <section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg16.png)","backgroundSize":"cover","backgroundPosition":"top center","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="section-head style-3 text-center">
					<h6 className="sub-title text-primary bgl-primary m-b15">OUR BLOG</h6>
					<h2 className="title">Latest News & Blog</h2>
				</div>
				<BlogSlider/>
			</div>
		</section>
    </>
  )
}

export default BlogHome;