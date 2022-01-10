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
                    <h2 className="title">Watch Us How Our Team Work Togather</h2>
                    <div className="dlab-separator style-2 bg-primary"></div>
                  </div>
                  <p>
                    Praesent fermentum nisl at ipsum facilisis viverra. Ut
                    elementum accumsan finibus. Cras placerat lacinia mi, ac
                    dictum ante. Donec libero enim, tincidunt sit amet venenatis
                    id, maximus eu quam.{" "}
                  </p>
                  <ul className="list-check style-1 primary m-b30">
                    <li>Suspendisse ullamcorper mollis orci in facilisis.</li>
                    <li>Etiam orci magna, accumsan varius enim volutpat.</li>
                    <li>
                      Donec fringilla velit risus, in imperdiet turpis euismod
                      quis.
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
