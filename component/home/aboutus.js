import Link from "next/link";

function AboutUsHome() {
    return (
      <>
        {/* <!-- About us --> */}
		<section className="content-inner about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src="images/about/pic1.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">ABOUT US</h6>
							<h2 className="title m-b20">A STEP TOWARDS THE FUTURE</h2>
							<p>As a team of professionals in the field of technology, our vision is to reaffirm the agro-based industry with a robotics & AI backbone. We offer the state of the art technology to minimize your cost of production and maximize the output efficiency and effectively. We are currently working on building an automated storage house facility that will ensure minimal human involvement and discrepancy. We, at Ajantrik as a team, are on our way to build a technology that promotes equality, for one and all, for man explores the universe around him and calls the adventure science.  </p>
						</div>
						<ul className="list-check primary m-b30">
							<li>Increased warehouse throughput.</li>
							<li>Better resource utilization.</li>
							<li>Decrease in fatigue and injury being inferred during repetitive tasks by using robots.</li>
							<li>Autonomous mobile robot reliably transports the inventory and stores the current software records accurately with efficiency and speed.</li>
						</ul>
						<Link href="about-us-2"><a className="btn btn-primary rounded-xl gradient">Learn More</a></Link>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default AboutUsHome;