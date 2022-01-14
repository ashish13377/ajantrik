import { useState } from 'react';
import{ init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
init("user_MGnkBJgoTe9jEtreKlOQZ");




function Footer() {
	const [email, setEmail] = useState();
const sendEmail = (e) => {
  e.preventDefault();
  if (!email ) {
	alert("Please fill given field first!")
  } else {
	emailjs.sendForm('service_yw09u4o', 'template_1se9mys', e.target, 'user_MGnkBJgoTe9jEtreKlOQZ')
	  .then((result) => {
		console.log(result.text);
	  }, (error) => {
		console.log(error.text);
	  });
	alert("Thank you for subscribing our newsletter!!!")
	setEmail("")
  }
}
  return (
    <>

    <footer className="site-footer style-2" id="footer" style={{"backgroundImage":"url(images/background/bg4.png)"}}>
		<div className="container">
			<div className="dlab-subscribe style-1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
				<div className="row align-items-center">
					<div className="col-lg-7">
						<h2 className="title">Subscribe To Our Newsletter For Latest Update from Ajantrik</h2>
					</div>
					<div className="col-lg-5">
						<form className="dzSubscribe" onSubmit={sendEmail} method="post">
							<div className="dzSubscribeMsg"></div>
							<div className="form-group">
								<div className="input-group">
									<input name="email" required="required" type="email" className="form-control" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
									<div className="input-group-addon">
										<button name="submit" value="Submit" type="submit" className="btn btn-primary gradient fa fa-paper-plane-o"></button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div className="footer-top">
            <div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<div className="footer-logo">
								<a href="/"><img src="images/logo-white.png" alt=""/></a> 
							</div>
							<div className="widget widget_getintuch">
								<ul>
									<li>
										<i className="fa fa-phone gradient"></i>
										<a href="mailto:support@ajantrik.in" className="aimpot">support@ajantrik.in</a>
									</li>
									<li>
										<i className="fa fa-envelope gradient"></i> 
										<a href=" tel:+91 98360 02487" className="aimpot">+91 98360 02487</a>
									</li>
									<li>
										<i className="fa fa-map-marker gradient"></i>
										<a href="https://goo.gl/maps/FR1ev4E1DCzDUavG7" target="_blank"  className="aimpot">Godrej Waterside, 12th Floor, Tower II, DP-5, DP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091, 12th Floor room number 20</a>
									</li>
								</ul>
							</div>
						</div>
                    </div>
					 <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services">
						<h5 className="footer-title">Our Product</h5>
							<ul>
								<li><a href="javascript:void(0);">Robotics & Ai</a></li>
								<li><a href="javascript:void(0);">Infrastructure Development</a></li>
								<li><a href="javascript:void(0);">Quick Estimate</a></li>

							</ul>
						</div>
                    </div> 
					
					<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
							<h5 className="footer-title">Help Center</h5>
							<ul>
								<li><a href="/contact-us">Contact</a></li>
								{/* <li><a href="javascript:void(0);">Feedback</a></li>
								<li><a href="javascript:void(0);">Join our slack</a></li>
								<li><a href="javascript:void(0);">Terms</a></li> */}
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget widget_services">
						   <h5 className="footer-title">Legal</h5>
							<ul>
								<li><a href="/faq">FAQ</a></li>
								<li><a href="/privacy-policy">Privacy Policy</a></li>
								<li><a href="/terms-conditions">Terms & Conditions</a></li>
							</ul>
						</div>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-7 text-left"> 
						<span className="copyright-text">Copyright © 2021 <a href="/">Ajantrik</a>. All rights reserved.</span> 
					</div>
					<div className="col-lg-6 col-md-5 text-right"> 
						<div className="dlab-social-icon">
							<ul>
								<li><a className="fa fa-facebook" href="http://facebook.com/technologythatmakessense"></a></li>
								<li><a className="fa fa-instagram" href="http://instagram.com/ajantrik.in"></a></li>
								<li><a className="fa fa-twitter" href="http://twitter.com/ajantrikindia"></a></li>
							</ul>
						</div>
					</div>
                </div>
            </div>
        </div>
    </footer>
    
    </>
  )
  }

export default Footer;