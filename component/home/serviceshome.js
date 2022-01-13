import { useState } from "react";

function ServicesHome() {
    const [open, setOpen] = useState("p2")
    return (
      <>
      
		{/* <!-- Services --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)","backgroundSize":"contain","backgroundPosition":"center","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-3 mb-4">
							<h6 className="sub-title text-primary bgl-primary m-b15">OUR PRODUCT</h6>
							<h2 className="title">Why pitch on automated warehouse solutions?</h2>
						</div>
						<p>In a country where almost 50% of the work force is dependent on the agro based industries , It is unfortunate that most of these individuals are exploited and forced to suffer losses due to lack of adequate and appropriate storage facilities.Automation of warehouse systems will minimize wastage and maximize utilization of the produce, leading to the growth of GDP.</p>
						<p className="m-b30">It will thus open new doors for the farmers and other associated workers.
Automated warehouse solutions can be a revolutionary step for the Indian economy. 
</p>
					</div>
					<div className="col-lg-7">
					<div className={`${open === "p1" ? "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius"> 
								<a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-idea"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Linear Arm Sorter</h4>
								<p>Designed with flexibility and efficiency , linear 
arm sorter provides a phenomenal solution for 
sortation. It is capable of delivering low to medium throughput and is available at
economical ownership costs.
</p>
							</div>
						</div>
						<div className={`${open === "p2" ? "icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-sm radius"> 
								<a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-coding"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Castor Deck</h4>
								<p>Castor decks are used in movement of aircraft pallets or ULDs through a 
manual or semi-manual cargo system. They are high-yeilding,easily maintainable
solution for moving heavy loaded containers in desired direction.
</p>
							</div>
						</div>
						<div className={`${open === "p3" ? "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-sm radius"> 
								<a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-rocket"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Pick To Light</h4>
								<p> Pick to light technology enhances the productivity and efficiency of the 
warehouse by guiding the employees with the help of LEDs ,thus helping them 
in easier navigation. It minimizes th error rate and is a cost-effective 
solution for faster and accurate picking.
</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
    )
  }
  
  export default ServicesHome;