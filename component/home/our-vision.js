import { useState } from 'react';


function OurVision() {
    const [open, setOpen] = useState()
    return (
        <>
            {/* <!-- Service --> */}
            <section className="content-inner-2" style={{ "backgroundImage": "url(images/background/bg2.png)" }}>
                <div className="container">
                    <div className="section-head style-3 text-center">
                        <h6 className="sub-title text-primary bgl-primary m-b15">
                            OUR VISION
                        </h6>
                        <h2 className="title">Our Major Focuses</h2>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4 col-md-6">
                            <div className={`${open === "p1" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p1")}>
                                <div className="icon-bx-sm radius bgl-primary">
                                    <a  className="icon-cell">
                                        <i className="icon-artificial-intelligence"></i>
                                    </a>
                                </div>
                                <div className="wraper-effect"></div>
                                <div className="icon-content">
                                    <h4 className="dlab-title m-b15">Automation & AI</h4>
                                    <p>We are making futuristic self controlled robots to cater your industrial needs. Our robots are capable of solving problems and carrying out tasks efficiently. Our warehouses arrange the materials by loading and unloading with complete help of robotic and electric chargeable machines. We aim to bring our products in the market at a very reasonable cost.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${open === "p2" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p2")}>
                                <div className="icon-bx-sm radius bgl-primary">
                                    <a  className="icon-cell">
                                        <i className="icon-farmer"></i>
                                    </a>
                                </div>
                                <div className="wraper-effect"></div>
                                <div className="icon-content">
                                    <h4 className="dlab-title m-b15">Solving Farmer Suicides</h4>
                                    <p>Our robotic systems keeps a detailed outline of total products in the warehouse and their selling data as well. This minimises the meddling of middlemen which ensures that the farmers are getting the correct price for their produce. Thus solving a major issue behind farmer’s suicide. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${open === "p3" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p3")}>
                                <div className="icon-bx-sm radius bgl-primary">
                                    <a className="icon-cell">
                                        <i className="icon-cyber-security"></i>
                                    </a>
                                </div>
                                <div className="wraper-effect"></div>
                                <div className="icon-content">
                                    <h4 className="dlab-title m-b15">Infrastructure Building</h4>
                                    <p>We have build our robots around the idea of space efficiency. We try to use each and every inch in the most efficient way. We are working with the size of robots, we aim to configure our robots in a way that it can work efficiently without comprising on quality in a pickup space.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" style={{ color: '-0px !important' }}>
                            <div className={`${open === "p4" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p4")}>
                                <div className="icon-bx-sm radius bgl-primary">
                                    <a  className="icon-cell">
                                        <i className="icon-business-people"></i>
                                    </a>
                                </div>
                                <div className="wraper-effect"></div>
                                <div className="icon-content">
                                    <h4 className="dlab-title m-b15">Skilled Labour</h4>
                                    <p>We are well aware of the fact that we have a shortage of skilled labours. Keeping that in mind, we have designed the robots in a way that it’s simple to use. Introducing robots to the sector will not only make things easier for the firm but will also develop the need of highly skilled labours which will increase the demand for skilled labours and create employment opportunities for them.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${open === "p5" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p5")}>
                                <div className="icon-bx-sm radius bgl-primary">
                                    <a  className="icon-cell">
                                        <i className="icon-digitalization"></i>
                                    </a>
                                </div>
                                <div className="wraper-effect"></div>
                                <div className="icon-content">
                                    <h4 className="dlab-title m-b15">Digital India Initiative</h4>
                                    <p>The world is shifting to the modern era with technological advances and we want India to make use of technology in the best way possible to develop it’s core competencies. This can be only achieved through combining state of the art technology with agriculture. We aim to achieve this by bringing faster and efficient production house because it’s the warehouse on which the supply to the market depends..</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${open === "p6" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p6")}>
                                <div className="icon-bx-sm radius bgl-primary">
                                    <a  className="icon-cell">
                                        <i className="icon-headhunting"></i>
                                    </a>
                                </div>
                                <div className="wraper-effect"></div>
                                <div className="icon-content">
                                    <h4 className="dlab-title m-b15">Providing Employment</h4>
                                    <p>By introducing robots we do not intend to take away job opportunities of the labours. Bringing in more robots in the production section of the company makes it more efficient.  When there will be demand for these robots in the market, the robot manufacturing companies will also hire more skilled laborers to increase their production. The unskilled labours can be organised and turned into skilled labours, making way for job opportunities for them..</p>
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