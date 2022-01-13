import dynamic from 'next/dynamic';
import ModalVideo from "react-modal-video";
import { useState } from 'react';
function AboutVideo() {
    const [isOpen, setOpen] = useState(false);
    const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

    return (
        <>
        {/* <!-- Youtube Video --> */}
        <section className="video-wraper-1">
          <div className="content-inner bg-gray">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 wow fadeInLeft"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="section-head style-3 mb-4">
                    <h2 className="title">THE IDEAL WORK CULTURE</h2>
                    <div className="dlab-separator style-2 bg-primary"></div>
                  </div>
                  <p>
                  We consider our team as one and we believe in inclusivity. Discrimination on the basis of gender, religion, caste or ethnicity is not acceptable to us. We aim to provide the best working environment for our employees.   Equality is the key to success, no boss, no sir . we work on a first name basis. Flexibility with a tinge of discipline. And a lot of fun at work!.{" "}
                  </p>
                  <ul className="list-check style-1 primary m-b30">
                    <li>Flexible working environment.</li>
                    <li>Supportive work culture.</li>
                    <li>
                    Fun environment to work.
                    </li>
                  </ul>
                </div>
                <div
                  className="col-lg-6 wow fadeInRight"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div className="video-bx style-2">
                    <img src="images/video/pic2.jpg" alt="" />
                    <div className="video-btn"></div>
                    <a
                      href="#"
                      className="popup-youtube"
                      onClick={() => setOpen(true)}
                    >
                      <i className="flaticon-play"></i>
                    </a>
                  </div>
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="6_gjK_3jKA8"
                    onClose={() => setOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
}

export default AboutVideo;
