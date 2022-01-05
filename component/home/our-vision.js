import { useState } from 'react';

function OurVision() {
    const [open, setOpen] = useState("p2")
    return (
        <>
            {/* <!-- Service --> */}
            <section className="content-inner-2" style={{ "backgroundImage": "url(images/background/bg2.png)" }}>
                <div className="container">
                    <div className="section-head style-3 text-center">
                        <h6 className="sub-title text-primary bgl-primary m-b15">
                            OUR VISION
                        </h6>
                        <h2 className="title">How It’s Work</h2>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4 col-md-6">
                            <div className={`${open === "p1" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p1")}>
                                <div className="icon-bx-sm radius bgl-primary">
                                    <a href="javascript:void(0);" className="icon-cell">
                                        <i className="flaticon-office"></i>
                                    </a>
                                </div>
                                <div className="wraper-effect"></div>
                                <div className="icon-content">
                                    <h4 className="dlab-title m-b15">Automation & AI</h4>
                                    <p>We are making futuristic self-controlled robots for industrial purposes. Our robots are capable of solving problems related to the warehouse of the company and will be produced at the lowest price in the market. We are intended to make the labor system more skillful and productive</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${open === "p2" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p2")}>
                                <div className="icon-bx-sm radius bgl-primary">
                                    <a href="javascript:void(0);" className="icon-cell">
                                        <i className="flaticon-office"></i>
                                    </a>
                                </div>
                                <div className="wraper-effect"></div>
                                <div className="icon-content">
                                    <h4 className="dlab-title m-b15">Solving Farmer Suicides</h4>
                                    <p>India is one of the countries which is solely dependent on farmers. By keeping that in mind, our experts have designed robots that will make their work easier. Our robotic system keeps a detailed outline of total products in the warehouse and their selling data as well. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${open === "p3" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p3")}>
                                <div className="icon-bx-sm radius bgl-primary">
                                    <a href="javascript:void(0);" className="icon-cell">
                                        <i className="flaticon-pie-charts"></i>
                                    </a>
                                </div>
                                <div className="wraper-effect"></div>
                                <div className="icon-content">
                                    <h4 className="dlab-title m-b15">Infrastructure Building</h4>
                                    <p>Our robots are based on space efficiency, where we try to use each and every inch in the most efficient way. We are working with the size of robots, where we aim to configure such robots which can work most efficiently in a pickup space.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" style={{ color: '-0px !important' }}>
                            <div className={`${open === "p4" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p4")}>
                                <div className="icon-bx-sm radius bgl-primary">
                                    <a href="javascript:void(0);" className="icon-cell">
                                        <i className="flaticon-line-graph"></i>
                                    </a>
                                </div>
                                <div className="wraper-effect"></div>
                                <div className="icon-content">
                                    <h4 className="dlab-title m-b15">Skilled Labour</h4>
                                    <p>We keep in mind that in the industry all labours are highly efficient. The robots designed by us are very simple to use. By making things simpler we try to develop the skill of the labourers. As a result, if we have more skilled labours in the company then they will make fewer errors.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${open === "p5" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p5")}>
                                <div className="icon-bx-sm radius bgl-primary">
                                    <a href="javascript:void(0);" className="icon-cell">
                                        <i className="flaticon-help"></i>
                                    </a>
                                </div>
                                <div className="wraper-effect"></div>
                                <div className="icon-content">
                                    <h4 className="dlab-title m-b15">Digital India Initiative</h4>
                                    <p>The world is shifting to the modern era and keeping that in mind we want India to be one tech geek country. This can only be done when we have a faster and efficient production house because it's the warehouse on which the supply to the market depends.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${open === "p6" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p6")}>
                                <div className="icon-bx-sm radius bgl-primary">
                                    <a href="javascript:void(0);" className="icon-cell">
                                        <i className="flaticon-help"></i>
                                    </a>
                                </div>
                                <div className="wraper-effect"></div>
                                <div className="icon-content">
                                    <h4 className="dlab-title m-b15">Providing Employment</h4>
                                    <p>Bringing in more robots in the production section of the company makes it more efficient. And when there will be demand for these robots in the market, the robot manufacturing companies will also hire more skilled laborers to increase their production.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurVision;