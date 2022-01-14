import { useState } from "react";
function PricingT3() {
    const [open, setOpen] = useState()
    return (
        <>
            {/* <!-- Pricing Table --> */}
            <section className="content-inner">
                <div className="container">
                    <div className="pricingtable-row">
                        <div className="section-head style-3 text-center">
                            <h6 className="sub-title text-primary bgl-primary m-b15">
                            Automation
                            </h6>
                            <p className="title">Ajantrik aims to make world-class products at affordable rates<br/> for the automation of warehouse</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                <div className={`${open === "p1" ? "pricingtable-wrapper style-1 m-b30 active" : "pricingtable-wrapper style-1 m-b30"}`} onMouseOver={() => setOpen("p1")}>
                                    <div className="pricingtable-inner">
                                        <div className="pricingtable-head">
                                            <div className="icon-cell">
                                                <img src="images/pricingtable/icon1.png" alt="" />
                                            </div>
                                            <div className="pricingtable-title">
                                                <h3>Linear Arm Sorter</h3>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="pricingtable-footer">
                                            <a href="/contact-us" className="btn btn-corner btn-outline-primary">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                <div className={`${open === "p2" ? "pricingtable-wrapper style-1 m-b30 active" : "pricingtable-wrapper style-1 m-b30"}`} onMouseOver={() => setOpen("p2")}>
                                    <div className="pricingtable-inner">
                                        <div className="pricingtable-head">
                                            <div className="icon-cell">
                                                <img src="images/pricingtable/icon2.png" alt="" />
                                            </div>
                                            <div className="pricingtable-title">
                                                <h3>Castor Deck</h3>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="pricingtable-footer">
                                            <a href="/contact-us" className="btn btn-corner btn-outline-primary">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                <div className={`${open === "p3" ? "pricingtable-wrapper style-1 m-b30 active" : "pricingtable-wrapper style-1 m-b30"}`} onMouseOver={() => setOpen("p3")}>
                                    <div className="pricingtable-inner">
                                        <div className="pricingtable-head">
                                            <div className="icon-cell">
                                                <img src="images/pricingtable/icon3.png" alt="" />
                                            </div>
                                            <div className="pricingtable-title">
                                                <h3>Pick To Light</h3>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="pricingtable-footer">
                                            <a href="/contact-us" className="btn btn-corner btn-outline-primary">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PricingT3;
