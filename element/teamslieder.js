import Slider from "react-slick";

function TeamSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    arrows: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1	,
          infinite: true,
          dots: true,
        },
      },
	  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className="team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
      >
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.1s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src="images/team/pic1.png" alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a>Dr. Suvro Datta</a>
                </h4>
                <span className="dlab-position">Director</span>
              </div>
              <ul className="dlab-social-icon primary-light">
              <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-linkedin"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
                <img src="images/team/pic2.png" alt="" />   
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a >Sayan Sen</a>
                </h4>
                <span className="dlab-position">Director</span>
              </div>
              <ul className="dlab-social-icon primary-light">
              <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-linkedin"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
                <img src="images/team/pic3.png" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a >Santanu Dasgupta</a>
                </h4>
                <span className="dlab-position">Director</span>
              </div>
              <ul className="dlab-social-icon primary-light">
              <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-linkedin"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
             
                <img src="images/team/pic4.png" alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a >James Sarkodie Addoe</a>
                </h4>
                <span className="dlab-position">Director</span>
              </div>
              <ul className="dlab-social-icon primary-light">
              <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-linkedin"></a>
                </li>
                </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
             
                <img src="images/team/pic5.png" alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a>Ayan Sen</a>
                </h4>
                <span className="dlab-position">Consultant</span>
              </div>
              <ul className="dlab-social-icon primary-light">
              <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-linkedin"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src="images/team/pic6.png" alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a >Raja choudhary</a>
                </h4>
                <span className="dlab-position">Consultant</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-linkedin"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </Slider>
    </>
  );
}

export default TeamSlider;
