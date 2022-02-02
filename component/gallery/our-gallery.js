
import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 


function OurGallery() {
  const gallery = [
    {
      category: ["all",],
      img: (
        <Image
          src="/images/projects/pic11.png"
          layout="responsive"
          width={650}
          height={450}
        />
      ),
    },
    {
        category: ["all",],
        img: (
          <Image
            src="/images/projects/pic12.png"
            layout="responsive"
            width={650}
            height={450}
          />
        ),
      },
      {
        category: ["all",],
        img: (
          <Image
            src="/images/projects/pic13.png"
            layout="responsive"
            width={650}
            height={450}
          />
        ),
      },
      {
        category: ["all",],
        img: (
          <Image
            src="/images/projects/pic14.png"
            layout="responsive"
            width={650}
            height={450}
          />
        ),
      },
      {
        category: ["all",],
        img: (
          <Image
            src="/images/projects/pic15.png"
            layout="responsive"
            width={650}
            height={450}
          />
        ),
      },
      {
        category: ["all",],
        img: (
          <Image
            src="/images/projects/pic2.png"
            layout="responsive"
            width={650}
            height={450}
          />
        ),
      },
      {
        category: ["all",],
        img: (
          <Image
            src="/images/projects/pic4.png"
            layout="responsive"
            width={650}
            height={450}
          />
        ),
      },
      {
        category: ["all",],
        img: (
          <Image
            src="/images/projects/pic7.png"
            layout="responsive"
            width={650}
            height={450}
          />
        ),
      },
      {
        category: ["all",],
        img: (
          <Image
            src="/images/projects/pic6.png"
            layout="responsive"
            width={650}
            height={450}
          />
        ),
      },
      {
        category: ["all",],
        img: (
          <Image
            src="/images/projects/pic1.png"
            layout="responsive"
            width={650}
            height={450}
          />
        ),
      },
      {
        category: ["all",],
        img: (
          <Image
            src="/images/projects/pic3.png"
            layout="responsive"
            width={650}
            height={450}
          />
        ),
      },{
        category: ["all",],
        img: (
          <Image
            src="/images/projects/pic8.png"
            layout="responsive"
            width={650}
            height={450}
          />
        ),
      },{
        category: ["all",],
        img: (
          <Image
            src="/images/projects/pic9.png"
            layout="responsive"
            width={650}
            height={450}
          />
        ),
      },{
        category: ["all",],
        img: (
          <Image
            src="/images/projects/pic10.png"
            layout="responsive"
            width={650}
            height={450}
          />
        ),
      },
      {
        category: ["all",],
        img: (
          <Image
            src="/images/projects/pic16.png"
            layout="responsive"
            width={650}
            height={450}
          />
        ),
      },

    
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(gallery);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = gallery.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="site-filters style-2 clearfix center m-b40">
        {/* <ul className="filters">
          <li className={`btn ${filter === "all" ? "active" : ""}`}>
            <a active={filter === "all"} onClick={() => setFilter("all")}>
              All
            </a>
          </li>
        </ul> */}
      </div>
        <SimpleReactLightbox>
            <SRLWrapper >
              <div className="clearfix">
                <ul id="masonry" className="row" data-column-width="3">
                  {projects.map((item) =>
                    item.filtered === true ? (
                      <>
                        <li
                          className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                          data-wow-duration="2s"
                          data-wow-delay="0.1s"
                        >
                          <div className="dlab-box  style-2 m-b30">
                            <div className="dlab-media ">
                              {item.img}
                            </div>
                          </div>
                        </li>
                      </>
                    ) : (
                      ""
                    )
                  )}
                </ul>
              </div>
            </SRLWrapper >      
          </SimpleReactLightbox> 
          <br />
          <br />
          <br />
          <br />
          <br />
          
    </>
  );
}

export default OurGallery;
