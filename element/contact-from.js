import { useState } from 'react';
import{ init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
init("user_MGnkBJgoTe9jEtreKlOQZ");

function Quote2() {

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [msg, setMsg] = useState();
  const sendEmail = (e) => {
    e.preventDefault();
    if (!fname || !email || !phone || !msg) {
      alert("Please fill given field first!")
    } else {
      emailjs.sendForm('service_yw09u4o', 'template_5wrp7b5', e.target, 'user_MGnkBJgoTe9jEtreKlOQZ')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      alert("Message send!!!")
      setFname("")
      setLname("")
      setEmail("")
      setPhone("")
      setMsg("")
    }

  }
	return (
		<>
			<div className="content-inner" style={{"backgroundImage":"url(images/background/bg2.png)","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 quote-media">
						<div className="dlab-media style-1 move-1">	
							<img src="images/team/large/pic1.jpg" alt=""/>
						</div>
						<div className="dlab-media style-2 move-2">	
							<img src="images/team/large/pic2.jpg" alt=""/>
						</div>
						<div className="dlab-media style-3 move-3">	
							<img src="images/team/large/pic3.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<form className="dlab-form dzForm" onSubmit={sendEmail} method="post">
							<div className="dzFormMsg"></div>
							<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
							<div className="row">
								<div className="col-sm-6">
									<div className="input-group">
										<input name="fname" required type="text" className="form-control" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="lname" required type="text" className="form-control" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)}/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="email" required type="text" className="form-control" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="phone" required type="text" className="form-control" placeholder="Phone No." value={phone} onChange={(e) => setPhone(e.target.value)}/>
									</div>
								</div>
								
								<div className="col-sm-12">
									<div className="input-group">
										<textarea name="msg" required className="form-control" placeholder="Message" value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
									</div>
								</div>
								<div className="col-sm-12 mt-2">
									<button name="submit" type="submit" value="Submit" className="btn btn-primary gradient border-0 rounded-xl">Submit Now</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default Quote2;